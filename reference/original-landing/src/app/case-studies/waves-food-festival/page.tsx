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
    title: 'End-to-End WhatsApp Ticketing',
    description:
      'Complete ticket booking and QR-based entry flow handled directly on WhatsApp.',
  },
  {
    image: '/svg/all/highroi.svg',
    title: 'AI-Powered Query Resolution',
    description:
      'AI agent instantly answered ticket-related queries, reducing manual support load.',
  },
  {
    image: '/svg/all/fastsecure.svg',
    title: 'Influencer & Paid Growth',
    description:
      'Influencer-driven brand visibility combined with Facebook ads boosted ticket demand.',
  },
];


const dummyData = [
  {
    title: 'Scaling Event Ticket Sales with WhatsApp Automation',
    content:
      'At WhatsEase, we help event organizers manage ticketing, communication, and growth through WhatsApp-first automation.',
    secondContent:
      'In this case study, see how Waves Food Festival used WhatsEase to run end-to-end ticketing, AI-based support, and multi-channel growth campaigns.',
    highlight:
      'The festival generated ₹20 lakhs in ticket sales within just 20 days using WhatsApp automation and performance-driven outreach.',
     imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'Waves Food Festival is a large-scale food and culture event featuring celebrity chefs and curated culinary experiences. With limited time to sell tickets and high inbound queries, the team needed a fast, scalable system to manage ticket sales, customer queries, and promotions across channels.',
    imgSrc: '/images/case-std/wave_food_festival/descriptionimg.png',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'The objective was to centralize ticket sales on WhatsApp, reduce manual query handling, support high-volume demand, and scale ticket revenue quickly. Additionally, the team aimed to build strong brand visibility using influencers, paid ads, and PR activities.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'Ticketing, AI Support & Outreach',
    content:
      'WhatsEase implemented an end-to-end WhatsApp ticketing workflow with QR-based confirmation. An AI agent handled instant ticket details and common queries, while SDR outreach followed up with interested leads to convert them. Influencer campaigns, Facebook ads, and testimonial content amplified reach, supported by social PR, celebrity chef coverage, creative design, and newsroom interviews.',
    imgSrc: '/images/case-std/wave_food_festival/computer.png',
    isImgFirst: true,
  },
];


const stretegicData = {
  title: 'WhatsApp-First Growth & Ticketing Strategy',
  description:
    'Waves Food Festival adopted a WhatsApp-first strategy for ticket sales and communication. QR-based ticketing ensured smooth entry, while AI agents handled customer queries at scale. Growth was driven through influencer marketing, Facebook ads, SDR follow-ups, testimonial campaigns, and PR coverage for celebrity chefs — enabling rapid revenue generation within a short timeframe.',
  img: '/svg/all/strageticapp.svg',
};

const highlighCardData = {
  description:
    'We partnered with Whatsease for ticketing and complete digital marketing for our Mango Mexicana Food Festival, and their contribution was outstanding. From seamless WhatsApp-based ticketing to impactful social media execution, their innovative ideas and modern technology helped us reach a wider audience and make the event highly successful.The team is extremely hardworking, professional, and creative. We truly appreciate their efforts and highly recommend Whatsease to anyone in the hospitality and events industry looking for a reliable, tech-driven event partner',
  author: ' Corporate General Manager, Waves Club',
  // role: 'Organizing Team',
};


const heroContent = {
  headingHtml: `WhatsEase x Waves Food Festival: <i class='text-black'>₹20L</i> Ticket Sales in <i class='text-black'>20 Days</i>`,
  description:
    'End-to-end WhatsApp ticketing, AI support, and growth campaigns powered rapid event sales.',
  stats: [
    { value: '₹20L', label1: 'Ticket', label2: 'Revenue' },
    { value: '20 Days', label1: 'Sales', label2: 'Window' },
    { value: 'AI Agent', label1: 'Instant', label2: 'Support' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/case-std/wave_food_festival/mainimage.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const stronPerfomenceData = {
  title: 'Strong Performance & Operational Impact',
  description: 'Waves Food Festival:',
  items: [
    'End-to-end ticketing via WhatsApp QR workflow',
    'Influencer-driven brand building and Facebook ads',
    'AI agent provided instant ticket details and query resolution',
    'SDR outreach converted leads and offered support',
    'Generated ₹20 lakhs in ticket sales within 20 days',
    'Executed testimonial campaigns and social PR (celebrity chefs, creative design, newsroom interviews)',
  ],
};

const cardContent = [
  {
    title: 'WhatsApp Ticketing',
    description:
      'Ticket purchase and QR confirmation handled entirely on WhatsApp.',
  },
  {
    title: 'AI Query Handling',
    description:
      'Instant responses to ticket-related questions using AI agents.',
  },
  {
    title: 'Sales & Outreach',
    description:
      'SDR follow-ups helped convert interested leads efficiently.',
  },
  {
    title: 'Brand & PR Execution',
    description:
      'Influencer marketing, testimonials, and celebrity chef PR amplified reach.',
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

      <HighlightCard data={highlighCardData} />

      {/* <CaseStudiesFeature features={features} /> */}

      <Footer />
    </div>
  );
}

export default page;
