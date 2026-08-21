import { Plan } from '@/types/pricing';
import PlanCard from './PlanCard';

interface PricingCardsProps {
  plans: Plan[];
  billingPeriod: 'monthly' | 'quarterly' | 'yearly';
  onOpenAddons: () => void;
  onSubscribe?: (plan: Plan) => void;
  processingPlanId?: string | null;
}

export default function PricingCards({
  plans,
  billingPeriod,
  onOpenAddons,
  onSubscribe,
  processingPlanId,
}: PricingCardsProps) {
  // Helper function to determine if a plan should be highlighted
  const getHighlightedPlan = (planType: string) => {
    return planType === 'growth';
  };

  return (
    <div className="container mx-auto px-4 pb-12 sm:pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
          {plans
            .filter((plan) => plan.type !== 'micro')
            .map((plan, index) => (
              <div
                key={plan.id || index}
                className="w-full min-w-[280px] max-w-[440px] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              >
                <PlanCard
                  plan={plan}
                  billingPeriod={billingPeriod}
                  isHighlighted={getHighlightedPlan(plan.type)}
                  onOpenAddons={onOpenAddons}
                  onSubscribe={onSubscribe}
                  isProcessing={processingPlanId === plan.id}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
