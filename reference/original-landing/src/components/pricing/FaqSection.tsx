import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Tab } from '@headlessui/react';
import { FAQ } from '@/types/pricing';

export default function FaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'What is a "conversation" for billing purposes?',
      answer:
        'A conversation is a 24-hour session between you and a user. Multiple messages within this window count as one conversation for billing purposes. This means you can send as many messages as needed to a single user within a 24-hour period, and it will only count as one conversation charge.',
      category: 'billing',
    },
    {
      question: 'How does the monthly subscription work?',
      answer:
        'Our monthly subscription plans are billed at the beginning of each billing cycle. You can upgrade, downgrade, or cancel your subscription at any time. Changes to your subscription will be prorated for the remainder of the billing period.',
      category: 'billing',
    },
    {
      question: 'Can I switch plans later?',
      answer:
        'Yes, you can upgrade or downgrade your plan at any time. When upgrading, youll get immediate access to additional features, and your account will be charged the prorated difference for the remainder of the billing cycle. When downgrading, changes will take effect at the end of your current billing cycle.',
      category: 'plans',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards (Visa, Mastercard, American Express), UPI payments, and net banking options for all plans. For Business and Enterprise plans, we also support invoicing with net-30 payment terms.',
      category: 'billing',
    },
    {
      question: 'Is there a long-term commitment?',
      answer:
        'No, our Starter plan is pay-as-you-go with no long-term commitment. For Growth, Business, and Enterprise plans, we offer both monthly and annual billing options with discounts for annual commitments. You can cancel at any time.',
      category: 'plans',
    },
    {
      question: 'What is a WABA account?',
      answer:
        'WABA stands for WhatsApp Business API Account. It allows businesses to communicate with customers at scale through the WhatsApp platform with advanced features not available in the regular WhatsApp Business app. Each WABA account can be associated with a different phone number and business identity.',
      category: 'features',
    },
    {
      question: 'How many messages can I send with each plan?',
      answer:
        'Message limits vary by plan. The Free plan includes a limited number of messages per month. Starter, Growth, Business, and Enterprise plans are billed by conversation rather than by message count, allowing you to send as many messages as needed within each 24-hour conversation window.',
      category: 'features',
    },
    {
      question:
        'Do you offer discounts for nonprofits or educational institutions?',
      answer:
        'Yes, we offer special pricing for registered nonprofit organizations and educational institutions. Please contact our sales team with proper documentation to learn more about our discount programs.',
      category: 'billing',
    },
  ];

  // Helper component for FAQ item
  const FaqItem = ({ faq, index }: { faq: FAQ; index: number }) => (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
      <button
        onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
        className="flex w-full items-center justify-between px-4 py-3 text-left sm:px-6 sm:py-4"
      >
        <h3 className="pr-2 text-sm font-medium text-gray-900 sm:text-base">
          {faq.question}
        </h3>
        {openFaqIndex === index ? (
          <FiMinus className="h-4 w-4 flex-shrink-0 text-[#04b851] sm:h-5 sm:w-5" />
        ) : (
          <FiPlus className="h-4 w-4 flex-shrink-0 text-gray-400 sm:h-5 sm:w-5" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          openFaqIndex === index ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="rounded-lg border-t border-gray-100 bg-gray-50 px-4 py-3 sm:px-6 sm:py-4">
          <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:mb-3 sm:text-3xl">
            Frequently asked questions
          </h2>
          <p className="mb-8 text-sm text-gray-600 sm:mb-10 sm:text-base lg:mb-12">
            Got questions? We&lsquo;ve got answers.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Tab.Group>
            <Tab.List className="mb-6 flex flex-wrap items-center justify-center gap-2 rounded-xl bg-gray-100 p-1 sm:mb-8">
              {['All', 'Billing', 'Plans', 'Features'].map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    `min-w-[80px] flex-1 rounded-lg py-2 text-xs font-medium leading-5 focus:outline-none sm:py-2.5 sm:text-sm ${
                      selected
                        ? 'bg-white text-[#04b851] shadow'
                        : 'text-gray-600 hover:text-gray-800'
                    }`
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels>
              <Tab.Panel>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <FaqItem key={idx} faq={faq} index={idx} />
                  ))}
                </div>
              </Tab.Panel>

              <Tab.Panel>
                <div className="space-y-4">
                  {faqs
                    .filter((faq) => faq.category === 'billing')
                    .map((faq, idx) => (
                      <FaqItem key={idx} faq={faq} index={idx} />
                    ))}
                </div>
              </Tab.Panel>

              <Tab.Panel>
                <div className="space-y-4">
                  {faqs
                    .filter((faq) => faq.category === 'plans')
                    .map((faq, idx) => (
                      <FaqItem key={idx} faq={faq} index={idx} />
                    ))}
                </div>
              </Tab.Panel>

              <Tab.Panel>
                <div className="space-y-4">
                  {faqs
                    .filter((faq) => faq.category === 'features')
                    .map((faq, idx) => (
                      <FaqItem key={idx} faq={faq} index={idx} />
                    ))}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
}
