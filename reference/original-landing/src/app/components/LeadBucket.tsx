'use client';

import { motion } from 'framer-motion';
import {
  ArrowPathIcon,
  BoltIcon,
  CheckCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // <-- FIXED import

export default function LeadBucket() {
  const router = useRouter(); // This now works in the App Router

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full bg-[#f9fafb] from-green-50 to-white px-5 py-16 font-figtreeRegular md:px-10">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16 text-center font-figtreeNormal text-3xl text-black md:text-5xl"
        >
          Lead Capture & Distribution System
        </motion.h2>

        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Left column - Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="w-full lg:w-1/2"
          >
            <div className="relative h-[300px] w-full md:h-[500px] lg:h-[700px]">
              <Image
                src="/leadBucket.png"
                alt="Lead Funnel Visualization"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="w-full lg:w-1/2"
          >
            <h3 className="my-2 mb-5 text-lg font-semibold text-black sm:text-xl md:text-2xl lg:text-3xl">
              Lead Automation & Distribution
            </h3>

            <p className="mb-8 text-lg text-gray-700">
              Effortlessly capture, organize, and assign leads to the right
              sales representatives in real time. Enhance your sales team&apos;s
              speed and ensure every lead gets the attention it deserves.
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <BoltIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900">
                    Instant Lead Routing
                  </h4>
                  <p className="text-gray-600">
                    Automatically route leads to the right team members based on
                    criteria like location, product interest, or lead source.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <ArrowPathIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900">
                    Multi-Channel Integration
                  </h4>
                  <p className="text-gray-600">
                    Easily integrates with Google, Facebook, email, websites,
                    landing pages, social media platforms, lead portals, and 30+
                    additional sources.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <UserGroupIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900">
                    Lead Qualification
                  </h4>
                  <p className="text-gray-600">
                    Automatically score and qualify leads based on behavior and
                    engagement, ensuring your team focuses on high-potential
                    prospects.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start">
                <div className="mr-4 mt-1 flex-shrink-0">
                  <CheckCircleIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900">
                    Performance Tracking
                  </h4>
                  <p className="text-gray-600">
                    Monitor lead conversion rates, response times, and sales rep
                    performance with intuitive dashboards and reporting.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10"></div>
          </motion.div>
        </div>
        <div className="flex w-full items-center justify-center">
          <button
            onClick={() => {
              router.push('/login');
            }}
            className="rounded-xl border border-primary/[0.1] bg-primary px-8 py-3 font-medium text-white shadow-inner-and-outer shadow-white/[0.5] transition duration-300 hover:shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
