import React from 'react';
import ProductTemplate from '@/app/components/ProductTemplate';
import {
  ArrowPathIcon,
  RocketLaunchIcon,
  ClockIcon,
  CubeTransparentIcon,
  ChatBubbleLeftEllipsisIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Automations | WhatsEase',
  description:
    'Streamline your business communications with WhatsEases powerful chatbots and workflow automation tools',
};

export default function AutomationsPage() {
  return (
    <ProductTemplate
      productName="Automations"
      productTagline="Chatbots & Workflows That Scale With You"
      productDescription="Save time and resources by automating repetitive tasks, messages, and entire customer journeys with our powerful yet easy-to-use automation platform."
      heroImage="https://images.unsplash.com/photo-1596638787647-904d822d751e?w=1200&auto=format&fit=crop&q=80"
      features={[
        {
          icon: <ChatBubbleLeftEllipsisIcon className="h-6 w-6" />,
          title: 'AI-Powered Chatbots',
          description:
            'Create intelligent conversational agents that understand customer intent',
        },
        {
          icon: <CubeTransparentIcon className="h-6 w-6" />,
          title: 'Visual Flow Builder',
          description:
            'Design complex workflows with our intuitive drag-and-drop interface',
        },
        {
          icon: <ClockIcon className="h-6 w-6" />,
          title: 'Scheduled Messages',
          description:
            'Set up timed messages and follow-ups based on customer actions',
        },
        {
          icon: <DocumentDuplicateIcon className="h-6 w-6" />,
          title: 'Template Library',
          description:
            'Choose from pre-built automation templates for common business scenarios',
        },
        {
          icon: <RocketLaunchIcon className="h-6 w-6" />,
          title: 'Conditional Logic',
          description:
            'Create smart, branching workflows that adapt to customer responses',
        },
        {
          icon: <ArrowPathIcon className="h-6 w-6" />,
          title: 'Integration Triggers',
          description:
            'Initiate workflows from events in your CRM, e-commerce, or other systems',
        },
      ]}
      benefits={[
        {
          title: '24/7 Customer Service',
          description:
            'Provide instant responses to common questions at any time of day',
        },
        {
          title: '60% Cost Reduction',
          description:
            'Lower support costs by automating routine inquiries and tasks',
        },
        {
          title: 'Consistent Experience',
          description:
            'Deliver the same high-quality service to every customer, every time',
        },
        {
          title: 'Scale Effortlessly',
          description:
            'Handle thousands of simultaneous conversations without adding staff',
        },
        {
          title: 'Faster Lead Qualification',
          description:
            'Automatically qualify leads and route them to the right team members',
        },
        {
          title: 'Happier Human Agents',
          description:
            'Free your team from repetitive tasks to focus on complex issues',
        },
      ]}
      integrations={{
        title: 'Connects with your tech stack',
        description:
          'Trigger automations from and send data to your business systems',
        logos: [
          {
            name: 'Zapier',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zapier_logo.svg',
          },
          {
            name: 'Salesforce',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/200px-Salesforce.com_logo.svg.png',
          },
          {
            name: 'HubSpot',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg',
          },
          {
            name: 'Shopify',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/200px-Shopify_logo_2018.svg.png',
          },
          {
            name: 'Google Sheets',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Google_Sheets_2020_Logo.svg/200px-Google_Sheets_2020_Logo.svg.png',
          },
          {
            name: 'WordPress',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/200px-WordPress_blue_logo.svg.png',
          },
        ],
      }}
      testimonial={{
        quote:
          "WhatsEase's automation platform cut our response time from hours to seconds. We've automated 70% of customer inquiries, freeing our support team to handle complex cases and provide a more personalized service where it matters most.",
        author: 'Alex Rodriguez',
        role: 'Head of Customer Experience',
        company: 'TechNova Solutions',
        image:
          'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      }}
      faqs={[
        {
          question: 'Do I need coding knowledge to create automations?',
          answer:
            'Not at all. WhatsEase visual flow builder uses an intuitive drag-and-drop interface that requires no coding. For advanced users, we do offer custom script actions for maximum flexibility, but they are entirely optional.',
        },
        {
          question: 'How intelligent are the AI chatbots?',
          answer:
            'WhatsEase chatbots use advanced natural language processing to understand customer intent, even when questions are phrased differently. They can be trained on your specific business knowledge and continuously improve through machine learning from conversations.',
        },
        {
          question: 'Can automations handle complex customer journeys?',
          answer:
            'Absolutely. Our workflow builder supports conditional branching, variables, data lookups, and integration with external systems. This allows you to create sophisticated automation flows that can handle complex business logic and personalized customer journeys.',
        },
        {
          question: 'How do automations hand off to human agents?',
          answer:
            'WhatsEase provides seamless handover when automation cant resolve an inquiry. The system can transfer based on specific triggers, customer request, or sentiment detection. Human agents receive the full conversation history and context for a smooth transition.',
        },
      ]}
      cta={{
        title: 'Ready to automate your customer communications?',
        description:
          'Join thousands of businesses saving time and delivering better customer experiences with WhatsEase automations.',
        primaryButton: {
          text: 'Start Building Now',
          href: '/signup',
        },
        secondaryButton: {
          text: 'Book a Demo',
          href: '/demo',
        },
      }}
      demoImage="https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&auto=format&fit=crop&q=80"
    />
  );
}
