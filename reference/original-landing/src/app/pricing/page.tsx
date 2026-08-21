'use client';

import { useEffect, useState, useRef } from 'react';
import { useWhatsEasePublicAPI } from '@/utils/api';
import PricingHeader from '@/components/pricing/PricingHeader';
import PricingCards from '@/components/pricing/PricingCards';
import AddonsModal from '@/components/pricing/AddonsModal';
import FeatureComparison from '@/components/pricing/FeatureComparison';
import FaqSection from '@/components/pricing/FaqSection';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ErrorDisplay from '@/components/common/ErrorDisplay';
import Navbar from '@/app/components/Navbar';
import { useAuth, AuthUtils } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { message } from 'antd';
import { getApiClient } from '@/utils/api';
import { trackPricingEvents, trackPaymentEvents } from '@/utils/analytics';

// Types imported from a central types file
import { Plan, Addon } from '@/types/pricing';

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export default function PricingPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [addons, setAddons] = useState<Addon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>(
    'monthly',
  );
  const [isAddonsModalOpen, setIsAddonsModalOpen] = useState(false);
  const [processingPlanId, setProcessingPlanId] = useState<string | null>(null);

  const { api } = useWhatsEasePublicAPI();
  const apiClient = getApiClient();
  const apiCallMade = useRef(false);
  const { isAuthenticated, refreshSubscription, user } = useAuth(); // Assuming user is needed for prefill
  const router = useRouter();

  // Load Razorpay script on mount
  useEffect(() => {
    loadRazorpayScript();
  }, []);

  useEffect(() => {
    if (apiCallMade.current === false) {
      const fetchData = async () => {
        try {
          setLoading(true);
          const [plansResponse, addonsResponse] = await Promise.all([
            api.get('/subscriptions/plans'),
            api.get('/addons/'),
          ]);
          setPlans(
            plansResponse.data
              .map((p: any) => ({
                ...p,
                id: p.id || p._id, // Handle potential _id/id mismatch
              }))
              .sort((a: Plan, b: Plan) => {
                // Priority 1: Free plan always first
                if (a.type === 'free') return -1;
                if (b.type === 'free') return 1;

                // Priority 2: Enterprise plan always last
                if (a.type === 'enterprise') return 1;
                if (b.type === 'enterprise') return -1;

                // Priority 3: Sort by regular price
                return (a.regular_price || 0) - (b.regular_price || 0);
              }),
          );
          setAddons(addonsResponse.data);
          setError(null);
        } catch (err) {
          console.error('Error fetching pricing data:', err);
          setError('Failed to load pricing plans. Please try again later.');
        } finally {
          setLoading(false);
        }
      };

      fetchData();
      apiCallMade.current = true;
    }
  }, []);

  // Function to retry loading plans
  const handleRetry = () => {
    apiCallMade.current = false;
    setLoading(true);
    setError(null);
  };

  const handleSubscribe = async (plan: Plan) => {
    if (!isAuthenticated) {
      router.push('/login?redirect=/pricing');
      return;
    }

    if (!(window as any).Razorpay) {
      message.error(
        'Payment gateway is still loading. Please try again in a moment.',
      );
      return;
    }

    let razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    // Fallback if env not directly available (rare in client comp but possible if config issues)
    if (!razorpayKey && typeof window !== 'undefined') {
      razorpayKey = localStorage.getItem('razorpay_key_id') || undefined;
    }

    if (!razorpayKey) {
      message.error('Payment configuration error. Please contact support.');
      return;
    }

    setProcessingPlanId(plan.id);
    const planType = plan.type || 'unknown';
    const planPeriod = billingPeriod;

    try {
      const token = AuthUtils.getToken();
      if (!token)
        throw new Error('No auth token detected. Please login again.');

      // 1. Create Order
      const orderResponse = await apiClient.post(
        '/payments/create-order',
        {},
        {
          params: {
            plan_id: plan.id,
            billing_cycle: billingPeriod,
          },
        },
      );

      const orderData = orderResponse.data;

      // Check for free/direct activation
      if ((orderData.amount === 0 || !orderData.order) && orderData.success) {
        message.success('Subscription activated successfully!');
        setTimeout(() => {
          window.location.href = '/dashboard/settings?tab=billing';
        }, 1000);
        return;
      }

      const amount = orderData.order.amount / 100;

      // 2. Open Razorpay
      const options: any = {
        key: razorpayKey,
        amount: orderData.order.amount,
        currency: orderData.currency,
        name: 'WhatsEase',
        description: `${plan.name} (${billingPeriod})`,
        image: `${window.location.origin}/whatsease_favicon.svg`,
        order_id: orderData.order.id,
        handler: async function (response: any) {
          try {
            // 3. Verify Payment
            await apiClient.post('/payments/verify-payment', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            message.success('Subscription successful!');
            trackPaymentEvents.success(planType, planPeriod, amount, response.razorpay_payment_id);
            trackPricingEvents.purchaseCompleted(planType, planPeriod, amount, response.razorpay_order_id);
            if (refreshSubscription) await refreshSubscription();
            router.push('/dashboard/settings?tab=billing');
          } catch (verifyErr) {
            console.error('Verification error:', verifyErr);
            message.error('Payment verification failed.');
            trackPaymentEvents.failed(planType, planPeriod, 'Payment verification failed');
          } finally {
            setProcessingPlanId(null);
          }
        },
        modal: {
          ondismiss: function () {
            setProcessingPlanId(null);
          },
        },
        prefill: {
          email: user?.email || '',
          name: user?.name || '',
        },
        theme: {
          color: '#047536',
        },
      };

      const rzpInstance: any = new (window as any).Razorpay(options);
      trackPaymentEvents.initiated(planType, planPeriod, amount);
      trackPricingEvents.addToCart(planType, planPeriod, amount);
      trackPricingEvents.beginCheckout(planType, planPeriod, amount);
      rzpInstance.open();
    } catch (error: any) {
      console.error('Subscription error:', error);
      message.error(
        error.response?.data?.detail || 'Failed to initiate purchase.',
      );
      setProcessingPlanId(null);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <LoadingSpinner message="Loading pricing plans..." />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <ErrorDisplay error={error} onRetry={handleRetry} />
      </>
    );
  }

  return (
    <>
      <Navbar />
      {/* Add padding-top to accommodate the fixed navbar (75px height on desktop, 60px on mobile) */}
      {/* Main Content */}
      <main className="min-h-screen pt-[60px] sm:pt-[75px]">
        <PricingHeader
          billingPeriod={billingPeriod}
          setBillingPeriod={setBillingPeriod}
        />

        <section className="relative z-10 pb-12 sm:pb-16 lg:pb-20">
          <div className="container mx-auto px-4">
            <PricingCards
              plans={plans}
              billingPeriod={billingPeriod}
              onOpenAddons={() => setIsAddonsModalOpen(true)}
              onSubscribe={handleSubscribe}
              processingPlanId={processingPlanId}
            />
          </div>
        </section>

        <AddonsModal
          isOpen={isAddonsModalOpen}
          onClose={() => setIsAddonsModalOpen(false)}
          addons={addons}
          microPlans={plans.filter((p) => p.type === 'micro')}
        />

        <section className="border-t border-gray-100 bg-gray-50/50 py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <FeatureComparison plans={plans} />
          </div>
        </section>

        <section className="bg-white py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <FaqSection />
          </div>
        </section>
      </main>
    </>
  );
}
