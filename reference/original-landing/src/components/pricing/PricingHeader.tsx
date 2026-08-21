import { FiTag } from 'react-icons/fi';

interface PricingHeaderProps {
  billingPeriod: 'monthly' | 'yearly';
  setBillingPeriod: (period: 'monthly' | 'yearly') => void;
}

export default function PricingHeader({
  billingPeriod,
  setBillingPeriod,
}: PricingHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-white pb-12 pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 transform">
        <div className="h-[300px] w-[600px] rounded-[100%] bg-gradient-to-b from-green-50/50 to-transparent opacity-60 blur-3xl sm:h-[400px] sm:w-[800px] lg:h-[500px] lg:w-[1000px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-green-100 bg-green-50 px-3 py-1.5 shadow-sm sm:mb-8 sm:px-4">
            <span className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-[#04b851]" />
            <span className="text-xs font-semibold tracking-wide text-gray-700 sm:text-sm">
              Simple, transparent pricing
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
            Choose the perfect plan for your{' '}
            <span className="relative inline-block text-[#04b851]">
              Growth
              {/* Underline decoration */}
              <svg
                className="absolute -bottom-1 left-0 w-full text-green-200 sm:-bottom-2"
                height="8"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl px-4 text-base leading-relaxed text-gray-600 sm:mb-10 sm:px-0 sm:text-lg lg:mb-12 lg:text-xl">
            Start with a 14-day free trial. No credit card required. Cancel
            anytime.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center">
            <div className="relative flex items-center rounded-full bg-gray-100 px-0.5 py-0.5 ring-1 ring-gray-200 sm:px-1">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`relative z-10 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-sm ${
                  billingPeriod === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`relative z-10 flex items-center rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-sm ${
                  billingPeriod === 'yearly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Yearly
                <span className="ml-2 hidden rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-green-800 sm:inline-block">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
