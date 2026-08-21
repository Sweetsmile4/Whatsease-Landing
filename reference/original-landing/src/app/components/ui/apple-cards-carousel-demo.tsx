'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import {
  Carousel,
  Card,
  CarouselNavButtons,
} from '@/app/components/ui/apple-cards-carousel';

export default function AppleCardsCarouselDemo() {
  const carouselRef = useRef<any>(null);

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="h-full w-full pb-10">
      <div className="flex w-full flex-col items-center justify-start">
        <div className="flex w-full max-w-6xl flex-col justify-center gap-5 px-10">
          <h2 className="text-left text-3xl font-semibold text-neutral-900 dark:text-neutral-200 md:text-5xl">
            A solution, perfect for <br /> every industry
          </h2>
          <div className="flex items-center justify-between font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-xl">
            <p>
              WhatsEase optimizes customer communication for businesses <br />
              of any size and industry.
            </p>
            <CarouselNavButtons carouselRef={carouselRef} />
          </div>
        </div>
      </div>
      <Carousel ref={carouselRef} items={cards} showNavButtons={false} />
    </div>
  );
}

// Custom content for each card type
const AIContent = () => (
  <div className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 dark:bg-neutral-800 md:p-14">
    <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        AI-powered WhatsApp conversations.
      </span>{' '}
      Our intelligent chatbots handle routine inquiries, qualify leads, and
      provide instant responses 24/7. Create natural conversations that engage
      customers while reducing response times by up to 80%.
    </p>
    <Image
      src="https://plus.unsplash.com/premium_vector-1726042655464-7e0ebe6dcdb9?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="WhatsEase AI Chatbot"
      width={500}
      height={300}
      className="mx-auto mt-8 h-auto w-full max-w-2xl rounded-lg object-contain shadow-lg"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src =
          'https://via.placeholder.com/500x300?text=WhatsEase+AI+Chatbot';
      }}
    />
  </div>
);

const EventContent = () => (
  <div className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 dark:bg-neutral-800 md:p-14">
    <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Seamless event registration & ticketing.
      </span>{' '}
      Allow attendees to register, purchase tickets, and receive QR code passes
      directly in WhatsApp. Validate entry with our simple scanning app and get
      real-time attendance analytics.
    </p>
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-lg bg-white p-4 shadow-md dark:bg-neutral-700">
        <h3 className="mb-2 text-lg font-semibold text-neutral-800 dark:text-white">
          QR Code Ticketing
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Generate unique QR codes for each attendee, simplifying check-in and
          eliminating paper tickets.
        </p>
      </div>
      <div className="rounded-lg bg-white p-4 shadow-md dark:bg-neutral-700">
        <h3 className="mb-2 text-lg font-semibold text-neutral-800 dark:text-white">
          Automated Reminders
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Send scheduled event reminders to boost attendance rates and reduce
          no-shows.
        </p>
      </div>
    </div>
  </div>
);

const AnalyticsContent = () => (
  <div className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 dark:bg-neutral-800 md:p-14">
    <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Powerful business analytics & insights.
      </span>{' '}
      Track campaign performance, customer engagement, and sales metrics in
      real-time. Our comprehensive dashboard gives you actionable insights to
      optimize your WhatsApp marketing strategy.
    </p>
    <div className="mt-8 overflow-hidden rounded-lg bg-white shadow-lg dark:bg-neutral-700">
      <div className="grid grid-cols-3 gap-4 p-6">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-green-500">92%</span>
          <span className="text-sm text-neutral-600 dark:text-neutral-300">
            Open Rate
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-green-500">4.8x</span>
          <span className="text-sm text-neutral-600 dark:text-neutral-300">
            ROI
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-green-500">3.5m</span>
          <span className="text-sm text-neutral-600 dark:text-neutral-300">
            Response Time
          </span>
        </div>
      </div>
    </div>
  </div>
);

const LeadGenContent = () => (
  <div className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 dark:bg-neutral-800 md:p-14">
    <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Multi-channel lead generation & nurturing.
      </span>{' '}
      Capture leads from Meta Ads, Google Ads, and your website into a unified
      WhatsApp inbox. Automatically qualify and segment leads with interactive
      questionnaires, then nurture them through personalized message sequences.
    </p>
    <div className="mt-8 rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
      <h3 className="mb-4 text-xl font-semibold text-neutral-800 dark:text-white">
        Lead Conversion Journey
      </h3>
      <div className="flex flex-wrap justify-between">
        <div className="mb-4 flex flex-col items-center px-2">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
            1
          </div>
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-300">
            Capture
          </p>
        </div>
        <div className="mb-4 flex flex-col items-center px-2">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
            2
          </div>
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-300">
            Qualify
          </p>
        </div>
        <div className="mb-4 flex flex-col items-center px-2">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
            3
          </div>
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-300">
            Nurture
          </p>
        </div>
        <div className="mb-4 flex flex-col items-center px-2">
          <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
            4
          </div>
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-300">
            Convert
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TeamContent = () => (
  <div className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 dark:bg-neutral-800 md:p-14">
    <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Collaborative team inbox & customer support.
      </span>{' '}
      Assign conversations to team members, track resolution times, and ensure
      no customer message goes unanswered. Our shared inbox makes team
      collaboration seamless while maintaining personalized customer
      experiences.
    </p>
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      <div className="rounded-lg bg-white p-4 shadow-md dark:bg-neutral-700">
        <h3 className="mb-2 text-lg font-semibold text-neutral-800 dark:text-white">
          Team Assignment
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Route conversations to the right team member based on expertise or
          availability.
        </p>
      </div>
      <div className="rounded-lg bg-white p-4 shadow-md dark:bg-neutral-700">
        <h3 className="mb-2 text-lg font-semibold text-neutral-800 dark:text-white">
          Internal Notes
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Add private notes to conversations that only team members can see.
        </p>
      </div>
      <div className="rounded-lg bg-white p-4 shadow-md dark:bg-neutral-700">
        <h3 className="mb-2 text-lg font-semibold text-neutral-800 dark:text-white">
          Performance Metrics
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          Track response times, resolution rates, and customer satisfaction
          scores.
        </p>
      </div>
    </div>
  </div>
);

const AutomationContent = () => (
  <div className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 dark:bg-neutral-800 md:p-14">
    <p className="mx-auto max-w-3xl font-sans text-base text-neutral-600 dark:text-neutral-400 md:text-2xl">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Powerful automation & scheduled messaging.
      </span>{' '}
      Design automated message sequences, schedule broadcasts, and send
      time-sensitive reminders to boost engagement. Create personalized customer
      journeys without writing a single line of code.
    </p>
    <div className="mt-8 rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
      <h3 className="mb-4 text-xl font-semibold text-neutral-800 dark:text-white">
        Automation Features
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <div className="mr-3 h-8 w-8 flex-shrink-0 rounded-full bg-green-100 p-1">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Scheduled Broadcasts
          </p>
        </div>
        <div className="flex items-center">
          <div className="mr-3 h-8 w-8 flex-shrink-0 rounded-full bg-green-100 p-1">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Message Templates
          </p>
        </div>
        <div className="flex items-center">
          <div className="mr-3 h-8 w-8 flex-shrink-0 rounded-full bg-green-100 p-1">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Drip Campaigns
          </p>
        </div>
        <div className="flex items-center">
          <div className="mr-3 h-8 w-8 flex-shrink-0 rounded-full bg-green-100 p-1">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Conditional Logic
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Updated data array with custom content for each card
const caseStudies = [
  {
    title: 'AI Chatbot Integration',
    industry: 'Technology',
    color: 'bg-blue-100',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    image:
      'https://plus.unsplash.com/premium_vector-1726042655464-7e0ebe6dcdb9?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    challenge:
      'Integrating an AI chatbot with existing systems and ensuring natural, human-like interactions.',
    solution:
      'Utilized advanced NLP techniques and integrated with WhatsApp API for seamless communication.',
    results: [
      'Increased engagement rates by 70%.',
      'Reduced response times from hours to seconds.',
      'Handled 80% of routine inquiries without human intervention.',
    ],
    tags: ['AI', 'Chatbot', 'Integration', 'WhatsApp'],
  },
  {
    title: 'Event Ticketing Solution',
    industry: 'Hospitality',
    color: 'bg-green-100',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    challenge:
      'Streamlining the event registration process and reducing no-shows.',
    solution:
      'Implemented a QR code-based ticketing system with automated reminders via WhatsApp.',
    results: [
      'Reduced check-in time by 90%.',
      'Increased ticket sales by 30% through targeted WhatsApp campaigns.',
      'Achieved a 95% satisfaction rate from attendees.',
    ],
    tags: ['Event', 'Ticketing', 'QR Code', 'WhatsApp'],
  },
  {
    title: 'Real-time Analytics Dashboard',
    industry: 'Retail',
    color: 'bg-red-100',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-red-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    challenge:
      'Lack of real-time insights into customer behavior and campaign performance.',
    solution:
      'Deployed an analytics dashboard integrated with WhatsApp for instant updates and reports.',
    results: [
      'Enabled data-driven decisions with real-time analytics.',
      'Increased marketing ROI by 50% through optimized campaigns.',
      'Improved customer engagement tracking and reporting.',
    ],
    tags: ['Analytics', 'Dashboard', 'Real-time', 'WhatsApp'],
  },
  {
    title: 'Lead Generation Funnel',
    industry: 'Education',
    color: 'bg-yellow-100',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-yellow-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    image:
      'https://images.unsplash.com/vector-1741203969096-deda346274e8?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    challenge:
      'Difficulty in capturing and nurturing leads from multiple channels.',
    solution:
      'Implemented a multi-channel lead generation funnel with WhatsApp integration for instant follow-ups.',
    results: [
      'Increased lead capture rate by 60%.',
      'Improved lead qualification and segmentation.',
      'Enhanced nurturing process with automated WhatsApp messages.',
    ],
    tags: ['Lead Generation', 'Funnel', 'Multi-channel', 'WhatsApp'],
  },
  {
    title: 'Customer Support Optimization',
    industry: 'Healthcare',
    color: 'bg-purple-100',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    image:
      'https://plus.unsplash.com/premium_photo-1744851723701-b5efc7cd6388?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    challenge:
      'Managing high volumes of customer inquiries and ensuring timely responses.',
    solution:
      'Optimized customer support workflow with WhatsApp integration for efficient query resolution.',
    results: [
      'Reduced response time by 75%.',
      'Increased customer satisfaction score to 4.9/5.',
      'Enhanced team collaboration and performance tracking.',
    ],
    tags: ['Customer Support', 'Optimization', 'WhatsApp'],
  },
  {
    title: 'Automated Messaging Campaign',
    industry: 'Marketing',
    color: 'bg-indigo-100',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    challenge:
      'Creating personalized and timely messaging campaigns at scale.',
    solution:
      'Deployed an automated messaging system with WhatsApp for personalized customer engagement.',
    results: [
      'Achieved 85% message open rate.',
      'Increased click-through rate by 50%.',
      'Boosted overall campaign engagement significantly.',
    ],
    tags: ['Automated Messaging', 'Campaign', 'WhatsApp'],
  },
];

// Replace the existing data array with this:

const CaseStudyContent = ({ study }: { study: typeof caseStudies[0] }) => (
  <div className="mb-4 rounded-3xl bg-[#F5F5F7] p-8 dark:bg-neutral-800 md:p-14">
    <div className="flex items-center mb-6">
      <div className={`${study.color} p-3 rounded-full mr-4`}>
        {study.icon}
      </div>
      <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">
        {study.title}
      </h3>
    </div>

    <div className="mb-6">
      <Image
        src={study.image}
        alt={study.title}
        width={800}
        height={400}
        className="rounded-lg w-full h-64 object-cover"
      />
    </div>

    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          {study.industry}
        </span>
        {study.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
          >
            {tag}
          </span>
        ))}
      </div>

      <div>
        <h4 className="font-semibold mb-2">Challenge:</h4>
        <p className="text-neutral-600 dark:text-neutral-400">
          {study.challenge}
        </p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Solution:</h4>
        <p className="text-neutral-600 dark:text-neutral-400">
          {study.solution}
        </p>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Results:</h4>
        <ul className="list-disc list-inside space-y-1">
          {study.results.map((result, index) => (
            <li key={index} className="text-neutral-600 dark:text-neutral-400">
              {result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

// Updated data array using case studies
const data = caseStudies.map((study) => ({
  category: study.industry,
  title: study.title,
  src: study.image,
  content: <CaseStudyContent study={study} />,
}));
