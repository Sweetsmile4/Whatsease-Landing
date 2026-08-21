'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Footer from './Footer';
import Navbar from './Navbar';

interface PageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  imagePath: string;
  ctaText?: string;
  ctaLink?: string;
  children?: React.ReactNode;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  description,
  imagePath,
  ctaText = 'Get started',
  ctaLink = '/signup',
  children,
}) => {
  return (
    <>
      <Navbar />
      <main className="flex w-full flex-col items-center justify-center pt-[75px]">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-b from-white to-gray-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <span className="inline-block rounded-full bg-[#04b851]/10 px-4 py-1.5 text-sm font-medium text-[#04b851]">
                  {subtitle}
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  {title}
                </h1>
                <p className="max-w-lg text-lg text-gray-600">{description}</p>
                <div className="flex items-center gap-4">
                  <Link
                    href={ctaLink}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/[0.1] bg-[#04b851] px-6 py-3 text-base font-medium text-white shadow-inner-and-outer shadow-white/[0.4] transition-all hover:scale-[1.03] active:scale-[0.98]"
                  >
                    {ctaText}
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
                  src={imagePath}
                  alt={title}
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
          {children}
        </div>

        {/* CTA Section */}
        {/* <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
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
        </section> */}
      </main>
    </>
  );
};

export default PageTemplate;
