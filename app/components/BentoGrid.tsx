"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Layers, MessageCircle } from 'lucide-react';

const features = [
  { id: 1, title: 'Support that delivers', description: 'Personal, reliable support—whenever you need it.', icon: MessageCircle },
  { id: 2, title: 'Everyone uses it, everyone loves it.', description: 'Maximum data protection and security with development and hosting in India.', icon: ShieldCheck },
  { id: 3, title: 'Easy setup process', description: 'Easy setup, no technical barriers—get started quickly and achieve success effortlessly.', icon: Zap },
  { id: 4, title: 'Pre-built templates', description: 'Use industry-specific templates to get started instantly and save time.', icon: Layers },
];

export default function BentoGrid() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-16 px-6 bg-white">
      <div className="max-w-6xl w-full text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a2e1c] mb-4">
          A powerful product with an even stronger all-in-one solution
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Enjoy top-notch support, smart AI features, effortless setup, and tailored templates — all 100% secure.
        </p>
      </div>

      <div className="w-full max-w-6xl">
        <div className="bg-[#e8f5ee] border border-[#2d8a5e]/30 rounded-3xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-[#0a2e1c] mb-4">AI features to boost efficiency</h3>
              <p className="text-gray-600 mb-6">Automate process and elevate communication with integrated AI technology</p>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">
                <div className="flex justify-end mb-4">
                  <div className="bg-[#0a2e1c] text-[#2d8a5e] px-4 py-2 rounded-2xl rounded-br-sm max-w-[80%] text-sm">
                    Hello. I wanted to ask about the status of my order.
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#2d8a5e] flex items-center justify-center flex-shrink-0 text-[#0a2e1c] font-bold text-xs">AI</div>
                  <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-bl-sm max-w-[80%] text-sm">
                    Hi Tom. One moment, I'll take a look. 🔎
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-lg text-xs font-bold text-[#1e5f3f] flex items-center gap-2">
                  <Zap className="w-3 h-3 text-[#1e5f3f]" /> AI is writing...
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div key={feature.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#2d8a5e] transition-colors">
                      <feature.icon className="w-8 h-8 text-[#1e5f3f] mb-4" />
                      <h4 className="font-bold text-[#0a2e1c] mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
