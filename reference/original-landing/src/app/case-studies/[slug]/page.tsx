'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import { caseStudiesData } from '../data';

export default function CaseStudyPage() {
  // Use the useParams hook to get the slug from the URL
  const params = useParams();
  const slug = params?.slug as string;

  const caseStudy = caseStudiesData.find((cs) => cs.id === slug);

  if (!caseStudy) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        Case study not found
      </div>
    );
  }

  // Find related case studies (same industry or tags)
  const relatedCaseStudies = caseStudiesData
    .filter(
      (cs) =>
        cs.id !== slug &&
        (cs.industry === caseStudy.industry ||
          cs.tags.some((tag) => caseStudy.tags.includes(tag))),
    )
    .slice(0, 3);

  return (
    <main className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <ChevronRightIcon className="mx-2 h-4 w-4" />
            <Link href="/case-studies" className="hover:text-gray-900">
              Case Studies
            </Link>
            <ChevronRightIcon className="mx-2 h-4 w-4" />
            <span className="text-gray-900">{caseStudy.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#04b851]/10">
              <span className="text-[#04b851]">
                {React.createElement(caseStudy.icon, {
                  className: 'h-10 w-10',
                })}
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              {caseStudy.title}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
              How WhatsEase helped {caseStudy.title} streamline operations and
              improve customer experience
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                {caseStudy.industry}
              </span>
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 overflow-hidden rounded-2xl">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                width={1200}
                height={600}
                className="w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="mb-6 text-2xl font-bold">Overview</h2>
                <p className="mb-8 text-gray-600">
                  {caseStudy.title} faced challenges with traditional processes
                  that were inefficient and error-prone. Through implementing
                  WhatsEase&apos;s WhatsApp automation solutions, they were able
                  to transform their operations and deliver exceptional
                  experiences to their customers.
                </p>

                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-semibold">The Challenge</h3>
                  <p className="text-gray-600">{caseStudy.challenge}</p>
                </div>

                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-semibold">The Solution</h3>
                  <p className="text-gray-600">{caseStudy.solution}</p>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold">Implementation</h3>
                  <p className="mb-4 text-gray-600">
                    The WhatsEase team worked closely with {caseStudy.title} to
                    understand their specific needs and customize the solution
                    accordingly. The implementation process included:
                  </p>
                  <ul className="mb-8 space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-2 rounded-full bg-green-100 p-1">
                        <svg
                          className="h-3 w-3 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>
                        Initial consultation and requirement gathering
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 rounded-full bg-green-100 p-1">
                        <svg
                          className="h-3 w-3 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>
                        Customization of WhatsEase platform for specific use
                        case
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 rounded-full bg-green-100 p-1">
                        <svg
                          className="h-3 w-3 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>Integration with existing systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 rounded-full bg-green-100 p-1">
                        <svg
                          className="h-3 w-3 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>Training and onboarding for staff</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 rounded-full bg-green-100 p-1">
                        <svg
                          className="h-3 w-3 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span>Ongoing support and optimization</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="rounded-xl bg-gray-50 p-6">
                  <h3 className="mb-4 text-xl font-semibold">Results</h3>
                  <ul className="space-y-4">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#04b851]/10 text-[#04b851]">
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-medium text-gray-900">{result}</p>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h4 className="mb-3 font-semibold">Key Benefits</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-[#04b851]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Time and cost savings</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-[#04b851]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Improved customer experience</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-[#04b851]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Reduced manual errors</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="mr-2 h-4 w-4 text-[#04b851]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Enhanced business operations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-gray-50 p-6">
                  <blockquote className="italic text-gray-600">
                    &ldquo;The WhatsEase solution has transformed how we
                    operate. The automation has saved us countless hours and
                    significantly improved our customer satisfaction.&rdquo;
                  </blockquote>
                  <div className="mt-4 flex items-center">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                      <Image
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Client"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        Client Name
                      </p>
                      <p className="text-xs text-gray-500">
                        Position, {caseStudy.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-2xl font-bold">
              Related Case Studies
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {relatedCaseStudies.map((cs) => (
                <Link
                  key={cs.id}
                  href={`/case-studies/${cs.id}`}
                  className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <h3 className="text-lg font-semibold text-white">
                        {cs.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="line-clamp-2 text-sm text-gray-600">
                      {cs.challenge}
                    </p>
                    <div className="mt-3 inline-flex items-center text-xs font-medium text-[#04b851]">
                      <span>Read case study</span>
                      <ArrowRightIcon className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/case-studies"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-800 shadow transition-all hover:shadow-md"
              >
                <ArrowLeftIcon className="mr-2 h-4 w-4" />
                <span>Back to all case studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#04b851] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Ready to achieve similar results?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Let&apos;s discuss how WhatsEase can help your business automate
              communications and streamline operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-medium text-[#04b851] shadow transition-transform hover:scale-105"
            >
              <span>Schedule a Demo</span>
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
