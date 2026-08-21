'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/solid';
import {
  LinkedinFilled,
  InstagramOutlined,
  ArrowRightOutlined,
  DownOutlined,
  RightOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
export default function ContactPage() {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phoneNumber: '',
    message: '',
    reason: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formState.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formState.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formState.reason) {
      newErrors.reason = 'Please select a reason for contact';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Log form data to console for debugging
      console.log('Form submitted:', formState);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      <main className="pt-[75px]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="relative rounded-xl bg-white shadow-xl">
            <div className="grid lg:grid-cols-2">
              {/* Left side - Contact Info */}
              <div className="relative overflow-hidden rounded-t-xl bg-gradient-to-br from-[#04b851] to-[#04b851]/80 p-12 text-white lg:rounded-l-xl lg:rounded-tr-none">
                {/* Decorative elements */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
                  <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-white blur-[120px]" />
                  <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-white blur-[80px]" />
                </div>

                <div className="relative">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Get in touch
                  </h2>
                  <p className="mt-4 max-w-xl text-lg text-white/80">
                    Have questions about WhatsEase? Our team is here to help.
                    Fill out the form and we&#39;ll get back to you as soon as
                    possible.
                  </p>

                  <div className="mt-12 space-y-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Phone</h3>
                        <p className="mt-1 text-white/80">+91 9510468956</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Email</h3>
                        <p className="mt-1 text-white/80">connect.whatsease@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium">Office</h3>
                        <p className="mt-1 text-white/80">
                          6th Floor, 616
                          <br />Darshanam Crossroad, 
<br />Soma Talav Char Rasta, 

<br />Vadodara - 390025
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-lg font-medium">Follow us</h3>

                                    <div className="flex gap-4 mt-1">
                                      {[
                                        {
                                          icon: <InstagramOutlined />,
                                          href: 'https://www.instagram.com/whatsease.in?igsh=NTM2OGI1MTZlamdr',
                                          label: 'Instagram',
                                        },
                                        {
                                          icon: <WhatsAppOutlined />,
                                          href: 'https://api.whatsapp.com/send?phone=919427606998&text=Connect%20with%20WhatsEase%20team%20for%20my%20business%20requirements!',
                                          label: 'Whatsapp',
                                        },
                                        {
                                          icon: <LinkedinFilled />,
                                          href: 'https://www.linkedin.com/company/whatsease/',
                                          label: 'LinkedIn',
                                        },
                                      ].map((social) => (
                                        <a
                                          key={social.label}
                                          href={social.href}
                                          aria-label={social.label}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-[#04b851]"
                                        >
                                          <span className="transform transition-transform duration-300 group-hover:scale-110">
                                            {social.icon}
                                          </span>
                                        </a>
                                      ))}
                                    </div>
                  </div>

                  {/* <div className="mt-16 rounded-xl bg-white/10 p-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src="https://randomuser.me/api/portraits/women/32.jpg"
                          alt="Support Team Member"
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-white/90">
                          &quot;Our support team typically responds within 2
                          hours during business hours. We&#39;re here to
                          help!&quot;
                        </p>
                        <p className="mt-2 text-sm font-medium text-white">
                          — Sarah, Customer Support Lead
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Right side - Contact Form */}
              <div className="p-12">
                {isSubmitted ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="mb-2 text-2xl font-bold text-gray-900">
                      Thank you for reaching out!
                    </h2>
                    <p className="mb-8 max-w-md text-gray-600">
                      We&#39;ve received your message and will get back to you
                      as soon as possible. A confirmation has been sent to your
                      email address.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({
                          firstName: '',
                          lastName: '',
                          email: '',
                          company: '',
                          phoneNumber: '',
                          message: '',
                          reason: '',
                        });
                      }}
                      className="inline-flex items-center rounded-xl border border-[#04b851] px-4 py-2 text-[#04b851] transition-colors hover:bg-[#04b851]/5"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Send us a message
                    </h2>
                    <p className="mt-2 text-gray-600">
                      Fill out the form below and our team will get back to you
                      shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formState.firstName}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded-xl border ${
                              errors.firstName
                                ? 'border-red-300'
                                : 'border-gray-300'
                            } px-3 py-2 shadow-sm focus:border-[#04b851] focus:outline-none focus:ring-[#04b851]`}
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.firstName}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formState.lastName}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded-xl border ${
                              errors.lastName
                                ? 'border-red-300'
                                : 'border-gray-300'
                            } px-3 py-2 shadow-sm focus:border-[#04b851] focus:outline-none focus:ring-[#04b851]`}
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={`mt-1 block w-full rounded-xl border ${
                            errors.email ? 'border-red-300' : 'border-gray-300'
                          } px-3 py-2 shadow-sm focus:border-[#04b851] focus:outline-none focus:ring-[#04b851]`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Company name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
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
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formState.phoneNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-[#04b851] focus:outline-none focus:ring-[#04b851]"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="reason"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Reason for contact{' '}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="reason"
                          name="reason"
                          value={formState.reason}
                          onChange={handleChange}
                          className={`mt-1 block w-full rounded-xl border ${
                            errors.reason ? 'border-red-300' : 'border-gray-300'
                          } px-3 py-2 shadow-sm focus:border-[#04b851] focus:outline-none focus:ring-[#04b851]`}
                        >
                          <option value="">Select a reason</option>
                          <option value="sales">Sales inquiry</option>
                          <option value="support">Technical support</option>
                          <option value="partnership">
                            Partnership opportunity
                          </option>
                          <option value="press">Press inquiry</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.reason && (
                          <p className="mt-1 text-sm text-red-600">
                            {errors.reason}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Tell us how we can help you..."
                          className="mt-1 block w-full rounded-xl border border-gray-300 px-3 py-2 shadow-sm focus:border-[#04b851] focus:outline-none focus:ring-[#04b851]"
                        ></textarea>
                      </div>

                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input
                            id="privacy"
                            name="privacy"
                            type="checkbox"
                            required
                            className="h-4 w-4 rounded border-gray-300 text-[#04b851] focus:ring-[#04b851]"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="privacy"
                            className="font-medium text-gray-700"
                          >
                            I agree to the{' '}
                            <Link
                              href="/privacy"
                              className="text-[#04b851] hover:underline"
                            >
                              privacy policy
                            </Link>
                          </label>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex w-full items-center justify-center rounded-xl border border-transparent bg-[#04b851] px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-[#04b851]/90 focus:outline-none focus:ring-2 focus:ring-[#04b851] focus:ring-offset-2 disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="mr-2 h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Infinity,
                                  ease: 'linear',
                                }}
                              />
                              Sending...
                            </>
                          ) : (
                            'Send message'
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200 rounded-xl bg-white p-8 shadow-lg">
              {[
                {
                  question: 'How quickly can I get started with WhatsEase?',
                  answer:
                    'You can sign up and start using WhatsEase in minutes. Our onboarding process is designed to be simple and quick. For enterprise solutions, our team will guide you through a customized setup process.',
                },
                {
                  question: 'What channels does WhatsEase support?',
                  answer:
                    "WhatsEase currently supports WhatsApp, SMS, Web Chat, Facebook Messenger, Instagram, and Telegram. We're constantly expanding our channel support based on customer needs.",
                },
                {
                  question:
                    'Is WhatsEase compliant with data protection regulations?',
                  answer:
                    'Yes, WhatsEase is fully compliant with GDPR, CCPA, and other major data protection regulations. We take data security and privacy very seriously and implement best practices for data handling.',
                },
                {
                  question: 'How does pricing work?',
                  answer:
                    'WhatsEase offers flexible pricing tiers based on message volume and features needed. We have plans suitable for small businesses to large enterprises. Visit our pricing page or contact our sales team for a custom quote.',
                },
                {
                  question:
                    'Can I integrate WhatsEase with my existing systems?',
                  answer:
                    'Yes, WhatsEase offers robust API and integrations with popular CRM, e-commerce, and business systems including Salesforce, Shopify, HubSpot, and more. Custom integrations are available for Enterprise plans.',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className={`${index === 0 ? '' : 'pt-6'} ${index === 4 ? '' : 'pb-6'}`}
                >
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900">
                      {faq.question}
                      <span className="ml-6 flex h-7 items-center">
                        <svg
                          className="h-6 w-6 rotate-0 transform text-[#04b851] transition-transform duration-300 group-open:rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="mt-3 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>

          {/* Map and Locations */}
          {/* <div className="mt-20">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Our offices
            </h2>
            <p className="mt-4 text-center text-lg text-gray-600">
              Visit us at one of our global locations
            </p>

            <div className="mt-12 overflow-hidden rounded-xl">
              <div className="relative h-[400px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1577086664693-894d8405334a?q=80&w=2070&auto=format&fit=crop"
                  alt="World Map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              <div className="grid gap-8 bg-white p-8 md:grid-cols-3">
                {[
                  {
                    city: 'San Francisco',
                    address:
                      '123 Innovation Street\nSan Francisco, CA 94103\nUnited States',
                    phone: '+1 (555) 123-4567',
                  },
                  {
                    city: 'London',
                    address: '84 Tech Hub\nLondon, EC2A 4NE\nUnited Kingdom',
                    phone: '+44 20 1234 5678',
                  },
                  {
                    city: 'Singapore',
                    address: '52 Digital Way\nSingapore 079903\nSingapore',
                    phone: '+65 6123 4567',
                  },
                ].map((office, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {office.city}
                    </h3>
                    <p className="whitespace-pre-line text-gray-600">
                      {office.address}
                    </p>
                    <p className="text-[#04b851]">{office.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </>
  );
}
