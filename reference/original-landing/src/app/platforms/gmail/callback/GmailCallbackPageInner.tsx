'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Spin, Alert, Button } from 'antd';
import { getApiClient } from '@/utils/api';
import { captureUTMParams } from '@/utils/utm';

export default function GmailCallbackPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const apiClient = getApiClient();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isReconnect, setIsReconnect] = useState(false);
  const [response, setResponse] = useState<any>(null);

  useEffect(() => {
    captureUTMParams();
    // Log full URL for debugging
    if (typeof window !== 'undefined') {
      console.log('Current Gmail callback URL:', window.location.href);
    }

    // Get code and state from URL search params
    const code = searchParams.get('code');
    let state = searchParams.get('state');

    // Get server-provided state from localStorage
    const storedState = localStorage.getItem('gmail_oauth_state');

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

    // Use env for redirect_uri or construct from window.location
    const redirect_uri =
      process.env.NEXT_PUBLIC_GMAIL_REDIRECT_URI ||
      (typeof window !== 'undefined'
        ? `${window.location.origin}/platforms/gmail/callback`
        : '');

    if (!code) {
      setError('No code parameter found in URL.');
      setLoading(false);
      return;
    }

    const registerGmailAccount = async () => {
      try {
        console.log('Sending Gmail callback request with params:', {
          code,
          state,
          redirect_uri,
        });

        // Check auth token existence before hitting protected endpoints
        const authToken = localStorage.getItem('auth_token');
        if (!authToken) {
          console.error('No authentication token found');
          setError(
            'Authentication token not found. Please try logging in again.',
          );
          setLoading(false);
          return;
        }

        // First, exchange the authorization code for tokens
        const callbackResponse = await apiClient.get(
          '/platforms/gmail/callback',
          {
            params: {
              code,
              state,
              redirect_uri,
            },
          },
        );

        console.log('Gmail callback response:', callbackResponse.data);

        // Extract token data from callback response
        const tokenData = callbackResponse.data;
        if (!tokenData.access_token) {
          throw new Error('No access token received from callback');
        }

        // Now store the account using the token data
        const accountData = {
          access_token: tokenData.access_token,
          refresh_token: tokenData.refresh_token,
          token_expiry: tokenData.token_expiry || tokenData.expires_at,
          scope: tokenData.scope,
          profile: {
            emailAddress: tokenData.profile?.emailAddress || tokenData.email,
            name: tokenData.profile?.name || 'Gmail User',
            picture: tokenData.profile?.picture || '',
          },
        };

        console.log('Storing Gmail account with data:', accountData);

        const accountResponse = await apiClient.post(
          '/platforms/gmail/account',
          accountData,
        );

        console.log('Gmail account stored successfully:', accountResponse.data);

        if (typeof window !== 'undefined') {
          const wasAlreadyConnected =
            localStorage.getItem('gmail_connected') === 'true';
          setIsReconnect(wasAlreadyConnected);
          localStorage.setItem('gmail_connected', 'true');
        }

        setResponse(accountResponse.data);
        setSuccess(true);

        setTimeout(() => {
          router.push('/dashboard/settings?tab=integrations');
        }, 2000);
      } catch (err: any) {
        console.error('Gmail connection error:', err);
        setError(
          err?.response?.data?.message ||
            err?.response?.data?.detail ||
            'Failed to connect Gmail account.',
        );
      } finally {
        setLoading(false);
      }
    };

    registerGmailAccount();
  }, [searchParams, router]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spin tip="Connecting Gmail account..." size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center p-4">
        <Alert
          type="error"
          message="Gmail Connection Failed"
          description={error}
          showIcon
          action={
            <Button
              type="primary"
              onClick={() => router.push('/dashboard/settings')}
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
          message="Gmail Connected Successfully!"
          description={
            <div>
              <div>
                {isReconnect
                  ? 'Your Gmail account has been updated successfully.'
                  : 'Your Gmail account has been successfully connected to WhatsEase.'}
              </div>
              <div style={{ marginTop: 12, color: '#389e0d', fontWeight: 500 }}>
                Redirecting you…
              </div>
            </div>
          }
          showIcon
          action={
            <Button
              type="primary"
              onClick={() =>
                router.push('/dashboard/settings?tab=integrations')
              }
            >
              Go to Integrations
            </Button>
          }
        />
      </div>
    );
  }

  return null;
}
