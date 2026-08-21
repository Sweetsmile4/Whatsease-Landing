"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChart3, Rocket, MonitorPlay, Smartphone, MessageSquare, MessageCircle, ShoppingCart, Settings, Sparkles, Puzzle, Mail } from "lucide-react";

const comparisons = [
  { name: "Bitespeed", desc: "Feature comparison and pricing", icon: BarChart3, href: "/comparison/bitespeed" },
  { name: "Business On Bot", desc: "Automation and chatbot comparison", icon: Rocket, href: "/comparison/business-on-bot" },
  { name: "Contlo", desc: "Marketing automation comparison", icon: MonitorPlay, href: "/comparison/contlo" },
  { name: "Gallabox", desc: "WhatsApp Business solution comparison", icon: Smartphone, href: "/comparison/gallabox" },
  { name: "Interakt", desc: "Customer engagement platform comparison", icon: MessageSquare, href: "/comparison/interakt" },
  { name: "Kwikchat", desc: "Live chat and messaging comparison", icon: MessageCircle, href: "/comparison/kwikchat" },
  { name: "Limechat", desc: "Conversational commerce comparison", icon: ShoppingCart, href: "/comparison/limechat" },
  { name: "Sinch", desc: "Communication platform comparison", icon: Settings, href: "/comparison/sinch" },
  { name: "Superlemon", desc: "Customer support solution comparison", icon: Sparkles, href: "/comparison/superlemon" },
  { name: "Wati", desc: "WhatsApp API platform comparison", icon: Puzzle, href: "/comparison/wati" },
  { name: "Zoko", desc: "E-commerce messaging comparison", icon: Mail, href: "/comparison/zoko" },
];

export default function ComparisonMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a href="#comparison" className="flex items-center gap-1 font-medium hover:text-[#1e5f3f] transition-colors" style={{ padding: '0.5rem 1rem' }}>
        Comparison
      </a>
      
      {isOpen && (
        <div className="absolute top-full left-1/2 z-50 w-200 -translate-x-1/2 rounded-xl border border-gray-100 bg-white p-6 shadow-2xl">
          <p className="text-sm font-semibold text-gray-400 mb-4 tracking-wider">WHATSEASE VS COMPETITORS</p>
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            {comparisons.map((item) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#2d8a5e]/10 transition-colors group"
                >
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-gray-100 transition-all group-hover:bg-white group-hover:shadow-sm">
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-[#1e5f3f]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#1e5f3f]">WhatsEase vs {item.name}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <Link href="/comparison" className="text-sm font-medium text-gray-900 hover:text-[#1e5f3f] flex items-center gap-1">
              Explore all comparison &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
