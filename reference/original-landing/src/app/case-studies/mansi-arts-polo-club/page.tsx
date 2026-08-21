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
    title: 'Digital Seat Allocation',
    description:
      'Seat allocation for theatre attendees was fully managed via WhatsApp workflows.',
  },
  {
    image: '/svg/all/highroi.svg',
    title: 'Queue-Free Entry',
    description:
      'Attendees experienced smooth, queue-less entry using digital tickets.',
  },
  {
    image: '/svg/all/fastsecure.svg',
    title: 'WhatsApp-Based Ticketing',
    description:
      'End-to-end ticket booking and communication handled on WhatsApp.',
  },
];

const dummyData = [
  {
    title: 'Digitising Theatre Event Management with WhatsApp',
    content:
      'WhatsEase helps event organisers simplify ticketing and attendee management using WhatsApp-based automation.',
    secondContent:
      'In this case study, see how Mansi Arts used WhatsEase to manage ticketing, seat allocation, and attendee coordination for a Gujarati stage play at Polo Club.',
    highlight:
      'The event handled 500+ guests and collected ₹1.5 lakhs through fully digital WhatsApp workflows.',
    imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'Mansi Arts organised the Gujarati stage play "Jethalal ney lagyo Jackpot" at the Polo Club. Managing seating, ticket distribution, and attendee coordination for a large audience required a reliable and frictionless system to avoid queues and manual handling.',
    imgSrc: '/images/case-std/mansi_art_polo_club/contentimage.png',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'The objective was to implement fully digital seat allocation and attendee management while ensuring a smooth, premium experience for theatre guests and efficient payment collection for organisers.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'Automation & Attendee Management',
    content:
      'WhatsEase enabled WhatsApp-based ticket booking, digital seat allocation, and attendee communication. Guests received all ticket details directly on WhatsApp, ensuring smooth entry and eliminating physical queues at the venue.',
    imgSrc: '/svg/all/casestudy3.svg',
    isImgFirst: true,
  },
];

const stretegicData = {
  title: 'WhatsApp-First Ticketing for Cultural Events',
  description:
    'Mansi Arts adopted WhatsApp as the primary channel for ticketing and guest coordination. This approach simplified seat allocation, reduced on-ground congestion, and delivered a premium experience for theatre audiences.',
  img: '/svg/all/strageticapp.svg',
};

const heroContent = {
  headingHtml: `WhatsEase x Mansi Arts: <i class='text-black'>₹1.5 Lakhs</i> Collected Digitally`,
  description:
    'Digital seat allocation and attendee management for a premium theatre experience.',
  stats: [
    { value: '500+', label1: 'Guests', label2: 'Managed' },
    { value: '₹1.5 L', label1: 'Ticket', label2: 'Collection' },
    { value: '0', label1: 'Queue', label2: 'Entry' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/case-std/common/bannerimage.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const stronPerfomenceData = {
  title: 'Strong Performance & Operational Impact',
  description: 'Mansi Arts – Polo Club Special Event:',
  items: [
    'WhatsApp-based digital seat allocation and attendee management',
    'Handled 500+ guests for the stage play "Jethalal ney lagyo Jackpot"',
    'End-to-end ticketing and communication via WhatsApp',
    'Collected ₹1.5 lakhs in ticket sales',
    'Delivered a premium, queue-free experience for attendees',
  ],
};

const cardContent = [
  {
    title: 'Digital Seat Allocation',
    description:
      'Seats were allocated digitally without manual coordination.',
  },
  {
    title: 'WhatsApp Ticket Delivery',
    description:
      'Tickets and event details were shared directly on WhatsApp.',
  },
  {
    title: 'Queue-Free Entry',
    description:
      'Attendees entered smoothly without physical ticket counters.',
  },
  {
    title: 'Simplified Event Management',
    description:
      'Organisers managed attendees efficiently with minimal effort.',
  },
];

const highlighCardData = {
  description:
    'WhatsEase helped us manage ticketing and seating smoothly while delivering a premium experience to our theatre audience.',
  author: 'Mansi Arts',
  role: 'Event Organiser',
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

      <SeamlessIntegration />

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
