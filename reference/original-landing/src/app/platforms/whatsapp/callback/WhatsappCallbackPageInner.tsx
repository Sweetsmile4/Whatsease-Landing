'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Spin, Alert, Button } from 'antd';
import { getApiClient } from '@/utils/api';
import { useWhatsAppConnect } from '@/contexts/WhatsappContext';
import type { WhatsAppConnectResponse } from '@/contexts/WhatsappContext';
import { captureUTMParams } from '@/utils/utm';
export default function WhatsAppCallbackPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const apiClient = getApiClient();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const { setWhatsAppConnectData } = useWhatsAppConnect();
  // changed: make type represent an array of connection entries

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
    const storedState = localStorage.getItem('whatsapp_oauth_state');

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
      process.env.NEXT_PUBLIC_WHATSAPP_REDIRECT_URI ||
      (typeof window !== 'undefined'
        ? window.location.origin + '/platforms/whatsapp/callback'
        : '');

    if (!code) {
      setError('No code parameter found in URL.');
      setLoading(false);
      return;
    }

    const registerWhatsAppAccount = async () => {
      try {
        console.log('Sending WhatsApp callback request with params:', {
          code,
          state,
          redirect_uri,
        });

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

        const res = await apiClient.post(
          '/platforms/whatsapp/callback',
          {},
          {
            params: {
              code,
              state,
              redirect_uri,
            },
          },
        );
        console.log(
          'WhatsApp callback response:',
          res.data.account_data.businesses.data,
        );
        // Store WhatsApp connected success flag in localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('whatsapp_connected', 'true');
        }

        setResponse(res.data);
        setSuccess(true);
        // Update WhatsApp context with new connection data

        // map API response into an array of WhatsAppConnectResponse entries
        const businesses = res.data?.account_data?.businesses?.data || [];
        const accessToken =
          res.data?.access_token || res.data?.short_lived_token || '';
        const mapped: WhatsAppConnectResponse[] = [];

        businesses.forEach((business: any) => {
          const businessId = business?.id;
          const businessName =
            business?.name || business?.on_behalf_of_business_info?.name;
          const ownedAccounts =
            business?.owned_whatsapp_business_accounts?.data || [];

          ownedAccounts.forEach((wbAccount: any) => {
            const wbId = wbAccount?.id;
            const wbName = wbAccount?.name;

            const phoneNumbers = wbAccount?.phone_numbers?.data || [];
            phoneNumbers.forEach((phone: any) => {
              mapped.push({
                phone_number_id: phone?.id,
                business_account_id: businessId,
                whatsapp_business_account_id: wbId,
                display_phone_number: phone?.display_phone_number,
                business_name: businessName,
                whatsapp_business_name: wbName,
                user_access_token: accessToken,
              });
            });

            // if no phone numbers but you still want an entry for the account:
            if (phoneNumbers.length === 0) {
              mapped.push({
                phone_number_id: '',
                business_account_id: businessId,
                whatsapp_business_account_id: wbId,
                display_phone_number: '',
                business_name: businessName,
                whatsapp_business_name: wbName,
                user_access_token: accessToken,
              });
            }
          });
        });

        // set mapped array into context (instead of raw res.data)
        setWhatsAppConnectData(mapped);
        setTimeout(() => {
          router.push('/dashboard/settings?tab=integrations');
        }, 2000);
      } catch (err: any) {
        console.error('WhatsApp connection error:', err);
        setError(
          err?.response?.data?.message ||
            'Failed to register WhatsApp account.',
        );
      } finally {
        setLoading(false);
      }
    };

    registerWhatsAppAccount();
  }, [searchParams, router]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spin tip="Connecting Whatsapp account..." size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center p-4">
        <Alert
          type="error"
          message="Whatsapp Connection Failed"
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
          message="WhatsApp Connected Successfully!"
          description={
            <div>
              <div>
                Your WhatsApp account has been successfully connected to
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
