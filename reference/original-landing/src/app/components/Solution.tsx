'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  UserGroupIcon,
  EnvelopeIcon,
  Squares2X2Icon,
  ClockIcon,
  ChartBarIcon,
  UserIcon,
  HeartIcon,
  MegaphoneIcon,
  BoltIcon,
  UsersIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

// Define Testimonial type
type Testimonial = {
  quote: string;
  name: string;
  role: string;
  image: string;
};

// Add the testimonials array
const testimonials: Testimonial[] = [
  {
    quote:
      "We needed a highly customized WhatsApp ticketing solution for an HNI event under CII Young Indians, and Whatsease stood out for its flexibility, real-time support, and co-creation mindset, helping us seamlessly manage ₹1.5+ crore in ticket sales with the team available even on weekends",
    name: 'Harshit Gupta',
    role: 'Event Organiser, Young Indians (CII)',
    image:
      'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
  },
  {
    quote:
      "Whatsease handled ticketing, communication, and data smoothly, letting me focus on performing while offering a more personal and flexible experience than major platforms.",
    name: 'Jigar Panchal',
    role: '3D Designer & Musician',
    image:
      'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
  },
  {
    quote:
      "Whatsease simplified WhatsApp-based ticketing, attendee management, and event updates, enabling us to focus on delivering a smooth and memorable event.",
    name: 'Alpesh Patel',
    role: 'Organizer: Vadodara Fun Fiesta (VFF)',
    image:
      'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
  },
  {
    quote:
      "Whatsease resolved our payment challenges efficiently with an intuitive platform and strong developer support, making our ticketing process smooth and reliable.",
    name: 'Prashant Bhavsar',
    role: 'The Hackers MeetUP (THM) Ahmedabad Lead',
    image:
      'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
  },
];

const Solution = () => {
  const [activeTab, setActiveTab] = useState('sales');

  const tabs = [
    { id: 'sales', label: 'Sales' },
    { id: 'support', label: 'Support' },
    { id: 'marketing', label: 'Marketing' },
  ];

  const tabContent = {
    sales: {
      title: 'More deals. Less effort.',
      description:
        'Turn conversations into conversions with WhatsApp Business. Close deals faster, wow your customers, and build lasting relationships effortlessly.',
      features: [
        'Boost conversions with interactive WhatsApp templates',
        '24/7 AI-powered automatic follow-ups',
        'One inbox for all customer conversations',
      ],
      detailItems: [
        {
          icon: ChatBubbleLeftRightIcon,
          text: 'Chatbots for instant lead qualification',
          color: 'text-green-600',
        },
        {
          icon: CalendarIcon,
          text: 'Interactive templates that sell',
          color: 'text-blue-600',
        },
        {
          icon: UserGroupIcon,
          text: 'Internal notes and @mentions for teamwork',
          color: 'text-purple-600',
        },
        {
          icon: EnvelopeIcon,
          text: 'WhatsApp Newsletters for tailored offers',
          color: 'text-yellow-600',
        },
        {
          icon: Squares2X2Icon,
          text: 'Seamless CRM integration',
          color: 'text-pink-600',
        },
      ],
    },
    support: {
      title: 'Support that scales.',
      description:
        'Deliver exceptional customer support 24/7 with AI-powered assistance and seamless human handoffs.',
      features: [
        'Automated ticket routing and prioritization',
        'Multi-language AI support capabilities',
        'Real-time customer satisfaction tracking',
      ],
      detailItems: [
        {
          icon: ChatBubbleLeftRightIcon,
          text: '24/7 AI-powered customer support',
          color: 'text-green-600',
        },
        {
          icon: ClockIcon,
          text: 'Instant response time guarantee',
          color: 'text-blue-600',
        },
        {
          icon: ChartBarIcon,
          text: 'Advanced analytics and reporting',
          color: 'text-purple-600',
        },
        {
          icon: UserIcon,
          text: 'Smart agent assignment',
          color: 'text-yellow-600',
        },
        {
          icon: HeartIcon,
          text: 'Customer satisfaction scoring',
          color: 'text-pink-600',
        },
      ],
    },
    marketing: {
      title: 'Marketing that converts.',
      description:
        'Create targeted campaigns that reach customers where they are and drive meaningful engagement.',
      features: [
        'Personalized message campaigns',
        'Advanced audience segmentation',
        'Real-time campaign performance tracking',
      ],
      detailItems: [
        {
          icon: MegaphoneIcon,
          text: 'Broadcast campaigns to thousands',
          color: 'text-green-600',
        },
        {
          icon: ChartBarIcon,
          text: 'Detailed engagement analytics',
          color: 'text-blue-600',
        },
        {
          icon: Squares2X2Icon,
          text: 'A/B testing for optimization',
          color: 'text-purple-600',
        },
        {
          icon: BoltIcon,
          text: 'Automated drip campaigns',
          color: 'text-yellow-600',
        },
        {
          icon: UsersIcon,
          text: 'Advanced audience targeting',
          color: 'text-pink-600',
        },
      ],
    },
  };

  const currentContent = tabContent[activeTab as keyof typeof tabContent];

  // Select a testimonial based on the active tab
  const getTestimonialForTab = (tab: string) => {
    switch (tab) {
      case 'sales':
        return testimonials[0]; // Rajasi Rastogi
      case 'support':
        return testimonials[3]; // Prashant Bhavsar
      case 'marketing':
        return testimonials[2]; // Alpesh Patel
      default:
        return testimonials[0];
    }
  };

  const currentTestimonial = getTestimonialForTab(activeTab);
  const router = useRouter();
  return (
    <div className="flex h-full w-full flex-col items-center justify-start px-4 py-8 sm:px-6 sm:py-12 md:min-h-screen lg:px-8 lg:py-16">
      {/* Header */}
      <div className="mb-6 text-center sm:mb-8 lg:mb-12">
        <h1 className="font-sans text-xl font-semibold text-neutral-950 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          The perfect solution for every team
        </h1>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex items-center justify-center sm:mb-8 lg:mb-12">
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 lg:gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative z-10 rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300 sm:px-4 sm:py-2 sm:text-sm lg:px-6 lg:py-3 lg:text-base ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-neutral-600 hover:text-neutral-800'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-full bg-black"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-20">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Card */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-xs rounded-xl border border-gray-900/[.1] bg-[#f8f9fb] p-3 sm:max-w-2xl sm:p-4 md:max-w-4xl md:p-6 lg:max-w-5xl lg:p-8"
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 lg:flex-row lg:gap-8 xl:gap-12">
          {/* Left Content */}
          <div className="flex w-full flex-col items-start justify-center gap-3 sm:gap-4 lg:w-1/2 lg:gap-5">
            <h2 className="text-lg font-semibold text-black sm:text-xl md:text-2xl lg:text-3xl">
              {currentContent.title}
            </h2>
            <p className="text-xs text-gray-900 sm:text-sm md:text-base lg:text-lg">
              {currentContent.description}
            </p>

            {/* Feature List */}
            <div className="flex w-full flex-col items-start justify-start gap-2 sm:gap-3">
              {currentContent.features.map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <span className="flex h-3 w-3 flex-shrink-0 items-center justify-center rounded-full bg-green-500 sm:h-4 sm:w-4">
                    <CheckCircleIcon className="h-2 w-2 text-white sm:h-3 sm:w-3" />
                  </span>
                  <span className="text-xs text-gray-900 sm:text-sm md:text-base">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Testimonial - Updated to use the selected testimonial from the array */}
            <div className="mt-4 flex flex-col items-start justify-start gap-2 sm:mt-6 sm:flex-row sm:items-center sm:gap-4 lg:mt-10">
              <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                <Image
                  src={currentTestimonial.image}
                  alt={`${currentTestimonial.name} testimonial`}
                  height={80}
                  width={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center gap-1 sm:gap-2">
                <blockquote className="text-xs font-medium leading-tight sm:text-sm md:text-base">
                  &quot;
                  { currentTestimonial.quote}
                  &quot;
                </blockquote>
                <cite className="text-xs font-medium sm:text-sm">
                  {currentTestimonial.name}{' '}
                  <span className="text-xs text-[#5b5b5f]">
                    {currentTestimonial.role}
                  </span>
                </cite>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Icons */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center rounded-lg bg-[#eff0f3] p-3 sm:p-4 md:p-6 lg:p-8">
              <div className="w-full rounded-lg bg-white p-1 sm:p-2 md:p-3">
                <div className="grid grid-cols-1 gap-1 sm:gap-1 md:gap-2">
                  {currentContent.detailItems.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                      <React.Fragment key={idx}>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.3 }}
                          className="flex items-center gap-2 sm:gap-3 md:gap-4"
                        >
                          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-gray-50 sm:h-8 sm:w-8 lg:h-10 lg:w-10">
                            <IconComponent
                              className={`h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 ${item.color}`}
                            />
                          </div>
                          <span className="text-xs text-gray-900 sm:text-sm md:text-base">
                            {item.text}
                          </span>
                        </motion.div>

                        {/* Add divider line between items (except after the last item) */}
                        {idx < currentContent.detailItems.length - 1 && (
                          <div className="mx-auto h-px w-full bg-gray-200"></div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
              <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-primary/[0.1] bg-primary px-3 py-2 text-xs font-semibold text-white shadow-inner shadow-white/[0.5] transition hover:scale-95 hover:bg-primary/90 sm:mt-4 sm:w-auto sm:px-4 sm:text-sm lg:mt-6 lg:px-3 lg:py-2 lg:text-base"
              onClick={() => router.push('/login')}>
                Use this Solution
                <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Solution;
