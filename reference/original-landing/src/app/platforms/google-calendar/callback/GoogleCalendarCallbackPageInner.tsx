'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Spin, Alert, Button } from 'antd';
import { getApiClient } from '@/utils/api';
import { captureUTMParams } from '@/utils/utm';

export default function GoogleCalendarCallbackPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const apiClient = getApiClient();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    captureUTMParams();
    const code = searchParams.get('code');
    let state = searchParams.get('state');
    const storedState = localStorage.getItem('google_calendar_oauth_state');

    if (state && storedState && state !== storedState) {
      setError('Authentication failed: Invalid state parameter.');
      setLoading(false);
      return;
    }
    if (!state && storedState) state = storedState;
    if (!state) state = `fallback_state_${Date.now()}`;

    const redirect_uri = `${window.location.origin}/platforms/google-calendar/callback`;

    if (!code) {
      setError('No code parameter found in URL.');
      setLoading(false);
      return;
    }

    const connect = async () => {
      try {
        const authToken = localStorage.getItem('auth_token');
        if (!authToken) {
          setError('Authentication token not found. Please log in again.');
          setLoading(false);
          return;
        }

        const callbackResponse = await apiClient.get('/platforms/google-calendar/callback', {
          params: { code, state, redirect_uri },
        });

        const tokenData = callbackResponse.data;
        if (!tokenData.access_token) {
          throw new Error('No access token received');
        }

        await apiClient.post('/platforms/google-calendar/account', {
          access_token: tokenData.access_token,
          refresh_token: tokenData.refresh_token,
          token_expiry: tokenData.token_expiry,
          scope: tokenData.scope,
          profile: {
            emailAddress: tokenData.profile?.emailAddress || tokenData.profile?.email,
            name: tokenData.profile?.name || 'Google Calendar',
            picture: tokenData.profile?.picture || '',
          },
        });

        localStorage.setItem('google_calendar_connected', 'true');
        setSuccess(true);
        setTimeout(() => router.push('/dashboard/settings?tab=integrations'), 2000);
      } catch (err: any) {
        setError(
          err?.response?.data?.detail ||
            err?.response?.data?.message ||
            'Failed to connect Google Calendar.',
        );
      } finally {
        setLoading(false);
      }
    };

    connect();
  }, [searchParams, router]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spin tip="Connecting Google Calendar..." size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center p-4">
        <Alert
          type="error"
          message="Google Calendar Connection Failed"
          description={error}
          showIcon
          action={
            <Button type="primary" onClick={() => router.push('/dashboard/settings')}>
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
          message="Google Calendar Connected!"
          description="Redirecting you to Integrations..."
          showIcon
        />
      </div>
    );
  }

  return null;
}
