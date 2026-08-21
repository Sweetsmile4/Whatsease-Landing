'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Spin, Alert, Button } from 'antd';
import { getApiClient } from '@/utils/api';
import { captureUTMParams } from '@/utils/utm';

export default function CalendlyCallbackPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const apiClient = getApiClient();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    captureUTMParams();
    const code = searchParams.get('code');
    const oauthError = searchParams.get('error');
    const oauthErrorDesc = searchParams.get('error_description');
    let state = searchParams.get('state');
    const storedState = localStorage.getItem('calendly_oauth_state');

    // User denied access or Calendly returned an error on the consent screen.
    if (oauthError) {
      setError(
        oauthErrorDesc ||
          (oauthError === 'access_denied'
            ? 'You declined the Calendly authorization request.'
            : `Calendly returned an error: ${oauthError}`),
      );
      setLoading(false);
      return;
    }

    if (state && storedState && state !== storedState) {
      setError('Authentication failed: Invalid state parameter.');
      setLoading(false);
      return;
    }
    if (!state && storedState) state = storedState;
    if (!state) state = `fallback_state_${Date.now()}`;

    const redirect_uri = `${window.location.origin}/platforms/calendly/callback`;

    if (!code) {
      setError('No authorization code was returned by Calendly. Please try connecting again.');
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

        const callbackResponse = await apiClient.get('/platforms/calendly/callback', {
          params: { code, state, redirect_uri },
        });

        const tokenData = callbackResponse.data;
        if (!tokenData.access_token) {
          throw new Error(
            'Calendly did not return an access token. Please retry the connection.',
          );
        }

        const accountResponse = await apiClient.post(
          '/platforms/calendly/account',
          tokenData,
        );

        const synced = accountResponse?.data?.synced_events ?? 0;
        localStorage.setItem('calendly_connected', 'true');
        if (synced > 0) {
          localStorage.setItem('calendly_synced_events', String(synced));
        }
        localStorage.removeItem('calendly_oauth_state');
        setSuccess(true);
        setTimeout(() => router.push('/dashboard/settings?tab=integrations'), 2000);
      } catch (err: any) {
        const detail =
          err?.response?.data?.detail ||
          err?.response?.data?.message ||
          err?.message;
        setError(
          typeof detail === 'string'
            ? detail
            : 'Failed to connect Calendly. Please try again.',
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
        <Spin tip="Connecting Calendly..." size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center p-4">
        <Alert
          type="error"
          message="Calendly Connection Failed"
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
          message="Calendly Connected!"
          description="Redirecting you to Integrations..."
          showIcon
        />
      </div>
    );
  }

  return null;
}
