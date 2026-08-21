'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

type ChatbotFeature = {
  title: string;
  description: string;
};

type ApiResponse = {
  chatbotFeatures?: ChatbotFeature[];
  // add other properties from your API response if needed
};

export default function ChatbotsPage() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://whatsease.in/continue');
        const result = await response.json();
        // Use the data if available
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Benefits and features for chatbots - either from API or fallback
  const features = data?.chatbotFeatures || [
    {
      title: 'Natural Language Understanding',
      description: 'Our AI understands customer intent, not just keywords.',
    },
    {
      title: '24/7 Availability',
      description: 'Provide instant responses at any time of day or night.',
    },
    {
      title: 'Multilingual Support',
      description: 'Communicate with customers in over 50 languages.',
    },
    {
      title: 'Seamless Human Handoff',
      description: 'Transfer to human agents when complex issues arise.',
    },
    {
      title: 'Personalized Conversations',
      description:
        'Tailor interactions based on customer history and preferences.',
    },
    {
      title: 'Easy Integration',
      description: 'Connect with your CRM, e-commerce platform, and more.',
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
                  Features
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  AI-Powered Chatbots
                </h1>
                <p className="max-w-lg text-lg text-gray-600">
                  Transform customer engagement with intelligent chatbots that
                  understand, learn, and solve problems in real-time.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#04b851] px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:scale-[1.03] active:scale-[0.98]"
                  >
                    Start building your chatbot
                    <ArrowRightIcon className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
                  >
                    Contact sales
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1596742578443-7682ef7b7057?q=80&w=2069&auto=format&fit=crop"
                  alt="AI Chatbots"
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
          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why choose WhatsEase AI Chatbots?
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <CheckCircleIcon className="mb-4 h-8 w-8 text-[#04b851]" />
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works Section */}
          <section className="mb-20">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  How Our AI Chatbots Work
                </h2>
                <p className="text-lg text-gray-600">
                  Our AI chatbots use advanced natural language processing to
                  understand customer queries and provide accurate, helpful
                  responses.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#04b851] text-white">
                      1
                    </span>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Understanding
                      </h3>
                      <p className="text-gray-600">
                        The AI analyzes the customer&#39;s message to understand
                        intent.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#04b851] text-white">
                      2
                    </span>
                    <div>
                      <h3 className="font-medium text-gray-900">Processing</h3>
                      <p className="text-gray-600">
                        It accesses your knowledge base to find the right
                        information.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#04b851] text-white">
                      3
                    </span>
                    <div>
                      <h3 className="font-medium text-gray-900">Responding</h3>
                      <p className="text-gray-600">
                        The chatbot delivers a personalized, helpful response.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#04b851] text-white">
                      4
                    </span>
                    <div>
                      <h3 className="font-medium text-gray-900">Learning</h3>
                      <p className="text-gray-600">
                        With each interaction, the AI becomes smarter and more
                        effective.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1974&auto=format&fit=crop"
                  alt="AI Chatbot Workflow"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="rounded-xl bg-gray-50 p-8">
            <div className="mx-auto max-w-3xl text-center">
              <svg
                className="mx-auto mb-6 h-12 w-12 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-6 text-xl text-gray-600">
                &quot;Since implementing WhatsEase AI chatbots, our response
                time has decreased by 80% and customer satisfaction has
                increased by 35%. The ROI has been incredible.&quot;
              </p>
              <div>
                <p className="font-medium text-gray-900">Sarah Johnson</p>
                <p className="text-gray-600">
                  Customer Service Director, E-commerce Inc.
                </p>
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
                    Ready to transform your business?
                  </h2>
                  <p className="max-w-lg text-lg text-gray-300">
                    Join thousands of businesses using WhatsEase to streamline
                    customer communications.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/signup"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#04b851] px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:scale-[1.03] active:scale-[0.98]"
                    >
                      Get started for free
                      <ArrowRightIcon className="h-5 w-5" />
                    </Link>
                    <Link
                      href="/demo"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 bg-transparent px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-white/5"
                    >
                      Request a demo
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
