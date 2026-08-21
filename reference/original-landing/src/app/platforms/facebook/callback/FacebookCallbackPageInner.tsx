'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Spin, Alert, Button } from 'antd';
import { getApiClient } from '@/utils/api';
import { useFacebookConnect } from '@/contexts/FacebookContext';
import type { FacebookPageData } from '@/contexts/FacebookContext';
import { captureUTMParams } from '@/utils/utm';

export default function FacebookCallbackPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const apiClient = getApiClient();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [pages, setPages] = useState<FacebookPageData[]>([]);
  const { setFacebookPagesData } = useFacebookConnect();

  useEffect(() => {
    captureUTMParams();
    if (typeof window !== 'undefined') {
      console.log('Current Facebook callback URL:', window.location.href);
    }

    const code = searchParams.get('code');
    let state = searchParams.get('state');
    const storedState = localStorage.getItem('facebook_oauth_state');

    console.log('State from URL:', state);
    console.log('Server-provided state from localStorage:', storedState);

    if (state && storedState && state !== storedState) {
      console.error('State mismatch! Possible CSRF attack.');
      setError(
        'Authentication failed: Invalid state parameter. Please try again.',
      );
      setLoading(false);
      return;
    }

    if (!state && storedState) {
      state = storedState;
      console.log('Using server-provided state from localStorage:', state);
    }

    if (!state) {
      state = `fallback_state_${Date.now()}`;
      console.warn('No state parameter available. Using fallback:', state);
    }

    const redirect_uri =
      process.env.NEXT_PUBLIC_FACEBOOK_REDIRECT_URI ||
      (typeof window !== 'undefined'
        ? `${window.location.origin}/platforms/facebook/callback`
        : '');

    if (!code) {
      setError('No code parameter found in URL.');
      setLoading(false);
      return;
    }

    const fetchFacebookPages = async () => {
      try {
        console.log('Fetching Facebook pages with params:', {
          code,
          state,
          redirect_uri,
        });

        const authToken = localStorage.getItem('auth_token');
        if (!authToken) {
          console.error('No authentication token found');
          setError(
            'Authentication token not found. Please try logging in again.',
          );
          setLoading(false);
          return;
        }

        // Use GET request to fetch pages
        const response = await apiClient.get('/platforms/facebook/callback', {
          params: {
            code,
            state,
            redirect_uri,
          },
        });

        console.log('Facebook callback response:', response.data);

        // Extract user access token and pages array from response
        const userAccessToken = response.data.user_access_token || '';
        const pagesArray = response.data.pages || [];

        if (!Array.isArray(pagesArray) || pagesArray.length === 0) {
          setError('No Facebook pages found for this account.');
          setLoading(false);
          return;
        }

        // Map API response to FacebookPageData format
        const mappedPages: FacebookPageData[] = pagesArray.map((page: any) => ({
          page_id: page.id,
          page_name: page.name,
          page_access_token: page.access_token,
          user_access_token: userAccessToken,
          picture_url: page.picture?.data?.url || undefined,
        }));

        console.log('Mapped Facebook pages:', mappedPages);

        // Store in context
        setFacebookPagesData(mappedPages);

        // Also store in localStorage as backup
        localStorage.setItem(
          'facebook_pages_data',
          JSON.stringify(mappedPages),
        );
        localStorage.removeItem('facebook_oauth_state');

        setPages(mappedPages);
        setSuccess(true);

        // Redirect to settings with a flag to show the page selector modal
        setTimeout(() => {
          router.push(
            '/dashboard/settings?tab=integrations&show_facebook_modal=true',
          );
        }, 1500);
      } catch (err: any) {
        console.error('Facebook connection error:', err);
        const errorMessage =
          err?.response?.data?.detail ||
          err?.response?.data?.message ||
          err?.message ||
          'Failed to fetch Facebook pages.';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchFacebookPages();
  }, [searchParams, router, setFacebookPagesData]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spin tip="Fetching your Facebook pages..." size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center p-4">
        <Alert
          type="error"
          message="Facebook Connection Failed"
          description={error}
          showIcon
          action={
            <Button onClick={() => router.push('/dashboard/settings')}>
              Return to Settings
            </Button>
          }
        />
      </div>
    );
  }

  if (success) {
    return (
      <div className="flex h-screen items-center justify-center p-4">
        <Alert
          type="success"
          message="Facebook Pages Found!"
          description={
            <div>
              <div>
                Found {pages.length} page(s). Redirecting to page selector...
              </div>
              <div style={{ marginTop: 12, color: '#389e0d', fontWeight: 500 }}>
                Please select a page to connect.
              </div>
            </div>
          }
          showIcon
        />
      </div>
    );
  }

  return null;
}
