import React from 'react';
import IndustryTemplate from '@/app/components/IndustryTemplate';
import {
  ShoppingBagIcon,
  CreditCardIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'E-commerce Solutions | WhatsEase',
  description:
    'WhatsApp messaging solutions for E-commerce businesses to drive sales and enhance customer experience.',
};

export default function EcommercePage() {
  const industryData = {
    name: 'E-commerce',
    tagline:
      'Drive sales and provide exceptional customer support through automated WhatsApp messaging.',
    description:
      "Boost your online store's performance with personalized messaging solutions that help recover abandoned carts, provide product recommendations, and deliver timely order updates.",
    // Updated with a more professional e-commerce hero image
    heroImage:
      'https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=1600&auto=format&fit=crop&q=80',
    statsTitle: 'WhatsEase E-commerce Impact',
    stats: [
      { value: '35%', label: 'Average increase in cart recovery' },
      { value: '42%', label: 'Boost in repeat purchases' },
      { value: '27%', label: 'Reduction in support costs' },
    ],
    features: [
      {
        title: 'Abandoned Cart Recovery',
        description:
          'Automatic reminders sent directly through WhatsApp with product images and one-click checkout links.',
        icon: <ShoppingBagIcon className="h-6 w-6" />,
      },
      {
        title: 'Order Tracking & Updates',
        description:
          'Keep customers informed with real-time shipping notifications and delivery updates.',
        icon: <TruckIcon className="h-6 w-6" />,
      },
      {
        title: 'Product Recommendations',
        description:
          'AI-powered product suggestions based on browsing history and past purchases.',
        icon: <CreditCardIcon className="h-6 w-6" />,
      },
      {
        title: '24/7 Customer Support',
        description:
          'Automated responses to common questions with seamless handoff to human agents when needed.',
        icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
      },
      {
        title: 'Customer Insights',
        description:
          'Track customer preferences and behavior to create personalized shopping experiences.',
        icon: <ChartBarIcon className="h-6 w-6" />,
      },
      {
        title: 'Re-engagement Campaigns',
        description:
          'Bring customers back with personalized offers and promotions delivered via WhatsApp.',
        icon: <UserGroupIcon className="h-6 w-6" />,
      },
    ],
    testimonial: {
      quote:
        'WhatsEase completely transformed how we approach customer communication. Our abandoned cart recovery rate has increased by 42%, and customers love getting shipping updates directly in WhatsApp.',
      author: 'Sarah Johnson',
      role: 'E-commerce Director',
      company: 'StyleHub',
      // Updated with more professional business portrait
      image:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop',
    },
    useCases: [
      {
        title: 'Abandoned Cart Recovery',
        description:
          'Automatically send reminders with product images and quick checkout links to customers who abandoned their shopping carts.',
        // Updated with better shopping cart image
        image:
          'https://images.unsplash.com/photo-1544428081-faee9a31faa4?w=500&auto=format&fit=crop&q=80',
      },
      {
        title: 'Personalized Product Recommendations',
        description:
          'Send tailored product suggestions based on browsing history and past purchases to increase average order value.',
        // Updated with better product recommendation image
        image:
          'https://images.unsplash.com/photo-1531303435785-3853ba035cda?w=500&auto=format&fit=crop&q=80',
      },
      {
        title: 'Post-Purchase Support',
        description:
          'Provide instant updates on order status and address customer inquiries through automated WhatsApp messaging.',
        // Updated with better delivery/support image
        image:
          'https://images.unsplash.com/photo-1585421514284-efb74320d472?w=500&auto=format&fit=crop&q=80',
      },
    ],
    faqs: [
      {
        question: 'How does WhatsEase help recover abandoned carts?',
        answer:
          'WhatsEase automatically sends personalized WhatsApp messages to customers who abandoned their carts, including product images, price details, and a direct link to complete the purchase with just one tap.',
      },
      {
        question:
          'Can I integrate WhatsEase with my existing e-commerce platform?',
        answer:
          'Yes, WhatsEase integrates seamlessly with major e-commerce platforms including Shopify, WooCommerce, Magento, and custom solutions through our API.',
      },
      {
        question: 'How do customers opt-in to receive WhatsApp messages?',
        answer:
          "WhatsEase provides customizable opt-in widgets for your website checkout flow, ensuring full compliance with WhatsApp's business messaging policies and data protection regulations.",
      },
      {
        question: 'Can I track the ROI of my WhatsApp marketing campaigns?',
        answer:
          'Absolutely. WhatsEase provides comprehensive analytics showing conversation metrics, conversion rates, and revenue attribution for all your WhatsApp messaging campaigns.',
      },
    ],
    ctaTitle: 'Ready to boost your e-commerce sales with WhatsEase?',
    ctaDescription:
      'Join hundreds of e-commerce businesses that have transformed their customer engagement and increased sales with WhatsEase messaging solutions.',
  };

  return <IndustryTemplate industry={industryData} />;
}
