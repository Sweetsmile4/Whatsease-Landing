'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/solid';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { Select } from 'antd';

export default function DemoPage() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phoneNumber: '',
    companySize: '',
    interests: [] as string[],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setFormState((prev) => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, name] };
      } else {
        return {
          ...prev,
          interests: prev.interests.filter((item) => item !== name),
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const demoFeatures = [
    'Personalized product tour',
    'Live Q&A with product specialists',
    'Custom solution assessment',
    'Pricing consultation',
    'Implementation roadmap',
  ];

  return (
    <>
      <Navbar />
      <main className="pt-[75px]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Schedule a personalized demo
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-gray-500">
                See how WhatsEase can transform your business communications.
                Our product specialists will walk you through the platform and
                answer all your questions.
              </p>

              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900">
                  What to expect:
                </h2>
                <ul className="mt-4 space-y-3">
                  {demoFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-[#04b851]" />
                      <span className="ml-3 text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 rounded-xl bg-gray-50 p-6">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[
  '/images/user.png',
  '/images/user.png',
  '/images/user.png',
                    ].map((avatar, index) => (
                      <div
                        key={index}
                        className="h-10 w-10 overflow-hidden rounded-full border-2 border-white"
                      >
                        <Image
                          src={avatar}
                          alt={`Customer ${index}`}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                                onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = '/images/user.png'; 
      }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-500">
                    Join{' '}
                    <span className="font-semibold text-gray-900">1,000+</span>{' '}
                    businesses already using WhatsEase
                  </div>
                </div>
                <div className="mt-4 text-sm italic text-gray-500">
                  &quot;The WhatsEase demo was incredibly helpful. Their team
                  really took the time to understand our needs and showed us
                  exactly how their platform could help.&quot;
                </div>
                {/* <div className="mt-2 text-sm font-semibold text-gray-900">
                  — Maria Sanchez, Customer Support Manager
                </div> */}
              </div>
            </div>

            <div className="mt-12 lg:col-span-5 lg:mt-0">
              <div className="rounded-xl bg-white p-8 shadow-lg">
                {isSubmitted ? (
                  <div className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="mt-4 text-xl font-medium text-gray-900">
                      Demo request received
                    </h3>
                    <p className="mt-2 text-gray-500">
                      Thanks for your interest! A member of our team will
                      contact you shortly to schedule your personalized demo.
                    </p>
                    <div className="mt-6">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="inline-flex w-full justify-center rounded-xl border border-transparent bg-[#04b851] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#04b851]/90"
                      >
                        Request another demo
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Contact information
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={formState.firstName}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-[#04b851] focus:outline-none focus:ring-[#04b851]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          value={formState.lastName}
                          onChange={handleChange}
                          required
                          className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-[#04b851] focus:outline-none focus:ring-[#04b851]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Business email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-[#04b851] focus:outline-none focus:ring-[#04b851]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company name
                      </label>
                      <input
                        type="text"
                        name="company"
                        id="company"
                        value={formState.company}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-[#04b851] focus:outline-none focus:ring-[#04b851]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formState.phoneNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-[#04b851] focus:outline-none focus:ring-[#04b851]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="companySize"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company size
                      </label>
                      <Select
                        id="companySize"
                        value={formState.companySize || undefined}
                        onChange={(value) =>
                          setFormState({ ...formState, companySize: value })
                        }
                        className="mt-1 w-full"
                        size="large"
                        placeholder="Select an option"
                        options={[
                          { value: '1-10', label: '1-10 employees' },
                          { value: '11-50', label: '11-50 employees' },
                          { value: '51-200', label: '51-200 employees' },
                          { value: '201-500', label: '201-500 employees' },
                          { value: '501-1000', label: '501-1000 employees' },
                          { value: '1000+', label: '1000+ employees' },
                        ]}
                      />
                    </div>

                    <div>
                      <p className="block text-sm font-medium text-gray-700">
                        What are you interested in? (Select all that apply)
                      </p>
                      <div className="mt-3 space-y-2">
                        {[
                          'AI Chatbots',
                          'WhatsApp Business API',
                          'Multi-channel messaging',
                          'Analytics and reporting',
                          'CRM integration',
                        ].map((feature) => (
                          <div key={feature} className="flex items-start">
                            <input
                              id={feature}
                              name={feature}
                              type="checkbox"
                              checked={formState.interests.includes(feature)}
                              onChange={handleCheckboxChange}
                              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#04b851] focus:ring-[#04b851]"
                            />
                            <label
                              htmlFor={feature}
                              className="ml-2 block text-sm text-gray-700"
                            >
                              {feature}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Additional information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formState.message}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-[#04b851] focus:outline-none focus:ring-[#04b851]"
                        placeholder="Tell us about your specific needs or questions"
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex w-full justify-center rounded-xl border border-transparent bg-[#04b851] px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-[#04b851]/90 focus:outline-none focus:ring-2 focus:ring-[#04b851] focus:ring-offset-2 disabled:opacity-70"
                      >
                        {isSubmitting ? 'Submitting...' : 'Request demo'}
                      </button>
                    </div>

                    <p className="text-center text-xs text-gray-500">
                      By submitting this form, you agree to our{' '}
                      <a
                        href="/privacy"
                        className="font-medium text-[#04b851] hover:underline"
                      >
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
