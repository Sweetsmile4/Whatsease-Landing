'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageTemplate from '@/app/components/PageTemplate';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export type FeatureType = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export type TestimonialType = {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
};

export type UseCaseType = {
  title: string;
  description: string;
  image: string;
};

export type FAQType = {
  question: string;
  answer: string;
};

interface IndustryTemplateProps {
  industry: {
    name: string;
    tagline: string;
    description: string;
    heroImage: string;
    statsTitle: string;
    stats: {
      value: string;
      label: string;
    }[];
    features: FeatureType[];
    testimonial: TestimonialType;
    useCases: UseCaseType[];
    faqs: FAQType[];
    ctaTitle: string;
    ctaDescription: string;
  };
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function IndustryTemplate({ industry }: IndustryTemplateProps) {
  return (
    <PageTemplate
      title={`${industry.name} Messaging Solutions`}
      subtitle={industry.name}
      description={industry.tagline}
      imagePath={industry.heroImage}
      ctaText={`Get Started with ${industry.name}`}
    >
      {/* Main Content */}
      <div className="py-12">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {industry.description}
          </h2>

          {/* Stats Section */}
          <div className="mt-12">
            <h3 className="mb-6 text-lg font-medium text-gray-700">
              {industry.statsTitle}
            </h3>
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-6">
              {industry.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-[#04b851]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="my-16 rounded-2xl bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              WhatsEase for {industry.name}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to improve customer engagement and drive
              growth
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industry.features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-[#04b851]/30 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#04b851]/10 text-[#04b851]">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="flex-1 text-base text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="relative my-16 overflow-hidden rounded-2xl bg-[#04b851]/5 py-16">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <svg
                className="absolute -left-6 -top-6 h-16 w-16 text-[#04b851]/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
              </svg>
              <blockquote className="relative z-10 pt-20 text-xl font-medium leading-relaxed text-gray-900">
                {industry.testimonial.quote}
              </blockquote>
              {/* <div className="mt-8 flex items-center">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  {industry.testimonial.image && (
                    <Image
                      src={industry.testimonial.image}
                      alt={industry.testimonial.author}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-gray-900">
                    {industry.testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">
                    {industry.testimonial.role}
                    {industry.testimonial.company && ','}{' '}
                    {industry.testimonial.company}
                  </div>
                </div>
              </div> */}
            </motion.div>

            <motion.div
              className="relative h-[400px] overflow-hidden rounded-xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src={industry.heroImage}
                alt={industry.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#04b851]/20 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">
            {industry.name} Use Cases
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industry.useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative h-48 w-full bg-gray-200">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-medium text-gray-900">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="my-16 rounded-2xl bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {industry.faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative my-24 rounded-2xl bg-gradient-to-r from-[#04b851] to-emerald-600 px-6 py-16 text-center text-white shadow-lg">
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/10"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold">{industry.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            {industry.ctaDescription}
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 font-medium text-[#04b851] shadow-sm transition-colors hover:bg-gray-100"
            >
              Contact Sales
            </Link>
            <Link
              href="/pricing"
              className="rounded-lg border border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
