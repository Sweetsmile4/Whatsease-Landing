import React from 'react';
import Link from 'next/link';
import PageTemplate from '@/app/components/PageTemplate';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import FallbackImage from '@/app/components/FallbackImage';

export const metadata = {
  title: 'Customers | WhatsEase',
  description:
    'See how businesses across industries use WhatsEase to transform their customer communications.',
};

const testimonials = [
  {
    quote:
      'Whatsease made ticketing seamless—attendees booked and paid via WhatsApp.',
    author: 'Rajasi Rastogi',
    role: 'Associate Founder',
    company: 'Savitri SociaLabs',
    image: '',
    logo: '/Companies/urbanforest.jpg',
  },
  {
    quote: 'Whatsease simplified registrations and coordination for our event.',
    author: 'Alpesh Patel',
    role: 'Organizer',
    company: 'VFF',
    image: '',
    logo: '/Companies/vff.png',
  },
  {
    quote: 'Great product, helpful team, highly recommended!',
    author: 'Shubham Londhe',
    role: 'Founder - TrainWithShubham',
    company: 'TrainWithShubham',
    image: '',
    logo: '/Companies/tws.png',
  },
];

const caseStudies = [
  {
    title:
      'How TrendShop increased sales by 35% with automated WhatsApp marketing',
    company: 'TrendShop',
    industry: 'Fashion Retail',
    image:
      'https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=800&auto=format&fit=crop&q=80',
    results: [
      '35% increase in sales conversion',
      '42% reduction in cart abandonment',
      '28% higher customer satisfaction scores',
    ],
  },
  {
    title:
      'HealthPlus reduced appointment no-shows by 60% using WhatsEase reminders',
    company: 'HealthPlus',
    industry: 'Healthcare',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80',
    results: [
      '60% reduction in missed appointments',
      '45% decrease in administrative workload',
      '38% improvement in patient satisfaction',
    ],
  },
  {
    title: 'GlobalBank streamlined customer support with AI-powered chatbots',
    company: 'GlobalBank',
    industry: 'Banking & Finance',
    image:
      'https://images.unsplash.com/photo-1565373679579-96a3d9c6857c?w=800&auto=format&fit=crop&q=80',
    results: [
      '75% of inquiries resolved by AI chatbots',
      'Average response time reduced from 24hrs to 2mins',
      'Customer satisfaction increased by 40%',
    ],
  },
];

// Company logos from reliable CDN
const companyLogos = [
  '/Companies/urbanforest.jpg',
  '/Companies/tws.png',
  '/Companies/thm.png',
  '/Companies/weekend.jpg',
  '/Companies/cii.jpg',
  '/Companies/indie.png',
  '/Companies/wavesclub.webp',
  '/Companies/vff.png',
];

export default function CustomersPage() {
  return (
    <PageTemplate
      title="Trusted by leading businesses worldwide"
      subtitle="Our Customers"
      description="Discover how companies of all sizes use WhatsEase to transform their customer communications and drive business results."
      imagePath="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=2000&auto=format&fit=crop&q=80"
      ctaText="Become a customer"
      ctaLink="/contact"
    >
      {/* Logo Cloud */}
      <section className="mb-20">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
          Trusted by 20+ businesses
        </h2>
        <div className="grid grid-cols-2 gap-8 px-16 md:grid-cols-3 lg:grid-cols-4">
          {companyLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="relative h-12 w-32 grayscale transition-all duration-300 hover:grayscale-0">
                <FallbackImage
                  src={logo}
                  alt={`Company ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="128px"
                  fallbackSrc={`https://ui-avatars.com/api/?name=Company+${index + 1}&background=eaeaea&color=999999&size=128`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="mb-20">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">
          What our customers say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative mb-6 h-12">
                <FallbackImage
                  src={testimonial.logo}
                  alt={testimonial.company}
                  fill
                  className="object-contain"
                  sizes="150px"
                  fallbackSrc={`https://ui-avatars.com/api/?name=${testimonial.company.replace(
                    /\s+/g,
                    '+',
                  )}&background=eaeaea&color=999999&size=128`}
                />
              </div>
              <p className="mb-6 text-gray-600">
                &quot;{testimonial.quote}&quot;
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <FallbackImage
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="mb-20">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Case Studies
          </h2>
          <Link
            href="/case-studies"
            className="flex items-center gap-2 text-[#04b851] hover:underline"
          >
            <span>View all case studies</span>
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => {
            // Generate tags based on industry and results
            const tags = [
              study.industry,
              ...study.results
                .map(
                  (result) =>
                    result.match(/([0-9]+%)/)?.[0] ||
                    result.split(' ').slice(0, 2).join(' '),
                )
                .slice(0, 2),
            ]
              .filter(Boolean)
              .slice(0, 3);

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative h-48">
                  <FallbackImage
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    {study.title}
                  </h3>
                  <ul className="mb-6 space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <svg
                          className="mr-2 mt-1 h-4 w-4 text-[#04b851]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags instead of "Read case study" */}
                  <button className="mt-2 flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full border border-[#04b851]/30 bg-[#04b851]/5 px-2.5 py-0.5 text-xs font-medium text-[#04b851]"
                      >
                        {tag}
                      </span>
                    ))}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Industry Breakdown */}
      <section className="mb-20">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">
          Trusted across industries
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            { name: 'E-commerce & Retail', percentage: '28%' },
            { name: 'Banking & Finance', percentage: '22%' },
            { name: 'Healthcare', percentage: '17%' },
            { name: 'Travel & Hospitality', percentage: '12%' },
            { name: 'Education', percentage: '9%' },
            { name: 'Real Estate', percentage: '6%' },
            { name: 'Manufacturing', percentage: '4%' },
            { name: 'Other', percentage: '2%' },
          ].map((industry, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {industry.name}
              </h3>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full bg-[#04b851]"
                  style={{ width: industry.percentage }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {industry.percentage} of customers
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Stories Video */}
      <section className="mb-20">
        <div className="overflow-hidden rounded-xl bg-gray-900">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Hear from our customers
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Watch how leading businesses have transformed their customer
                communication with WhatsEase.
              </p>
              <div className="mt-8">
                <Link
                  href="/customer-stories"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
                >
                  <span>Watch customer stories</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <FallbackImage
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80"
                alt="Customer video thumbnail"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <svg
                  className="h-8 w-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
