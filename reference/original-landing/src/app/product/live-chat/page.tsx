import { ChatBubbleBottomCenterTextIcon, DevicePhoneMobileIcon, CogIcon, StarIcon } from '@heroicons/react/24/outline';
import ProductTemplate from '../../components/ProductTemplate';

export default function LiveChatPage() {
  return (
    <ProductTemplate
      productName="Live Chat"
      productTagline="The chat for your website"
      productDescription="Engage visitors instantly with real-time chat. Answer questions, solve problems, and convert more leads directly from your website."
      heroImage="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop"
      features={[
        {
          icon: <ChatBubbleBottomCenterTextIcon className="h-8 w-8" />,
          title: "Instant Messaging",
          description: "Chat with website visitors in real time.",
        },
        {
          icon: <DevicePhoneMobileIcon className="h-8 w-8" />,
          title: "Mobile Friendly",
          description: "Chat on the go with our mobile-optimized interface.",
        },
        {
          icon: <CogIcon className="h-8 w-8" />,
          title: "Customizable Widget",
          description: "Match your brand with flexible chat widget options.",
        },
        {
          icon: <StarIcon className="h-8 w-8" />,
          title: "Chat Ratings",
          description: "Collect feedback after every conversation.",
        },
      ]}
      benefits={[
        {
          title: "Increase conversions",
          description: "Turn more visitors into customers with instant support.",
        },
        {
          title: "Reduce response time",
          description: "Answer questions before customers leave your site.",
        },
        {
          title: "Easy integration",
          description: "Add live chat to your site in minutes.",
        },
      ]}
      demoImage="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=900&h=600&fit=crop"
      cta={{
        title: "Start chatting with your visitors today",
        description: "Try Live Chat free or see a demo in action.",
        primaryButton: { text: "Start Free Trial", href: "/signup" },
        secondaryButton: { text: "See Demo", href: "/demo" },
      }}
      faqs={[
        {
          question: "Can I customize the chat widget?",
          answer: "Yes, you can change colors, position, and greetings.",
        },
        {
          question: "Is Live Chat mobile friendly?",
          answer: "Absolutely! It works perfectly on all devices.",
        },
      ]}
    />
  );
}