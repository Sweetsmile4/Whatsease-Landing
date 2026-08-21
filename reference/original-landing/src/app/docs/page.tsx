'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Safari } from '@/components/ui/safari';
import DocsSidebar from '@/components/docs/DocsSidebar';
import DocsSearch from '@/components/docs/DocsSearch';

// Sample code block for demonstration
const sampleCode = `// WhatsEase API - Send Message Example
const response = await fetch('https://api.whatsease.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    to: '919876543210',
    type: 'text',
    text: { body: 'Hello from WhatsEase!' }
  })
});

const data = await response.json();
console.log(data);`;

export default function Docs() {
  const docsRef = useRef(null);

  // For parallax scrolling effect
  const { scrollYProgress } = useScroll({
    target: docsRef,
    offset: ['start start', 'end start'],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  return (
    <div
      className="min-h-screen w-full bg-[#0b0c17] pt-20 text-white"
      ref={docsRef}
    >
      <Navbar darkMode />

      {/* Hero Section with Gradient */}
      <motion.div
        className="relative flex h-[30vh] w-full items-center justify-center md:h-[40vh]"
        style={{ opacity: headerOpacity, y: headerY }}
      >
        <div
          className="absolute left-0 top-0 h-[300px] w-full"
          style={{
            background:
              'radial-gradient(circle at center top, #1a1b2b 20%, #0b0c17 70%)',
            zIndex: 0,
          }}
        />
        <div
          className="absolute left-0 top-0 h-[300px] w-full"
          style={{
            background:
              'radial-gradient(circle at center top, #1a1b2b 20%, transparent 70%)',
            zIndex: 0,
          }}
        />

        <div className="container z-10 mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            WhatsEase Documentation
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 md:text-xl">
            Everything you need to build powerful WhatsApp experiences
          </p>

          <div className="mt-8 flex justify-center">
            <DocsSearch />
          </div>
        </div>
      </motion.div>

      {/* Main Documentation Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar Navigation */}
          <DocsSidebar />

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Content Header */}
            <div className="mb-8">
              <div className="mb-3 flex items-center gap-2 text-sm text-gray-400">
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
                <ChevronRightIcon className="h-3 w-3" />
                <Link
                  href="/docs"
                  className="transition-colors hover:text-white"
                >
                  Documentation
                </Link>
                <ChevronRightIcon className="h-3 w-3" />
                <span className="text-white">WhatsApp Cloud API</span>
              </div>

              <h1 className="mb-3 text-3xl font-bold">WhatsApp Cloud API</h1>
              <p className="text-gray-300">
                Build rich customer experiences with the power of
                WhatsApp&apos;s messaging platform.
              </p>
            </div>

            {/* API Preview with Safari Component */}
            <div id="introduction" className="mb-16 pt-4">
              <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
              <p className="mb-6 text-gray-300">
                WhatsEase uses the Meta WhatsApp Cloud API to power its
                messaging capabilities. Our platform provides a simplified
                interface and powerful tools that make it easy to build advanced
                WhatsApp experiences without dealing with the complexity of the
                raw API.
              </p>
              <p className="mb-8 text-gray-300">
                Below you&apos;ll find the official WhatsApp Cloud API
                documentation that WhatsEase is built on. You can explore it
                directly or use our simplified guides further down this page.
              </p>

              <div className="overflow-hidden rounded-xl border border-white/10 shadow-xl">
                <Safari
                  url="https://developers.facebook.com/docs/whatsapp/cloud-api"
                  className="dark h-[500px] w-full"
                  screenshotApiKey="336ed3"
                />
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://developers.facebook.com/docs/whatsapp/cloud-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/[.1] bg-[#04b851] px-6 py-2.5 text-white shadow-inner-and-outer shadow-white/[.4] transition-colors hover:bg-[#039c43]"
                >
                  Open official documentation
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Start Guide Section */}
            <div id="quick-start" className="mb-16 pt-4">
              <h2 className="mb-4 text-2xl font-semibold">Quick Start Guide</h2>
              <p className="mb-4 text-gray-300">
                Get up and running with WhatsEase in under 10 minutes. This
                guide will walk you through the basics of setting up your
                WhatsApp Business account, connecting it to WhatsEase, and
                sending your first message.
              </p>

              <div className="mb-8 space-y-6">
                <div className="rounded-lg border border-white/10 bg-[#141526] p-4">
                  <h3 className="mb-2 font-medium">
                    Step 1: Create a WhatsApp Business Account
                  </h3>
                  <p className="text-sm text-gray-300">
                    Sign up for a WhatsApp Business account through Meta&apos;s
                    Business Manager.
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-[#141526] p-4">
                  <h3 className="mb-2 font-medium">
                    Step 2: Connect to WhatsEase
                  </h3>
                  <p className="text-sm text-gray-300">
                    Log in to your WhatsEase dashboard and connect your WhatsApp
                    Business account.
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-[#141526] p-4">
                  <h3 className="mb-2 font-medium">
                    Step 3: Send Your First Message
                  </h3>
                  <p className="text-sm text-gray-300">
                    Create a template or use our drag-and-drop composer to send
                    your first message.
                  </p>
                </div>
              </div>

              {/* <Link
                href="/docs/quick-start"
                className="flex items-center gap-1 text-blue-400 hover:underline"
              >
                Read full quick start guide
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link> */}
            </div>

            {/* Installation Section */}
            {/* <div id="installation" className="mb-16 pt-4">
              <h2 className="mb-4 text-2xl font-semibold">Installation</h2>
              <p className="mb-4 text-gray-300">
                WhatsEase offers multiple integration options to fit your
                development workflow. Choose the one that works best for your
                project.
              </p>

              <div className="space-y-6">
                <div className="rounded-xl border border-white/10 bg-[#11111e] p-6 shadow-lg">
                  <h3 className="mb-3 text-xl font-medium">NPM Package</h3>
                  <p className="mb-4 text-gray-300">
                    Install our official NPM package to get started with
                    WhatsEase in your JavaScript project:
                  </p>
                  <div className="overflow-hidden rounded-lg bg-[#0e0e1c]">
                    <div className="flex items-center justify-between bg-[#1a1b2b] px-4 py-2">
                      <span className="font-mono text-sm text-gray-300">
                        Terminal
                      </span>
                      <button className="text-sm text-blue-400 transition-colors hover:text-blue-300">
                        Copy
                      </button>
                    </div>
                    <pre className="overflow-auto p-4 text-sm">
                      <code className="text-green-300">
                        npm install @whatsease/sdk
                      </code>
                    </pre>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#11111e] p-6 shadow-lg">
                  <h3 className="mb-3 text-xl font-medium">REST API</h3>
                  <p className="mb-4 text-gray-300">
                    If you prefer to use our REST API directly, here&apos;s an
                    example of how to authenticate:
                  </p>
                  <div className="overflow-hidden rounded-lg bg-[#0e0e1c]">
                    <div className="flex items-center justify-between bg-[#1a1b2b] px-4 py-2">
                      <span className="font-mono text-sm text-gray-300">
                        Authentication Example
                      </span>
                      <button className="text-sm text-blue-400 transition-colors hover:text-blue-300">
                        Copy
                      </button>
                    </div>

                    <pre className="overflow-auto p-4 text-sm">
                      <code className="text-blue-300">
                        const apiKey = &apos;your_api_key_here&apos;;{'\n'}
                        {'\n'}
                        // Include this header in all API requests{'\n'}
                        const headers = {'{'}
                        {'\n'}
                        {'  '}&apos;Content-Type&apos;:
                        &apos;application/json&apos;,{'\n'}
                        {'  '}&apos;Authorization&apos;: `Bearer ${'{'}apiKey
                        {'}'}`{'\n'}
                        {'}'};
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div> */}

            {/* API Reference - Authentication Section */}
            {/* <div id="authentication" className="mb-16 pt-4">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
                <span className="inline-block rounded-lg bg-[#1a1b2b] p-1.5">
                  <svg
                    className="h-5 w-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                Authentication
              </h2>

              <p className="mb-6 text-gray-300">
                All API requests to WhatsEase require authentication using an
                API key. You can generate an API key from your WhatsEase
                dashboard under Settings → API Keys.
              </p>

              <div className="rounded-xl border border-white/10 bg-[#11111e] p-6 shadow-lg">
                <h3 className="mb-3 text-xl font-medium">
                  API Key Authentication
                </h3>
                <p className="mb-4 text-gray-300">
                  Include your API key in the Authorization header of all
                  requests:
                </p>
                <div className="overflow-hidden rounded-lg bg-[#0e0e1c]">
                  <div className="flex items-center justify-between bg-[#1a1b2b] px-4 py-2">
                    <span className="font-mono text-sm text-gray-300">
                      Authentication Header
                    </span>
                    <button className="text-sm text-blue-400 transition-colors hover:text-blue-300">
                      Copy
                    </button>
                  </div>
                  <pre className="overflow-auto p-4 text-sm">
                    <code className="text-blue-300">
                      Authorization: Bearer YOUR_API_KEY
                    </code>
                  </pre>
                </div>
              </div>
            </div> */}

            {/* Message API Section */}
            {/* <div id="message-api" className="mb-16 pt-4">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold">
                <span className="inline-block rounded-lg bg-[#1a1b2b] p-1.5">
                  <svg
                    className="h-5 w-5 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </span>
                Message API
              </h2>

              <p className="mb-6 text-gray-300">
                The Message API allows you to send various types of messages to
                your WhatsApp users, including text messages, media messages,
                and interactive messages.
              </p>

              <div className="rounded-xl border border-white/10 bg-[#11111e] p-6 shadow-lg">
                <h3 className="mb-3 text-xl font-medium">Sending Messages</h3>
                <p className="mb-4 text-gray-300">
                  Send text, media, or interactive messages to your WhatsApp
                  users:
                </p>
                <div className="overflow-hidden rounded-lg bg-[#0e0e1c]">
                  <div className="flex items-center justify-between bg-[#1a1b2b] px-4 py-2">
                    <span className="font-mono text-sm text-gray-300">
                      Send Message Example
                    </span>
                    <button className="text-sm text-blue-400 transition-colors hover:text-blue-300">
                      Copy
                    </button>
                  </div>
                  <pre className="overflow-auto p-4 text-sm">
                    <code className="text-green-300">{sampleCode}</code>
                  </pre>
                </div>
              </div>
            </div> */}

            {/* Feature Cards */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-semibold">
                Integration Features
              </h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#11111e] to-[#161628] p-6 shadow-lg transition-transform hover:scale-[1.02]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                    <svg
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Event Registration
                  </h3>
                  <p className="text-gray-300">
                    Automate event registrations and send reminders directly
                    through WhatsApp.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#11111e] to-[#161628] p-6 shadow-lg transition-transform hover:scale-[1.02]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/20">
                    <svg
                      className="h-6 w-6 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    QR Code Validation
                  </h3>
                  <p className="text-gray-300">
                    Scan and validate tickets with our QR code integration on
                    WhatsApp.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#11111e] to-[#161628] p-6 shadow-lg transition-transform hover:scale-[1.02]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                    <svg
                      className="h-6 w-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Lead Collection
                  </h3>
                  <p className="text-gray-300">
                    Capture and manage leads from multiple channels in one
                    inbox.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#11111e] to-[#161628] p-6 shadow-lg transition-transform hover:scale-[1.02]">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/20">
                    <svg
                      className="h-6 w-6 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Analytics Dashboard
                  </h3>
                  <p className="text-gray-300">
                    Measure campaign performance with detailed analytics and
                    insights.
                  </p>
                </div>
              </div>
            </div>

            {/* Need Help Section */}
            {/* <div className="mt-16 rounded-xl border border-white/10 bg-gradient-to-r from-[#1a1b2b] to-[#11111e] p-8 shadow-lg">
              <div className="flex flex-col items-center gap-6 md:flex-row">
                <div className="flex justify-center md:w-1/4">
                  <div className="rounded-full bg-blue-500/20 p-6">
                    <svg
                      className="h-16 w-16 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="md:w-3/4">
                  <h2 className="mb-2 text-2xl font-bold">Need more help?</h2>
                  <p className="mb-4 text-gray-300">
                    Our support team is ready to help with any questions you
                    have about integration or using WhatsEase features.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="rounded-lg bg-blue-600 px-5 py-2.5 text-white transition-colors hover:bg-blue-700"
                    >
                      Contact Support
                    </Link>
                    <Link
                      href="/community"
                      className="rounded-lg bg-white/10 px-5 py-2.5 text-white transition-colors hover:bg-white/20"
                    >
                      Join Community
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="mt-20 border-t border-white/5 bg-[#0a0a14]">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 md:mb-0">
              <Image
                src="/logo.png"
                alt="WhatsEase Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
              <p className="mt-2 text-gray-400">
                Build better WhatsApp experiences
              </p>
            </div>

            <div className="flex gap-8">
              <Link
                href="/docs/api"
                className="text-gray-300 transition-colors hover:text-white"
              >
                API
              </Link>
              <Link
                href="/docs/guides"
                className="text-gray-300 transition-colors hover:text-white"
              >
                Guides
              </Link>
              <Link
                href="/docs/sdks"
                className="text-gray-300 transition-colors hover:text-white"
              >
                SDKs
              </Link>
              <Link
                href="/docs/changelog"
                className="text-gray-300 transition-colors hover:text-white"
              >
                Changelog
              </Link>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between border-t border-white/5 pt-8 md:flex-row">
            <p className="text-sm text-gray-400">
              © 2024 WhatsEase. All rights reserved.
            </p>
            <div className="mt-4 flex gap-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
