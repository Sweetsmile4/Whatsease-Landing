/**
 * AddonsModal - Modal for purchasing micro plans and add-ons
 *
 * Features:
 * - Purchase micro plans (standalone subscription packages for specific use cases)
 * - Purchase add-ons (boost existing plan limits and features)
 * - Razorpay payment integration with verification
 * - Real-time limit updates across all dashboard sections after purchase
 * - Loading states and error handling
 * - Works with any existing plan or as standalone (micro plans)
 *
 * Rate Limits & User Limits:
 * - After successful purchase, refetchUserLimits() is called
 * - This updates the UserLimitsContext with new limits from backend
 * - All dashboard sections using useUserLimits() hook automatically get updated
 * - Rate limits are enforced based on the updated limits object
 * - Works seamlessly for users on regular plans, micro plans, or free tier
 */

import { useState, useMemo, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
  FiUsers,
  FiMessageSquare,
  FiHeadphones,
  FiBarChart2,
  FiActivity,
  FiX,
  FiCheck,
} from 'react-icons/fi';
import { Plan, Addon } from '@/types/pricing';
import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useUserLimits } from '@/contexts/UserLimitsContext';
import { AuthUtils } from '@/contexts/AuthContext';
import { getApiClient } from '@/utils/api';

interface AddonsModalProps {
  isOpen: boolean;
  onClose: () => void;
  addons: Addon[];
  microPlans: Plan[];
}

export default function AddonsModal({
  isOpen,
  onClose,
  addons,
  microPlans,
}: AddonsModalProps) {
  const api = getApiClient();
  const router = useRouter();
  const { refetchUserLimits, plan, subscription } = useUserLimits();

  // Define Groups/Tabs
  const GROUPS = [
    { id: 'ai', label: 'AI & Automation' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'growth', label: 'Growth' },
    { id: 'data', label: 'Enterprise & Data' },
  ];

  const [mainTab, setMainTab] = useState<'micro' | 'addons'>('micro');
  const [activeCategoryTab, setActiveCategoryTab] = useState('ai');
  const [processingPlanId, setProcessingPlanId] = useState<string | null>(null);
  const [processingAddonId, setProcessingAddonId] = useState<string | null>(
    null,
  );

  // Load Razorpay script
  useEffect(() => {
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = resolve;
        document.body.appendChild(script);
      });
    };

    loadRazorpayScript();
  }, []);

  // Handle Micro Plan Purchase
  const handlePurchaseMicroPlan = async (plan: Plan) => {
    if (!(window as any).Razorpay) {
      message.error(
        'Payment gateway is still loading. Please try again in a moment.',
      );
      return;
    }

    let razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!razorpayKey && typeof window !== 'undefined') {
      razorpayKey = localStorage.getItem('razorpay_key_id') || undefined;
    }

    if (!razorpayKey) {
      message.error('Payment configuration error. Please contact support.');
      return;
    }

    setProcessingPlanId(plan.id);

    try {
      const token = AuthUtils.getToken();
      if (!token) {
        message.error('Please login to purchase a plan.');
        router.push('/login');
        return;
      }

      // Create Order for micro plan (using monthly billing)
      const orderUrl = `/payments/create-order?plan_id=${plan.id}&billing_cycle=monthly`;

      const orderResponse = await api.post(
        orderUrl,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const orderData = orderResponse.data;

      // Check for free/direct activation
      if ((orderData.amount === 0 || !orderData.order) && orderData.success) {
        message.success('Plan activated successfully!');
        await refetchUserLimits();
        setTimeout(() => {
          onClose();
          router.push('/dashboard/settings?tab=billing');
        }, 1000);
        return;
      }

      // Open Razorpay
      const options: any = {
        key: razorpayKey,
        amount: orderData.order.amount,
        currency: orderData.currency,
        name: 'WhatsEase',
        description: `${plan.name} - Micro Plan`,
        image: `${window.location.origin}/whatsease_favicon.svg`,
        order_id: orderData.order.id,
        handler: async function (response: any) {
          try {
            // Verify Payment
            await api.post(
              '/payments/verify-payment',
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );

            message.success('Micro plan purchased successfully!');
            await refetchUserLimits();
            message.info(
              'Your rate limits and features have been updated across all sections.',
              3,
            );
            onClose();
            router.push('/dashboard/settings?tab=billing');
          } catch (verifyErr) {
            console.error('Verification error:', verifyErr);
            message.error('Payment verification failed.');
          } finally {
            setProcessingPlanId(null);
          }
        },
        modal: {
          ondismiss: function () {
            setProcessingPlanId(null);
          },
        },
        theme: {
          color: '#04b851',
        },
      };

      const rzpInstance: any = new (window as any).Razorpay(options);
      rzpInstance.open();
    } catch (error: any) {
      console.error('Purchase error:', error);
      message.error(error.response?.data?.detail || 'Failed to purchase plan.');
      setProcessingPlanId(null);
    }
  };

  // Handle Addon Purchase
  const handlePurchaseAddon = async (addon: Addon) => {
    if (!(window as any).Razorpay) {
      message.error(
        'Payment gateway is still loading. Please try again in a moment.',
      );
      return;
    }

    let razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!razorpayKey && typeof window !== 'undefined') {
      razorpayKey = localStorage.getItem('razorpay_key_id') || undefined;
    }

    if (!razorpayKey) {
      message.error('Payment configuration error. Please contact support.');
      return;
    }

    setProcessingAddonId(addon.id);

    try {
      const token = AuthUtils.getToken();
      if (!token) {
        message.error('Please login to purchase add-ons.');
        router.push('/login');
        return;
      }

      // Create Order for addon
      const orderUrl = `/payments/create-addon-order?addon_id=${addon.id}`;

      const orderResponse = await api.post(
        orderUrl,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const orderData = orderResponse.data;

      // Check for free/direct activation
      if ((orderData.amount === 0 || !orderData.order) && orderData.success) {
        message.success('Add-on activated successfully!');
        await refetchUserLimits();
        setTimeout(() => {
          onClose();
        }, 1000);
        return;
      }

      // Open Razorpay
      const options: any = {
        key: razorpayKey,
        amount: orderData.order.amount,
        currency: orderData.currency,
        name: 'WhatsEase',
        description: `${addon.name} - Add-on`,
        image: `${window.location.origin}/whatsease_favicon.svg`,
        order_id: orderData.order.id,
        handler: async function (response: any) {
          try {
            // Verify Addon Payment (dedicated endpoint — applies usage_granted limits)
            await api.post(
              '/payments/verify-addon-payment',
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );

            message.success(
              'Add-on purchased successfully! Your limits have been updated.',
            );
            await refetchUserLimits();
            message.info('All sections now reflect your upgraded limits.', 3);
            onClose();
          } catch (verifyErr) {
            console.error('Verification error:', verifyErr);
            message.error('Payment verification failed.');
          } finally {
            setProcessingAddonId(null);
          }
        },
        modal: {
          ondismiss: function () {
            setProcessingAddonId(null);
          },
        },
        theme: {
          color: '#04b851',
        },
      };

      const rzpInstance: any = new (window as any).Razorpay(options);
      rzpInstance.open();
    } catch (error: any) {
      console.error('Addon purchase error:', error);
      message.error(
        error.response?.data?.detail || 'Failed to purchase add-on.',
      );
      setProcessingAddonId(null);
    }
  };

  // Helper to map DB categories to our UI groups
  const getGroupForCategory = (category: string | undefined): string => {
    if (!category) return 'growth'; // Default
    switch (category) {
      case 'ai_pack':
      case 'automation_booster':
      case 'flow_pack':
        return 'ai';
      case 'campaign_pack':
        return 'marketing';
      case 'channel_expansion':
        return 'growth';
      case 'analytics':
      case 'enterprise':
        return 'data';
      default:
        return 'growth';
    }
  };

  // Group addons by name (consolidating variants)
  const groupedAddons = useMemo(() => {
    if (!addons) return [];

    const categoryFiltered = addons.filter(
      (addon) => getGroupForCategory(addon.category) === activeCategoryTab,
    );

    const groups: { [key: string]: Addon[] } = {};

    categoryFiltered.forEach((addon) => {
      // Logic to split "Campaign Pack - Small" into "Campaign Pack"
      // If it has " - ", split. If not, use full name.
      const nameParts = addon.name.split(' - ');
      const baseName = nameParts.length > 1 ? nameParts[0] : addon.name;

      if (!groups[baseName]) {
        groups[baseName] = [];
      }
      groups[baseName].push(addon);
    });

    return groups;
  }, [addons, activeCategoryTab]);

  // Function to render the appropriate icon
  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'users':
        return <FiUsers className="h-5 w-5 text-white" />;
      case 'bot':
        return <FiMessageSquare className="h-5 w-5 text-white" />;
      case 'support':
        return <FiHeadphones className="h-5 w-5 text-white" />;
      case 'analytics':
        return <FiBarChart2 className="h-5 w-5 text-white" />;
      default:
        return <FiActivity className="h-5 w-5 text-white" />;
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-xl bg-white p-4 text-left align-middle shadow-xl transition-all sm:rounded-2xl sm:p-6">
                {/* Header with Close Button */}
                <div className="mb-4 flex items-start justify-between sm:mb-6">
                  <div>
                    <Dialog.Title
                      as="h3"
                      className="text-xl font-bold leading-6 text-gray-900 sm:text-2xl"
                    >
                      {mainTab === 'micro'
                        ? 'Micro Plans'
                        : 'Add-ons & Boosters'}
                    </Dialog.Title>
                    <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                      {mainTab === 'micro'
                        ? 'Choose a focused micro plan for specific needs. Perfect for targeted use cases.'
                        : 'Supercharge your existing plan with add-ons. Upgrade your limits and unlock new features instantly.'}
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="ml-2 flex-shrink-0 rounded-full bg-gray-100 p-1.5 text-gray-500 hover:bg-gray-200 focus:outline-none sm:p-2"
                  >
                    <FiX className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>

                {/* Main Tabs (Micro Plans vs Add-ons) */}
                <div className="mb-6 flex justify-center sm:mb-8">
                  <div className="inline-flex w-full rounded-lg bg-gray-100 p-1 sm:w-auto">
                    <button
                      onClick={() => setMainTab('micro')}
                      className={`flex-1 rounded-md px-4 py-2 text-xs font-semibold transition-all duration-200 sm:flex-initial sm:px-6 sm:py-2.5 sm:text-sm ${
                        mainTab === 'micro'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      Micro Plans
                    </button>
                    <button
                      onClick={() => setMainTab('addons')}
                      className={`flex-1 rounded-md px-4 py-2 text-xs font-semibold transition-all duration-200 sm:flex-initial sm:px-6 sm:py-2.5 sm:text-sm ${
                        mainTab === 'addons'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      Add-ons
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                {mainTab === 'micro' ? (
                  /* Micro Plans Grid */
                  <div>
                    {/* Info Banner for Micro Plans */}
                    <div className="mb-4 rounded-lg border border-purple-100 bg-purple-50 p-3 sm:mb-6 sm:rounded-xl sm:p-4">
                      <div className="flex items-start gap-2">
                        <FiCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600 sm:h-5 sm:w-5" />
                        <div>
                          <p className="text-xs font-semibold text-purple-900 sm:text-sm">
                            Focused solutions for specific needs
                          </p>
                          <p className="mt-1 text-[10px] text-purple-700 sm:text-xs">
                            Micro plans are standalone subscriptions perfect for
                            targeted use cases. Choose one to get started
                            quickly with essential features at an affordable
                            price.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                      {microPlans.map((plan) => (
                        <div
                          key={plan.id}
                          className="relative flex flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-inner-and-outer hover:shadow-black/10 sm:rounded-2xl sm:p-6"
                        >
                          <div className="mb-3 sm:mb-4">
                            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                              {plan.name}
                            </h3>
                            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                              {plan.description}
                            </p>
                          </div>

                          <div className="mb-4 flex items-baseline sm:mb-6">
                            <span className="text-2xl font-bold text-gray-900 sm:text-3xl">
                              ₹{plan.regular_price?.toLocaleString()}
                            </span>
                            <span className="ml-1 text-xs text-gray-500 sm:text-sm">
                              /month
                            </span>
                          </div>

                          <div className="mb-4 flex-grow sm:mb-6">
                            <ul className="space-y-2 sm:space-y-3">
                              {plan.features.slice(0, 4).map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start text-xs text-gray-600 sm:text-sm"
                                >
                                  <FiCheck className="mr-2 h-4 w-4 flex-shrink-0 text-[#04b851] sm:h-5 sm:w-5" />
                                  <span className="flex-1">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-auto">
                            <button
                              onClick={() => handlePurchaseMicroPlan(plan)}
                              disabled={processingPlanId === plan.id}
                              className="flex w-full items-center justify-center rounded-lg border-primary/10 bg-primary px-3 py-2.5 text-center text-xs font-bold text-white shadow-inner-and-outer shadow-white/60 transition-all hover:border-primary/50 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 sm:rounded-xl sm:px-4 sm:py-3 sm:text-sm"
                            >
                              {processingPlanId === plan.id
                                ? 'Processing...'
                                : 'Get Started'}
                            </button>
                          </div>
                        </div>
                      ))}
                      {microPlans.length === 0 && (
                        <div className="col-span-full py-12 text-center text-sm text-gray-500 sm:text-base">
                          No micro plans available at the moment.
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  /* Add-ons Section */
                  <div>
                    {/* Current Plan Indicator */}
                    {plan && (
                      <div className="mb-4 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-white p-3 sm:mb-6 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-[10px] font-medium text-gray-500 sm:text-xs">
                              Current Plan
                            </p>
                            <p className="mt-0.5 text-sm font-bold text-gray-900 sm:text-base">
                              {plan.name}
                              {subscription && !subscription.is_expired && (
                                <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-[9px] font-medium text-green-700">
                                  Active
                                </span>
                              )}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-semibold text-gray-900 sm:text-sm">
                              Add-ons will boost this plan
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Info Banner */}
                    <div className="mb-6 rounded-lg border border-blue-100 bg-blue-50 p-3 sm:mb-8 sm:rounded-xl sm:p-4">
                      <div className="flex items-start gap-2">
                        <FiCheck className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600 sm:h-5 sm:w-5" />
                        <div>
                          <p className="text-xs font-semibold text-blue-900 sm:text-sm">
                            Add-ons work with any plan
                          </p>
                          <p className="mt-1 text-[10px] text-blue-700 sm:text-xs">
                            Purchase add-ons to boost your limits immediately.
                            They stack with your current plan or micro plan.
                            Changes apply instantly to all sections of your
                            dashboard.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="mb-6 flex w-full flex-wrap items-center justify-center gap-2 sm:mb-8">
                      {GROUPS.map((group) => (
                        <button
                          key={group.id}
                          onClick={() => setActiveCategoryTab(group.id)}
                          className={`min-w-[120px] flex-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200 sm:flex-initial sm:rounded-xl sm:px-5 sm:py-2 sm:text-sm ${
                            activeCategoryTab === group.id
                              ? 'bg-primary text-white shadow-inner-and-outer shadow-white/40'
                              : 'border border-gray-100 bg-white text-gray-600 shadow-sm hover:bg-gray-50'
                          }`}
                        >
                          {group.label}
                        </button>
                      ))}
                    </div>

                    {/* Add-ons Grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                      {Object.entries(groupedAddons).map(
                        ([baseName, variants]) => (
                          <AddonCardGroup
                            key={baseName}
                            baseName={baseName}
                            variants={variants}
                            renderIcon={renderIcon}
                            onPurchase={handlePurchaseAddon}
                            processingAddonId={processingAddonId}
                          />
                        ),
                      )}
                      {Object.keys(groupedAddons).length === 0 && (
                        <div className="col-span-full py-12 text-center text-sm text-gray-500 sm:text-base">
                          No add-ons found in this category.
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

// Sub-component for individual Addon Card (Handling variants)
function AddonCardGroup({
  baseName,
  variants,
  renderIcon,
  onPurchase,
  processingAddonId,
}: {
  baseName: string;
  variants: Addon[];
  renderIcon: (icon: string) => React.ReactNode;
  onPurchase: (addon: Addon) => void;
  processingAddonId: string | null;
}) {
  // Sort variants by price (ascending)
  const sortedVariants = [...variants].sort(
    (a, b) => (a.price || 0) - (b.price || 0),
  );

  // Default to the first one (Smallest)
  const [selectedVariantId, setSelectedVariantId] = useState(
    sortedVariants[0].id,
  );

  const selectedAddon =
    sortedVariants.find((v) => v.id === selectedVariantId) || sortedVariants[0];

  // Helper to get size label from name (e.g., "Small", "Basic")
  const getSizeLabel = (name: string) => {
    const parts = name.split(' - ');
    return parts.length > 1 ? parts[1] : 'Standard';
  };

  return (
    <div className="group relative flex flex-col rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition-all duration-300 hover:shadow-lg hover:ring-green-500/20 sm:rounded-2xl sm:p-5">
      <div className="mb-4 flex items-start justify-between sm:mb-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#04b851] to-[#039e44] shadow-lg shadow-green-500/20 sm:h-10 sm:w-10 sm:rounded-xl">
          {renderIcon(selectedAddon.icon)}
        </div>
        {selectedAddon.priceUnit === 'one-time' && (
          <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Top Up
          </span>
        )}
      </div>

      <h3 className="mb-2 text-sm font-bold text-gray-900 group-hover:text-[#04b851] sm:text-base">
        {baseName}
      </h3>

      <p className="mb-4 min-h-[40px] text-[10px] leading-relaxed text-gray-500 sm:mb-6 sm:text-xs">
        {selectedAddon.description}
      </p>

      {/* Variant Selector (if multiple) */}
      {sortedVariants.length > 1 && (
        <div className="mb-3 grid grid-cols-3 gap-1 rounded-lg bg-gray-50 p-1 sm:mb-4">
          {sortedVariants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariantId(variant.id)}
              className={`rounded py-1 text-[9px] font-semibold transition-all sm:text-[10px] ${
                selectedVariantId === variant.id
                  ? 'bg-white text-gray-900 shadow-sm ring-1 ring-black/5'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {getSizeLabel(variant.name)}
            </button>
          ))}
        </div>
      )}

      <div className="mt-auto border-t border-gray-50 pt-3 sm:pt-4">
        <div className="flex items-baseline gap-1">
          {typeof selectedAddon.price === 'number' ? (
            <>
              <span className="text-lg font-bold text-gray-900 sm:text-xl">
                ₹{selectedAddon.price.toLocaleString()}
              </span>
              <span className="text-[10px] font-medium text-gray-500 sm:text-xs">
                /{selectedAddon.priceUnit === 'one-time' ? 'pack' : 'mo'}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-900 sm:text-xl">
              Custom
            </span>
          )}
        </div>

        <button
          onClick={() => onPurchase(selectedAddon)}
          disabled={processingAddonId === selectedAddon.id}
          className="mt-3 flex w-full items-center justify-center rounded-lg border border-primary/10 bg-primary px-3 py-1.5 text-[10px] font-semibold text-white shadow-inner-and-outer shadow-white/40 transition-all hover:opacity-90 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:mt-4 sm:rounded-xl sm:py-2 sm:text-xs"
        >
          {processingAddonId === selectedAddon.id
            ? 'Processing...'
            : 'Add to Plan'}
        </button>
      </div>
    </div>
  );
}
