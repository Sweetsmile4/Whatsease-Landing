import {
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  CogIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
  HeartIcon,
  AcademicCapIcon,
  HomeModernIcon,
  DocumentTextIcon,
  BookOpenIcon,
  InboxArrowDownIcon,
  ChatBubbleBottomCenterTextIcon,
  StarIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ComputerDesktopIcon,
  PuzzlePieceIcon,
  EnvelopeIcon,
  ArrowPathIcon,
  ArrowUturnRightIcon, // Added as a replacement for RepeatIcon
  TicketIcon, // Added import for TicketIcon
  UserGroupIcon, // Added import for UserGroupIcon
} from '@heroicons/react/24/outline';

// Types
export type IconItem = {
  name: string;
  description: string;
  darkMode?: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
};

export type ImageItem = {
  name: string;
  darkMode?: boolean;
  description: string;
  image: string;
  href: string;
};

export type Section =
  | {
      title: string;
      type: 'icons';
      items: IconItem[];
    }
  | {
      title: string;
      type: 'images';
      items: ImageItem[];
    };

export type MenuItems = {
  [key: string]: {
    sections: Section[];
    href: string;
  };
};

// Navigation links with their corresponding pages
export const navLinks = {
  Product: '/product',
  'Use Case': '/use-case',
  Comparision: '/comparision',
  Pricing: '/pricing',
  'Case Studies': '/case-studies', // Changed from Resources to Case Studies
  'About us': '/about-us',
};

export const menuItems: MenuItems = {
  Product: {
    href: '/product',
    sections: [
      {
        title: 'Core Products',
        type: 'icons',
        items: [
          {
            name: 'WhatsApp Business',
            description: 'Made for business',
            icon: ChatBubbleLeftRightIcon,
            href: '/product/whatsapp-business',
          },
          {
            name: 'WhatsApp Newsletter',
            description: 'For more turnover & success',
            icon: EnvelopeIcon,
            href: '/product/whatsapp-newsletter',
          },
          {
            name: 'Automations',
            description: 'Chatbots & Workflows',
            icon: ArrowPathIcon,
            href: '/product/automations',
          },
          {
            name: 'Integrations',
            description: 'Thousands of integrations',
            icon: PuzzlePieceIcon,
            href: '/product/integrations',
          },
          {
            name: 'Universal Inbox',
            description: 'All channels at a glance',
            icon: InboxArrowDownIcon,
            href: '/product/universal-inbox',
          },
          {
            name: 'Live Chat',
            description: 'The chat for your website',
            icon: ChatBubbleBottomCenterTextIcon,
            href: '/product/live-chat',
          },
          {
            name: 'Reviews',
            description: 'Simply more ratings',
            icon: StarIcon,
            href: '/product/reviews',
          },
          {
            name: 'AI Chatbot',
            description: 'The ultimate Chatbot',
            icon: SparklesIcon,
            href: '/product/ai-chatbot',
          },
        ],
      },
      // {
      //   title: 'In the Spotlight',
      //   type: 'images',
      //   items: [
      //     {
      //       name: 'Interactive Product Demo',
      //       description: 'See how WhatsEase works for your business',
      //       image:
      //         'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=150&fit=crop',
      //       href: '/product/demo',
      //     },
      //     {
      //       name: 'New: WhatsEase Desktop App',
      //       description: 'Experience WhatsEase on your desktop',
      //       image:
      //         'https://images.unsplash.com/photo-1547658719-da2b51169166?w=200&h=150&fit=crop',
      //       href: '/product/desktop-app',
      //     },
      //   ],
      // },
    ],
  },
  'Use Case': {
    // Change this key from 'use-case' to 'Use Case' to match the navLinks key
    href: '/use-case',
    sections: [
      {
        title: 'Use Cases',
        type: 'icons',
        items: [
          {
            name: 'Chatbot',
            description: 'Automate conversations and support',
            icon: ChatBubbleLeftRightIcon,
            href: '/use-case/chatbot',
          },
          {
            name: 'COD to Prepaid Conversion',
            description: 'Increase prepaid orders and reduce RTO',
            icon: ShoppingCartIcon,
            href: '/use-case/cod-to-prepaid-conversion',
          },
          {
            name: 'Customer Support',
            description: 'Resolve queries and delight customers',
            icon: StarIcon,
            href: '/use-case/customer-support',
          },
          {
            name: 'Event Management',
            description: 'Seamless ticketing and attendee engagement',
            icon: TicketIcon,
            href: '/use-case/event-management',
          },
          {
            name: 'New Product Launch',
            description: 'Drive buzz and awareness for new launches',
            icon: RocketLaunchIcon,
            href: '/use-case/new-product-launch-compaigns',
          },
          {
            name: 'Order Alert & Notification',
            description: 'Keep customers updated on their orders',
            icon: InboxArrowDownIcon,
            href: '/use-case/order-alert-and-notification',
          },
          {
            name: 'Repeat Purchase',
            description: 'Encourage customers to buy again',
            icon: ArrowUturnRightIcon, // Using ArrowUturnRightIcon as a replacement for RepeatIcon
            href: '/use-case/repeat-purchase',
          },
          {
            name: 'Retail',
            description: 'Solutions for retail businesses',
            icon: ShoppingCartIcon,
            href: '/use-case/retail',
          },
          {
            name: 'Upselling Campaigns',
            description: 'Increase AOV with targeted upsells',
            icon: ChartBarIcon,
            href: '/use-case/upselling-campaigns',
          },
          {
            name: 'WhatsApp Marketing Campaigns',
            description: 'Run high-converting WhatsApp campaigns',
            icon: SparklesIcon,
            href: '/use-case/whatsApp-marketing-campaigns',
          },
        ],
      },
      // {
      //   title: 'Success Stories',
      //   type: 'images',
      //   items: [
      //     {
      //       name: 'Retail Success',
      //       description: 'How WhatsEase transformed customer service',
      //       image:
      //         'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=150&fit=crop',
      //       href: '/case-studies',
      //     },
      //     {
      //       name: 'Healthcare Insights',
      //       description: 'Streamlining patient communication',
      //       image:
      //         'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&h=150&fit=crop',
      //       href: '/case-studies',
      //     },
      //   ],
      // },
    ],
  },
  Comparision: {
    href: '/comparision',
    sections: [
      {
        title: 'WhatsEase vs Competitors',
        type: 'icons',
        items: [
          {
            name: 'WhatsEase vs Bitespeed',
            description: 'Feature comparision and pricing',
            icon: ChartBarIcon,
            href: '/comparision/whatsease-vs-bitespeed',
          },
          {
            name: 'WhatsEase vs Business On Bot',
            description: 'Automation and chatbot comparision',
            icon: RocketLaunchIcon,
            href: '/comparision/whatsease-vs-business-on-bot',
          },
          {
            name: 'WhatsEase vs Contlo',
            description: 'Marketing automation comparision',
            icon: ComputerDesktopIcon,
            href: '/comparision/whatsease-vs-contlo',
          },
          {
            name: 'WhatsEase vs Gallabox',
            description: 'WhatsApp Business solution comparision',
            icon: DevicePhoneMobileIcon,
            href: '/comparision/whatsease-vs-Gallabox',
          },
          {
            name: 'WhatsEase vs Interakt',
            description: 'Customer engagement platform comparision',
            icon: ChatBubbleLeftRightIcon,
            href: '/comparision/whatsease-vs-interakt',
          },
          {
            name: 'WhatsEase vs Kwikchat',
            description: 'Live chat and messaging comparision',
            icon: ChatBubbleBottomCenterTextIcon,
            href: '/comparision/whatsease-vs-kwikchat',
          },
          {
            name: 'WhatsEase vs Limechat',
            description: 'Conversational commerce comparision',
            icon: ShoppingCartIcon,
            href: '/comparision/whatsease-vs-limechat',
          },
          {
            name: 'WhatsEase vs Sinch',
            description: 'Communication platform comparision',
            icon: CogIcon,
            href: '/comparision/whatsease-vs-sinch',
          },
          {
            name: 'WhatsEase vs Superlemon',
            description: 'Customer support solution comparision',
            icon: SparklesIcon,
            href: '/comparision/whatsease-vs-superlemon',
          },
          {
            name: 'WhatsEase vs Wati',
            description: 'WhatsApp API platform comparision',
            icon: PuzzlePieceIcon,
            href: '/comparision/whatsease-vs-wati',
          },
          {
            name: 'WhatsEase vs Zoko',
            description: 'E-commerce messaging comparision',
            icon: EnvelopeIcon,
            href: '/comparision/whatsease-vs-zoko',
          },
        ],
      },
    ],
  },
  'Case Studies': {
    // Changed from Resources to Case Studies
    href: '/case-studies', // Updated href
    sections: [
      {
        title: 'Success Stories',
        type: 'icons',
        items: [
          // {
          //   name: 'Photograph Distribution',
          //   description: 'Streamlining event photo management',
          //   icon: DocumentTextIcon,
          //   href: '/case-studies/photograph-distribution',
          // },
          // {
          //   name: 'Milk‑Distribution Program',
          //   description: 'Automating orders for local vendors',
          //   icon: ShoppingCartIcon,
          //   href: '/case-studies/milk-distribution',
          // },
               {
            name: 'MPC Gymkhana Garba',
            description: 'Digital ticketing for cultural events',
            icon: TicketIcon,
            href: '/case-studies/mpc-gymkhana-garba',
          },
            {
            name: 'CII Young India Event',
            description: 'Digital ticketing for cultural events',
            icon: TicketIcon,
            href: '/case-studies/cii_young_india_event',
          },
          {
            name: 'Waves Food Festival',
            description: 'Digital ticketing for cultural events',
            icon: TicketIcon,
            href: '/case-studies/waves-food-festival',
          },
          {
            name: 'Shri Gangaram Hospital',
            description: 'Patient appointment management',
            icon: HeartIcon,
            href: '/case-studies/shri-gangaram-hospital',
          },
           {
            name: 'Train with Shubham',
            description: 'Streamlining education coaching',
            icon: AcademicCapIcon,
            href: '/case-studies/train-with-shubham',
          },
        ],
      },
      {
        title: 'More Success Stories',
        type: 'icons',
        items: [
          {
            name: 'The Hackers Meetup',
            description: 'Event registration and management',
            icon: UserGroupIcon,
            href: '/case-studies/the-hackers-meetup',
          },
          {
            name: 'Urban Food Forest',
            description: 'Volunteer coordination platform',
            icon: HomeModernIcon,
            href: '/case-studies/urban-food-forest',
          },
          {
            name: 'Vadodara Fun Fiesta',
            description: 'Festival ticketing solution',
            icon: TicketIcon,
            href: '/case-studies/vff',
          },
          {
            name: 'Weekend Bazaar',
            description: 'Vendor management system',
            icon: ShoppingCartIcon,
            href: '/case-studies/weekend-bazaar',
          },
        ],
      },
    ],
  },
};
