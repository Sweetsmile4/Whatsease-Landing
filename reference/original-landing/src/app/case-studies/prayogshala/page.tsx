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
    title: 'Smooth Booking Experience',
    description:
      'WhatsApp-based automation created a smooth, conversational booking experience, reducing friction and increasing attendee satisfaction.',
  },
  {
    image: '/svg/all/highroi.svg',
    title: 'High ROI, Low Spend',
    description:
      'A modest Instagram ad budget drove significant returns, proving that smart targeting and seamless conversion paths can outperform heavy spending.',
  },
  {
    image: '/svg/all/fastsecure.svg',
    title: 'Fast, Secure Check-ins',
    description:
      'The use of QR-coded tickets enabled fast, error-free guest check-ins, elevating both security and professionalism at the entry gate.',
  },
];

const dummyData = [
  {
    title: 'Streamlining Ticketing with WhatsApp Automation for Prayogshala',
    content:
      'At WhatsEase, we help performing arts organizations modernize their ticketing processes through conversational automation, ensuring a smooth experience for both organizers and attendees.',
    secondContent:
      'In this case study, we explore how Prayogshala transformed its traditional theatre ticketing system by leveraging WhatsEase to simplify ticket bookings, promote the event, and ensure seamless entry, all through WhatsApp.',
    highlight:
      'Discover how Prayogshala sold 400+ tickets, achieved a 10x return on ad spend, and enhanced attendee experience with fast ticket bookings and instant check-ins.',
    imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'Prayogshala, a theatre company with a loyal but niche audience, faced challenges with its traditional ticketing system, which relied on word-of-mouth and offline sales. This resulted in limited reach and often caused confusion at the venue during the last-minute rush. The company needed a solution that was quick to deploy, cost-effective, and easy for audiences to use.',
    imgSrc: '/svg/all/prayogshala.svg',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'WhatsEase empowered Prayogshala to digitize its ticketing process by enabling seamless ticket booking through WhatsApp. This allowed users to book tickets in under 2 minutes, with QR codes delivered instantly for fast check-in at the venue. The solution handled the tiered ticketing system (Early Bird, Regular, Last Minute) and enabled targeted marketing to boost ticket sales.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'Automation, Communication & Event Management',
    content:
      'WhatsEase enabled attendees to book tickets effortlessly via WhatsApp, where they received a QR code for entry within 60 seconds. The tiered ticketing system was easily managed, ensuring a smooth flow from Early Bird to Last Minute tickets. Bulk WhatsApp messaging and Instagram ad integration helped engage past attendees and direct them to the booking channel, increasing ticket sales and event awareness.',
    imgSrc: '/svg/all/casestudy3.svg',
    isImgFirst: true,
  },
];

const stretegicData = {
  title: 'Strategic Ticket Booking & Entry Management for Prayogshala',
  description:
    'To simplify ticket booking and enhance entry management, Prayogshala adopted a WhatsApp-based ticketing system with WhatsEase. Attendees could book their tickets in under 2 minutes and receive instant QR codes for seamless entry. The integration of AWS Lambda and message queues handled high booking traffic efficiently, ensuring smooth performance throughout the process. The use of QR code-based check-ins at the venue reduced entry time to under 5 seconds. With effective Instagram ad promotions and direct WhatsApp communication, Prayogshala sold 400+ tickets, achieving a 10x return on ad spend while delivering a frictionless booking and event experience.',
  img: '/svg/all/strageticapp.svg',
};
const highlighCardData = {
  description:
    'This case shows how a performing arts group transformed its traditional ticketing into a digital-first experience using WhatsEase. With minimal ad spend, they achieved a sold-out success while delivering a modern, professional experience to their audience. ',
  author: '',
  role: '',
};

const heroContent = {
  headingHtml: `WhatsEase x Prayogshala: <i class='text-black'> 10x </i> ROAS & <i class='text-black'> 400+ </i> Tickets Sold`,
  description:
    'Prayogshala leveraged WhatsEase for seamless ticket booking and entry management, achieving impressive results with minimal effort.',
  stats: [
    { value: '10x', label1: 'ROAS', label2: 'Entry' },
    { value: '400+', label1: 'Tickets', label2: 'Sold' },
    { value: '<2 min', label1: 'Booking ', label2: 'Time' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/prayogshala.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const stronPerfomenceData = {
  title: 'Strong Performance & Operational Impact',
  description: 'With WhatsEase, Prayogshala achieved outstanding results:',
  items: [
    '<b>400+</b> tickets sold with a return on ad spend <b>(ROAS) of 10x+</b>',
    'Tickets were booked in under <b>2 minutes,</b> with check-ins at the venue taking under <b>5 seconds</b>',
    '<b>100%</b> of ticket sales were made via WhatsApp, minimizing queues and enhancing the attendee experience',
  ],
};

const cardContent = [
  {
    title: 'Ticket Booking on WhatsApp',
    description: 'Users could book tickets seamlessly via a WhatsApp chatbot',
  },
  {
    title: 'Tier-wise Ticket Batches',
    description:
      'Managed early bird, regular, and final ticket phases effortlessly',
  },
  {
    title: 'QR Code-Based Check-In',
    description: 'Fast, paperless, and secure guest check-in at the venue',
  },
  {
    title: 'Bulk WhatsApp Messaging',
    description:
      'Directly reached past audience members with show details and booking links',
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

      <CaseStudiesFeature features={features} />

      <Footer />
    </div>
  );
}

export default page;
