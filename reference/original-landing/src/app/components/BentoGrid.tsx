'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { VscSparkleFilled } from 'react-icons/vsc';

// Feature data array
const features = [
  {
    id: 1,
    title: 'Support that delivers',
    description: 'Personal, reliable support—whenever you need it.',
    imageSrc: '/feature-support-desktop.webp',
    imageAlt: 'Support',
  },
  {
    id: 2,
    title: 'Everyone uses it, everyone loves it.',
    description:
      'Maximum data protection and security with development and hosting in India.',
    imageSrc:
      'https://www.superchat.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsmallfeature5.e2a7aaf6.png&w=1920&q=75',
    imageAlt: 'Everyone uses it, everyone loves it',
  },
  {
    id: 3,
    title: 'Easy setup process',
    description:
      'Easy setup, no technical barriers—get started quickly and achieve success effortlessly.',
    imageSrc: '/feature-setup-desktop-en.webp',
    imageAlt: 'Setup',
  },
  {
    id: 4,
    title: 'Pre-built templates tailored to your industry',
    description:
      'Use industry-specific templates to get started instantly and save time.',
    imageSrc: '/feature-templates-desktop-en.webp',
    imageAlt: 'Templates',
  },
];

const BentoGrid = () => {
  const [visibleMessages, setVisibleMessages] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset animation
            setVisibleMessages(0);

            // Start animation sequence when div comes into view
            const timer1 = setTimeout(() => setVisibleMessages(1), 300);
            const timer2 = setTimeout(() => setVisibleMessages(2), 1200);
            const timer3 = setTimeout(() => setVisibleMessages(3), 2200);

            // Cleanup function
            return () => {
              clearTimeout(timer1);
              clearTimeout(timer2);
              clearTimeout(timer3);
            };
          }
        });
      },
      { threshold: 0.3 },
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-4 px-10 py-6 sm:gap-5 sm:px-6 md:gap-6 md:px-8 md:py-8 lg:gap-7 lg:px-10 lg:py-10">
      {/* Header section */}
      <h1 className="text-center text-xl font-semibold text-black sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        A powerful product with an even{' '}
        <span className="sm:hidden">stronger all-in-one solution</span>
        <span className="hidden sm:inline">stronger all-in-one solution</span>
      </h1>

      <p className="text-center text-sm text-gray-600 dark:text-gray-400 sm:text-base md:text-lg lg:text-xl">
        Enjoy top-notch support, smart AI features, effortless setup, and
        tailored templates — all 100%{' '}
        <span className="sm:hidden">Everyone uses it, everyone loves it.</span>
        <span className="hidden sm:inline">
          Everyone uses it, everyone loves it.
        </span>
      </p>

      <Link
        href="/signup"
        className="whitespace-nowrap rounded-xl border border-[#04b851]/[0.5] bg-[#04b851] px-3 py-1.5 text-xs font-semibold text-white shadow-inner shadow-white/[0.3] transition-all duration-300 hover:scale-95 sm:px-4 sm:py-2 sm:text-sm"
      >
        Try for free
      </Link>

      {/* AI features section */}
      <div className="flex w-full flex-col items-start justify-center rounded-lg border border-gray-700/[0.1] bg-[#f7f8fa] px-4 pt-6 text-start sm:px-5 sm:pt-8">
        <p className="text-base font-medium text-black sm:text-lg md:text-xl">
          AI features to boost efficiency
        </p>
        <p className="mt-2 text-xs text-gray-500 sm:text-sm">
          Automate process and elevate communication with integrated AI
          technology{' '}
        </p>

        <div className="relative flex h-full w-full items-center justify-center">
          <div className="mt-16 flex h-full min-h-[250px] w-full rounded-t-xl border-l border-r border-t border-white bg-[#f7f8fa] shadow-[0_-4px_12px_0_rgba(0,0,0,0.05),2px_0_6px_0_rgba(0,0,0,0.03),-2px_0_6px_0_rgba(0,0,0,0.03)] sm:mt-20 sm:min-h-[280px] md:min-h-[320px] md:w-[60%] lg:w-[50%] xl:w-[40%]">
            <div
              ref={divRef}
              className="flex h-full w-full flex-col items-start justify-center gap-3 px-3 py-6 sm:gap-4 sm:px-4 sm:py-8 md:px-5"
            >
              {/* User message on right */}
              <div
                className={`flex w-full justify-end transition-all duration-500 ease-out ${
                  visibleMessages >= 1
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                }`}
              >
                <div className="max-w-[80%] rounded-2xl rounded-br-md border border-white bg-gradient-to-b from-primary/[0.6] to-primary px-3 py-2 text-white shadow-sm sm:max-w-[70%] sm:px-4 sm:py-3">
                  <p className="text-xs sm:text-sm">
                    Hello. I wanted to ask about the status of my order.
                  </p>
                </div>
              </div>

              {/* Bot reply on left */}
              <div
                className={`flex w-full items-start gap-2 transition-all duration-500 ease-out sm:gap-3 ${
                  visibleMessages >= 2
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-8 opacity-0'
                }`}
              >
                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:h-8 sm:w-8">
                  <span className="text-base sm:text-lg">🤖</span>
                </div>
                <div className="max-w-[80%] rounded-2xl rounded-bl-md border border-gray-100 bg-white px-3 py-2 shadow-sm sm:max-w-[70%] sm:px-4 sm:py-3">
                  <p className="text-xs text-gray-900 sm:text-sm">
                    Hi Tom. One moment, I&#39;ll take a look.🔎
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 flex w-[90%] -translate-x-1/2 gap-2 rounded-3xl border border-gray-200 bg-white px-3 py-2 shadow-2xl shadow-primary/[0.1] sm:bottom-6 sm:w-[80%] sm:gap-3 sm:px-4 sm:py-3 md:bottom-8 md:max-w-[55%] md:px-5 md:py-4 lg:max-w-[50%] lg:py-6 xl:max-w-[45%]">
            {/* Animated sparkle icon with pulse effect */}
            <div className="relative">
              <VscSparkleFilled className="h-4 w-4 animate-pulse text-[#04b851] sm:h-5 sm:w-5" />
              {/* Glowing effect */}
              <div className="absolute inset-0 h-4 w-4 animate-ping rounded-full bg-[#04b851]/20 blur-sm sm:h-5 sm:w-5"></div>
            </div>

            {/* Text with typing animation dots */}
            <div className="flex items-center justify-center gap-1">
              <span className="text-base font-medium text-primary sm:text-lg md:text-xl">
                AI is writing
              </span>
              <div className="mt-2 flex gap-1 sm:mt-3">
                <div className="h-1 w-1 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]"></div>
                <div className="h-1 w-1 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]"></div>
                <div className="h-1 w-1 animate-bounce rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features grid */}
      <div className="grid w-full grid-cols-1 place-content-center items-center gap-4 text-start sm:grid-cols-2 sm:gap-5 md:gap-6">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative flex h-full w-full flex-col items-start justify-center rounded-lg border border-gray-700/[0.1] bg-[#f7f8fa] px-4 sm:px-5"
          >
            <div className="absolute top-4 flex w-full flex-col items-start justify-center px-4 sm:top-8 sm:px-5">
              <h1 className="text-base font-medium text-black sm:text-lg md:text-xl">
                {feature.title}
              </h1>
              <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                {feature.description}
              </p>
            </div>
            <div className="relative flex w-full items-center justify-center">
              <Image
                src={feature.imageSrc}
                alt={feature.imageAlt}
                width={400}
                height={400}
                className="w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
