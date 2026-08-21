'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageTemplate from '@/app/components/PageTemplate';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

type Feature = {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
};

export default function FeaturesPage() {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://whatsease.in/continue');
        const data = await response.json();
        // Assuming the API returns features data
        setFeatures(data.features || []);
      } catch (error) {
        console.error('Error fetching features:', error);
        // Fallback data if API fails
        setFeatures([
          {
            id: 1,
            title: 'AI Chatbots',
            description:
              'Intelligent conversation automation for 24/7 customer support',
            icon: 'chat',
            link: '/features/chatbots',
          },
          {
            id: 2,
            title: 'Analytics Dashboard',
            description:
              'Real-time insights into conversation performance and customer satisfaction',
            icon: 'analytics',
            link: '/features/analytics',
          },
          {
            id: 3,
            title: 'Integration Platform',
            description: 'Connect with your favorite tools and CRM systems',
            icon: 'integration',
            link: '/features/integration',
          },
          {
            id: 4,
            title: 'Multi-channel Messaging',
            description: 'Reach customers on WhatsApp, SMS, Web Chat, and more',
            icon: 'multichannel',
            link: '/features/multichannel',
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <PageTemplate
      title="Powerful Features for Modern Businesses"
      subtitle="Features"
      description="Discover the comprehensive set of tools and capabilities that make WhatsEase the leading business messaging platform."
      imagePath="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
      ctaText="Start your free trial"
      ctaLink="/signup"
    >
      <div className="space-y-20">
        {/* Main features grid */}
        <section>
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What makes WhatsEase different
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
            {!isLoading &&
              features.map((feature, index) => (
                <Link
                  href={feature.link}
                  key={feature.id || index}
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#04b851]/10 text-[#04b851] transition-colors group-hover:bg-[#04b851] group-hover:text-white">
                    {feature.icon === 'chat' && (
                      <svg
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    )}
                    {feature.icon === 'analytics' && (
                      <svg
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    )}
                    {feature.icon === 'integration' && (
                      <svg
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                        />
                      </svg>
                    )}
                    {feature.icon === 'multichannel' && (
                      <svg
                        className="h-7 w-7"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-gray-900 transition-colors group-hover:text-[#04b851]">
                    {feature.title}
                  </h3>
                  <p className="mb-6 text-gray-600">{feature.description}</p>

                  <div className="mt-auto flex items-center text-sm font-medium text-[#04b851]">
                    <span>Learn more</span>
                    <ArrowRightIcon className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                  </div>

                  {/* Background decoration */}
                  <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#04b851]/5 opacity-0 transition-opacity group-hover:opacity-100"></div>
                </Link>
              ))}

            {isLoading &&
              Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="h-64 animate-pulse rounded-xl bg-gray-100"
                ></div>
              ))}
          </div>
        </section>

        {/* Benefits section */}
        <section className="rounded-xl bg-gray-50 p-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transform your customer communication
            </h2>
            <p className="mb-12 text-xl text-gray-600">
              WhatsEase helps businesses of all sizes deliver exceptional
              customer experiences through messaging.
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  stat: '85%',
                  label: 'Reduction in response time',
                },
                {
                  stat: '40%',
                  label: 'Increase in customer satisfaction',
                },
                {
                  stat: '3.5x',
                  label: 'ROI for businesses using WhatsEase',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-8"
                >
                  <div className="text-3xl font-bold text-[#04b851]">
                    {item.stat}
                  </div>
                  <div className="mt-2 text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
