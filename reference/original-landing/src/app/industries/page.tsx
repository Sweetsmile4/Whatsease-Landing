import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageTemplate from '@/app/components/PageTemplate';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Industries | WhatsEase',
  description:
    'Industry-specific messaging solutions for every business sector.',
};

const industries = [
  {
    name: 'E-commerce',
    description:
      'Drive sales and provide exceptional customer support through automated messaging.',
    icon: '/icons/ecommerce.svg',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop',
    href: '/industries/ecommerce',
    benefits: [
      'Automated order updates',
      'Product recommendations',
      'Abandoned cart recovery',
      '24/7 customer support',
    ],
  },
  {
    name: 'Healthcare',
    description:
      'Improve patient experience with appointment reminders and follow-up care.',
    icon: '/icons/healthcare.svg',
    image:
      'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D',
    href: '/industries/healthcare',
    benefits: [
      'Appointment scheduling',
      'Medication reminders',
      'Post-visit follow-ups',
      'Secure patient communication',
    ],
  },
  {
    name: 'Education',
    description:
      'Enhance student engagement and streamline administrative communication.',
    icon: '/icons/education.svg',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop',
    href: '/industries/education',
    benefits: [
      'Course updates and reminders',
      'Student Q&A automation',
      'Parent-teacher communication',
      'Admission process support',
    ],
  },
  {
    name: 'Real Estate',
    description:
      'Nurture leads and provide timely information to potential buyers.',
    icon: '/icons/realestate.svg',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
    href: '/industries/realestate',
    benefits: [
      'Property listing updates',
      'Viewing scheduling',
      'Document collection',
      'Client follow-ups',
    ],
  },
];

export default function IndustriesPage() {
  return (
    <PageTemplate
      title="Industry-specific messaging solutions"
      subtitle="Industries"
      description="WhatsEase provides tailored messaging solutions for businesses across different industries, addressing unique communication challenges."
      imagePath="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=2000&auto=format&fit=crop"
      ctaText="Find your industry"
    >
      {/* Industries Overview */}
      <section className="mb-20 space-y-16">
        {industries.map((industry, index) => (
          <div
            key={industry.name}
            className={`grid gap-8 ${index % 2 === 0 ? 'lg:grid-cols-[1fr_1.2fr]' : 'lg:grid-cols-[1.2fr_1fr]'}`}
          >
            <div className={`${index % 2 !== 0 && 'lg:order-2'}`}>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                {industry.name}
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                {industry.description}
              </p>

              <ul className="mt-8 space-y-3">
                {industry.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-[#04b851]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-3 text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href={industry.href}
                  className="inline-flex items-center gap-2 text-[#04b851] hover:underline"
                >
                  <span>
                    Learn more about {industry.name.toLowerCase()} solutions
                  </span>
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className={`${index % 2 !== 0 && 'lg:order-1'}`}>
              <div className="relative h-[300px] overflow-hidden rounded-xl lg:h-full">
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Customer Stories Section */}
      <section className="mb-20">
        <div className="rounded-xl bg-gray-50 p-8">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">
            Success Stories
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                company: 'StyleHub',
                industry: 'E-commerce',
                result: '42% increase in cart recovery',
                quote:
                  'WhatsEase transformed our customer service with automated order updates and personalized recommendations.',
              },
              {
                company: 'MediCare Hospital',
                industry: 'Healthcare',
                result: '38% reduction in missed appointments',
                quote:
                  'Appointment reminders and follow-ups have significantly improved patient engagement and satisfaction.',
              },
              {
                company: 'Westwood Properties',
                industry: 'Real Estate',
                result: '55% faster response to buyer inquiries',
                quote:
                  'The automated property matching and viewing scheduler has streamlined our entire sales process.',
              },
            ].map((story, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {story.company}
                    </h3>
                    <p className="text-sm text-gray-500">{story.industry}</p>
                  </div>
                  <span className="rounded-full bg-[#04b851]/10 px-3 py-1 text-xs font-medium text-[#04b851]">
                    {story.result}
                  </span>
                </div>
                <p className="text-gray-600">&quot;{story.quote}&quot;</p>
                <Link
                  href="/case-studies"
                  className="mt-4 inline-block text-sm text-[#04b851] hover:underline"
                >
                  Read case study
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Industries */}
      <section>
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
          More Industries We Serve
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            'Banking & Finance',
            'Insurance',
            'Travel & Hospitality',
            'Retail',
            'Telecommunications',
            'Food & Beverage',
            'Professional Services',
            'Manufacturing',
          ].map((industry, index) => (
            <Link
              key={index}
              href="#"
              className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-[#04b851]/30 hover:shadow-md"
            >
              <span className="font-medium text-gray-900">{industry}</span>
              <ArrowRightIcon className="h-4 w-4 text-[#04b851]" />
            </Link>
          ))}
        </div>
      </section>
    </PageTemplate>
  );
}
