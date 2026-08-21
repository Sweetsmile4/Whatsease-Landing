import React from 'react';
import Herosection from '@/components/case-studies/Herosection';
import SeamlessIntegration from '@/components/comparison/SeamlessIntegration';
import Footer from '@/components/Footer';
import ImpactAndResult from '@/components/case-studies/ImpactAndResult';
import HighlightCard from '@/components/case-studies/HighlightCard';
import StrategicAppr from '@/components/case-studies/StrategicAppr';
import BoostSection from '@/components/case-studies/BoostSection';
import SimplifiedSection from '@/components/case-studies/SimplifiedSection';
import StrongPerformance from '@/components/case-studies/StrongPerfomence';
import Navbar from '@/app/components/Navbar';

const features = [
  {
    image: '/svg/all/smookthbook.svg',
    title: 'Automated Room Allocation',
    description:
      '5-star hotel rooms were automatically allocated to participants through WhatsApp workflows.',
  },
  {
    image: '/svg/all/highroi.svg',
    title: 'WhatsApp AI Event Bot',
    description:
      'AI bot managed expense tracking, payment links, and event website access.',
  },
  {
    image: '/svg/all/fastsecure.svg',
    title: 'High-Value Payment Handling',
    description:
      'Secure fee collection for high-net-worth participants was managed digitally.',
  },
];


const dummyData = [
  {
    title: 'Managing High-Value Event Operations via WhatsApp Automation',
    content:
      'At WhatsEase, we help large-scale events automate coordination, payments, and participant communication using WhatsApp.',
    secondContent:
      'In this case study, see how the CII Young India Event used WhatsEase to automate hotel allocation, fee collection, and event operations for high-net-worth participants.',
    highlight:
      'The event successfully collected ₹1.7 crores using WhatsApp-driven workflows and AI automation.',
     imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'CII Young India Event hosts high-profile gatherings involving senior leaders and high-net-worth participants. Managing hotel allocations, payments, and event information manually created coordination challenges and risked delays in confirmations and collections.',
    imgSrc: '/images/case-std/cii_young_india_festival/descriptionimg.png',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'The objective was to automate room allocation, streamline high-value fee collection, and centralize event communication on WhatsApp while maintaining accuracy, security, and real-time visibility.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'Automation, Payments & Event Management',
    content:
      'WhatsEase deployed a WhatsApp AI bot to manage hotel room allocation, expense tracking, and payment links. Participants received event information and access to the event website directly via WhatsApp. The system ensured accurate tracking of high-value payments and reduced manual coordination.',
    imgSrc: '/images/case-std/cii_young_india_festival/image.png',
    isImgFirst: true,
  },
];


const stretegicData = {
  title: 'WhatsApp-Led Automation for High-Value Events',
  description:
    'CII Young India Event adopted WhatsApp as the primary channel for participant coordination. Automated room allocation, AI-driven expense tracking, and integrated payment links ensured smooth handling of high-net-worth participants while maintaining operational control and visibility.',
  img: '/svg/all/strageticapp.svg',
};


const heroContent = {
  headingHtml: `WhatsEase x CII Young India Event: <i class='text-black'>₹1.7 Cr</i> Collected via WhatsApp`,
  description:
    'Hotel allocation, payments, and event coordination automated using WhatsApp AI bots.',
  stats: [
    { value: '₹1.7 Cr', label1: 'Total', label2: 'Collection' },
    { value: '5-Star', label1: 'Hotel', label2: 'Allocation' },
    { value: 'AI Bot', label1: 'Event', label2: 'Management' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/case-std/common/bannerimage.png',
  // cornerImage: '/images/case-std/common/bannerimage.png',
};

const stronPerfomenceData = {
  title: 'Strong Performance & Operational Impact',
  description: 'CII Young India Event:',
  items: [
    'Automated allocation of 5-star hotel rooms for high-net-worth participants',
    'WhatsApp AI bot powered expense tracking and payment links',
    'Event website access delivered via WhatsApp',
    'Centralized coordination and communication for participants',
    'Total collection of ₹1.7 crores',
  ],
};

const cardContent = [
  {
    title: 'Hotel Room Allocation',
    description:
      'Automated assignment of 5-star rooms via WhatsApp workflows.',
  },
  {
    title: 'AI-Based Expense Tracking',
    description:
      'Expenses and payments were tracked using a WhatsApp AI bot.',
  },
  {
    title: 'Secure Fee Collection',
    description:
      'High-value participant fees were collected digitally.',
  },
  {
    title: 'Centralized Event Communication',
    description:
      'All event details and updates were shared via WhatsApp.',
  },
];


const highlighCardData = {
  description:
    'WhatsEase helped us build a highly customized WhatsApp ticketing solution when larger companies couldn’t offer the flexibility or real-time support we needed. We successfully managed HNI ticket bookings with a turnover of around ₹1.5 crore+, and the process was seamless. Special thanks to Anubhav and his team led by Pranav for their dedication and availability, even on weekends. WhatsEase is humble, expert, and truly customer-focused. I look forward to working with them again.',
  author: 'Harshit, Practicing Chartered Accountant, Dehradun',
  role: 'CII Young India Event',
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
