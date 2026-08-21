import Link from 'next/link';
import { FiCheck, FiLoader } from 'react-icons/fi';
import { Plan } from '@/types/pricing';

interface PlanCardProps {
  plan: Plan;
  billingPeriod: 'monthly' | 'quarterly' | 'yearly';
  isHighlighted: boolean;
  onOpenAddons?: () => void;
  onSubscribe?: (plan: Plan) => void;
  isProcessing?: boolean;
}

export default function PlanCard({
  plan,
  billingPeriod,
  isHighlighted,
  onOpenAddons,
  onSubscribe,
  isProcessing = false,
}: PlanCardProps) {
  const isGrowth = plan.type === 'growth';

  // Multiplier & discount to match backend logic exactly
  const BILLING_MULTIPLIERS: Record<string, number> = {
    monthly: 1,
    quarterly: 3,
    yearly: 12,
  };
  const BILLING_DISCOUNTS: Record<string, number> = {
    monthly: 1.0,
    quarterly: 0.9,
    yearly: 0.8,
  };
  const BILLING_LABELS: Record<string, string> = {
    monthly: '/month',
    quarterly: '/quarter',
    yearly: '/year',
  };
  const BILLING_SAVINGS: Record<string, string | null> = {
    monthly: null,
    quarterly: 'Save 10%',
    yearly: 'Save 20%',
  };

  // Helper function to format price display — matches backend create-order fallback formula exactly
  const formatPrice = (plan: Plan) => {
    if (plan.type === 'free') {
      return { price: 'Free', unit: '', discount: null };
    } else if (plan.regular_price === null || plan.is_talk_to_sales) {
      return { price: 'Custom', unit: '', discount: null };
    } else {
      const base = plan.regular_price as number;
      const multiplier = BILLING_MULTIPLIERS[billingPeriod] ?? 1;
      const discount = BILLING_DISCOUNTS[billingPeriod] ?? 1.0;
      const displayPrice = Math.round(base * multiplier * discount);
      return {
        price: `₹${displayPrice.toLocaleString('en-IN')}`,
        unit: BILLING_LABELS[billingPeriod] ?? '/month',
        discount: BILLING_SAVINGS[billingPeriod],
      };
    }
  };

  // Helper function to determine CTA text and link
  const getCTA = (plan: Plan) => {
    if (plan.type === 'free') {
      return {
        text: 'Start for free',
        link: '/signup',
        variant: 'outline',
        isAction: false,
      };
    } else if (plan.is_talk_to_sales) {
      return {
        text: 'Contact sales',
        link: '/contact',
        variant: 'outline',
        isAction: false,
      };
    } else {
      return {
        text: 'Get Started',
        link: null, // No link for paid plans, action handled by button
        variant: isHighlighted ? 'solid' : 'outline',
        isAction: true,
      };
    }
  };

  const { price, unit } = formatPrice(plan);
  const {
    text: ctaText,
    link: ctaLink,
    variant: ctaVariant,
    isAction,
  } = getCTA(plan);

  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:rounded-[2rem] sm:p-6 lg:p-8 ${
        isHighlighted
          ? 'z-10 scale-[1.02] border-[#04b851] shadow-xl ring-4 ring-[#04b851]/10'
          : 'border-gray-200 shadow-sm hover:border-[#04b851]/30'
      }`}
    >
      {isHighlighted && (
        <div className="absolute left-0 right-0 top-0 bg-gradient-to-r from-[#04b851] to-emerald-600 py-1.5 text-center text-[10px] font-bold uppercase tracking-widest text-white sm:text-xs">
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className={`mb-6 sm:mb-8 ${isHighlighted ? 'pt-6' : ''}`}>
        <h3 className="text-base font-bold uppercase tracking-tight text-gray-900 sm:text-lg">
          {plan.name}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-gray-500 sm:text-sm">
          {plan.description}
        </p>
        <div className="mt-4 flex items-baseline sm:mt-6">
          <span className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {price}
          </span>
          {unit && (
            <span className="ml-2 text-sm font-medium text-gray-500 sm:text-base">
              {unit}
            </span>
          )}
        </div>
      </div>

      {/* Features */}
      {plan.type !== 'enterprise' && (
        <ul className="mb-6 flex-1 space-y-3 sm:mb-8 sm:space-y-4">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div
                className={`mt-0.5 flex-shrink-0 rounded-full p-1 ${
                  isGrowth
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                <FiCheck className="h-3 w-3" />
              </div>
              <span className="ml-3 text-xs font-medium text-gray-700 sm:text-sm">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Actions */}
      <div className="mt-auto space-y-3 sm:space-y-4">
        {isAction ? (
          <button
            onClick={() => onSubscribe && onSubscribe(plan)}
            disabled={isProcessing}
            className={`flex w-full items-center justify-center rounded-xl py-3 text-xs font-bold tracking-wide transition-all duration-200 sm:rounded-2xl sm:py-3.5 sm:text-sm ${
              ctaVariant === 'solid'
                ? 'bg-[#04b851] text-white shadow-lg shadow-green-500/30 hover:bg-[#03a046] hover:shadow-green-500/50 disabled:bg-[#04b851]/70'
                : 'bg-gray-50 text-gray-900 hover:bg-gray-100 disabled:bg-gray-100 disabled:text-gray-400'
            }`}
          >
            {isProcessing ? (
              <>
                <FiLoader className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              ctaText
            )}
          </button>
        ) : (
          <Link
            href={ctaLink || '#'}
            className={`flex w-full items-center justify-center rounded-xl py-3 text-xs font-bold tracking-wide transition-all duration-200 sm:rounded-2xl sm:py-3.5 sm:text-sm ${
              ctaVariant === 'solid'
                ? 'bg-[#04b851] text-white shadow-inner-and-outer shadow-white/50 hover:bg-[#03a046] hover:shadow-green-500/50'
                : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
            }`}
          >
            {ctaText}
          </Link>
        )}

        <div className="flex flex-col gap-2">
          <a
            href="#comparison"
            className="block text-center text-xs font-medium text-gray-500 transition-colors hover:text-gray-900 sm:text-sm"
          >
            Compare features
          </a>

          {plan.type !== 'enterprise' && onOpenAddons && (
            <button
              onClick={onOpenAddons}
              className="flex w-full items-center justify-center text-xs font-semibold text-gray-500 transition-colors hover:text-[#04b851] sm:text-sm"
            >
              View addons
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
