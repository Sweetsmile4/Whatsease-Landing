import React from 'react';
import Herosection from '@/components/case-studies/Herosection';
import Navbar from '@/app/components/Navbar';
import { InteractiveHoverButton } from '@/components/ui/InteractiveHoverButton';
import SeamlessIntegration from '@/components/comparison/SeamlessIntegration';
import ThreeDCardDemo from '@/components/ThreeDCardDemo';
import Footer from '@/components/Footer';
import ImpactAndResult from '@/components/case-studies/ImpactAndResult';
import HighlightCard from '@/components/case-studies/HighlightCard';
import StrategicAppr from '@/components/case-studies/StrategicAppr';
import BoostSection from '@/components/case-studies/BoostSection';
import SimplifiedSection from '@/components/case-studies/SimplifiedSection';
import CaseStudiesFeature from '@/components/case-studies/CaseStudiesFeature';
import StrongPerformance from '@/components/case-studies/StrongPerfomence';

const features = [
  {
    image: '/svg/all/smookthbook.svg',
    title: 'RFID & QR-Based Entry System',
    description:
      'RFID passes and QR allocation enabled secure and queue-less entry.',
  },
  {
    image: '/svg/all/highroi.svg',
    title: 'WhatsApp Agent Operations',
    description:
      'WhatsApp agents managed verification, cash confirmation, refunds, and attendee support.',
  },
  {
    image: '/svg/all/fastsecure.svg',
    title: 'CRM & Vendor Integrations',
    description:
      'CRM data collection and vendor coordination supported smooth on-ground execution.',
  },
];



const dummyData = [
  {
    title: 'Queue-Less Event Access & Refund Handling with WhatsApp Automation',
    content:
      'WhatsEase enables large public events to manage access, payments, and attendee communication through WhatsApp-driven automation.',
    secondContent:
      'This case study shows how VIPO (Vadodara) used RFID passes, QR workflows, and WhatsApp agents to handle entry, verification, revenue, and refunds efficiently.',
    highlight:
      '₹20 lakhs in revenue generated within 20 days, with refunds processed within 24 hours of cancellation.',
    imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'VIPO is a high-footfall event in Vadodara requiring secure access control, attendee verification, and on-ground coordination. Manual processes previously caused queues and operational complexity.',
    imgSrc: '/svg/all/tws.svg',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'The objective was to ensure queue-less entry, verify attendee eligibility, collect CRM data, manage digital and cash payments, and enable fast refunds in case of cancellation.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'RFID Access, Verification & Refund Operations',
    content:
      'WhatsEase implemented RFID-based passes with QR allocation, age and Aadhar verification, and on-ground scanning. WhatsApp agents handled SDR engagement, manual cash confirmation, attendee queries, and processed refunds within 24 hours of event cancellation.',
    imgSrc: '/svg/all/casestudy3.svg',
    isImgFirst: true,
  },
];


const stretegicData = {
  title: 'Event Automation with Built-In Refund & Support Flows',
  description:
    'VIPO used RFID access control and WhatsApp automation to manage high footfall, payments, and cancellations. The system ensured operational control, customer trust, and fast refund resolution.',
  img: '/svg/all/strageticapp.svg',
};


const highlighCardData = {
  description:
    'Queue-less entry, clear communication, and fast refunds helped maintain customer trust even during event cancellation.',
  author: 'VIPO Vadodara',
  role: 'Event Organizers',
};


const heroContent = {
  headingHtml: `WhatsEase x VIPO: <i class='text-black'>₹20 Lakhs</i> in 20 Days`,
  description:
    'RFID access, WhatsApp agent operations, and 24-hour refund handling for large-scale events.',
  stats: [
    { value: '₹20 Lakhs', label1: 'Revenue', label2: 'Generated' },
    { value: '24 Hrs', label1: 'Refund', label2: 'Processing' },
    { value: '10+', label1: 'Verified', label2: 'Testimonials' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/case-std/common/bannerimage.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const stronPerfomenceData = {
  title: 'Strong Performance & On-Ground Impact',
  description: 'VIPO (Vadodara):',
  items: [
    'RFID-based passes with QR allocation and on-ground scanning',
    'Age and Aadhar verification for attendee eligibility',
    'CRM data collection and SDR engagement via WhatsApp',
    'Manual cash confirmation handled by WhatsApp agents',
    'Vendor integrations for on-site coordination',
    '₹20 lakhs in revenue generated within 20 days',
    'Refunds processed within 24 hours of event cancellation',
    '10+ verified testimonials and high customer satisfaction',
    'Queue-less entry experience for attendees',
  ],
};


const cardContent = [
  {
    title: 'RFID & QR Entry',
    description:
      'Fast, secure, queue-less access for attendees.',
  },
  {
    title: 'Verification Workflows',
    description:
      'Age and Aadhar verification managed digitally.',
  },
  {
    title: 'WhatsApp Agent Support',
    description:
      'Handled payments, cash confirmation, refunds, and queries.',
  },
  {
    title: 'Refund & Cancellation Handling',
    description:
      'Refunds processed within 24 hours with SDR support.',
  },
];



function page() {
  return (
    <div>
      <div className="h-auto bg-[#04B851] px-3 py-6 pb-0 pt-20 sm:px-6 md:px-12 md:pb-[130px] lg:px-20">
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

      {/* <HighlightCard data={highlighCardData} /> */}

      {/* <CaseStudiesFeature features={features} /> */}

      <Footer />
    </div>
  );
}

export default page;
