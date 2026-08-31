"use client";
/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion';
import { Phone, Mic, Users, Handshake, Building2, Activity, MessageCircle, Megaphone, Bot, Inbox, Settings2, Bell, FileText, BarChart3, Lock, Network, MapPinOff, Database, Cloud, LineChart, BadgePercent, Contact2, Globe } from 'lucide-react';

const features = [
  { title: 'Sales Leads', icon: Contact2 },
  { title: 'Deals/Opportunities', icon: Handshake },
  { title: 'People/Contacts', icon: Users },
  { title: 'Account/Companies', icon: Building2 },
  { title: 'Activity Tracking', icon: Activity },
  { title: 'One Click Communication', icon: MessageCircle },
  { title: 'Built-in Phone dialer', icon: Phone },
  { title: 'Call Tracking & Recordings', icon: Mic },
  { title: 'WhatsApp Campaigns', icon: Megaphone },
  { title: 'WhatsApp Automation', icon: Settings2 },
  { title: 'WhatsApp Team Inbox', icon: Inbox },
  { title: 'WhatsApp Chatbots', icon: Bot },
  { title: 'Lead Scoring/Distribution', icon: BadgePercent },
  { title: 'Sales Forecasting', icon: LineChart },
  { title: 'Reminders/Notifications', icon: Bell },
  { title: 'Document/File Attachments', icon: FileText },
  { title: 'Dashboard/Analytics', icon: BarChart3 },
  { title: 'CRM Customizations', icon: Settings2 },
  { title: 'Field-level security', icon: Lock },
  { title: 'Hierarchy Restrictions', icon: Network },
  { title: 'Location Restrictions', icon: MapPinOff },
  { title: 'Native Integrations', icon: Globe },
  { title: 'API & Webhooks', icon: Cloud },
  { title: 'Data Administration', icon: Database },
];

export default function AllFeatures() {
  return (
    <div className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0a2e1c] text-center mb-6 max-w-4xl">
          Everything You Need for High-Performance Sales Teams
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl">
          WhatsEase CRM empowers you to capture more leads, close deals faster, and track your sales team's success—all in one place.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center justify-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:border-[#2d8a5e] transition-colors h-32"
            >
              <feature.icon className="h-8 w-8 text-[#1e5f3f]" />
              <p className="text-center text-xs font-semibold text-gray-700 leading-tight">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
