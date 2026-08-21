'use client';

import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  EyeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function PrivacyPage() {
  const lastUpdated = 'October 9, 2025';

  const highlights = [
    {
      icon: ShieldCheckIcon,
      title: 'Your data is protected',
      description: 'We use industry-standard encryption and security measures',
    },
    {
      icon: LockClosedIcon,
      title: 'No data selling',
      description: 'We never sell your personal information to third parties',
    },
    {
      icon: EyeIcon,
      title: 'Transparency first',
      description: 'Clear information about what we collect and why',
    },
    {
      icon: UserGroupIcon,
      title: 'You have control',
      description: 'Access, modify, or delete your data at any time',
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-center text-lg text-white/90">
              Your privacy matters to us. Learn how we protect and handle your
              data.
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
              {/* Introduction */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Introduction
                </h2>
                <p className="text-gray-600">
                  Welcome to WhatsEase. We respect your privacy and are
                  committed to protecting your personal data. This privacy
                  policy will inform you about how we look after your personal
                  data when you visit our website or use our services and tell
                  you about your privacy rights and how the law protects you.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Information We Collect
                </h2>
                <p className="mb-4 text-gray-600">
                  We collect and process the following types of information:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Personal Information
                    </h3>
                    <ul className="list-disc space-y-2 pl-6 text-gray-600">
                      <li>Name, email address, and phone number</li>
                      <li>Company name and business information</li>
                      <li>Billing and payment information</li>
                      <li>Profile information and preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Usage Information
                    </h3>
                    <ul className="list-disc space-y-2 pl-6 text-gray-600">
                      <li>Log data and analytics information</li>
                      <li>Device information and IP address</li>
                      <li>Cookies and similar tracking technologies</li>
                      <li>
                        Communication data from WhatsApp Business API usage
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Business Communication Data
                    </h3>
                    <ul className="list-disc space-y-2 pl-6 text-gray-600">
                      <li>Messages sent and received through our platform</li>
                      <li>Contact lists and customer information you upload</li>
                      <li>Chatbot interactions and conversation flows</li>
                      <li>Campaign performance and analytics data</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  How We Use Your Information
                </h2>
                <p className="mb-4 text-gray-600">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-600">
                  <li>
                    To provide and maintain our CRM and messaging services
                  </li>
                  <li>To process your transactions and manage your account</li>
                  <li>
                    To send you service updates, technical notices, and support
                    messages
                  </li>
                  <li>
                    To respond to your inquiries and provide customer support
                  </li>
                  <li>To improve our services and develop new features</li>
                  <li>
                    To detect and prevent fraud, abuse, and security incidents
                  </li>
                  <li>
                    To comply with legal obligations and enforce our terms
                  </li>
                  <li>
                    To send you marketing communications (with your consent, excluding Google Workspace APIs data)
                  </li>
                </ul>
              </section>

              {/* Google Workspace APIs User Data */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Google Workspace APIs User Data
                </h2>
                <p className="mb-4 text-gray-600">
                  WhatsEase and its add-ons (including Roovy) comply with the Google API Services User Data Policy, including the Limited Use requirements.
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-600">
                  <li>
                    <strong>Limited Use:</strong> Our use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.
                  </li>
                  <li>
                    <strong>App Functionality:</strong> We only use Google user data to provide or improve user-facing features that are prominent in the requesting application's user interface.
                  </li>
                  <li>
                    <strong>No AI/ML Training:</strong> We do not use Google Workspace APIs data to develop, improve, or train generalized Artificial Intelligence (AI) and/or Machine Learning (ML) models.
                  </li>
                  <li>
                    <strong>No Data Selling or Marketing:</strong> We do not transfer or sell Google user data to third parties for advertising, marketing, or tracking purposes.
                  </li>
                  <li>
                    <strong>Human Access:</strong> We do not allow humans to read your data unless we have your affirmative agreement for specific messages, doing so is necessary for security purposes such as investigating abuse, to comply with applicable law, or for the app's internal operations and even then only when the data has been aggregated and anonymized.
                  </li>
                </ul>
              </section>

              {/* Data Sharing */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  How We Share Your Information
                </h2>
                <p className="mb-4 text-gray-600">
                  We may share your information in the following circumstances:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Service Providers
                    </h3>
                    <p className="text-gray-600">
                      We work with third-party service providers who help us
                      operate our platform, including cloud hosting, payment
                      processing, analytics, and customer support tools. These
                      providers are contractually obligated to protect your
                      data.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      WhatsApp Business API
                    </h3>
                    <p className="text-gray-600">
                      When you use our WhatsApp messaging features, your
                      communications are subject to Meta's WhatsApp Business API
                      terms and privacy policies.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Legal Requirements
                    </h3>
                    <p className="text-gray-600">
                      We may disclose your information if required by law, court
                      order, or governmental authority, or to protect our rights
                      and prevent fraud.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Business Transfers
                    </h3>
                    <p className="text-gray-600">
                      In the event of a merger, acquisition, or sale of assets,
                      your information may be transferred to the acquiring
                      entity.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Security */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Data Security
                </h2>
                <p className="mb-4 text-gray-600">
                  We implement appropriate technical and organizational measures
                  to protect your personal data, including:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-600">
                  <li>End-to-end encryption for sensitive communications</li>
                  <li>
                    Secure data storage with industry-standard encryption
                    (AES-256)
                  </li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Strict access controls and authentication measures</li>
                  <li>
                    Employee training on data protection and security best
                    practices
                  </li>
                  <li>Regular backups and disaster recovery procedures</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Your Privacy Rights
                </h2>
                <p className="mb-4 text-gray-600">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-600">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal data
                    we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate or incomplete data
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    data
                  </li>
                  <li>
                    <strong>Portability:</strong> Request transfer of your data
                    to another service
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing of your
                    data for certain purposes
                  </li>
                  <li>
                    <strong>Restriction:</strong> Request restriction of
                    processing your data
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Withdraw consent for data
                    processing at any time
                  </li>
                </ul>
                <p className="mt-4 text-gray-600">
                  To exercise these rights, please contact us at{' '}
                  <a
                    href="mailto:help@whatsease.in"
                    className="text-[#04b851] hover:underline"
                  >
                    help@whatsease.in
                  </a>
                </p>
              </section>

              {/* Data Retention */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Data Retention
                </h2>
                <p className="text-gray-600">
                  We retain your personal data only for as long as necessary to
                  fulfill the purposes outlined in this privacy policy, unless a
                  longer retention period is required or permitted by law. When
                  data is no longer needed, we securely delete or anonymize it.
                </p>
              </section>

              {/* Cookies */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Cookies and Tracking
                </h2>
                <p className="mb-4 text-gray-600">
                  We use cookies and similar tracking technologies to enhance
                  your experience. For detailed information about our cookie
                  practices, please see our{' '}
                  <a href="/cookies" className="text-[#04b851] hover:underline">
                    Cookie Policy
                  </a>
                  .
                </p>
              </section>

              {/* International Transfers */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  International Data Transfers
                </h2>
                <p className="text-gray-600">
                  Your information may be transferred to and processed in
                  countries other than your own. We ensure that such transfers
                  comply with applicable data protection laws and implement
                  appropriate safeguards, such as standard contractual clauses.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Children's Privacy
                </h2>
                <p className="text-gray-600">
                  Our services are not intended for individuals under the age of
                  18. We do not knowingly collect personal data from children.
                  If we become aware that we have collected data from a child,
                  we will take steps to delete it promptly.
                </p>
              </section>

              {/* Changes to Policy */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-gray-600">
                  We may update this privacy policy from time to time. We will
                  notify you of any material changes by posting the new policy
                  on this page and updating the "Last updated" date. We
                  encourage you to review this policy periodically.
                </p>
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
              href="/terms"
              className="text-sm font-medium text-[#04b851] hover:underline"
            >
              Terms of Service
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
