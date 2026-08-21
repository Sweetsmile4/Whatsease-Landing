'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Footer from './Footer';
import Navbar from './Navbar';

type FeatureCardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};

type BenefitProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
};

type FAQItemProps = {
  question: string;
  answer: string;
};

type ProductTemplateProps = {
  productName: string;
  productTagline: string;
  productDescription: string;
  heroImage: string;
  features: FeatureCardProps[];
  benefits: BenefitProps[];
  integrations?: {
    title: string;
    description: string;
    logos: { name: string; logo: string }[];
  };
  testimonial?: TestimonialProps;
  faqs?: FAQItemProps[];
  cta: {
    title: string;
    description: string;
    primaryButton: {
      text: string;
      href: string;
    };
    secondaryButton?: {
      text: string;
      href: string;
    };
  };
  demoImage?: string;
};

export default function ProductTemplate({
  productName,
  productTagline,
  productDescription,
  heroImage,
  features,
  benefits,
  integrations,
  testimonial,
  faqs,
  cta,
  demoImage,
}: ProductTemplateProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white pt-24">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <motion.div
              className="flex flex-col justify-center"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                {productName}
              </h1>
              <p className="mb-6 text-xl text-[#04b851] sm:text-2xl">
                {productTagline}
              </p>
              <p className="mb-8 text-lg text-gray-600">{productDescription}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={cta.primaryButton.href}
                  className="rounded-lg bg-[#04b851] px-6 py-3 text-white transition-colors hover:bg-[#039c43] md:px-8"
                >
                  Get Started
                </Link>
                <Link
                  href="/demo"
                  className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50 md:px-8"
                >
                  See Demo
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[400px] overflow-hidden rounded-2xl lg:h-[500px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={heroImage}
                alt={productName}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>

        {/* Wave SVG at bottom of hero */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden">
          <svg
            className="relative block h-12 w-full md:h-24"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,141.89,111.27,217.31,94.09,283.18,79.39,341.5,67.21,401.6,57.79,429.06,53.84,456.64,49,486.5,44.24Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Key Features
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Everything you need to succeed with {productName}
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#04b851]/10 text-[#04b851]">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Demo/Screenshot Section */}
      {/* {demoImage && (
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                See it in action
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Get a glimpse of how {productName} works
              </p>
            </motion.div>

            <motion.div
              className="relative mx-auto h-[500px] max-w-5xl overflow-hidden rounded-xl border border-gray-200 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src={demoImage}
                alt={`${productName} demo`}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>
      )} */}

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Why choose {productName}
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Benefits that make a real difference for your business
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {benefit.icon && (
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#04b851]/10 text-[#04b851]">
                    {benefit.icon}
                  </div>
                )}
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-base text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      {integrations && (
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                {integrations.title}
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                {integrations.description}
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-4xl grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4">
              {integrations.logos.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex h-20 items-center justify-center rounded-lg bg-white p-4 shadow-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={80}
                    height={40}
                    className="max-h-10 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {testimonial && (
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-[#04b851]/10 to-[#04b851]/5 p-8 md:p-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <svg
                  className="absolute -left-3 -top-3 h-10 w-10 text-[#04b851]/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
                <blockquote className="pl-6 pt-10 text-lg text-gray-700 md:text-xl">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full">
                  {/* <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  /> */}
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    ~ {testimonial.company}
                  </p>
                  {/* <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p> */}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {faqs && faqs.length > 0 && (
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Everything you need to know about {productName}
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="p-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
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
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#04b851] to-[#038f3e] px-6 py-16 text-center shadow-xl md:px-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {cta.title}
            </h2>
            <p className="mb-8 text-lg text-white/90">{cta.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={cta.primaryButton.href}
                className="rounded-lg bg-white px-6 py-3 font-medium text-[#04b851] shadow-sm transition-colors hover:bg-gray-50"
              >
                {cta.primaryButton.text}
              </Link>
              {cta.secondaryButton && (
                <Link
                  href={cta.secondaryButton.href}
                  className="rounded-lg border border-white bg-transparent px-6 py-3 font-medium text-white transition-colors hover:bg-white/10"
                >
                  {cta.secondaryButton.text}
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
