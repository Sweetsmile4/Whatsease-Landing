import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageTemplate from '@/app/components/PageTemplate';
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  ArrowPathIcon,
  PuzzlePieceIcon,
  InboxArrowDownIcon,
  ChatBubbleBottomCenterTextIcon,
  StarIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { Inbox } from 'lucide-react';

export const metadata = {
  title: 'Product Suite | WhatsEase',
  description: 'WhatsEase product features and capabilities',
};

const products = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'WhatsApp Business',
    description: 'Made for business',
    link: '/product/whatsapp-business',
  },
  {
    icon: EnvelopeIcon,
    title: 'WhatsApp Newsletter',
    description: 'For more turnover & success',
    link: '/product/whatsapp-newsletter',
  },
  {
    icon: ArrowPathIcon,
    title: 'Automations',
    description: 'Chatbots & Workflows',
    link: '/product/automations',
  },
  {
    icon: PuzzlePieceIcon,
    title: 'Integrations',
    description: 'Thousands of integrations',
    link: '/product/integrations',
  },
  {
    icon: Inbox,
    title: 'Universal Inbox',
    description: 'All channels at a glance',
    link: '/product/universal-inbox',
  },
  {
    icon: ChatBubbleBottomCenterTextIcon,
    title: 'Live Chat',
    description: 'The chat for your website',
    link: '/product/live-chat',
  },
  {
    icon: StarIcon,
    title: 'Reviews',
    description: 'Simply more ratings',
    link: '/product/reviews',
  },
  {
    icon: SparklesIcon,
    title: 'AI Chatbot',
    description: 'The ultimate Chatbot',
    link: '/product/ai-chatbot',
  },
];

const ProductPage = () => {
  return (
    <PageTemplate
      title="WhatsEase Product Suite"
      subtitle="Product"
      description="Our comprehensive messaging platform combines WhatsApp Business API, AI automation, and powerful analytics to help businesses engage customers effectively."
      imagePath="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
      ctaText="Try for free"
      ctaLink="/signup"
    >
      {/* Product Grid */}
      <section className="py-12">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          All-in-one messaging platform
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Link
              href={product.link}
              key={index}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-[#04b851]/30 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#04b851]/10 text-[#04b851] group-hover:bg-[#04b851]/20">
                <product.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {product.title}
              </h3>
              <p className="mb-4 flex-grow text-gray-600">
                {product.description}
              </p>
              <span className="mt-auto inline-flex items-center text-[#04b851] group-hover:underline">
                Learn more <span className="ml-1">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* WhatsApp Business API Section */}
      <section className="my-20 rounded-xl bg-gray-50 p-8 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 lg:order-1">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
              Official WhatsApp Business API Partner
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              As an authorized WhatsApp Business Solution Provider, we offer
              enterprise-grade WhatsApp API integration with robust features and
              compliance.
            </p>
            <ul className="mb-8 space-y-4">
              {[
                'Verified business profile with green checkmark',
                'Unlimited agent seats for customer conversations',
                'Advanced automation and template messaging',
                'Rich media support (images, videos, documents)',
                'Complete compliance with WhatsApp policies',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#04b851] text-xs text-white">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/product/whatsapp-business"
              className="inline-flex items-center rounded-xl bg-[#04b851] px-5 py-2.5 text-white shadow-sm hover:bg-[#04b851]/90"
            >
              Explore WhatsApp API features
            </Link>
          </div>
          <div className="relative order-1 h-[300px] lg:order-2 lg:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
              alt="WhatsApp Business API"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="my-20">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">
          Why businesses choose WhatsEase
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              stat: '60%',
              title: 'Reduction in support costs',
              description:
                'Automation handles routine inquiries, letting your team focus on complex issues',
            },
            {
              stat: '85%',
              title: 'Message open rate',
              description:
                'WhatsApp messages get significantly higher engagement than email or SMS',
            },
            {
              stat: '24/7',
              title: 'Customer availability',
              description:
                'AI chatbots provide instant responses at any time, in multiple languages',
            },
            {
              stat: '40%',
              title: 'Increase in conversions',
              description:
                'Personalized messaging and timely follow-ups boost sales conversion rates',
            },
            {
              stat: '3x',
              title: 'Faster resolution times',
              description:
                'Streamlined workflows and automation speed up customer issue resolution',
            },
            {
              stat: '90%',
              title: 'Customer satisfaction',
              description:
                'Our clients report significantly improved customer satisfaction scores',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
            >
              <div className="mb-4 text-4xl font-bold text-[#04b851]">
                {item.stat}
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageTemplate>
  );
};

export default ProductPage;
