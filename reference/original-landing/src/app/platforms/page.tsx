'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import { PlatformIcon } from '@/app/components/PlatformIcon';
import { PLATFORM_AUTH_URLS } from '@/app/services/platformService';
import { LocalStorageKeys } from '@/app/constants/storage';
import { getApiClient, getStoredAuthToken } from '@/utils/api';

const PlatformOptions = () => {
  const router = useRouter();
  const apiClient = getApiClient();
  const [loading, setLoading] = useState<string | null>(null);

  const handleConnect = async (platform: string) => {
    setLoading(platform);
    const typedPlatform = platform as keyof typeof PLATFORM_AUTH_URLS;
    const redirectUri = `${window.location.origin}/platforms/${platform}/callback`;

    try {
      const token = getStoredAuthToken();
      if (!token) {
        alert('You need to be logged in to connect a platform');
        router.push('/login');
        return;
      }

      const response = await apiClient.get(PLATFORM_AUTH_URLS[typedPlatform], {
        params: {
          redirect_uri: redirectUri,
        },
      });

      const data = response.data;
      if (data.authorization_url) {
        window.location.href = data.authorization_url;
      } else {
        throw new Error('No authorization URL found in response');
      }
    } catch (err) {
      console.error(`Error connecting to ${platform}:`, err);
      alert(`Failed to connect to ${platform}. Please try again later.`);
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center">
        <button
          onClick={() => router.push('/dashboard/inbox')}
          className="mr-4 flex items-center text-gray-600 hover:text-gray-900"
        >
          <FaArrowLeft className="mr-2" />
          Back to Inbox
        </button>
        <h1 className="text-2xl font-bold">Connect a Platform</h1>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {Object.keys(PLATFORM_AUTH_URLS).map((platform) => (
          <div
            key={platform}
            className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="mb-4">
              <PlatformIcon platform={platform} size={64} />
            </div>
            <h2 className="mb-2 text-xl font-semibold capitalize">
              {platform}
            </h2>
            <p className="mb-6 text-center text-sm text-gray-600">
              Connect your {platform} account to manage conversations
            </p>
            <button
              className="w-full rounded-lg bg-primary px-4 py-2 text-white shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-70"
              onClick={() => handleConnect(platform)}
              disabled={loading === platform}
            >
              {loading === platform ? (
                <div className="flex items-center justify-center">
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                  Connecting...
                </div>
              ) : (
                `Connect ${platform.charAt(0).toUpperCase() + platform.slice(1)}`
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformOptions;
