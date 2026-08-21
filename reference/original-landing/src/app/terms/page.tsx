'use client';

import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import {
  DocumentTextIcon,
  ScaleIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export default function TermsPage() {
  const lastUpdated = 'October 9, 2025';

  const highlights = [
    {
      icon: DocumentTextIcon,
      title: 'Clear terms',
      description: 'Straightforward language about our service agreement',
    },
    {
      icon: ScaleIcon,
      title: 'Fair usage',
      description: 'Reasonable policies that protect both parties',
    },
    {
      icon: CheckCircleIcon,
      title: 'Your rights',
      description: 'Know what you can expect from our service',
    },
    {
      icon: ExclamationTriangleIcon,
      title: 'Important notices',
      description: 'Key information about liability and warranties',
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 pt-[75px]">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#04b851] to-[#039943] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-center text-4xl font-bold text-white sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-center text-lg text-white/90">
              Please read these terms carefully before using WhatsEase services.
            </p>
            <p className="mt-2 text-center text-sm text-white/80">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <item.icon className="h-8 w-8 text-[#04b851]" />
                <h3 className="mt-4 font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-white p-8 shadow-sm lg:p-12">
            <div className="prose prose-gray max-w-none">
              {/* Acceptance of Terms */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600">
                  By accessing or using WhatsEase's services, you agree to be
                  bound by these Terms of Service ("Terms"). If you do not agree
                  to these Terms, please do not use our services. These Terms
                  apply to all users of the service, including without
                  limitation users who are browsers, vendors, customers,
                  merchants, and/or contributors of content.
                </p>
              </section>

              {/* Description of Service */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  2. Description of Service
                </h2>
                <p className="mb-4 text-gray-600">
                  WhatsEase provides a comprehensive CRM and business
                  communication platform that includes:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-600">
                  <li>
                    WhatsApp Business API integration for customer messaging
                  </li>
                  <li>
                    AI-powered chatbots for automated customer interactions
                  </li>
                  <li>Multi-channel messaging capabilities</li>
                  <li>Customer relationship management tools</li>
                  <li>Analytics and reporting features</li>
                  <li>Campaign management and automation</li>
                  <li>Team collaboration features</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  We reserve the right to modify, suspend, or discontinue any
                  aspect of the service at any time, with or without notice.
                </p>
              </section>

              {/* Account Registration */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  3. Account Registration and Security
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Registration Requirements
                    </h3>
                    <p className="text-gray-600">
                      To use our services, you must create an account. You agree
                      to:
                    </p>
                    <ul className="list-disc space-y-2 pl-6 text-gray-600">
                      <li>
                        Provide accurate, current, and complete information
                      </li>
                      <li>
                        Maintain and update your information to keep it accurate
                      </li>
                      <li>
                        Be at least 18 years old or the age of legal majority in
                        your jurisdiction
                      </li>
                      <li>
                        Be responsible for all activities under your account
                      </li>
                      <li>Not share your account credentials with others</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Account Security
                    </h3>
                    <p className="text-gray-600">
                      You are responsible for maintaining the confidentiality of
                      your account credentials. You must notify us immediately
                      of any unauthorized use of your account or any other
                      breach of security.
                    </p>
                  </div>
                </div>
              </section>

              {/* Acceptable Use */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  4. Acceptable Use Policy
                </h2>
                <p className="mb-4 text-gray-600">
                  You agree NOT to use WhatsEase services to:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-600">
                  <li>
                    Send spam, unsolicited messages, or bulk messages without
                    consent
                  </li>
                  <li>
                    Violate WhatsApp's Business Policy or Terms of Service
                  </li>
                  <li>
                    Transmit harmful, threatening, abusive, or illegal content
                  </li>
                  <li>
                    Impersonate any person or entity or misrepresent your
                    affiliation
                  </li>
                  <li>Interfere with or disrupt the service or servers</li>
                  <li>
                    Attempt to gain unauthorized access to any systems or data
                  </li>
                  <li>Use the service for fraudulent or illegal activities</li>
                  <li>
                    Violate any applicable laws, regulations, or third-party
                    rights
                  </li>
                  <li>
                    Scrape, mine, or harvest data from the platform without
                    permission
                  </li>
                  <li>
                    Use automated systems to access the service in a manner that
                    exceeds reasonable usage
                  </li>
                </ul>
                <p className="mt-4 rounded-lg bg-yellow-50 p-4 text-sm text-gray-700">
                  <strong>Note:</strong> Violation of this policy may result in
                  immediate suspension or termination of your account without
                  refund.
                </p>
              </section>

              {/* WhatsApp Compliance */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  5. WhatsApp Business API Compliance
                </h2>
                <p className="mb-4 text-gray-600">
                  When using our WhatsApp integration features, you must comply
                  with:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-600">
                  <li>WhatsApp's Business Policy and Commerce Policy</li>
                  <li>Meta's Terms of Service and Community Standards</li>
                  <li>All applicable messaging and communications laws</li>
                  <li>
                    Anti-spam regulations (including CAN-SPAM, GDPR, etc.)
                  </li>
                </ul>
                <p className="mt-4 text-gray-600">
                  You acknowledge that WhatsApp may monitor your usage and Meta
                  reserves the right to restrict or terminate your access to the
                  WhatsApp Business API for policy violations.
                </p>
              </section>

              {/* Pricing and Payment */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  6. Pricing, Payment, and Billing
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Fees
                    </h3>
                    <p className="text-gray-600">
                      You agree to pay all fees associated with your chosen
                      subscription plan. Prices are subject to change with 30
                      days' notice. Any changes will not affect your current
                      billing period.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Billing
                    </h3>
                    <p className="text-gray-600">
                      Subscription fees are billed in advance on a monthly or
                      annual basis. You authorize us to charge your payment
                      method on file for all fees incurred.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Usage-Based Charges
                    </h3>
                    <p className="text-gray-600">
                      Certain features may incur additional usage-based charges,
                      such as WhatsApp message delivery fees. These will be
                      clearly communicated and billed separately.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Refunds and Cancellations
                    </h3>
                    <p className="text-gray-600">
                      You may cancel your subscription at any time.
                      Cancellations take effect at the end of the current
                      billing period. Refunds are provided on a case-by-case
                      basis at our discretion.
                    </p>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  7. Intellectual Property Rights
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Our Property
                    </h3>
                    <p className="text-gray-600">
                      WhatsEase and its licensors own all rights, title, and
                      interest in the service, including all software,
                      technology, content, trademarks, and intellectual
                      property. You may not copy, modify, distribute, or reverse
                      engineer any part of our service.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Your Content
                    </h3>
                    <p className="text-gray-600">
                      You retain ownership of any content you upload or create
                      using our service. By using our service, you grant us a
                      limited license to host, store, and process your content
                      solely to provide the service to you.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data and Privacy */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  8. Data and Privacy
                </h2>
                <p className="mb-4 text-gray-600">
                  Your use of our service is also governed by our{' '}
                  <a href="/privacy" className="text-[#04b851] hover:underline">
                    Privacy Policy
                  </a>
                  . You acknowledge that:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-600">
                  <li>
                    You are responsible for obtaining necessary consents from
                    your customers before messaging them
                  </li>
                  <li>
                    You must comply with all applicable data protection laws
                    (GDPR, CCPA, etc.)
                  </li>
                  <li>
                    You are the data controller for customer data you process
                    through our service
                  </li>
                  <li>
                    We act as a data processor and follow your instructions
                    regarding data handling
                  </li>
                </ul>
              </section>

              {/* Warranties and Disclaimers */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  9. Warranties and Disclaimers
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Service Availability
                    </h3>
                    <p className="text-gray-600">
                      We strive to provide reliable service with 99.9% uptime,
                      but we do not guarantee uninterrupted access. The service
                      is provided "AS IS" and "AS AVAILABLE" without warranties
                      of any kind.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      No Warranty
                    </h3>
                    <p className="text-gray-600">
                      TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL
                      WARRANTIES, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF
                      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                      NON-INFRINGEMENT.
                    </p>
                  </div>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  10. Limitation of Liability
                </h2>
                <div className="rounded-lg bg-red-50 p-6">
                  <p className="mb-4 text-sm font-semibold uppercase text-red-900">
                    Important Legal Notice
                  </p>
                  <p className="text-gray-700">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, WHATSEASE SHALL NOT
                    BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                    CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS
                    OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY
                    LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES,
                    RESULTING FROM:
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                    <li>
                      Your access to or use of or inability to access or use the
                      service
                    </li>
                    <li>
                      Any conduct or content of any third party on the service
                    </li>
                    <li>
                      Unauthorized access, use, or alteration of your content
                    </li>
                    <li>Any other matter relating to the service</li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US
                    IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO
                    THE CLAIM, OR $100, WHICHEVER IS GREATER.
                  </p>
                </div>
              </section>

              {/* Indemnification */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  11. Indemnification
                </h2>
                <p className="text-gray-600">
                  You agree to indemnify, defend, and hold harmless WhatsEase,
                  its affiliates, officers, directors, employees, and agents
                  from any claims, damages, losses, liabilities, and expenses
                  (including legal fees) arising from:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-600">
                  <li>Your use of the service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Your violation of any applicable laws or regulations</li>
                  <li>Content you submit or transmit through the service</li>
                </ul>
              </section>

              {/* Termination */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  12. Termination
                </h2>
                <p className="mb-4 text-gray-600">
                  We may terminate or suspend your account and access to the
                  service immediately, without prior notice or liability, for
                  any reason, including:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-600">
                  <li>Breach of these Terms</li>
                  <li>Violation of WhatsApp's policies</li>
                  <li>Fraudulent or illegal activities</li>
                  <li>Non-payment of fees</li>
                  <li>Request by law enforcement or government agency</li>
                </ul>
                <p className="mt-4 text-gray-600">
                  Upon termination, your right to use the service will cease
                  immediately. We will make reasonable efforts to provide you
                  access to export your data within 30 days of termination.
                </p>
              </section>

              {/* Dispute Resolution */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  13. Dispute Resolution and Governing Law
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Governing Law
                    </h3>
                    <p className="text-gray-600">
                      These Terms shall be governed by and construed in
                      accordance with the laws of [Your Jurisdiction], without
                      regard to its conflict of law provisions.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Arbitration
                    </h3>
                    <p className="text-gray-600">
                      Any dispute arising from these Terms or the service shall
                      be resolved through binding arbitration, except where
                      prohibited by law. You waive your right to participate in
                      a class action lawsuit or class-wide arbitration.
                    </p>
                  </div>
                </div>
              </section>

              {/* Changes to Terms */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  14. Changes to Terms
                </h2>
                <p className="text-gray-600">
                  We reserve the right to modify these Terms at any time. If we
                  make material changes, we will notify you by email or through
                  a notice on our website at least 30 days before the changes
                  take effect. Your continued use of the service after changes
                  become effective constitutes acceptance of the revised Terms.
                </p>
              </section>

              {/* General Provisions */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  15. General Provisions
                </h2>
                <ul className="list-disc space-y-2 pl-6 text-gray-600">
                  <li>
                    <strong>Entire Agreement:</strong> These Terms constitute
                    the entire agreement between you and WhatsEase.
                  </li>
                  <li>
                    <strong>Waiver:</strong> No waiver of any term shall be
                    deemed a further or continuing waiver.
                  </li>
                  <li>
                    <strong>Severability:</strong> If any provision is held
                    invalid, the remainder shall continue in effect.
                  </li>
                  <li>
                    <strong>Assignment:</strong> You may not assign these Terms
                    without our written consent.
                  </li>
                  <li>
                    <strong>Force Majeure:</strong> We are not liable for delays
                    or failures due to circumstances beyond our control.
                  </li>
                </ul>
              </section>

              {/* Contact */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  16. Contact Information
                </h2>
                <p className="mb-4 text-gray-600">
                  If you have questions about these Terms, please contact us:
                </p>
                <div className="rounded-lg bg-gray-50 p-6">
                  <p className="mb-2 text-gray-900">
                    <strong>WhatsEase Legal Team</strong>
                  </p>
                  <p className="text-gray-600">
                    Email:{' '}
                    <a
                      href="mailto:connect.whatsease@gmail.com"
                      className="text-[#04b851] hover:underline"
                    >
                      connect.whatsease@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    Support:{' '}
                    <a
                      href="mailto:help@whatsease.in"
                      className="text-[#04b851] hover:underline"
                    >
                      help@whatsease.in
                    </a>
                  </p>
                  <p className="mt-2 text-gray-600">
                    Address: 6th Floor, 616 Darshanam Crossroad, Soma Talav Char
                    Rasta, Vadodara - 390025
                  </p>
                </div>
              </section>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/privacy"
              className="text-sm font-medium text-[#04b851] hover:underline"
            >
              Privacy Policy
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="/cookies"
              className="text-sm font-medium text-[#04b851] hover:underline"
            >
              Cookie Policy
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="/demo"
              className="text-sm font-medium text-[#04b851] hover:underline"
            >
              Request Demo
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
