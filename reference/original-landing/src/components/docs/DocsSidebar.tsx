'use client';

import React, { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import {
  BookOpenIcon,
  CodeBracketIcon,
  LightBulbIcon,
} from '@heroicons/react/24/solid';
import { Code2Icon } from 'lucide-react';

// Define documentation sections and links
const docsSections = [
  {
    title: 'Getting Started',
    links: [
      { title: 'Introduction', href: '#introduction' },
      // { title: 'Quick Start Guide', href: '#quick-start' },
      // { title: 'Installation', href: '#installation' },
    ],
    icon: <BookOpenIcon className="h-5 w-5" />,
  },
  // {
  //   title: 'API Reference',
  //   links: [
  //     { title: 'Authentication', href: '#authentication' },
  //     { title: 'Message API', href: '#message-api' },
  //     { title: 'Webhooks', href: '#webhooks' },
  //   ],
  //   icon: <Code2Icon className="h-5 w-5" />,
  // },
  // {
  //   title: 'Guides',
  //   links: [
  //     { title: 'Building a Bot', href: '#building-bot' },
  //     { title: 'QR Validation', href: '#qr-validation' },
  //     { title: 'Lead Collection', href: '#lead-collection' },
  //   ],
  //   icon: <LightBulbIcon className="h-5 w-5" />,
  // },
];

export default function DocsSidebar() {
  const [activeSection, setActiveSection] = useState(0);
  const [expandedSections, setExpandedSections] = useState([0]);

  // Handle section expansion/collapse
  const toggleSection = (index: number): void => {
    setExpandedSections((prev: number[]) =>
      prev.includes(index)
        ? prev.filter((i: number) => i !== index)
        : [...prev, index],
    );
  };

  return (
    <div className="lg:w-1/4">
      <div className="sticky top-24 rounded-xl border border-white/10 bg-[#11111e] p-4 shadow-lg">
        <h2 className="mb-4 border-b border-white/10 pb-2 text-xl font-semibold">
          Documentation
        </h2>

        <div className="space-y-2">
          {docsSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-3">
              <button
                onClick={() => toggleSection(sectionIndex)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left transition-colors hover:bg-white/5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[#04b851]">{section.icon}</span>
                  <span>{section.title}</span>
                </div>
                {expandedSections.includes(sectionIndex) ? (
                  <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                ) : (
                  <ChevronRightIcon className="h-4 w-4 text-gray-400" />
                )}
              </button>

              {expandedSections.includes(sectionIndex) && (
                <div className="ml-6 mt-1 space-y-1">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.href}
                      className={`block rounded-lg px-3 py-1.5 text-sm transition-colors ${
                        activeSection === sectionIndex && linkIndex === 0
                          ? 'bg-[#04b851]/10 text-[#04b851]'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                      onClick={() => setActiveSection(sectionIndex)}
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
