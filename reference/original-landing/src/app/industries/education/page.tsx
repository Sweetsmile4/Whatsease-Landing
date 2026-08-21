import React from 'react';
import IndustryTemplate from '@/app/components/IndustryTemplate';
import {
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  PresentationChartBarIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Education Solutions | WhatsEase',
  description:
    'WhatsApp messaging solutions for educational institutions to enhance student engagement and streamline communication.',
};

export default function EducationPage() {
  const industryData = {
    name: 'Education',
    tagline:
      'Enhance student engagement and streamline administrative communication through WhatsApp.',
    description:
      'Connect with students and parents effectively, provide instant academic support, and simplify administrative processes with WhatsApp messaging solutions.',
    // Updated with a more professional education hero image
    heroImage:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&auto=format&fit=crop&q=80',
    statsTitle: 'WhatsEase Education Impact',
    stats: [
      { value: '56%', label: 'Improvement in student engagement' },
      { value: '41%', label: 'Reduction in administrative time' },
      { value: '89%', label: 'Parent satisfaction rate' },
    ],
    features: [
      {
        title: 'Course Updates & Reminders',
        description:
          'Keep students informed about assignments, deadlines, and course changes through automated WhatsApp messages.',
        icon: <AcademicCapIcon className="h-6 w-6" />,
      },
      {
        title: 'Student Q&A Automation',
        description:
          'Provide instant answers to common student questions with intelligent chatbots.',
        icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
      },
      {
        title: 'Parent-Teacher Communication',
        description:
          'Facilitate seamless communication between teachers and parents regarding student progress.',
        icon: <UserGroupIcon className="h-6 w-6" />,
      },
      {
        title: 'Learning Resources Distribution',
        description:
          'Share study materials, reading lists, and educational resources directly through WhatsApp.',
        icon: <BookOpenIcon className="h-6 w-6" />,
      },
      {
        title: 'Event & Schedule Management',
        description:
          'Send timely reminders for classes, exams, and campus events with interactive responses.',
        icon: <CalendarIcon className="h-6 w-6" />,
      },
      {
        title: 'Admission Process Support',
        description:
          'Guide prospective students through the application process with step-by-step assistance.',
        icon: <PresentationChartBarIcon className="h-6 w-6" />,
      },
    ],
    testimonial: {
      quote:
        'WhatsEase has transformed how we communicate with students and parents. Our engagement rates have increased dramatically, and administrative staff can focus on more valuable tasks instead of answering repetitive questions.',
      author: 'Professor Emily Rodriguez',
      role: 'Dean of Student Affairs',
      company: 'Metropolitan University',
      // Updated with more professional educator portrait
      image:
        'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=200&fit=crop',
    },
    useCases: [
      {
        title: 'Homework & Assignment Reminders',
        description:
          'Send automated reminders about upcoming assignments with links to resources and submission portals, reducing late submissions and improving student performance.',
        // Updated with better student studying image
        image:
          'https://images.unsplash.com/photo-1587691592099-24045742c181?w=500&auto=format&fit=crop&q=80',
      },
      {
        title: 'Campus Event Notifications',
        description:
          'Keep students informed about lectures, workshops, and social events with interactive RSVP options right through WhatsApp.',
        // Updated with better campus event image
        image:
          'https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?w=500&auto=format&fit=crop&q=80',
      },
      {
        title: 'Parent Updates & Progress Reports',
        description:
          'Share student progress reports, attendance records, and important school announcements with parents through personalized WhatsApp messages.',
        // Updated with better parent-teacher communication image
        image:
          'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=500&auto=format&fit=crop&q=80',
      },
    ],
    faqs: [
      {
        question: 'How does WhatsEase help increase student engagement?',
        answer:
          "WhatsEase delivers timely course updates, reminders, and learning resources directly to students' preferred messaging platform, resulting in higher engagement rates compared to email or learning management systems.",
      },
      {
        question: 'Can WhatsEase integrate with our school management system?',
        answer:
          'Yes, WhatsEase integrates with popular education management systems including Blackboard, Canvas, Moodle, and PowerSchool through our API and pre-built connectors.',
      },
      {
        question: 'How do we ensure student and parent privacy?',
        answer:
          'WhatsEase complies with educational privacy regulations including FERPA and uses end-to-end encryption for all communications, ensuring that student information remains secure and private.',
      },
      {
        question: 'Can we automate responses to common student inquiries?',
        answer:
          "Absolutely. WhatsEase's AI-powered chatbots can handle routine questions about deadlines, assignments, and campus information, freeing up staff time while providing instant answers to students.",
      },
    ],
    ctaTitle: 'Transform your educational communication with WhatsEase',
    ctaDescription:
      'Join hundreds of educational institutions using WhatsEase to improve student engagement, streamline administrative communication, and enhance the learning experience.',
  };

  return <IndustryTemplate industry={industryData} />;
}
