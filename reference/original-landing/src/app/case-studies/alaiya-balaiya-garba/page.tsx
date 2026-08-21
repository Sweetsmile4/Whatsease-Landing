import React from 'react';
import Herosection from '@/components/case-studies/Herosection';
import SeamlessIntegration from '@/components/comparison/SeamlessIntegration';
import Footer from '@/components/Footer';
import ImpactAndResult from '@/components/case-studies/ImpactAndResult';
import HighlightCard from '@/components/case-studies/HighlightCard';
import StrategicAppr from '@/components/case-studies/StrategicAppr';
import BoostSection from '@/components/case-studies/BoostSection';
import SimplifiedSection from '@/components/case-studies/SimplifiedSection';
import CaseStudiesFeature from '@/components/case-studies/CaseStudiesFeature';
import StrongPerformance from '@/components/case-studies/StrongPerfomence';
import Navbar from '@/app/components/Navbar';
const features = [
  {
    image: '/svg/all/smookthbook.svg',
    title: 'RFID & QR-Based Entry System',
    description:
      'RFID passes and QR codes enabled secure, fast, and queue-less entry for attendees.',
  },
  {
    image: '/svg/all/highroi.svg',
    title: 'WhatsApp Agent Operations',
    description:
      'WhatsApp agents handled verification, cash confirmations, and customer queries.',
  },
  {
    image: '/svg/all/fastsecure.svg',
    title: 'CRM & Vendor Integrations',
    description:
      'Customer data was collected in CRM and synced with on-ground vendors.',
  },
];



const dummyData = [
  {
    title: 'Queue-Less Garba Entry with RFID & WhatsApp Automation',
    content:
      'WhatsEase helps large-scale cultural events manage access, verification, and sales using WhatsApp-driven automation.',
    secondContent:
      'This case study highlights how Alaiya Balaiya Garba (Vadodara) used RFID passes, QR workflows, and WhatsApp agents to streamline operations and revenue collection.',
    highlight:
      'The event generated ₹20 lakhs in revenue within 20 days.',
imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'Alaiya Balaiya Garba is a large-scale Garba event in Vadodara with high footfall. Manual entry checks, cash handling, and verification processes previously caused queues and operational delays.',
    imgSrc: '/images/case-std/alaiya_balaiya/descriptionimg.png',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'The goal was to implement secure access control, verify attendee eligibility, collect CRM data, and manage both digital and cash payments while ensuring a smooth, queue-less entry experience.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'RFID Access, Verification & On-Ground Operations',
    content:
      'WhatsEase deployed RFID-based passes with QR allocation, integrated age and Aadhar verification, and enabled on-ground scanning. WhatsApp agents managed manual cash confirmations, SDR engagement, and attendee support. Vendor integrations ensured smooth on-site coordination.',
    imgSrc: '/images/case-std/garaba/image.png',
    isImgFirst: true,
  },
];


const stretegicData = {
  title: 'End-to-End Event Access & Revenue Automation',
  description:
    'Alaiya Balaiya Garba adopted RFID, QR workflows, and WhatsApp agents to manage verification, payments, and entry. The system reduced queues, improved attendee experience, and provided organizers with real-time operational visibility.',
  img: '/svg/all/strageticapp.svg',
};


const heroContent = {
  headingHtml: `WhatsEase x Alaiya Balaiya Garba: <i class='text-black'>₹20 Lakhs</i> in 20 Days`,
  description:
    'RFID access, QR allocation, and WhatsApp agent-led operations for a seamless Garba event.',
  stats: [
    { value: '₹20 Lakhs', label1: 'Revenue', label2: 'Generated' },
    { value: 'RFID + QR', label1: 'Queue-Less', label2: 'Entry' },
    { value: '10+', label1: 'Verified', label2: 'Testimonials' },
  ],
  buttonText: 'Chat Now',
 mainImage: '/images/case-std/common/bannerimage.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};



const stronPerfomenceData = {
  title: 'Strong Performance & On-Ground Impact',
  description: 'Alaiya Balaiya Garba (Vadodara):',
  items: [
    'RFID-based passes with QR allocation and on-ground scanning',
    'Age and Aadhar verification for attendee eligibility',
    'CRM data collection and SDR engagement via WhatsApp',
    'Manual cash confirmation handled by WhatsApp agents',
    'Vendor integrations for smooth on-site operations',
    '₹20 lakhs in revenue generated within 20 days',
    '10+ verified testimonials and high customer satisfaction',
    'Queue-less entry experience for attendees',
  ],
};


const cardContent = [
  {
    title: 'RFID & QR Access Control',
    description:
      'Secure, fast entry using RFID passes and QR codes.',
  },
  {
    title: 'Verification Workflows',
    description:
      'Age and Aadhar verification managed digitally.',
  },
  {
    title: 'WhatsApp Agent Support',
    description:
      'Agents handled cash confirmation, queries, and SDR engagement.',
  },
  {
    title: 'CRM & Vendor Sync',
    description:
      'Customer data collection and vendor coordination in one system.',
  },
];

const highlighCardData = {
  description:
    'We’ve been using Whatsease as our payment partner since last year, and it’s been an amazing experience. The AI-based interface is easy to use, convenient, and saves a lot of time. Whatsease handled everything for us—from multiple pass types to complete website and backend management—making the entire event run smoothly. Parents were happy, kids were happier, and so were we. We’re truly grateful to the team for their immense support and highly recommend Whatsease to anyone managing events',
  author: 'Garima Dave, Alaiya Balaiya Garba ',
  role: 'Operations Manager',
};


function page() {
  return (
    <div>
      <div className="h-auto bg-[#04B851] px-3 py-6 pb-0 sm:px-6 md:px-12 md:pb-[130px] lg:px-10">
        <Navbar />
        <Herosection content={heroContent} />
      </div>

      <div className="mt-3 px-3 py-6 sm:mt-6 sm:px-6 md:mt-12 md:px-12 lg:mt-16 lg:px-20">
        <BoostSection />

        <ImpactAndResult sections={dummyData} />

        <StrongPerformance data={stronPerfomenceData} />
      </div>

      <div className="">
        <SeamlessIntegration />
      </div>

      <div className="mt-10 px-3 py-6 sm:mt-6 sm:px-6 md:mt-12 md:px-12 lg:mt-16 lg:px-20">
        <SimplifiedSection content={cardContent} />

        <StrategicAppr data={stretegicData} />
      </div>

      <HighlightCard data={highlighCardData} />

      {/* <CaseStudiesFeature features={features} /> */}

      <Footer />
    </div>
  );
}

export default page;
