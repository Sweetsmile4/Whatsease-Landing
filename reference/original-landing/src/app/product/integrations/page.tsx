import React from 'react';
import ProductTemplate from '@/app/components/ProductTemplate';
import {
  PuzzlePieceIcon,
  ArrowsPointingOutIcon,
  CodeBracketIcon,
  // ... import other needed icons
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Integrations | WhatsEase',
  description: 'Connect WhatsEase with thousands of apps and services',
};

export default function IntegrationsPage() {
  return (
    <ProductTemplate
      productName="Integrations"
      productTagline="Connect with thousands of tools"
      productDescription="Seamlessly integrate WhatsEase with your existing business tools and platforms to create a unified workflow that boosts efficiency and delivers better customer experiences."
      heroImage="https://images.unsplash.com/photo-1560472355-536de3962603?w=1200&auto=format&fit=crop&q=80"
      features={[
        {
          icon: <PuzzlePieceIcon className="h-6 w-6" />,
          title: 'Pre-built Connectors',
          description: 'Ready-made integrations with popular business tools',
        },
        // Add remaining features...
      ]}
      benefits={[
        {
          title: 'Unified Data View',
          description: 'Eliminate data silos by connecting all your systems',
        },
        // Add remaining benefits...
      ]}
      // Configure other sections...
      cta={{
        title: 'Ready to connect your business systems?',
        description:
          'Join thousands of businesses creating unified experiences with WhatsEase integrations.',
        primaryButton: {
          text: 'Explore Integrations',
          href: '/signup',
        },
        secondaryButton: {
          text: 'Contact Sales',
          href: '/contact',
        },
      }}
      demoImage="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=1200&auto=format&fit=crop&q=80"
    />
  );
}
