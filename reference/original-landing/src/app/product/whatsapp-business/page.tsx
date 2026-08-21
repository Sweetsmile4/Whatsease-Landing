import React from 'react';
import ProductTemplate from '@/app/components/ProductTemplate';
import {
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'WhatsApp Business | WhatsEase',
  description:
    'Official WhatsApp Business Solution Provider - connect with customers on their preferred messaging platform',
};

export default function WhatsAppBusinessPage() {
  return (
    <ProductTemplate
      productName="WhatsApp Business"
      productTagline="Connect with customers where they already are"
      productDescription="As an official WhatsApp Business Solution Provider, WhatsEase helps you reach your customers on their favorite messaging app with a verified business profile, automation tools, and enterprise-grade features."
      heroImage="https://images.unsplash.com/photo-1587310285959-d768493970b6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      features={[
        {
          icon: <CheckBadgeIcon className="h-6 w-6" />,
          title: 'Verified Business Profile',
          description:
            'Build trust with the official green checkmark, business description, and contact information',
        },
        {
          icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
          title: 'Two-Way Conversations',
          description:
            'Engage in real-time messaging with customers through a unified inbox',
        },
        {
          icon: <ShieldCheckIcon className="h-6 w-6" />,
          title: 'Enterprise-Grade Security',
          description:
            'End-to-end encryption and compliance with WhatsApps business policies',
        },
        {
          icon: <UserGroupIcon className="h-6 w-6" />,
          title: 'Unlimited Agent Seats',
          description:
            'Add your entire team to handle conversations with role-based access',
        },
        {
          icon: <ChartBarIcon className="h-6 w-6" />,
          title: 'Advanced Analytics',
          description:
            'Track message delivery, read receipts, and customer engagement metrics',
        },
        {
          icon: <GlobeAltIcon className="h-6 w-6" />,
          title: 'Global Reach',
          description:
            'Connect with over 2 billion WhatsApp users across 180+ countries',
        },
      ]}
      benefits={[
        {
          title: '98% Open Rates',
          description:
            'WhatsApp messages are read within minutes, offering far higher engagement than email or SMS',
        },
        {
          title: 'Seamless Customer Experience',
          description:
            'Meet customers on their preferred messaging platform with rich media support',
        },
        {
          title: 'Reduced Support Costs',
          description:
            'Lower costs with efficient messaging compared to calls or dedicated apps',
        },
        {
          title: 'Accelerated Sales Cycle',
          description:
            'Convert prospects faster with immediate, interactive responses',
        },
        {
          title: 'Global Compliance',
          description:
            'Meet regulatory requirements with our compliant messaging solutions',
        },
        {
          title: 'Scalable Architecture',
          description:
            'Handle millions of conversations with our robust, enterprise-grade platform',
        },
      ]}
      integrations={{
        title: 'Works with your favorite tools',
        description:
          'Integrate WhatsApp Business with your existing software stack',
        logos: [
          {
            name: 'Urban Forest',
            logo: '/Companies/urbanforest.jpg',
          },
          {
            name: 'TWS',
            logo: '/Companies/tws.png',
          },
          {
            name: 'THM',
            logo: '/Companies/thm.png',
          },
          {
            name: 'Weekend',
            logo: '/Companies/weekend.jpg',
          },
          {
            name: 'CII',
            logo: '/Companies/cii.jpg',
          },
          {
            name: 'Indie',
            logo: '/Companies/indie.png',
          },
          {
            name: 'Waves Club',
            logo: '/Companies/wavesclub.webp',
          },
          {
            name: 'VFF',
            logo: '/Companies/vff.png',
          },
        ],
      }}
      testimonial={{
        quote:
          "Absolutely loving the help and support I am getting from the team in the product WhatsEase. The product is amazing, team is hardworking and overall experience is fantastic. I would highly recommend readers and users to experience Anubhav and team's services, you'll get the solutions you're looking for. Best wishes for the upcoming projects.",
        author: 'Shubham Londhe',
        role: 'Founder',
        company: 'Train With Shubham',
        image:
          'https://d502jbuhuh9wk.cloudfront.net/orgData/62cd128e0cf2e6a1694683bb/pages/assets/images/rCKlnuntitleddesign35.png',
      }}
      faqs={[
        {
          question: 'How do I get verified as an official WhatsApp Business?',
          answer:
            'WhatsEase handles the entire verification process for you. As an official WhatsApp Business Solution Provider, we work directly with Meta to verify your business, secure your business name, and get you the green checkmark of verification.',
        },
        {
          question:
            'Whats the difference between the free WhatsApp Business app and WhatsEase solution?',
          answer:
            'The free WhatsApp Business app is limited to a single user, one device, and basic features. WhatsEase provides the official WhatsApp Business API with unlimited users, advanced automation, integrations with your business systems, broadcast messaging capabilities, and enterprise-grade security and analytics.',
        },
        {
          question: 'Can I send broadcast messages to my customers?',
          answer:
            'Yes, WhatsEase allows you to send template messages to opted-in customers at scale. These messages must follow WhatsApp guidelines and can include text, images, buttons, and other interactive elements to engage your audience effectively.',
        },
        {
          question:
            'How does WhatsEase ensure compliance with WhatsApp policies?',
          answer:
            'We built our platform with compliance at its core. WhatsEase handles opt-in collection, respects messaging windows, ensures proper template approval, and provides messaging quality scores to maintain high deliverability while adhering to all WhatsApp Business policies.',
        },
      ]}
      cta={{
        title: 'Ready to elevate your customer messaging?',
        description:
          "Join thousands of businesses already using WhatsEase's WhatsApp Business solutions to connect with customers globally.",
        primaryButton: {
          text: 'Get Started',
          href: '/contact',
        },
        secondaryButton: {
          text: 'View Pricing',
          href: '/pricing',
        },
      }}
      demoImage="https://images.unsplash.com/photo-1622929611233-bd6d58cbd4dd?w=1200&auto=format&fit=crop&q=80"
    />
  );
}
