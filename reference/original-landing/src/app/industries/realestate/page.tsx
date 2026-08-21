import React from 'react';
import IndustryTemplate from '@/app/components/IndustryTemplate';
import {
  HomeModernIcon,
  DocumentIcon,
  CalendarIcon,
  PhotoIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Real Estate Solutions | WhatsEase',
  description:
    'WhatsApp messaging solutions for real estate professionals to nurture leads and provide timely information to potential buyers.',
};

export default function RealEstatePage() {
  const industryData = {
    name: 'Real Estate',
    tagline:
      'Nurture leads and provide timely information to potential buyers through WhatsApp.',
    description:
      'Close more deals and provide exceptional client service with WhatsApp messaging solutions designed specifically for real estate professionals.',
    // Updated with a more professional real estate hero image
    heroImage:
      'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&auto=format&fit=crop&q=80',
    statsTitle: 'WhatsEase Real Estate Impact',
    stats: [
      { value: '55%', label: 'Faster response to inquiries' },
      { value: '47%', label: 'More property viewings scheduled' },
      { value: '32%', label: 'Increase in client conversion' },
    ],
    features: [
      {
        title: 'Property Listing Updates',
        description:
          'Automatically notify potential buyers about new listings that match their criteria.',
        icon: <HomeModernIcon className="h-6 w-6" />,
      },
      {
        title: 'Virtual Property Tours',
        description:
          'Share video tours and high-resolution images directly through WhatsApp.',
        icon: <PhotoIcon className="h-6 w-6" />,
      },
      {
        title: 'Viewing Scheduling',
        description:
          'Allow clients to schedule property viewings with automated calendar integration.',
        icon: <CalendarIcon className="h-6 w-6" />,
      },
      {
        title: 'Document Collection',
        description:
          'Securely gather necessary documentation for property transactions.',
        icon: <DocumentIcon className="h-6 w-6" />,
      },
      {
        title: 'Client Follow-ups',
        description:
          'Maintain engagement with potential buyers through personalized communication.',
        icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
      },
      {
        title: 'Market Insights',
        description:
          'Share relevant market data and neighborhood information with interested buyers.',
        icon: <ChartBarIcon className="h-6 w-6" />,
      },
    ],
    testimonial: {
      quote:
        "WhatsEase has completely transformed how we communicate with clients. Our response time has decreased dramatically, and we're scheduling 47% more property viewings. It's been a game changer for our brokerage.",
      author: 'Daniel Hernandez',
      role: 'Managing Partner',
      company: 'Westwood Properties',
      // Updated with more professional business portrait
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
    },
    useCases: [
      {
        title: 'Property Matching & Notifications',
        description:
          'Instantly notify potential buyers when properties matching their search criteria become available, with detailed information and images delivered through WhatsApp.',
        // Updated with higher quality property image
        image:
          'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=80',
      },
      {
        title: 'Automated Viewing Scheduling',
        description:
          'Allow clients to schedule, reschedule, or cancel property viewings through WhatsApp, with automatic calendar updates for agents.',
        // Updated with image showing agent with client
        image:
          'https://images.unsplash.com/photo-1560518883-7b77e02ec302?w=500&auto=format&fit=crop&q=80',
      },
      {
        title: 'Transaction Management',
        description:
          'Guide clients through the entire purchasing process with timely reminders, document requests, and milestone updates delivered via WhatsApp.',
        // Updated with image representing document signing/transaction
        image:
          'https://images.unsplash.com/photo-1621778455241-478f46b89d49?w=500&auto=format&fit=crop',
      },
    ],
    faqs: [
      {
        question:
          'How does WhatsEase help real estate agents respond faster to inquiries?',
        answer:
          'WhatsEase provides automated response capabilities for common property questions, and instantly notifies agents of new inquiries through their preferred device, enabling much faster response times.',
      },
      {
        question:
          'Can WhatsEase integrate with our existing CRM and property management systems?',
        answer:
          'Yes, WhatsEase integrates with popular real estate CRMs including Salesforce, HubSpot, and industry-specific solutions like BoomTown, Zillow Premier Agent, and MoxiWorks.',
      },
      {
        question: 'How does the property matching feature work?',
        answer:
          "WhatsEase connects to your property database and automatically sends notifications when new listings match a client's saved criteria, including price range, location, property features, and more.",
      },
      {
        question:
          'Can clients schedule viewings automatically through WhatsApp?',
        answer:
          'Yes, WhatsEase provides interactive scheduling capabilities that sync with your calendar system, allowing clients to select available time slots for viewings directly through WhatsApp conversations.',
      },
    ],
    ctaTitle: 'Ready to transform your real estate business with WhatsEase?',
    ctaDescription:
      'Join hundreds of real estate professionals who have increased their client engagement, streamlined their workflows, and closed more deals with WhatsEase.',
  };

  return <IndustryTemplate industry={industryData} />;
}
