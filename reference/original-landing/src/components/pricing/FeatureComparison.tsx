import { useMemo } from 'react';
import { FiCheck, FiX, FiHelpCircle } from 'react-icons/fi';
import { Plan } from '@/types/pricing';

interface FeatureComparisonProps {
  plans: Plan[];
}

export default function FeatureComparison({ plans }: FeatureComparisonProps) {
  // Define the desired order
  const comparisonPlans = useMemo(() => {
    const order = ['starter', 'growth', 'business'];
    return plans
      .filter((p) => order.includes(p.type))
      .sort((a, b) => order.indexOf(a.type) - order.indexOf(b.type));
  }, [plans]);

  // Helper to extract nested values safely
  const getValue = (plan: any, path: string, fallback: any = '-') => {
    return path.split('.').reduce((obj, key) => obj?.[key], plan) ?? fallback;
  };

  const categories = [
    {
      id: 'messaging',
      name: 'Messaging & Campaigns',
      features: [
        {
          label: 'Monthly Campaigns',
          path: 'feature_limits.whatsapp.max_campaigns',
          format: (val: any) => (val === 0 ? 'Unlimited' : val),
        },
        {
          label: 'Universal Inbox Access',
          path: 'feature_limits.whatsapp.universal_inbox',
          type: 'boolean',
        },
        {
          label: 'Broadcast Campaigns',
          path: 'feature_limits.whatsapp.max_campaigns', // Proxy for basic campaign capability
          computed: (plan: any) =>
            (plan.feature_limits?.whatsapp?.max_campaigns ?? 0) > 0,
          type: 'boolean',
        },
        {
          label: 'Auto Retry Campaigns',
          path: 'feature_limits.whatsapp.auto_retry',
          type: 'boolean',
          description: 'Automatically retry failed messages in campaigns',
        },
        {
          label: 'Human Involvement Detection',
          path: 'feature_limits.whatsapp.human_escalation',
          type: 'boolean',
          description: 'Detects when a human should take over the conversation',
        },
      ],
    },
    {
      id: 'ai_automation',
      name: 'AI & Automation',
      features: [
        {
          label: 'AI Replies / Mo',
          path: 'limits.ai_replies',
          format: (val: any) => (val ? val.toLocaleString() : '-'),
        },
        {
          label: 'Max Automations',
          path: 'limits.max_automations',
        },
        {
          label: 'AI Agents',
          path: 'limits.max_ai_agents',
        },
        {
          label: 'Instagram AI',
          path: 'limits.instagram_ai',
          type: 'boolean',
        },
        {
          label: 'WhatsApp Flows',
          path: 'feature_limits.whatsapp.flows',
          type: 'boolean',
        },
        {
          label: 'AI Template Generator',
          path: 'limits.ai_template_generator',
          type: 'boolean',
          description: 'Generate marketing templates using AI',
        },
        {
          label: 'Payment Integration',
          path: 'limits.payment_integration',
          type: 'boolean',
          description: 'Collect payments within automation flows',
        },
      ],
    },
    {
      id: 'analytics',
      name: 'Analytics & Reporting',
      features: [
        {
          label: 'Advanced Analytics',
          path: 'limits.advanced_analytics',
          type: 'boolean',
          description: 'Deep insights into campaign performance',
        },
        {
          label: 'Smart CSV Export',
          path: 'limits.smart_export',
          type: 'boolean',
          description: 'Summarized and intelligent data exports',
        },
      ],
    },
    {
      id: 'team',
      name: 'Team & Support',
      features: [
        {
          label: 'Team Members',
          path: 'feature_limits.team.max_team_members',
        },
        {
          label: 'Teams / Departments',
          path: 'feature_limits.team.max_teams',
        },
        {
          label: 'Priority Support',
          path: 'limits.priority_processing', // Placeholder if not in limits yet
          type: 'boolean',
        },
      ],
    },
    {
      id: 'channels',
      name: 'Channels',
      features: [
        {
          label: 'WhatsApp Accounts',
          path: 'feature_limits.whatsapp.max_accounts',
        },
        {
          label: 'Instagram Accounts',
          path: 'feature_limits.instagram.max_accounts',
        },
        {
          label: 'Facebook Pages',
          path: 'feature_limits.facebook.max_accounts',
        },
        {
          label: 'Email Accounts',
          path: 'feature_limits.email.max_accounts',
        },
      ],
    },
  ];

  const renderCell = (plan: any, feature: any) => {
    let value;

    if (feature.computed) {
      value = feature.computed(plan);
    } else {
      value = getValue(plan, feature.path);
    }

    if (feature.type === 'boolean') {
      return value === true ? (
        <FiCheck className="mx-auto h-4 w-4 text-[#04b851] sm:h-5 sm:w-5" />
      ) : (
        <FiX className="mx-auto h-4 w-4 text-gray-300 sm:h-5 sm:w-5" />
      );
    }

    if (feature.format) {
      return (
        <span className="font-medium text-gray-900">
          {feature.format(value)}
        </span>
      );
    }

    return <span className="font-medium text-gray-700">{value}</span>;
  };

  return (
    <section id="comparison" className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:mb-3 sm:text-3xl">
            Compare plan features
          </h2>
          <p className="mb-6 text-sm text-gray-600 sm:mb-8 sm:text-base lg:mb-10">
            Detailed comparison of limits & features across plans
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg sm:rounded-xl">
            <div className="relative max-h-[80vh] overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="sticky top-0 z-10 bg-gray-50 shadow-sm">
                  <tr>
                    <th className="w-1/4 px-3 py-3 text-left text-[10px] font-bold uppercase tracking-wider text-gray-500 sm:px-4 sm:py-4 sm:text-xs lg:px-6 lg:text-sm">
                      Feature
                    </th>
                    {comparisonPlans.map((plan) => (
                      <th
                        key={plan.id}
                        className={`w-1/5 px-2 py-3 text-center text-[10px] font-bold uppercase tracking-wider sm:px-4 sm:py-4 sm:text-xs lg:px-6 lg:text-sm ${
                          plan.type === 'growth'
                            ? 'text-[#04b851]'
                            : 'text-gray-900'
                        }`}
                      >
                        <span className="hidden sm:inline">{plan.name}</span>
                        <span className="sm:hidden">
                          {plan.name.substring(0, 4)}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {categories.map((category) => (
                    <>
                      {/* Section Header */}
                      <tr key={category.id} className="bg-gray-100/50">
                        <td
                          colSpan={comparisonPlans.length + 1}
                          className="px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-gray-900 sm:px-4 sm:py-3 sm:text-xs lg:px-6 lg:text-sm"
                        >
                          {category.name}
                        </td>
                      </tr>
                      {/* Features */}
                      {category.features.map((feature, idx) => (
                        <tr
                          key={`${category.id}-${idx}`}
                          className="transition-colors"
                        >
                          <td className="px-3 py-3 text-[10px] font-medium text-gray-700 sm:px-4 sm:py-4 sm:text-xs lg:px-6 lg:text-sm">
                            <div className="flex items-center gap-1 sm:gap-2">
                              <span className="line-clamp-2 sm:line-clamp-none">
                                {feature.label}
                              </span>
                              {feature.description && (
                                <div className="group relative hidden sm:block">
                                  <FiHelpCircle className="h-3 w-3 cursor-help text-gray-400 sm:h-4 sm:w-4" />
                                  <div className="pointer-events-none absolute left-full top-1/2 z-20 ml-2 w-48 -translate-y-1/2 rounded bg-gray-800 p-2 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                                    {feature.description}
                                  </div>
                                </div>
                              )}
                            </div>
                          </td>
                          {comparisonPlans.map((plan) => (
                            <td
                              key={`${plan.id}-${feature.path}`}
                              className="px-2 py-3 text-center text-[10px] sm:px-4 sm:py-4 sm:text-xs lg:px-6 lg:text-sm"
                            >
                              {renderCell(plan, feature)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
