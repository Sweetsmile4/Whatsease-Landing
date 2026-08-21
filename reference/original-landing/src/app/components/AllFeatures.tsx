import { motion } from 'framer-motion';
import {
  Phone,
  Mic,
  Users,
  Handshake,
  Building2,
  Activity,
  MessageCircleMore,
  Megaphone,
  Bot,
  Inbox,
  Settings2,
  Bell,
  FileText,
  BarChart3,
  Lock,
  Network,
  MapPinOff,
  Database,
  Cpu,
  Cloud,
  LineChart,
  BadgePercent,
  Contact2,
  Globe,
} from 'lucide-react';

const features = [
  { title: 'Sales Leads', icon: Contact2 },
  { title: 'Deals/Opportunities', icon: Handshake },
  { title: 'People/Contacts', icon: Users },
  { title: 'Account/Companies', icon: Building2 },
  { title: 'Activity Tracking', icon: Activity },
  { title: 'One Click Communication', icon: MessageCircleMore },
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
  { title: 'Hierarchy-based Restrictions', icon: Network },
  { title: 'Location-based Restrictions', icon: MapPinOff },
  { title: 'Native Integrations', icon: Globe },
  { title: 'API & Webhooks', icon: Cloud },
  { title: 'Data Administration', icon: Database },
];

export default function CRMFeaturesGrid() {
  return (
    <div className="max-w-6xl">
      <div className="flex w-full flex-col items-center justify-center px-10 py-16 md:px-20">
        {/* New heading and subheading */}
        <h2 className="max-w-5xl text-center text-xl font-semibold text-black dark:text-white md:text-5xl">
          Everything You Need for High-Performance Sales Teams
        </h2>
        <p className="mb-8 mt-5 max-w-2xl text-center text-base text-gray-600 md:text-lg">
          WhatsEase CRM empowers you to capture more leads, close deals faster,
          and track your sales team&apos;s success—all in one place.
        </p>
        <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm"
            >
              <feature.icon className="h-8 w-8 text-green-600" />
              <p
                className="text-center text-sm font-medium leading-tight text-gray-700"
                style={{
                  wordBreak: 'break-word',
                  maxWidth: 110,
                  whiteSpace: 'normal',
                }}
              >
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
