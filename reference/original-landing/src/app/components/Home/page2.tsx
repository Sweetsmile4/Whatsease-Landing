'use client';
import React, { useState, useRef } from 'react';
import { ContainerTextFlip } from '../ui/container-text-flip';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { FiCheck, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  FiInbox,
  FiLink,
  FiMessageSquare,
  FiPieChart,
  FiUsers,
} from 'react-icons/fi';
import { HiOutlineDocumentText, HiOutlineLightningBolt } from 'react-icons/hi';
import { MdOutlineContactPhone, MdOutlineSmartToy } from 'react-icons/md';

// Feature options structured array with professional icons
const featureOptions = [
  {
    name: 'Inbox',
    icon: <FiInbox className="text-2xl text-[#a8a8b3]" />,
    category: 'messaging',
    description: 'Manage all your customer conversations in one place',
  },
  {
    name: 'AI Chatbot',
    icon: <MdOutlineSmartToy className="text-2xl text-[#a8a8b3]" />,
    category: 'automation',
    description: 'Let AI handle common queries automatically',
  },
  {
    name: 'Quick Replies',
    icon: <HiOutlineLightningBolt className="text-2xl text-[#a8a8b3]" />,
    category: 'productivity',
    description: 'Save time with templated responses',
  },
  {
    name: 'Integrations',
    icon: <FiLink className="text-2xl text-[#a8a8b3]" />,
    category: 'connectivity',
    description: 'Connect with your favorite tools seamlessly',
  },
  {
    name: 'Web Chat',
    icon: <FiMessageSquare className="text-2xl text-[#a8a8b3]" />,
    category: 'channels',
    description: 'Add live chat to your website in minutes',
  },
  {
    name: 'Newsletters',
    icon: <HiOutlineDocumentText className="text-2xl text-[#a8a8b3]" />,
    category: 'marketing',
    description: 'Send beautiful newsletters to your customers',
  },
  {
    name: 'Analytics',
    icon: <FiPieChart className="text-2xl text-[#a8a8b3]" />,
    category: 'reporting',
    description: 'Track performance with detailed insights',
  },
  {
    name: 'Team Chat',
    icon: <FiUsers className="text-2xl text-[#a8a8b3]" />,
    category: 'collaboration',
    description: 'Collaborate with your team efficiently',
  },
  {
    name: 'CRM',
    icon: <MdOutlineContactPhone className="text-2xl text-[#a8a8b3]" />,
    category: 'management',
    description: 'Manage customer relationships effectively',
  },
];

const Landing = () => {
  // State to track which features are selected
  const [selectedFeatures, setSelectedFeatures] = useState<boolean[]>(
    Array(featureOptions.length).fill(false),
  );

  // Track currently displayed feature for mobile view
  const [activeFeature, setActiveFeature] = useState(0);

  // Reference for the carousel scroll container
  const carouselRef = useRef<HTMLDivElement>(null);

  // Toggle feature selection
  const toggleFeature = (index: number) => {
    const newSelectedFeatures = [...selectedFeatures];
    newSelectedFeatures[index] = !newSelectedFeatures[index];
    setSelectedFeatures(newSelectedFeatures);
    setActiveFeature(index); // Also set as active feature
  };

  // Scroll carousel left or right
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;

    const scrollAmount = 200;
    const currentScroll = carouselRef.current.scrollLeft;

    carouselRef.current.scrollTo({
      left:
        direction === 'left'
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative w-full overflow-x-hidden bg-white">
      {/* Modern header with navigation - Superchat style */}
      <header className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">WhatsEase</span>
          </div>

          <nav className="hidden space-x-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-gray-600 hover:text-primary"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-gray-600 hover:text-primary"
            >
              Pricing
            </a>
            <a
              href="#resources"
              className="text-sm font-medium text-gray-600 hover:text-primary"
            >
              Resources
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-gray-600 hover:text-primary"
            >
              About us
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="/login"
              className="hidden text-sm font-medium text-gray-600 hover:text-primary md:block"
            >
              Log in
            </a>
            <button className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white hover:bg-primary/90">
              Get started
            </button>
          </div>
        </div>
      </header>

      {/* Hero section - Superchat inspired */}
      <section className="pt-32 md:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">
            {/* Hero text */}
            <div className="flex flex-col items-start justify-center space-y-6">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1">
                <span className="text-xs font-semibold text-primary">
                  New: AI-powered responses
                </span>
              </div>

              <h1 className="text-left text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Smart AI for sales and support on <ContainerTextFlip />
              </h1>

              <p className="text-left text-lg text-gray-600">
                Engage customers instantly across all channels with AI-powered
                support. Streamline your workflows and boost customer
                satisfaction.
              </p>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <button className="flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90">
                  Start for free <GoArrowRight className="ml-2" />
                </button>
                <button className="flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50">
                  Book a demo
                </button>
              </div>

              <div className="flex flex-col space-y-2 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 rounded-full border-2 border-white bg-gray-200"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-900">500+</span>{' '}
                  businesses trust WhatsEase
                </p>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative rounded-2xl border border-gray-200 bg-white p-2 shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src="/inbox.png"
                  alt="WhatsApp dashboard"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Feature badge floating */}
              <div className="absolute -right-6 -top-6 rounded-xl border border-white bg-white p-3 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MdOutlineSmartToy className="text-xl text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500">
                      AI Assistant
                    </p>
                    <p className="font-medium text-gray-900">24/7 Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section - Superchat style */}
      <section id="features" className="mt-24 md:mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All the tools you need in one place
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Select the features that matter most to your business
            </p>
          </div>

          {/* Feature selection - Desktop */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-6 lg:grid-cols-3">
              {featureOptions.map((feature, idx) => (
                <div
                  key={idx}
                  className={`group cursor-pointer rounded-xl border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md ${
                    selectedFeatures[idx] ? 'border-primary' : 'border-gray-200'
                  }`}
                  onClick={() => toggleFeature(idx)}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {React.cloneElement(feature.icon, {
                      className: 'text-primary text-xl',
                    })}
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">
                      {feature.name}
                    </h3>
                    <div className="relative h-5 w-5">
                      <input
                        type="checkbox"
                        checked={selectedFeatures[idx]}
                        onChange={() => toggleFeature(idx)}
                        className="h-5 w-5 appearance-none rounded-md border border-gray-300 bg-white checked:border-primary checked:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                      {selectedFeatures[idx] && (
                        <FiCheck className="pointer-events-none absolute left-0 top-0 h-5 w-5 text-white" />
                      )}
                    </div>
                  </div>

                  <p className="mt-2 text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button className="flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90">
                Get started with these features{' '}
                <GoArrowRight className="ml-2" />
              </button>
            </div>
          </div>

          {/* Feature selection - Mobile */}
          <div className="md:hidden">
            {/* Mobile carousel */}
            <div className="relative mb-6">
              <button
                onClick={() => scrollCarousel('left')}
                className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-white shadow-md"
              >
                <FiChevronLeft className="text-gray-600" />
              </button>

              <div
                ref={carouselRef}
                className="scrollbar-hide flex gap-4 overflow-x-auto px-4 pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {featureOptions.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex min-w-[160px] flex-shrink-0 cursor-pointer flex-col items-center rounded-xl p-4 transition-all ${
                      activeFeature === idx ? 'bg-primary/10' : 'bg-gray-50'
                    }`}
                    onClick={() => toggleFeature(idx)}
                  >
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                      {React.cloneElement(feature.icon, {
                        className:
                          activeFeature === idx
                            ? 'text-primary text-xl'
                            : 'text-gray-500 text-xl',
                      })}
                    </div>
                    <h3
                      className={`text-center text-sm font-medium ${
                        activeFeature === idx ? 'text-primary' : 'text-gray-900'
                      }`}
                    >
                      {feature.name}
                    </h3>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollCarousel('right')}
                className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 transform items-center justify-center rounded-full bg-white shadow-md"
              >
                <FiChevronRight className="text-gray-600" />
              </button>
            </div>

            {/* Active feature details */}
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                {featureOptions[activeFeature].name}
              </h3>
              <p className="mb-4 text-gray-600">
                {featureOptions[activeFeature].description}
              </p>
              <button className="w-full rounded-full bg-primary py-3 text-sm font-medium text-white">
                Get started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof section */}
      <section className="mt-24 bg-gray-50 py-16 md:mt-32">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Trusted by businesses worldwide
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale">
            {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4', 'Brand 5'].map(
              (brand, i) => (
                <div key={i} className="flex h-8 items-center justify-center">
                  <span className="text-xl font-bold text-gray-400">
                    {brand}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="mt-24 md:mt-32">
        <div className="mx-auto max-w-5xl rounded-2xl bg-primary/[0.03] px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to transform your customer support?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Join thousands of businesses already using WhatsEase to deliver
            exceptional customer experiences.
          </p>
          <div className="mt-8 flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button className="rounded-full bg-primary px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-primary/90">
              Get started for free
            </button>
            <button className="rounded-full border border-gray-300 bg-white px-8 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              Contact sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 border-t border-gray-200 bg-white pt-16 md:mt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 mb-8 lg:col-span-1">
              <span className="text-xl font-bold text-primary">WhatsEase</span>
              <p className="mt-4 text-sm text-gray-600">
                The smart way to engage with your customers across all messaging
                channels.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Product</h3>
              <ul className="mt-4 space-y-3">
                {['Features', 'Integrations', 'Pricing', 'Updates'].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-primary"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul className="mt-4 space-y-3">
                {['About', 'Careers', 'Blog', 'Legal'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
              <ul className="mt-4 space-y-3">
                {['Help Center', 'Contact', 'Partners', 'Status'].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm text-gray-600 hover:text-primary"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-200 py-8">
            <p className="text-sm text-gray-600">
              © 2025 WhatsEase. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
