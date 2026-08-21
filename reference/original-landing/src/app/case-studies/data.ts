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
  NewspaperIcon,
  BookOpenIcon,
  VideoCameraIcon,
  BeakerIcon,
  TicketIcon,
  BuildingOffice2Icon,
  HomeIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';

export const caseStudiesData = [
  {
    id: 'photograph-distribution',
    title: 'Photograph Distribution',
    icon: PhotoIcon,
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    image:
      'https://images.unsplash.com/photo-1552334823-ca7f70376179?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    challenge:
      'Photography studios faced delays and errors in delivering large volumes of event photos, with tedious manual sorting and impersonal delivery methods.',
    solution:
      'WhatsEase automated the process: photographers uploaded images to the cloud, and clients received instant, personalized WhatsApp links to their galleries. Selfie-matching ensured accurate delivery.',
    results: [
      '90% faster photo delivery',
      'Reduced manual workload',
      'Higher client satisfaction',
      'Increased referrals through easy sharing',
    ],
    industry: 'Photography',
    tags: ['Media', 'Automation'],
  },
  // Add all other case studies from the main file
];
