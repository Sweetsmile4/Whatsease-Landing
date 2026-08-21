import { StarIcon, ChatBubbleLeftRightIcon, SparklesIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import ProductTemplate from '../../components/ProductTemplate';

export default function ReviewsPage() {
  return (
    <ProductTemplate
      productName="Reviews"
      productTagline="Simply more ratings"
      productDescription="Collect, manage, and showcase customer reviews to build trust and boost sales. Make it easy for happy customers to share their experience."
      heroImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
      features={[
        {
          icon: <StarIcon className="h-8 w-8" />,
          title: "Easy Review Collection",
          description: "Request reviews automatically after every purchase.",
        },
        {
          icon: <ChatBubbleLeftRightIcon className="h-8 w-8" />,
          title: "Multi-Channel Requests",
          description: "Ask for reviews via WhatsApp, Email, or SMS.",
        },
        {
          icon: <SparklesIcon className="h-8 w-8" />,
          title: "Showcase Reviews",
          description: "Display your best reviews on your website.",
        },
        {
          icon: <ChartBarIcon className="h-8 w-8" />,
          title: "Analytics",
          description: "Track review rates and customer satisfaction.",
        },
      ]}
      benefits={[
        {
          title: "Build trust",
          description: "Show real feedback from real customers.",
        },
        {
          title: "Boost sales",
          description: "More reviews mean more conversions.",
        },
        {
          title: "Automate the process",
          description: "Let the system do the asking for you.",
        },
      ]}
      demoImage="https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?w=900&h=600&fit=crop"
      cta={{
        title: "Get more reviews, effortlessly",
        description: "Start collecting reviews today or see how it works.",
        primaryButton: { text: "Start Free Trial", href: "/signup" },
        secondaryButton: { text: "See Demo", href: "/demo" },
      }}
      faqs={[
        {
          question: "Can I automate review requests?",
          answer: "Yes, requests can be sent automatically after purchases.",
        },
        {
          question: "Where can I display reviews?",
          answer: "On your website, landing pages, and more.",
        },
      ]}
    />
  );
}