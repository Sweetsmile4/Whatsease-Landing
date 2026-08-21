'use client';
import React, { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import Navbar from '@/app/components/Navbar';
import { useRouter } from 'next/navigation';
import {
  BeakerIcon,
  TicketIcon,
  BuildingOffice2Icon, 
  ShoppingCartIcon,
  PhotoIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HomeIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline';
import { Select } from 'antd';
import Image from 'next/image';
import Marquee from '../components/Marquee';
import Testimonials from '../components/Testimonials';

const caseStudies = [
    {
    id: 'mpc-gymkhana-garba',
    title: 'MPC Gymkhana Garba',
    icon: <TicketIcon className="h-6 w-6" />,
    color: 'bg-yellow-50',
    iconColor: 'text-yellow-600',
    image: '/images/case-std/garaba/image1.png',
    url: '/case-studies/mpc-gymkhana-garba',
    challenge:
      'Custom ticketing for members, physical RFID card issuing, vendor coordination, and cash handling.',
    solution:
      'RFID pass printing, QR-card linking, Delhi vendor integration, desk-based issuing, SDR lead recovery, and WhatsApp cash confirmations.',
    results: [
      '₹2 crores ticket collection',
      '₹20 lakhs revenue in 20 days',
      '10+ testimonials',
    ],
    industry: 'Events',
    tags: ['RFID', 'Membership', 'Payments'],

  },

  {
    id: 'cii-young-india-event',
    title: 'CII Young India Event',
    icon: <TicketIcon className="h-6 w-6" />,
    color: 'bg-purple-50',
    url: '/case-studies/cii_young_india_event',
    iconColor: 'text-purple-600',
    image: '/images/case-std/cii_young_india_festival/descriptionimg.png',
    challenge:
      'Coordinating luxury hotel allocation, fee collection, and expense tracking for high-net-worth participants.',
    solution:
      'WhatsApp AI bot automated room allocation, payment links, expense tracking, and integrated the event website.',
    results: [
      '₹1.7 crores collected',
      'Automated hotel & fee management',
      'Reduced manual coordination',
    ],
    industry: 'Corporate Events',
    tags: ['Enterprise','Automation'],
  },

  {
    id: 'waves-food-festival',
    title: 'Waves Food Festival',
    icon: <TicketIcon className="h-6 w-6" />,
    url: '/case-studies/waves-food-festival',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
    image: '/images/case-std/wave_food_festival/descriptionimg.png',
    challenge:
      'High-volume ticket sales, on-ground query handling, influencer coordination, and brand visibility needed to be managed in a short time window.',
    solution:
      'WhatsEase enabled end-to-end WhatsApp ticketing using QR workflows, AI agents for instant query resolution, SDR outreach for lead conversion, and social + PR execution.',
    results: [
      '₹20 lakhs ticket sales in 20 days',
      'Instant ticket support via AI agent',
      'Successful influencer & celebrity chef PR',
      'Strong social and testimonial campaigns',
    ],
    industry: 'Events',
    tags: ['Ticketing', 'WhatsApp AI', 'PR'],
  },

  {
    id: 'alaiya-balaiya-garba',
    title: 'Alaiya Balaiya Garba',
    icon: <TicketIcon className="h-6 w-6" />,
    color: 'bg-pink-50',
    iconColor: 'text-pink-600',
    image: '/images/case-std/alaiya_balaiya/descriptionimg.png',
    url: '/case-studies/alaiya-balaiya-garba',
    challenge:
      'Handling large-scale Garba attendance with identity verification, ticket validation, CRM collection, and cash payments.',
    solution:
      'RFID-based passes, QR allocation, Aadhaar/age verification, WhatsApp agents for cash confirmation, SDR engagement, and on-ground scanning.',
    results: [
      '₹20 lakhs revenue in 20 days',
      'Queue-less entry',
      '10+ testimonials',
      'High customer satisfaction',
    ],
    industry: 'Cultural Events',
    tags: ['RFID', 'Verification', 'CRM'],
  },

  // 5️⃣ Weekend Bazaar
  {
    id: 'weekend-bazaar',
    title: 'Weekend Bazaar',
    icon: <ShoppingBagIcon className="h-6 w-6" />,
    url: '/case-studies/weekend-bazaar',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
    challenge:
      'Vendor registration and stall management for a weekend market were handled manually, creating delays and confusion.',
    solution:
      'WhatsEase automated vendor sign-ups, payment tracking, and stall allocation via WhatsApp.',
    results: [
      'Streamlined vendor onboarding',
      'Accurate payment tracking',
      'Efficient stall management',
      'Smoother event operations',
    ],
    industry: 'Retail',
    tags: ['Vendor Management', 'Events'],
  },
  {
    id: 'vipo-vadodara',
    title: 'VIPO Vadodara',
    icon: <TicketIcon className="h-6 w-6" />,
    color: 'bg-red-50',
    iconColor: 'text-red-600',
    image: '/images/case-std/garaba/image2.png',
    url: '/case-studies/vipo-vadodara',
    challenge:
      'Managing ticketing, verification, refunds, and attendee support during an event cancellation.',
    solution:
      'RFID & QR ticketing, CRM tracking, WhatsApp SDR support, and refund processing via automated workflows.',
    results: [
      '₹20 lakhs revenue in 20 days',
      'Refunds processed within 24 hours',
      '10+ testimonials',
      'Smooth cancellation handling',
    ],
    industry: 'Large Events',
    tags: ['Refunds', 'Support', 'WhatsApp'],
  },

  // 7️⃣ Train with Shubham
  {
    id: 'train-with-shubham',
    title: 'Train with Shubham',
    icon: <AcademicCapIcon className="h-6 w-6" />,
    url: '/case-studies/train-with-shubham',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
    image: '/images/case-std/train-with-shubham/descriptionimg.png',
    challenge:
      'Coaching session bookings and communication were difficult to manage manually.',
    solution:
      'WhatsEase automated class scheduling, reminders, and feedback collection via WhatsApp.',
    results: [
      'Streamlined session management',
      'Improved communication',
      'Higher student engagement',
      'Reduced admin workload',
    ],
    industry: 'Education',
    tags: ['Coaching', 'Scheduling'],
  },

  // 8️⃣ Prayogshala
  {
    id: 'prayogshala',
    title: 'Prayogshala',
    icon: <BeakerIcon className="h-6 w-6" />,
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    url: '/case-studies/prayogshala',
    challenge:
      'Offline ticket sales and word-of-mouth marketing limited audience reach and caused confusion during event entry.',
    solution:
      'WhatsEase enabled ticket booking, confirmation, and QR-code check-in via WhatsApp, automating the entire process.',
    results: [
      'Streamlined ticketing',
      'Increased audience reach',
      'Smoother event entry',
      'Improved attendee experience',
    ],
    industry: 'Events',
    tags: ['Ticketing', 'QR Code'],
  },
  // {
  //   id: 'photograph-distribution',
  //   title: 'Photograph Distribution',
  //   icon: <PhotoIcon className="h-6 w-6" />,
  //   color: 'bg-blue-50',
  //   iconColor: 'text-blue-500',
  //   url:'/case-studies/photograph-distribution',
  //   challenge:
  //     'Photography studios faced delays and errors in delivering large volumes of event photos, with tedious manual sorting and impersonal delivery methods.',
  //   solution:
  //     'WhatsEase automated the process: photographers uploaded images to the cloud, and clients received instant, personalized WhatsApp links to their galleries. Selfie-matching ensured accurate delivery.',
  //   results: [
  //     '90% faster photo delivery',
  //     'Reduced manual workload',
  //     'Higher client satisfaction',
  //     'Increased referrals through easy sharing',
  //   ],
  //   industry: 'Photography',
  //   tags: ['Media', 'Automation'],
  // },
  // {
  //   id: 'milk-distribution',
  //   title: 'Milk Distribution',
  //   icon: <ShoppingCartIcon className="h-6 w-6" />,
  //   color: 'bg-emerald-50',
  //   iconColor: 'text-emerald-500',
  //   url:'/case-studies/milk-distribution',
  //   challenge:
  //     'Manual order collection and payment tracking for milk delivery were inefficient, error-prone, and labor-intensive.',
  //   solution:
  //     'WhatsEase enabled customers to place and pay for orders via WhatsApp. Automated order sheets and instant confirmations streamlined operations.',
  //   results: [
  //     'Orders placed in under 2 minutes',
  //     'Automated, accurate order sheets',
  //     'Improved cash flow and reduced errors',
  //     'Lower admin workload',
  //   ],
  //   industry: 'Food & Beverage',
  //   tags: ['Retail', 'Orders'],
  // },
  {
    id: 'shri-gangaram-hospital',
    title: 'Shri Gangaram Hospital',
    icon: <BuildingOffice2Icon className="h-6 w-6" />,
    color: 'bg-red-50',
    iconColor: 'text-red-500',
    url:'/case-studies/shri-gangaram-hospital',
    challenge:
      'Managing appointment bookings and patient communication was time-consuming and often led to missed appointments.',
    solution:
      'WhatsEase automated appointment scheduling, reminders, and follow-ups through WhatsApp, reducing manual intervention.',
    results: [
      'Fewer missed appointments',
      'Improved patient communication',
      'Reduced staff workload',
      'Enhanced patient satisfaction',
    ],
    industry: 'Healthcare',
    tags: ['Appointments', 'Reminders'],
  },
  {
    id: 'sandhya-aquax',
    title: 'Sandhya Aquax',
    icon: <ShoppingCartIcon className="h-6 w-6" />,
    url:'/case-studies/sandhya-aquax',
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-500',
    challenge:
      'Order management for aquaculture supplies was manual, leading to errors and delays.',
    solution:
      'WhatsEase automated order placement and status updates via WhatsApp, providing real-time tracking for customers.',
    results: [
      'Faster, error-free order processing',
      'Real-time updates for customers',
      'Lower admin effort',
      'Better customer retention',
    ],
    industry: 'Aquaculture',
    tags: ['Orders', 'Tracking'],
  },
  {
    id: 'the-hackers-meetup',
    title: 'The Hackers MeetUp',
    icon: <UserGroupIcon className="h-6 w-6" />,
    url:'/case-studies/the-hackers-meetup',
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
    challenge:
      'Event registration and attendee management were cumbersome and prone to errors.',
    solution:
      'WhatsEase enabled automated registration, payment, and QR-code-based check-in via WhatsApp.',
    results: [
      'Seamless registration and entry',
      'Reduced manual errors',
      'Enhanced attendee experience',
      'Efficient event management',
    ],
    industry: 'Technology Events',
    tags: ['Registration', 'Payments'],
  },
  {
    id: 'urban-food-forest',
    title: 'Urban Food Forest',
    icon: <HomeIcon className="h-6 w-6" />,
    url:'/case-studies/urban-food-forest',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
    challenge:
      'Coordinating volunteers and managing event sign-ups for urban farming initiatives was inefficient.',
    solution:
      'WhatsEase automated volunteer sign-ups, reminders, and updates through WhatsApp.',
    results: [
      'Easier volunteer coordination',
      'Higher participation rates',
      'Timely updates',
      'Reduced organizational effort',
    ],
    industry: 'Non-profit',
    tags: ['Volunteers', 'Coordination'],
  },
  {
    id: 'vff',
    title: 'VFF (Vadodara Fun Fiesta)',
    icon: <TicketIcon className="h-6 w-6" />,
    url:'/case-studies/vff',
    color: 'bg-rose-50',
    iconColor: 'text-rose-500',
    challenge:
      'Managing ticket sales, payments, and check-ins for a large event was complex and error-prone.',
    solution:
      'WhatsEase automated ticket sales, payment confirmations, and QR-code entry via WhatsApp.',
    results: [
      'Fast, secure ticketing',
      'Reduced entry bottlenecks',
      'Improved attendee experience',
      'Higher event turnout',
    ],
    industry: 'Events',
    tags: ['Ticketing', 'Payments'],
  },
{
  id: 'savitri-urban-forest-concert',
  title: 'Savitri Urban Forest Concert',
  icon: <TicketIcon className="h-6 w-6" />,
  url:'/case-studies/savitri-urban-forest-concert',
  color: 'bg-green-50',
  iconColor: 'text-green-600',
  image: '/images/case-std/savitri_urban_forest/descriptionimg.png',
  challenge:
    'Managing on-ground ticket sales, payments, promotions, and attendee communication at a live concert venue.',
  solution:
    'QR-based ticket sales with WhatsApp AI agents, integrated digital payments, SDR tracking, bulk notifications, and social ad promotions.',
  results: [
    '₹1.5 lakhs total sales',
    '10+ verified testimonials',
    'Smooth on-ground ticketing',
    'Celebrity PR support',
  ],
  industry: 'Events',
  tags: ['Concerts', 'Payments', 'WhatsApp Automation'],
},
{
  id: 'bpn-labs',
  title: 'BPN Labs',
  icon: <BeakerIcon className="h-6 w-6" />,
  url: '/case-studies/bpn-labs',
  color: 'bg-purple-50',
  iconColor: 'text-purple-600',
  image: '/images/case-std/bpn_labs/descriptionimg.png',

  challenge:
    'Ensuring product authenticity for customers while building trust, educating users on protein usage, and driving repeat purchases.',

  solution:
    'WhatsEase enabled product authenticity verification and built a WhatsApp AI CRM to collect customer data, deliver personalized protein usage video guides, and automate refill reminders based on each purchase cycle.',

  results: [
    'Verified product authenticity and improved customer trust',
    'Collected structured customer data via WhatsApp',
    'Educated customers with personalized protein usage videos',
    'Increased repeat purchases through automated refill reminders',
  ],

  industry: 'Health & Nutrition / Protein Supplements',
tags: ['Verification', 'WhatsApp AI', 'Reminders', 'CRM'],
}

,
{
  id: 'mansi-arts-polo-club',
  title: 'Mansi Arts – Polo Club Special Event',
  icon: <TicketIcon className="h-6 w-6" />,
  color: 'bg-blue-50',
  iconColor: 'text-blue-600',
  url: '/case-studies/mansi-arts-polo-club',
  image: '/images/case-std/mansi_art_polo_club/image.png',
  challenge:
    'Managing seating, ticketing, and attendee flow for a theatre audience without queues or manual coordination.',
  solution:
    'Fully digital seat allocation and WhatsApp-based ticketing with automated attendee communication.',
  results: [
    '500+ guests managed',
    '₹1.5 lakhs collected',
    'Queue-free premium experience',
  ],
  industry: 'Theatre & Arts',
  tags: ['Seat Allocation', 'WhatsApp', 'Digital Events'],
}
,
{
  id: 'heritage-week-event',
  title: 'Heritage Week Event', 
  icon: <TicketIcon className="h-6 w-6" />,
  color: 'bg-teal-50',
  url: '/case-studies/heritage-week-event',
  iconColor: 'text-teal-600',
  image: '/images/case-std/heritage-week-event/image.png',
  challenge:
    'Handling large-scale guest registration and ticketing for a heritage-focused cultural celebration.',
  solution:
    'WhatsApp-based registration, digital ticketing, and instant attendee support.',
  results: [
    '₹1.5 lakhs collected',
    'Hundreds of heritage enthusiasts connected',
    'Premium, queue-free experience',
  ],
  industry: 'Cultural & Heritage Events',
  tags: ['Culture', 'Digital Ticketing', 'Community'],
}
];

export default function CaseStudies() {
  const router = useRouter();
  
  // State for filters
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedUseCase, setSelectedUseCase] = useState<string | null>(null);
  const [selectedFunction, setSelectedFunction] = useState<string | null>(null);
  const [selectedCompanySize, setSelectedCompanySize] = useState<string | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [topFilterIndustry, setTopFilterIndustry] = useState<string | null>(null);

  // State for case studies
  const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudies);
  const [activeCase, setActiveCase] = useState<string | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Extract all available options from case studies for filters
  const industryOptions = Array.from(
    new Set(caseStudies.map((cs) => cs.industry)),
  ).map((industry) => ({ value: industry, label: industry }));

  const useCaseOptions = Array.from(
    new Set(caseStudies.flatMap((cs) => cs.tags)),
  ).map((tag) => ({ value: tag, label: tag }));

  const functionOptions = [
    { value: 'Automation', label: 'Automation' },
    { value: 'Ticketing', label: 'Ticketing' },
    { value: 'Scheduling', label: 'Scheduling' },
    { value: 'Payments', label: 'Payments' },
  ];

  const companySizeOptions = [
    { value: 'startup', label: 'Startup (1-10)' },
    { value: 'small', label: 'Small (11-50)' },
    { value: 'medium', label: 'Medium (51-200)' },
    { value: 'large', label: 'Large (201+)' },
  ];

  // Filter case studies based on selected filters
  useEffect(() => {
    let filtered = [...caseStudies];

    // Apply industry filter
    if (selectedIndustry) {
      filtered = filtered.filter((cs) => cs.industry === selectedIndustry);
    }

    // Apply use case filter (checks if any tag matches)
    if (selectedUseCase) {
      filtered = filtered.filter((cs) => 
        cs.tags.some(tag => tag.toLowerCase() === selectedUseCase.toLowerCase())
      );
    }

    // Apply function filter (checks if any tag matches)
    if (selectedFunction) {
      filtered = filtered.filter((cs) => 
        cs.tags.some(tag => tag.toLowerCase() === selectedFunction.toLowerCase())
      );
    }

    // Apply search keyword (searches in title, challenge, and solution)
    if (searchKeyword.trim()) {
      const keyword = searchKeyword.toLowerCase().trim();
      filtered = filtered.filter(
        (cs) =>
          cs.title.toLowerCase().includes(keyword) ||
          cs.challenge.toLowerCase().includes(keyword) ||
          cs.solution.toLowerCase().includes(keyword) ||
          cs.industry.toLowerCase().includes(keyword) ||
          cs.tags.some(tag => tag.toLowerCase().includes(keyword))
      );
    }

    setFilteredCaseStudies(filtered);
  }, [
    selectedIndustry,
    selectedUseCase,
    selectedFunction,
    selectedCompanySize,
    searchKeyword,
  ]);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler functions for Select components
  const handleIndustryChange = (value: string) => {
    setSelectedIndustry(value || null);
  };

  const handleUseCaseChange = (value: string) => {
    setSelectedUseCase(value || null);
  };

  const handleFunctionChange = (value: string) => {
    setSelectedFunction(value || null);
  };

  const handleCompanySizeChange = (value: string) => {
    setSelectedCompanySize(value || null);
  };

  const handleTopIndustryChange = (value: string) => {
    setTopFilterIndustry(value || null);
  };

  // Handle Go button click for top filter
  const handleTopFilterSubmit = () => {
    if (topFilterIndustry) {
      setSelectedIndustry(topFilterIndustry);
      // Scroll to case studies section
      const caseStudiesSection = document.getElementById('case-studies-section');
      if (caseStudiesSection) {
        caseStudiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedIndustry(null);
    setSelectedUseCase(null);
    setSelectedFunction(null);
    setSelectedCompanySize(null);
    setSearchKeyword('');
  };

  // For fallback images
  const fallbackImages: Record<string, string> = {
    'photograph-distribution':
      'https://images.unsplash.com/photo-1617463874381-85b513b3e991?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'milk-distribution':
      'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    prayogshala:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'shri-gangaram-hospital':
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'sandhya-aquax':
      'https://images.unsplash.com/photo-1534043464124-3be32fe000c9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'the-hackers-meetup':
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'train-with-shubham':
      'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'urban-food-forest':
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    vff: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'weekend-bazaar':
      'https://images.unsplash.com/photo-1555529771-7888783a18d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  };

  // Check if any filters are active
  const hasActiveFilters = selectedIndustry || selectedUseCase || selectedFunction || selectedCompanySize || searchKeyword;

  return (
    <>
      {/* Integrated Navbar */}
      <Navbar />

      <main className="flex h-full w-full flex-col items-center justify-center bg-white pb-10">
        {/* Hero section */}
        <div className="flex min-h-[calc(100vh-10rem)] w-full flex-col items-center justify-center bg-[#f7f8fa] px-4 py-12 md:px-8 md:py-16 lg:px-20">
          <div className="flex w-full max-w-7xl flex-col items-center md:flex-row md:items-start md:justify-center">
            {/* Left section - content */}
            <div className="flex w-full flex-col items-center justify-center gap-4 p-4 text-center md:w-1/2 md:items-start md:p-10 md:text-left lg:gap-5">
              <h1 className="font-Pangea text-3xl font-semibold text-black sm:text-4xl md:text-5xl lg:text-6xl">
                Success <br className="hidden md:block" /> stories: By{' '}
                <br className="hidden md:block" /> customers, for{' '}
                <br className="hidden md:block" /> customers
              </h1>

              <p className="text-md mt-2 font-figtreeRegular text-gray-600 md:mt-3 md:text-lg">
                WhatsEase already discovered the key to{' '}
                <br className="hidden md:block" /> revenue growth for numerous
                well established <br className="hidden md:block" /> companies.
                Discover yours now
              </p>
              <p className="text-md mt-2 font-figtreeNormal text-[#40404b] md:mt-3 md:text-lg">
                Explore your industry&apos;s success story
              </p>
              <ConfigProvider
                theme={{
                  components: {
                    Select: {
                      borderRadius: 12,
                      colorBgContainer: 'transparent',
                      colorBorder: '#c5c5d0',
                      colorPrimary: '#52c41a',
                      colorLink: '#52c41a',
                      colorSuccess: '#52c41a',
                      colorPrimaryHover: '#04b851',
                      colorInfo: '#52c41a',
                      controlHeight: 50,
                    },
                  },
                }}
              >
                <div className="flex w-full flex-col items-center justify-start gap-2 sm:flex-row">
                  <Select
                    showSearch
                    placeholder="Select industry"
                    optionFilterProp="label"
                    className="h-[50px] w-full max-w-[320px] bg-transparent font-figtreeNormal text-base text-[#c5c5d0] shadow-sm placeholder:text-base focus:border-green-500 focus:ring-green-500 sm:text-xl sm:placeholder:text-xl"
                    onChange={handleTopIndustryChange}
                    options={industryOptions}
                    value={topFilterIndustry}
                    allowClear
                  />
                  <button
                    className="h-[50px] w-full rounded-xl border border-primary/[0.1] bg-primary px-5 font-figtreeNormal font-medium text-white shadow-inner-and-outer shadow-white/[.5] sm:w-auto"
                    onClick={handleTopFilterSubmit}
                  >
                    Go
                  </button>
                </div>
              </ConfigProvider>
            </div>

            {/* Right section - images */}
            <div className="mt-8 flex w-full flex-col items-center justify-center p-4 md:mt-0 md:w-1/2 md:items-start md:p-10">
              <div className="relative flex w-full items-center justify-center md:justify-end">
                <Image
                  src="/cs-1.webp"
                  className="rounded-xl"
                  height={450}
                  width={450}
                  alt="image"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    width: 'auto',
                    maxHeight: '350px',
                  }}
                />
                <Image
                  src="/cs-2.webp"
                  className="absolute right-[5%] top-[80%] rounded-xl sm:right-[20%] md:right-[30%] lg:right-[60%]"
                  height={250}
                  width={250}
                  alt="image"
                  style={{
                    maxWidth: '50%',
                    height: 'auto',
                    width: 'auto',
                    maxHeight: '200px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Marquee section */}
        <Marquee />

        {/* Case studies section */}
        <div id="case-studies-section" className="flex w-full max-w-7xl flex-col items-start justify-center gap-6 px-4 py-12 md:gap-8 md:py-16">
          <div className="flex w-full items-center justify-between">
            <h1 className="font-Pangea text-3xl font-semibold text-black sm:text-4xl md:text-5xl lg:text-6xl">
              All success stories
            </h1>
            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 font-figtreeSemibold text-sm text-gray-700 hover:bg-gray-50"
              >
                Clear filters
              </button>
            )}
          </div>

          {/* Filters */}
          <div className="flex w-full flex-wrap gap-4 md:w-4/5">
            <ConfigProvider
              theme={{
                components: {
                  Select: {
                    borderRadius: 12,
                    colorBgContainer: 'transparent',
                    colorBorder: '#c5c5d0',
                    colorPrimary: '#52c41a',
                    colorLink: '#52c41a',
                    colorSuccess: '#52c41a',
                    colorPrimaryHover: '#04b851',
                    colorInfo: '#52c41a',
                    controlHeight: 50,
                    colorTextPlaceholder: '#000',
                  },
                },
              }}
            >
              {/* Industries Select */}
              <div className="flex w-full flex-col sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]">
                <p className="mb-2 font-figtreeSemibold text-sm text-[#40404b]">
                  Industries
                </p>

                <Select
                  showSearch
                  placeholder="Select industry"
                  optionFilterProp="label"
                  className="h-[50px] w-full bg-transparent font-figtreeSemibold text-base text-[#c5c5d0] shadow-sm placeholder:text-base focus:border-green-500 focus:ring-green-500"
                  onChange={handleIndustryChange}
                  options={industryOptions}
                  value={selectedIndustry}
                  allowClear
                />
              </div>

              {/* Use cases Select */}
              <div className="flex w-full flex-col sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]">
                <p className="mb-2 font-figtreeSemibold text-sm text-[#40404b]">
                  Use cases
                </p>

                <Select
                  showSearch
                  placeholder="Select use case"
                  optionFilterProp="label"
                  className="h-[50px] w-full bg-transparent font-figtreeSemibold text-base text-[#c5c5d0] shadow-sm placeholder:text-base focus:border-green-500 focus:ring-green-500"
                  onChange={handleUseCaseChange}
                  options={useCaseOptions}
                  value={selectedUseCase}
                  allowClear
                />
              </div>

              {/* Functions Select */}
              <div className="flex w-full flex-col sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]">
                <p className="mb-2 font-figtreeSemibold text-sm text-[#40404b]">
                  Functions
                </p>

                <Select
                  showSearch
                  placeholder="Select function"
                  optionFilterProp="label"
                  className="h-[50px] w-full bg-transparent font-figtreeSemibold text-base text-[#c5c5d0] shadow-sm placeholder:text-base focus:border-green-500 focus:ring-green-500"
                  onChange={handleFunctionChange}
                  options={functionOptions}
                  value={selectedFunction}
                  allowClear
                />
              </div>

              {/* Company size Select */}
              {/* <div className="flex w-full flex-col sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]">
                <p className="mb-2 font-figtreeSemibold text-sm text-[#40404b]">
                  Company size
                </p>

                <Select
                  showSearch
                  placeholder="Select company size"
                  optionFilterProp="label"
                  className="h-[50px] w-full bg-transparent font-figtreeSemibold text-base text-[#c5c5d0] shadow-sm placeholder:text-base focus:border-green-500 focus:ring-green-500"
                  onChange={handleCompanySizeChange}
                  options={companySizeOptions}
                  value={selectedCompanySize}
                  allowClear
                />
              </div> */}
            </ConfigProvider>
          </div>

          {/* Results count */}
          <p className="font-figtreeNormal text-sm text-gray-600">
            Showing {filteredCaseStudies.length} of {caseStudies.length} case studies
          </p>

          {/* Case studies grid */}
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCaseStudies.length > 0 ? (
              filteredCaseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.id}
                  className={`group relative m-2 flex flex-col items-start justify-start rounded-xl border border-gray-200 bg-[#f7f8fa] p-4 sm:m-3 sm:p-5 md:m-4 md:p-6 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    activeCase === caseStudy.id ? 'z-10' : ''
                  }`}
                  onMouseEnter={() => setActiveCase(caseStudy.id)}
                  onMouseLeave={() => setActiveCase(null)}
                  onClick={() => router.push(caseStudy.url || '')}
                >
                  <div className="relative h-[140px] w-full overflow-hidden rounded-xl sm:h-[160px] md:h-[180px] cursor-pointer">
                    <Image
                      src={
                        caseStudy.image || fallbackImages[caseStudy.id] || ''
                      }
                      alt={caseStudy.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      priority={caseStudy.id === filteredCaseStudies[0].id}
                    />
                  </div>
                  <h3 className="mt-3 line-clamp-1 font-Pangea text-lg font-bold text-gray-900 sm:text-xl md:mt-4">
                    {caseStudy.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 font-figtreeNormal text-sm text-gray-600">
                    {caseStudy.challenge}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-3 md:pt-4">
                    {caseStudy.tags.slice(0, 3).map((tag, index) => (
                      <button
                        key={index}
                        className="flex items-center rounded-full border border-black/[0.5] px-3 py-1 font-figtreeRegular text-xs font-medium text-black md:px-5 md:py-2 md:text-sm"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-gray-500">
                <p className="text-lg font-medium">
                  No case studies match your filters
                </p>
                <p className="mt-2">Try adjusting your search criteria</p>
                <button
                  onClick={handleClearFilters}
                  className="mt-4 rounded-lg bg-primary px-6 py-2 font-figtreeSemibold text-white hover:bg-primary/90"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Testimonials section */}
        <Testimonials />
      </main>
    </>
  );
}