"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Calendar, Users, Mail, Grid, Clock, BarChart3, User, Heart, Megaphone, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  { quote: "We needed a highly customized WhatsApp ticketing solution for an HNI event under CII Young Indians, and Whatsease stood out for its flexibility...", name: 'Harshit Gupta', role: 'Event Organiser, Young Indians (CII)' },
  { quote: "Whatsease handled ticketing, communication, and data smoothly, letting me focus on performing while offering a more personal and flexible experience...", name: 'Jigar Panchal', role: '3D Designer & Musician' },
  { quote: "Whatsease simplified WhatsApp-based ticketing, attendee management, and event updates, enabling us to focus on delivering a smooth and memorable event.", name: 'Alpesh Patel', role: 'Organizer: Vadodara Fun Fiesta (VFF)' },
  { quote: "Whatsease resolved our payment challenges efficiently with an intuitive platform and strong developer support, making our ticketing process smooth and reliable.", name: 'Prashant Bhavsar', role: 'The Hackers MeetUP (THM) Ahmedabad Lead' },
];

export default function Solution() {
  const [activeTab, setActiveTab] = useState('sales');

  const tabs = [
    { id: 'sales', label: 'Sales' },
    { id: 'support', label: 'Support' },
    { id: 'marketing', label: 'Marketing' },
  ];

  const tabContent = {
    sales: {
      title: 'More deals. Less effort.',
      description: 'Turn conversations into conversions with WhatsApp Business. Close deals faster, wow your customers, and build lasting relationships effortlessly.',
      features: ['Boost conversions with interactive WhatsApp templates', '24/7 AI-powered automatic follow-ups', 'One inbox for all customer conversations'],
      detailItems: [
        { icon: MessageSquare, text: 'Chatbots for instant lead qualification' },
        { icon: Calendar, text: 'Interactive templates that sell' },
        { icon: Users, text: 'Internal notes and @mentions for teamwork' },
        { icon: Mail, text: 'WhatsApp Newsletters for tailored offers' },
        { icon: Grid, text: 'Seamless CRM integration' },
      ],
    },
    support: {
      title: 'Support that scales.',
      description: 'Deliver exceptional customer support 24/7 with AI-powered assistance and seamless human handoffs.',
      features: ['Automated ticket routing and prioritization', 'Multi-language AI support capabilities', 'Real-time customer satisfaction tracking'],
      detailItems: [
        { icon: MessageSquare, text: '24/7 AI-powered customer support' },
        { icon: Clock, text: 'Instant response time guarantee' },
        { icon: BarChart3, text: 'Advanced analytics and reporting' },
        { icon: User, text: 'Smart agent assignment' },
        { icon: Heart, text: 'Customer satisfaction scoring' },
      ],
    },
    marketing: {
      title: 'Marketing that converts.',
      description: 'Create targeted campaigns that reach customers where they are and drive meaningful engagement.',
      features: ['Personalized message campaigns', 'Advanced audience segmentation', 'Real-time campaign performance tracking'],
      detailItems: [
        { icon: Megaphone, text: 'Broadcast campaigns to thousands' },
        { icon: BarChart3, text: 'Detailed engagement analytics' },
        { icon: Grid, text: 'A/B testing for optimization' },
        { icon: Zap, text: 'Automated drip campaigns' },
        { icon: Users, text: 'Advanced audience targeting' },
      ],
    },
  };

  const currentContent = tabContent[activeTab as keyof typeof tabContent];
  const currentTestimonial = activeTab === 'sales' ? testimonials[0] : activeTab === 'support' ? testimonials[3] : testimonials[2];

  return (
    <div className="flex h-full w-full flex-col items-center justify-start px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-white">
      <div className="mb-6 text-center sm:mb-8 lg:mb-12">
        <h2 className="text-xl font-semibold text-black sm:text-2xl md:text-3xl lg:text-4xl">The perfect solution for every team</h2>
      </div>

      <div className="mb-6 flex items-center justify-center sm:mb-8 lg:mb-12">
        <div className="flex flex-wrap items-center justify-center gap-1 bg-gray-100 p-1 rounded-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative z-10 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${activeTab === tab.id ? 'text-[#0a2e1c]' : 'text-gray-500 hover:text-gray-700'}`}
            >
              {activeTab === tab.id && (
                <motion.div layoutId="activeTab" className="absolute inset-0 rounded-full bg-white shadow-sm" initial={false} transition={{ type: 'spring', stiffness: 500, damping: 30 }} />
              )}
              <span className="relative z-20">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-5xl rounded-2xl border border-gray-100 bg-[#e8f5ee] p-4 sm:p-8 lg:p-12 shadow-sm"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex w-full flex-col gap-4 lg:w-1/2">
            <h2 className="text-2xl font-bold text-[#0a2e1c] lg:text-3xl">{currentContent.title}</h2>
            <p className="text-gray-600 text-lg">{currentContent.description}</p>
            <div className="flex flex-col gap-3 mt-4">
              {currentContent.features.map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#2d8a5e] text-[#0a2e1c]">
                    <CheckCircle className="h-3 w-3" />
                  </span>
                  <span className="text-gray-800">{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-[#2d8a5e]/30">
              <blockquote className="text-sm font-medium leading-relaxed italic text-gray-700">"{currentTestimonial.quote}"</blockquote>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#1e5f3f] flex items-center justify-center text-white font-bold">{currentTestimonial.name.charAt(0)}</div>
                <div>
                  <div className="font-bold text-[#0a2e1c]">{currentTestimonial.name}</div>
                  <div className="text-xs text-gray-500">{currentTestimonial.role}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex flex-col gap-4">
                {currentContent.detailItems.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#e8f5ee] text-[#1e5f3f]">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-gray-800">{item.text}</span>
                    </div>
                  );
                })}
              </div>
              <a href="/login" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#2d8a5e] px-4 py-3 font-semibold text-white transition hover:bg-[#1e5f3f]">
                Use this Solution <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
