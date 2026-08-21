import { InboxArrowDownIcon, DevicePhoneMobileIcon, ChatBubbleLeftRightIcon, CogIcon } from '@heroicons/react/24/outline';
import ProductTemplate from '../../components/ProductTemplate';

export default function UniversalInboxPage() {
  return (
    <ProductTemplate
      productName="Universal Inbox"
      productTagline="All channels at a glance"
      productDescription="Manage all your customer conversations from WhatsApp, Email, and more in one unified inbox. Collaborate with your team, never miss a message, and deliver faster support."
      heroImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
      features={[
        {
          icon: <InboxArrowDownIcon className="h-8 w-8" />,
          title: "Unified Messaging",
          description: "See all your customer chats from every channel in one place.",
        },
        {
          icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
          title: "Mobile & Desktop",
          description: "Access your inbox anywhere, anytime, on any device.",
        },
        {
          icon: <ChatBubbleLeftRightIcon className="h-8 w-8" />,
          title: "Team Collaboration",
          description: "Assign, tag, and resolve conversations together.",
        },
        {
          icon: <CogIcon className="h-8 w-8" />,
          title: "Smart Automation",
          description: "Automate replies and route messages to the right agent.",
        },
      ]}
      benefits={[
        {
          title: "No missed messages",
          description: "Never lose track of a customer conversation again.",
        },
        {
          title: "Boost productivity",
          description: "Handle more chats with less effort.",
        },
        {
          title: "Happier customers",
          description: "Respond faster and keep customers coming back.",
        },
      ]}
      demoImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=600&fit=crop"
      cta={{
        title: "Ready to unify your customer support?",
        description: "Start your free trial or book a demo to see Universal Inbox in action.",
        primaryButton: { text: "Start Free Trial", href: "/signup" },
        secondaryButton: { text: "Book a Demo", href: "/demo" },
      }}
      faqs={[
        {
          question: "Which channels are supported?",
          answer: "WhatsApp, Email, Facebook Messenger, and more.",
        },
        {
          question: "Can I assign chats to team members?",
          answer: "Yes, you can assign, tag, and collaborate on conversations.",
        },
      ]}
    />
  );
}