import React from 'react';
import ProductTemplate from '@/app/components/ProductTemplate';
import {
  EnvelopeIcon,
  UserGroupIcon,
  ChartBarIcon,
  CursorArrowRippleIcon,
  DocumentTextIcon,
  TagIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'WhatsApp Newsletter | WhatsEase',
  description:
    'Engage your audience with interactive WhatsApp newsletters for higher open rates and better conversions',
};

export default function WhatsAppNewsletterPage() {
  return (
    <ProductTemplate
      productName="WhatsApp Newsletter"
      productTagline="For more engagement & higher conversions"
      productDescription="Reach your audience directly in their WhatsApp inbox with rich, interactive newsletters that achieve open rates of up to 95% and drive measurable results for your business."
      heroImage="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&auto=format&fit=crop&q=80"
      features={[
        {
          icon: <EnvelopeIcon className="h-6 w-6" />,
          title: 'Rich Content Newsletters',
          description:
            'Create engaging newsletters with text, images, videos, buttons, and interactive elements',
        },
        {
          icon: <UserGroupIcon className="h-6 w-6" />,
          title: 'Audience Segmentation',
          description:
            'Target specific customer segments based on behavior, preferences, or demographics',
        },
        {
          icon: <ChartBarIcon className="h-6 w-6" />,
          title: 'Performance Analytics',
          description:
            'Track open rates, click-through rates, engagement metrics, and conversions',
        },
        {
          icon: <CursorArrowRippleIcon className="h-6 w-6" />,
          title: 'One-Click Subscription',
          description:
            'Simple opt-in process for subscribers with compliant consent management',
        },
        {
          icon: <DocumentTextIcon className="h-6 w-6" />,
          title: 'Template Library',
          description:
            'Pre-designed templates for promotions, announcements, updates, and more',
        },
        {
          icon: <TagIcon className="h-6 w-6" />,
          title: 'Personalization',
          description:
            'Dynamic content tailored to each recipient for higher engagement',
        },
      ]}
      benefits={[
        {
          title: '95% Open Rates',
          description:
            'WhatsApp newsletters achieve dramatically higher open rates than traditional email',
        },
        {
          title: 'Immediate Engagement',
          description: 'Reach customers instantly with push notifications',
        },
        {
          title: 'Higher Conversion Rates',
          description:
            'Interactive elements and direct response options drive better results',
        },
        {
          title: 'No Spam Filters',
          description:
            'Avoid email deliverability issues and reach your audience directly',
        },
        {
          title: 'Reduced Marketing Costs',
          description:
            'More efficient communication channel with better ROI than traditional methods',
        },
        {
          title: 'Build Customer Loyalty',
          description:
            'Regular, non-intrusive updates keep your brand top-of-mind',
        },
      ]}
      testimonial={{
        quote:
          "WhatsEase made ticketing and attendee management seamless! Guests easily booked tickets via WhatsApp, accessed event details, and stayed updated, ensuring a smooth experience. The platform simplified registrations and coordination, allowing us to focus on creating an unforgettable celebration",
        author: 'Michael Chen',
        role: 'Digital Marketing Director',
        company: 'Weekend Bazaar',
        image:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      }}
      faqs={[
        {
          question: 'How do customers subscribe to my WhatsApp Newsletter?',
          answer:
            'WhatsEase provides multiple subscription methods: a widget for your website, QR codes for print materials, direct links for social media, and API integration for your existing systems. All methods include proper opt-in consent management to ensure compliance.',
        },
        {
          question:
            'Is WhatsApp Newsletter compliant with messaging regulations?',
          answer:
            'Yes, WhatsEase handles all compliance aspects, including explicit opt-ins, subscription management, and unsubscribe options. Our platform adheres to WhatsApp Business Policy, GDPR, CCPA, and other relevant regulations.',
        },
        {
          question: 'How often can I send WhatsApp Newsletters?',
          answer:
            'WhatsApp allows sending messaging to subscribers within a 24-hour window of their last interaction or using approved message templates outside this window. WhatsEase helps you maintain optimal sending frequency to maximize engagement while maintaining compliance.',
        },
        {
          question:
            'Can I include links and call-to-action buttons in my newsletter?',
          answer:
            'Absolutely. WhatsApp Newsletters support rich interactive elements including buttons, quick replies, list selections, and direct links to products, landing pages, or any destination you choose.',
        },
      ]}
      cta={{
        title: 'Start reaching customers where they actually look',
        description:
          'Join forward-thinking businesses achieving 8x higher engagement with WhatsApp Newsletters.',
        primaryButton: {
          text: 'Start Your Free Trial',
          href: '/signup',
        },
        secondaryButton: {
          text: 'See Demo',
          href: '/demo',
        },
      }}
      demoImage="https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&auto=format&fit=crop&q=80"
    />
  );
}
