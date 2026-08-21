import React from 'react';
import IndustryTemplate from '@/app/components/IndustryTemplate';
import {
  CalendarIcon,
  ClockIcon,
  ShieldCheckIcon,
  BellAlertIcon,
  UserIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Healthcare Solutions | WhatsEase',
  description:
    'WhatsApp messaging solutions for healthcare providers to improve patient experience and streamline communication.',
};

export default function HealthcarePage() {
  const industryData = {
    name: 'Healthcare',
    tagline:
      'Improve patient experience with appointment reminders and follow-up care through WhatsApp.',
    description:
      'Enhance patient engagement, reduce no-shows, and streamline healthcare communication with HIPAA-compliant WhatsApp messaging solutions.',
    // Updated with a more professional healthcare hero image
    heroImage:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&auto=format&fit=crop&q=80',
    statsTitle: 'WhatsEase Healthcare Impact',
    stats: [
      { value: '38%', label: 'Reduction in missed appointments' },
      { value: '45%', label: 'Faster patient response time' },
      { value: '93%', label: 'Patient satisfaction rate' },
    ],
    features: [
      {
        title: 'Appointment Scheduling',
        description:
          'Allow patients to schedule, reschedule, or cancel appointments directly through WhatsApp.',
        icon: <CalendarIcon className="h-6 w-6" />,
      },
      {
        title: 'Appointment Reminders',
        description:
          'Send automated reminders with location details and pre-appointment instructions.',
        icon: <ClockIcon className="h-6 w-6" />,
      },
      {
        title: 'Medication Reminders',
        description:
          'Help patients adhere to medication schedules with timely WhatsApp reminders.',
        icon: <BellAlertIcon className="h-6 w-6" />,
      },
      {
        title: 'Post-visit Follow-ups',
        description:
          'Check on patient recovery and gather feedback on treatment effectiveness.',
        icon: <UserIcon className="h-6 w-6" />,
      },
      {
        title: 'Secure Patient Communication',
        description:
          'HIPAA-compliant messaging platform for sharing sensitive health information.',
        icon: <ShieldCheckIcon className="h-6 w-6" />,
      },
      {
        title: 'Digital Prescriptions',
        description:
          'Send digital prescription copies and refill reminders through WhatsApp.',
        icon: <DocumentTextIcon className="h-6 w-6" />,
      },
    ],
    testimonial: {
      quote:
        'WhatsEase has revolutionized how we communicate with patients. Appointment no-shows have decreased by 38%, and our staff saves hours each day that used to be spent on phone calls.',
      author: '',
      role: '',
      company: '',
      // Updated with more professional doctor portrait
      image: '',
    },
    useCases: [
      {
        title: 'Appointment Management',
        description:
          'Automate the entire appointment lifecycle from scheduling to follow-ups, reducing administrative burden and improving patient experience.',
        // Updated with better appointment image
        image:
          'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=500&auto=format&fit=crop&q=80',
      },
      {
        title: 'Treatment Adherence',
        description:
          'Improve patient outcomes with medication reminders and treatment progress check-ins through personalized WhatsApp messages.',
        // Updated with better medication adherence image
        image:
          'https://images.unsplash.com/photo-1631549916768-4119b4123a51?w=500&auto=format&fit=crop&q=80',
      },
      {
        title: 'Lab Results & Reports',
        description:
          'Securely deliver test results and medical reports through WhatsApp, with secure verification to ensure patient privacy.',
        // Updated with better medical reports image
        image:
          'https://images.unsplash.com/photo-1615461066841-6116e61939e4?w=500&auto=format&fit=crop&q=80',
      },
    ],
    faqs: [
      {
        question: 'Is WhatsEase HIPAA compliant for healthcare messaging?',
        answer:
          'Yes, WhatsEase offers HIPAA-compliant messaging solutions specifically designed for healthcare providers, with end-to-end encryption and secure patient verification protocols.',
      },
      {
        question: 'How do patients opt-in to receive WhatsApp communications?',
        answer:
          "WhatsEase provides customizable patient consent workflows during registration or check-in, ensuring full compliance with healthcare privacy regulations and WhatsApp's business messaging policies.",
      },
      {
        question: 'Can WhatsEase integrate with our existing EHR system?',
        answer:
          'Absolutely. WhatsEase offers integration with major Electronic Health Record systems including Epic, Cerner, Allscripts, and others through our secure API and pre-built connectors.',
      },
      {
        question: 'How does WhatsEase help reduce appointment no-shows?',
        answer:
          'WhatsEase sends automated appointment reminders through WhatsApp with interactive response options that allow patients to confirm, reschedule, or cancel with a single tap, dramatically reducing no-show rates.',
      },
    ],
    ctaTitle: 'Enhance your patient communication with WhatsEase',
    ctaDescription:
      'Join leading healthcare providers using WhatsEase to improve patient engagement, streamline operations, and deliver better care outcomes.',
  };

  return <IndustryTemplate industry={industryData} />;
}
