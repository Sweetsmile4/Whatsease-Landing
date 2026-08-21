'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/24/solid';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

type SalesFeature = {
  title: string;
  description: string;
};

type SalesData = {
  salesFeatures?: SalesFeature[];
  // Add other properties if needed
};

export default function SalesSolutionPage() {
  const [data, setData] = useState<SalesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://whatsease.in/continue');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const features = data?.salesFeatures || [
    {
      title: 'Automated Lead Qualification',
      description:
        'Filter and score leads automatically based on custom criteria.',
    },
    {
      title: 'Personalized Follow-ups',
      description:
        'Send timely, personalized messages at scale based on user behavior.',
    },
    {
      title: 'Interactive Product Demos',
      description:
        'Share rich media and interactive content directly in WhatsApp chats.',
    },
    {
      title: 'Sales Pipeline Integration',
      description: 'Sync with your CRM to keep your sales pipeline up to date.',
    },
    {
      title: 'Conversion Analytics',
      description:
        'Track conversions and optimize your sales funnel with detailed insights.',
    },
    {
      title: 'Team Collaboration',
      description:
        'Seamlessly hand off qualified leads to the right sales team members.',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-[75px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-gray-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <span className="inline-block rounded-full bg-[#04b851]/10 px-4 py-1.5 text-sm font-medium text-[#04b851]">
                  Solutions
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Sales Automation
                </h1>
                <p className="max-w-lg text-lg text-gray-600">
                  Boost your sales productivity and close more deals with
                  intelligent automation that nurtures leads through every stage
                  of the customer journey.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#04b851] px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:scale-[1.03] active:scale-[0.98]"
                  >
                    Start automating sales
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                  >
                    Request a demo
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2069&auto=format&fit=crop"
                  alt="Sales Automation"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Features Section */}
          <section className="mb-20">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Supercharge your sales process
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#04b851]/10 text-[#04b851]">
                    <CheckIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results Section */}
          <section className="mb-20 rounded-xl bg-gray-50 p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
                Proven results for sales teams
              </h2>
              <p className="mb-12 text-xl text-gray-600">
                See the impact WhatsEase has on businesses like yours.
              </p>

              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { stat: '40%', label: 'Increase in conversion rates' },
                  { stat: '3.5x', label: 'Faster lead response time' },
                  { stat: '65%', label: 'Reduction in cost per acquisition' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-white p-6 shadow-sm"
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

          {/* Case Study Section */}
          <section className="mb-20">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <span className="inline-block rounded-full bg-[#04b851]/10 px-3 py-1 text-xs font-medium text-[#04b851]">
                  Case Study
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
                  How TechFirm increased sales by 45%
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  TechFirm was struggling with lead response times and
                  conversion rates. By implementing WhatsEase&#39;s sales
                  automation:
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-[#04b851]" />
                    <span className="text-gray-600">
                      They reduced lead response time from 12 hours to just 2
                      minutes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-[#04b851]" />
                    <span className="text-gray-600">
                      Qualification conversations were automated, saving 25
                      hours per week
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-[#04b851]" />
                    <span className="text-gray-600">
                      Sales team focused on closing deals rather than
                      prospecting
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-[#04b851]" />
                    <span className="text-gray-600">
                      Overall sales increased by 45% within the first quarter
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    href="/case-studies/techfirm"
                    className="text-[#04b851] hover:underline"
                  >
                    Read the full case study →
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="TechFirm Case Study"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-xl bg-[#020210] p-8 sm:p-12">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Ready to transform your sales process?
                  </h2>
                  <p className="max-w-lg text-lg text-gray-300">
                    Join thousands of sales teams using WhatsEase to close more
                    deals with less effort.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/signup"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#04b851] px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:scale-[1.03] active:scale-[0.98]"
                    >
                      Start your free trial
                      <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                    <Link
                      href="/demo"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 bg-transparent px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-white/5"
                    >
                      Schedule a demo
                    </Link>
                  </div>
                </div>
                <div className="relative ml-auto hidden h-[300px] w-[400px] lg:block">
                  <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#04b851]/20 blur-[80px]"></div>
                  <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/20 blur-[80px]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
