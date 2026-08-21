'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Spin, Alert, Button } from 'antd';
import { getApiClient } from '@/utils/api';
import { useUserLimits } from '@/contexts/UserLimitsContext';
import { captureUTMParams } from '@/utils/utm';
export default function InstagramCallbackPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const apiClient = getApiClient();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const { refetchUserLimits } = useUserLimits();
  useEffect(() => {
    captureUTMParams();
    // Log full URL for debugging
    if (typeof window !== 'undefined') {
      console.log('Current callback URL:', window.location.href);
    }

    // Get code and state from URL search params
    const code = searchParams.get('code');
    let state = searchParams.get('state');

    // Get server-provided state from localStorage
    const storedState = localStorage.getItem('instagram_oauth_state');

    // Debug logging for state values
    console.log('State from URL:', state);
    console.log('Server-provided state from localStorage:', storedState);

    // Verify state parameter if both exist
    if (state && storedState && state !== storedState) {
      console.error(
        'State mismatch! Possible CSRF attack. URL state:',
        state,
        'Stored state:',
        storedState,
      );
      setError(
        'Authentication failed: Invalid state parameter. Please try again.',
      );
      setLoading(false);
      return;
    }

    // If state is missing from URL, use the stored state
    if (!state && storedState) {
      state = storedState;
      console.log('Using server-provided state from localStorage:', state);
    }

    // Final fallback for state - should never happen with proper flow
    if (!state) {
      state = `fallback_state_${Date.now()}`;
      console.warn(
        'No state parameter available from any source. Using fallback:',
        state,
      );
    }

    // Use env for redirect_uri
    const redirect_uri =
      process.env.NEXT_PUBLIC_INSTAGRAM_REDIRECT_URI ||
      (typeof window !== 'undefined'
        ? window.location.origin + '/platforms/instagram/callback'
        : '');

    if (!code) {
      setError('No code parameter found in URL.');
      setLoading(false);
      return;
    }

    const registerInstagramAccount = async () => {
      try {
        console.log('Sending Instagram callback request with params:', {
          code,
          state,
          redirect_uri,
        });

        // Always include state parameter from either URL or localStorage
        // This ensures the server gets the same state value it provided during authorization
        const params = {
          code,
          state,
          redirect_uri,
        };

        // Get auth token for Authorization header
        const authToken = localStorage.getItem('auth_token');
        if (!authToken) {
          console.error('No authentication token found');
          setError(
            'Authentication token not found. Please try logging in again.',
          );
          setLoading(false);
          return;
        }

        // Use the correct API endpoint format
        const res = await apiClient.get('/platforms/instagram/callback', {
          params,
        });

        // Store Instagram connected success flag in localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('instagram_connected', 'true');
        }

        setResponse(res.data);
        setSuccess(true);
        // Refresh global limits so UI updates immediately after connecting Instagram
        try {
          await refetchUserLimits();
          console.log('Refetched user limits after Instagram connect');
        } catch (e) {
          console.warn('refetchUserLimits failed after Instagram connect', e);
        }

        // Redirect to settings page with integrations tab after short delay
        setTimeout(() => {
          router.push('/dashboard/settings?tab=integrations');
        }, 2000);
      } catch (err: any) {
        console.error('Instagram connection error:', err);
        setError(
          err?.response?.data?.message ||
            'Failed to register Instagram account.',
        );
      } finally {
        setLoading(false);
      }
    };

    registerInstagramAccount();
  }, [searchParams, router]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spin tip="Connecting Instagram account..." size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center p-4">
        <Alert
          type="error"
          message="Instagram Connection Failed"
          description={error}
          showIcon
          action={
            <Button
              onClick={() => router.push('/dashboard/settings')}
              className="bg-primary text-white"
            >
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
          message="Instagram Connected Successfully!"
          description={
            <div>
              <div>
                Your Instagram account has been successfully connected to
                WhatsEase.
              </div>
              <div style={{ marginTop: 12, color: '#389e0d', fontWeight: 500 }}>
                Redirecting you to Integrations...
              </div>
            </div>
          }
          showIcon
          action={
            <Button
              onClick={() => router.push('/dashboard/settings')}
              className="bg-primary text-white"
            >
              Return to Settings
            </Button>
          }
        />
      </div>
    );
  }

  return null;
}
