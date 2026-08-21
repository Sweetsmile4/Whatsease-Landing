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
    title: 'Member-Based Ticketing System',
    description:
      'Custom ticketing workflows designed specifically for MPC Gymkhana members.',
  },
  {
    image: '/svg/all/fastsecure.svg',
    title: 'RFID, QR & Card Linking',
    description:
      'RFID pass printing with QR and card linking, integrated with a Delhi-based vendor.',
  },
  {
    image: '/svg/all/highroi.svg',
    title: 'WhatsApp SDR & Cash Handling',
    description:
      'SDRs recovered leads and WhatsApp agents confirmed cash collections efficiently.',
  },
];


const dummyData = [
  {
    title: 'Large-Scale Garba Ticketing with RFID & WhatsApp Operations',
    content:
      'WhatsEase enables large community events to manage ticketing, verification, and revenue collection through structured WhatsApp workflows.',
    secondContent:
      'This case study highlights how MPC Gymkhana Garba (Vadodara) handled member-based ticketing, RFID passes, and high-volume collections with operational clarity.',
    highlight:
      '₹2 crores collected in ticketing with ₹20 lakhs revenue in 20 days.',
   imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'MPC Gymkhana Garba is a large-scale members-only Garba event in Vadodara. Managing eligibility, physical passes, and payments at scale required a structured and reliable system.',
    imgSrc: '/images/case-std/garaba/image.png',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'The objective was to issue member-specific tickets, print RFID passes, link QR and cards accurately, manage desk-based issuing, recover leads, and confirm cash collections without confusion.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'RFID Printing, Desk Issuing & SDR Operations',
    content:
      'WhatsEase implemented custom member ticketing with RFID pass printing and QR/card linking, integrated with a Delhi-based vendor. Desk-based card issuing was supported by SDRs for lead recovery and WhatsApp agents for cash collection confirmations.',
    imgSrc: '/svg/all/casestudy3.svg',
    isImgFirst: true,
  },
];


const stretegicData = {
  title: 'Operationally Controlled Member Ticketing at Scale',
  description:
    'By combining RFID infrastructure, vendor integration, desk issuing, and WhatsApp-driven SDR workflows, MPC Gymkhana Garba maintained control over high-value ticketing and collections.',
  img: '/svg/all/strageticapp.svg',
};

const highlighCardData = {
  description:
    'The system helped us manage member ticketing, cash collections, and RFID issuing without operational confusion.',
  author: 'MPC Gymkhana Garba',
  role: 'Event Organizing Committee',
};


const heroContent = {
  headingHtml: `WhatsEase x MPC Gymkhana: <i class='text-black'>₹2 Crores</i> Ticketing`,
  description:
    'Member-based Garba ticketing with RFID passes, desk issuing, and WhatsApp SDR operations.',
  stats: [
    { value: '₹2 Cr', label1: 'Ticketing', label2: 'Collected' },
    { value: '₹20 L', label1: 'Revenue', label2: 'in 20 Days' },
    { value: '10+', label1: 'Verified', label2: 'Testimonials' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/case-std/common/bannerimage.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};


const stronPerfomenceData = {
  title: 'Strong Performance & Execution Summary',
  description: 'MPC Gymkhana Garba (Vadodara):',
  items: [
    'Custom ticketing workflows for MPC Gymkhana members',
    'RFID pass printing with QR and card linking',
    'Integration with a Delhi-based RFID vendor',
    'Desk-based card issuing operations',
    'SDR-led lead recovery and follow-ups',
    'Cash collection confirmations via WhatsApp agents',
    '₹2 crores collected in ticketing',
    '₹20 lakhs revenue generated in 20 days',
    '10+ verified testimonials',
  ],
};


const cardContent = [
  {
    title: 'Member Ticketing',
    description:
      'Eligibility-based ticketing designed for Gymkhana members.',
  },
  {
    title: 'RFID & Vendor Integration',
    description:
      'RFID printing and QR/card linking via external vendor.',
  },
  {
    title: 'Desk Issuing Operations',
    description:
      'Smooth desk-based card issuing with system support.',
  },
  {
    title: 'WhatsApp SDR Support',
    description:
      'Lead recovery and cash confirmations handled via WhatsApp.',
  },
];


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

      {/* <HighlightCard data={highlighCardData} />

      <CaseStudiesFeature features={features} /> */}

      <Footer />
    </div>
  );
}

export default page;
