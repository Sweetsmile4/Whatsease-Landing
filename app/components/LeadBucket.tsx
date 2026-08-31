"use client";
/* eslint-disable react/no-unescaped-entities */

import { RefreshCcw, Zap, CheckCircle2, Users } from 'lucide-react';

export default function LeadBucket() {
  return (
    <section className="w-full bg-[#e8f5ee] px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0a2e1c] mb-6">Lead Capture & Distribution System</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-3xl border border-[#2d8a5e]/30 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#2d8a5e]/10 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#1e5f3f]/10 rounded-full blur-3xl"></div>
             
             <div className="flex flex-col gap-4 relative z-10">
                <div className="bg-white border border-gray-100 shadow-sm p-4 rounded-xl flex items-center justify-between">
                   <div>
                     <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">New Lead</div>
                     <div className="font-bold text-[#0a2e1c]">Arjun Sharma</div>
                   </div>
                   <div className="bg-[#e8f5ee] text-[#1e5f3f] text-xs font-bold px-3 py-1 rounded-full">Score: 95</div>
                </div>
                <div className="flex justify-center my-2 text-gray-300">|</div>
                <div className="bg-[#0a2e1c] text-white p-4 rounded-xl flex items-center justify-between shadow-lg translate-x-4">
                   <div>
                     <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Routing via AI</div>
                     <div className="font-bold text-[#2d8a5e]">Assigning to top rep...</div>
                   </div>
                   <Zap className="w-5 h-5 text-[#2d8a5e] animate-pulse" />
                </div>
                <div className="flex justify-center my-2 text-gray-300">|</div>
                <div className="bg-white border border-[#2d8a5e] shadow-md p-4 rounded-xl flex items-center justify-between">
                   <div>
                     <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Assigned</div>
                     <div className="font-bold text-[#0a2e1c]">Neha (West Region)</div>
                   </div>
                   <CheckCircle2 className="w-5 h-5 text-[#1e5f3f]" />
                </div>
             </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-[#0a2e1c] mb-6">Lead Automation & Distribution</h3>
            <p className="text-lg text-gray-600 mb-8">
              Effortlessly capture, organize, and assign leads to the right sales representatives in real time. Enhance your sales team's speed and ensure every lead gets the attention it deserves.
            </p>

            <div className="space-y-6">
              {[
                { icon: Zap, title: "Instant Lead Routing", desc: "Automatically route leads to the right team members based on criteria like location, product interest, or lead source." },
                { icon: RefreshCcw, title: "Multi-Channel Integration", desc: "Easily integrates with Google, Facebook, email, websites, landing pages, social media platforms, lead portals, and 30+ additional sources." },
                { icon: Users, title: "Lead Qualification", desc: "Automatically score and qualify leads based on behavior and engagement, ensuring your team focuses on high-potential prospects." },
                { icon: CheckCircle2, title: "Performance Tracking", desc: "Monitor lead conversion rates, response times, and sales rep performance with intuitive dashboards and reporting." }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 bg-[#e8f5ee] p-2 rounded-lg text-[#1e5f3f]">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a2e1c] mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <a href="/login" className="inline-flex items-center justify-center px-6 py-3 font-bold bg-[#0a2e1c] text-white rounded-xl hover:bg-[#1e5f3f] transition-colors">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
