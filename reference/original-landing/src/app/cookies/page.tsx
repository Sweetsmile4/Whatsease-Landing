'use client';

import React, { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import {
  CakeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function CookiesPage() {
  const lastUpdated = 'October 9, 2025';
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: true,
    analytics: true,
    marketing: false,
  });

  const handleToggle = (type: keyof typeof cookiePreferences) => {
    if (type === 'necessary') return; // Necessary cookies cannot be disabled
    setCookiePreferences((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleSavePreferences = () => {
    // In a real implementation, you would save these preferences to cookies/localStorage
    console.log('Saving cookie preferences:', cookiePreferences);
    alert('Cookie preferences saved successfully!');
  };

  const highlights = [
    {
      icon: CakeIcon,
      title: 'What are cookies?',
      description:
        'Small text files stored on your device to enhance your experience',
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics tracking',
      description: 'Help us understand how you use our platform',
    },
    {
      icon: Cog6ToothIcon,
      title: 'Customization',
      description: 'Remember your preferences and settings',
    },
    {
      icon: UserGroupIcon,
      title: 'You control it',
      description: 'Manage your cookie preferences anytime',
    },
  ];

  const cookieTypes = [
    {
      name: 'Necessary Cookies',
      key: 'necessary' as const,
      required: true,
      description:
        'These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.',
      examples: [
        'Authentication tokens to keep you logged in',
        'Security tokens to prevent CSRF attacks',
        'Session cookies for maintaining your session state',
        'Load balancing cookies for optimal performance',
      ],
      duration: 'Session or up to 1 year',
    },
    {
      name: 'Functional Cookies',
      key: 'functional' as const,
      required: false,
      description:
        'These cookies enable personalized features and remember your preferences. They improve your experience by remembering your choices.',
      examples: [
        'Language preferences',
        'Theme settings (light/dark mode)',
        'Region or timezone settings',
        'Notification preferences',
        'Dashboard layout customizations',
      ],
      duration: 'Up to 1 year',
    },
    {
      name: 'Analytics Cookies',
      key: 'analytics' as const,
      required: false,
      description:
        'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our service.',
      examples: [
        'Google Analytics for usage statistics',
        'Page view tracking',
        'Feature usage analytics',
        'Performance monitoring',
        'Error tracking and debugging',
      ],
      duration: 'Up to 2 years',
    },
    {
      name: 'Marketing Cookies',
      key: 'marketing' as const,
      required: false,
      description:
        'These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.',
      examples: [
        'Google Ads conversion tracking',
        'Facebook Pixel for retargeting',
        'LinkedIn Insight Tag',
        'Ad personalization preferences',
        'Campaign performance tracking',
      ],
      duration: 'Up to 2 years',
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
              Cookie Policy
            </h1>
            <p className="mt-4 text-center text-lg text-white/90">
              Learn about how we use cookies and how you can control them.
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

        {/* Cookie Preferences Panel */}
        <div className="mx-auto max-w-4xl px-4 pb-8 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">
              Manage Cookie Preferences
            </h2>
            <p className="mb-6 text-gray-600">
              Control which cookies you want to allow. Necessary cookies cannot
              be disabled as they are essential for the website to function.
            </p>

            <div className="space-y-4">
              {cookieTypes.map((cookie) => (
                <div
                  key={cookie.key}
                  className="flex items-start justify-between rounded-lg border border-gray-200 p-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">
                        {cookie.name}
                      </h3>
                      {cookie.required && (
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      {cookie.description}
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => handleToggle(cookie.key)}
                      disabled={cookie.required}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        cookiePreferences[cookie.key]
                          ? 'bg-[#04b851]'
                          : 'bg-gray-300'
                      } ${cookie.required ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                      role="switch"
                      aria-checked={cookiePreferences[cookie.key]}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          cookiePreferences[cookie.key]
                            ? 'translate-x-6'
                            : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleSavePreferences}
                className="rounded-xl bg-[#04b851] px-6 py-2 font-medium text-white transition-colors hover:bg-[#039943]"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-white p-8 shadow-sm lg:p-12">
            <div className="prose prose-gray max-w-none">
              {/* What Are Cookies */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  What Are Cookies?
                </h2>
                <p className="text-gray-600">
                  Cookies are small text files that are placed on your computer
                  or mobile device when you visit a website. They are widely
                  used to make websites work more efficiently and provide
                  information to website owners. Cookies help websites remember
                  your preferences and improve your browsing experience.
                </p>
                <p className="mt-4 text-gray-600">
                  We use both first-party cookies (set by WhatsEase) and
                  third-party cookies (set by external services like analytics
                  providers) on our website.
                </p>
              </section>

              {/* Why We Use Cookies */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Why We Use Cookies
                </h2>
                <p className="mb-4 text-gray-600">
                  We use cookies for several important reasons:
                </p>
                <ul className="list-disc space-y-2 pl-6 text-gray-600">
                  <li>
                    <strong>Essential functionality:</strong> To enable core
                    features like user authentication and account management
                  </li>
                  <li>
                    <strong>Performance optimization:</strong> To ensure our
                    platform loads quickly and runs smoothly
                  </li>
                  <li>
                    <strong>Personalization:</strong> To remember your
                    preferences and provide a customized experience
                  </li>
                  <li>
                    <strong>Analytics:</strong> To understand how our platform
                    is used and identify areas for improvement
                  </li>
                  <li>
                    <strong>Security:</strong> To protect your account and
                    detect fraudulent activity
                  </li>
                  <li>
                    <strong>Marketing:</strong> To deliver relevant
                    advertisements and measure campaign effectiveness
                  </li>
                </ul>
              </section>

              {/* Types of Cookies */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Types of Cookies We Use
                </h2>
                <div className="space-y-6">
                  {cookieTypes.map((cookie, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-200 p-6"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {cookie.name}
                        </h3>
                        {cookie.required ? (
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                            Required
                          </span>
                        ) : (
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                            Optional
                          </span>
                        )}
                      </div>
                      <p className="mb-4 text-gray-600">{cookie.description}</p>
                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-gray-900">
                          Examples:
                        </h4>
                        <ul className="list-disc space-y-1 pl-6 text-sm text-gray-600">
                          {cookie.examples.map((example, i) => (
                            <li key={i}>{example}</li>
                          ))}
                        </ul>
                      </div>
                      <p className="mt-4 text-sm text-gray-500">
                        <strong>Duration:</strong> {cookie.duration}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Third-Party Cookies */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Third-Party Cookies
                </h2>
                <p className="mb-4 text-gray-600">
                  We use services from trusted third-party providers that may
                  set their own cookies. These include:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Google Analytics
                    </h3>
                    <p className="text-gray-600">
                      We use Google Analytics to understand how visitors use our
                      site. Google may use the data collected to contextualize
                      and personalize ads on its own advertising network.
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      Learn more:{' '}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#04b851] hover:underline"
                      >
                        Google Privacy Policy
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Social Media Platforms
                    </h3>
                    <p className="text-gray-600">
                      We use plugins from social media platforms like LinkedIn,
                      Facebook, and Twitter. These platforms may set cookies to
                      track your interactions with our content.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Advertising Partners
                    </h3>
                    <p className="text-gray-600">
                      We work with advertising partners like Google Ads and
                      Facebook Ads to deliver relevant advertisements. These
                      services use cookies to show you ads based on your
                      interests.
                    </p>
                  </div>
                </div>
              </section>

              {/* Managing Cookies */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  How to Manage Your Cookies
                </h2>
                <p className="mb-4 text-gray-600">
                  You have several options for managing cookies:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Cookie Preference Center
                    </h3>
                    <p className="text-gray-600">
                      Use our cookie preference center above to enable or
                      disable optional cookies. Your preferences will be saved
                      and respected during your visits.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Browser Settings
                    </h3>
                    <p className="mb-2 text-gray-600">
                      Most web browsers allow you to control cookies through
                      their settings. Here's how to manage cookies in popular
                      browsers:
                    </p>
                    <ul className="list-disc space-y-1 pl-6 text-sm text-gray-600">
                      <li>
                        <a
                          href="https://support.google.com/chrome/answer/95647"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#04b851] hover:underline"
                        >
                          Google Chrome
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#04b851] hover:underline"
                        >
                          Mozilla Firefox
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#04b851] hover:underline"
                        >
                          Safari
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#04b851] hover:underline"
                        >
                          Microsoft Edge
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Opt-Out of Targeted Advertising
                    </h3>
                    <p className="text-gray-600">
                      You can opt out of targeted advertising from participating
                      companies through:
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-600">
                      <li>
                        <a
                          href="https://optout.aboutads.info/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#04b851] hover:underline"
                        >
                          Digital Advertising Alliance (DAA)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youronlinechoices.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#04b851] hover:underline"
                        >
                          European Interactive Digital Advertising Alliance
                          (EDAA)
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.networkadvertising.org/choices/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#04b851] hover:underline"
                        >
                          Network Advertising Initiative (NAI)
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 rounded-lg bg-yellow-50 p-4 text-sm text-gray-700">
                  <strong>Please note:</strong> Blocking or deleting cookies may
                  impact your experience on our website. Some features may not
                  work properly without cookies.
                </div>
              </section>

              {/* Do Not Track */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Do Not Track Signals
                </h2>
                <p className="text-gray-600">
                  Some browsers support a "Do Not Track" (DNT) feature that
                  signals websites you visit that you do not want to have your
                  online activity tracked. Currently, there is no industry
                  standard for recognizing or honoring DNT signals. We do not
                  currently respond to DNT signals.
                </p>
              </section>

              {/* Updates to Policy */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Updates to This Cookie Policy
                </h2>
                <p className="text-gray-600">
                  We may update this Cookie Policy from time to time to reflect
                  changes in our practices or for other operational, legal, or
                  regulatory reasons. We encourage you to review this policy
                  periodically. The "Last updated" date at the top of this page
                  indicates when the policy was last revised.
                </p>
              </section>

              {/* Contact */}
              <section className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  Questions About Cookies?
                </h2>
                <p className="mb-4 text-gray-600">
                  If you have questions about our use of cookies or this Cookie
                  Policy, please contact us:
                </p>
                <div className="rounded-lg bg-gray-50 p-6">
                  <p className="mb-2 text-gray-900">
                    <strong>WhatsEase Privacy Team</strong>
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
              href="/terms"
              className="text-sm font-medium text-[#04b851] hover:underline"
            >
              Terms of Service
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
