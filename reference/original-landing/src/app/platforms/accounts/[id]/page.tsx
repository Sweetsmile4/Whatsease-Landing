'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  FaArrowLeft, 
  FaTrash, 
  FaExclamationTriangle,
  FaCheck
} from 'react-icons/fa';
import { usePlatformService } from '@/app/services/platformService';

const AccountDetailsPage = (props: any) => {
  const router = useRouter();
  const { id } = props.params;
  const platformService = usePlatformService();
  
  const [account, setAccount] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        setLoading(true);
        const accountDetails = await platformService.getPlatformAccountDetails(id);
        if (!accountDetails) {
          throw new Error('Account not found');
        }
        setAccount(accountDetails);
      } catch (err: any) {
        console.error('Error fetching account details:', err);
        setError(err.message || 'Failed to load account details');
      } finally {
        setLoading(false);
      }
    };

    fetchAccountDetails();
  }, [id, platformService]);

  const handleDisconnect = async () => {
    try {
      setIsDeleting(true);
      const success = await platformService.disconnectPlatformAccount(id);
      if (success) {
        setActionSuccess('Account disconnected successfully');
        setTimeout(() => {
          router.push('/dashboard/inbox');
        }, 2000);
      } else {
        throw new Error('Failed to disconnect account');
      }
    } catch (err: any) {
      console.error('Error disconnecting account:', err);
      setError(err.message || 'Failed to disconnect account');
    } finally {
      setIsDeleting(false);
      setShowConfirmation(false);
    }
  };

  const getPlatformData = () => {
    if (!account) return null;

    // Get platform-specific data
    if (account.platform_type === 'facebook' && account.facebook_data) {
      return account.facebook_data;
    } else if (account.platform === 'facebook' && account.metadata?.facebook) {
      return account.metadata.facebook;
    }
    
    return null;
  };

  const platformData = getPlatformData();

  if (loading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-primary"></div>
      </div>
    );
  }

  if (error) {
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
        </div>
        <div className="rounded-md bg-red-50 p-4 text-red-800">
          <h2 className="mb-2 text-lg font-semibold">Error</h2>
          <p>{error}</p>
          <button 
            onClick={() => router.push('/dashboard/inbox')}
            className="mt-4 rounded-md bg-red-700 px-4 py-2 text-white hover:bg-red-800"
          >
            Return to Inbox
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {actionSuccess && (
        <div className="mb-4 flex items-center rounded-md bg-green-50 p-4 text-green-800">
          <FaCheck className="mr-2" />
          <p>{actionSuccess}</p>
        </div>
      )}
      
      <div className="mb-6 flex items-center">
        <button 
          onClick={() => router.push('/dashboard/inbox')}
          className="mr-4 flex items-center text-gray-600 hover:text-gray-900"
        >
          <FaArrowLeft className="mr-2" />
          Back to Inbox
        </button>
        <h1 className="text-2xl font-bold">
          {account?.name || 'Account Details'}
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Account Summary Card */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b p-4">
            <h2 className="text-lg font-semibold">Account Information</h2>
          </div>
          <div className="p-4">
            <div className="mb-6 flex items-center">
              <div className="relative mr-4 h-20 w-20 overflow-hidden rounded-full">
                {platformData?.picture_url ? (
                  <img 
                    src={platformData.picture_url} 
                    alt={account.name} 
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gray-200 text-2xl font-semibold">
                    {account.name?.charAt(0) || '?'}
                  </div>
                )}
                <div className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-white bg-green-500"></div>
              </div>
              <div>
                <h3 className="text-lg font-medium">{account.name}</h3>
                <p className="text-sm capitalize text-gray-600">{account.platform_type || account.platform}</p>
                {account.created_at && (
                  <p className="text-xs text-gray-500">
                    Connected on {new Date(account.created_at).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-3">
              {platformData?.page_id && (
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Page ID</h4>
                  <p className="text-sm">{platformData.page_id}</p>
                </div>
              )}
              
              {/* Platform-specific details */}
              {platformData?.subscription?.subscribed_fields && (
                <div>
                  <h4 className="text-sm font-medium text-gray-500">Subscribed to</h4>
                  <p className="text-sm">{platformData.subscription.subscribed_fields.split(',').join(', ')}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Usage & Stats Card */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b p-4">
            <h2 className="text-lg font-semibold">Usage & Statistics</h2>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <p className="text-sm font-medium text-gray-500">Messages</p>
                <p className="mt-1 text-2xl font-bold">{account.usage?.messagesCount || 0}</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <p className="text-sm font-medium text-gray-500">Contacts</p>
                <p className="mt-1 text-2xl font-bold">{account.usage?.contactsCount || 0}</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <p className="text-sm font-medium text-gray-500">Avg. Response</p>
                <p className="mt-1 text-2xl font-bold">{account.stats?.responseTime || '-'}</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <p className="text-sm font-medium text-gray-500">Last Active</p>
                <p className="mt-1 text-sm font-medium">
                  {account.lastActive ? new Date(account.lastActive).toLocaleDateString() : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions Card */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="border-b p-4">
            <h2 className="text-lg font-semibold">Account Actions</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <button
                className="flex w-full items-center justify-center rounded-lg border border-red-200 bg-white px-4 py-2 text-red-700 hover:bg-red-50"
                onClick={() => setShowConfirmation(true)}
              >
                <FaTrash className="mr-2" />
                Disconnect Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
            <div className="mb-4 flex items-center text-red-600">
              <FaExclamationTriangle className="mr-2 h-6 w-6" />
              <h3 className="text-lg font-bold">Confirm Disconnection</h3>
            </div>
            <p className="mb-6">
              Are you sure you want to disconnect this account? This action cannot be undone and all associated conversations will be archived.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                className="rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50"
                onClick={() => setShowConfirmation(false)}
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-70"
                onClick={handleDisconnect}
                disabled={isDeleting}
              >
                {isDeleting ? (
                  <div className="flex items-center">
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    Disconnecting...
                  </div>
                ) : (
                  'Disconnect'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountDetailsPage;
