import { SparklesIcon, ChatBubbleLeftRightIcon, CogIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import ProductTemplate from '../../components/ProductTemplate';

export default function AIChatbotPage() {
  return (
    <ProductTemplate
      productName="AI Chatbot"
      productTagline="The ultimate Chatbot"
      productDescription="Automate conversations, answer questions 24/7, and delight your customers with a smart AI-powered chatbot. Save time and scale your support."
      heroImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
      features={[
        {
          icon: <SparklesIcon className="h-8 w-8" />,
          title: "Conversational AI",
          description: "Understands and responds like a human.",
        },
        {
          icon: <ChatBubbleLeftRightIcon className="h-8 w-8" />,
          title: "Multi-Channel",
          description: "Works on WhatsApp, web chat, and more.",
        },
        {
          icon: <CogIcon className="h-8 w-8" />,
          title: "Easy Setup",
          description: "Launch your chatbot in minutes, no coding needed.",
        },
        {
          icon: <RocketLaunchIcon className="h-8 w-8" />,
          title: "Scalable",
          description: "Handles unlimited conversations at once.",
        },
      ]}
      benefits={[
        {
          title: "24/7 support",
          description: "Never miss a customer question, day or night.",
        },
        {
          title: "Reduce workload",
          description: "Let AI handle common questions automatically.",
        },
        {
          title: "Grow your business",
          description: "Engage more customers without extra staff.",
        },
      ]}
      demoImage="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=900&h=600&fit=crop"
      cta={{
        title: "Experience the power of AI Chatbot",
        description: "Try it free or see a live demo.",
        primaryButton: { text: "Start Free Trial", href: "/signup" },
        secondaryButton: { text: "See Demo", href: "/demo" },
      }}
      faqs={[
        {
          question: "Does the AI Chatbot work on WhatsApp?",
          answer: "Yes, it works on WhatsApp, web chat, and more.",
        },
        {
          question: "Can I train the chatbot?",
          answer: "You can easily customize answers and flows.",
        },
      ]}
    />
  );
}