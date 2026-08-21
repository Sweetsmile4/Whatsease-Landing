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
    title: 'Digital Guest Registration',
    description:
      'Guest registration was fully handled via WhatsApp workflows.',
  },
  {
    image: '/svg/all/highroi.svg',
    title: 'Queue-Free Entry',
    description:
      'Attendees enjoyed a smooth, queue-free experience using digital tickets.',
  },
  {
    image: '/svg/all/fastsecure.svg',
    title: 'Instant Attendee Support',
    description:
      'Queries and ticket details were resolved instantly on WhatsApp.',
  },
];

const dummyData = [
  {
    title: 'Digitising Cultural Events with WhatsApp',
    content:
      'WhatsEase enables organisers to manage high-touch cultural events using WhatsApp-based automation.',
    secondContent:
      'In this case study, see how Heritage Week used WhatsEase to power guest registration, digital ticketing, and instant attendee support for a large cultural celebration.',
    highlight:
      'The event connected hundreds of heritage enthusiasts and collected ₹1.5 lakhs using seamless WhatsApp workflows.',
    imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'Heritage Week is a celebration of culture, history, and community. Managing guest registrations, ticketing, and attendee support for such a high-engagement audience required a system that could deliver a smooth and premium experience without queues or manual coordination.',
    imgSrc: '/images/case-std/heritage-week-event/image.png',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'The goal was to streamline guest registration, digitise ticketing, and provide instant attendee support while preserving the premium, high-touch experience expected from a cultural event.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'Automation & Attendee Experience',
    content:
      'WhatsEase powered WhatsApp-based guest registration, digital ticket delivery, and instant attendee support. Participants received all event information directly on WhatsApp, enabling smooth entry and effortless coordination throughout the event.',
    imgSrc: '/svg/all/casestudy3.svg',
    isImgFirst: true,
  },
];

const stretegicData = {
  title: 'WhatsApp-First Approach for Cultural Celebrations',
  description:
    'Heritage Week adopted WhatsApp as the primary channel for registration, ticketing, and attendee communication. This ensured accessibility, reduced friction, and made cultural participation effortless for a diverse audience.',
  img: '/svg/all/strageticapp.svg',
};

const heroContent = {
  headingHtml: `WhatsEase x Heritage Week: <i class='text-black'>₹1.5 Lakhs</i> Collected Digitally`,
  description:
    'Guest registration, ticketing, and attendee support delivered through WhatsApp.',
  stats: [
    { value: '₹1.5 L', label1: 'Total', label2: 'Collection' },
    { value: '100s', label1: 'Heritage', label2: 'Enthusiasts' },
    { value: '0', label1: 'Queue', label2: 'Entry' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/case-std/common/bannerimage.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const stronPerfomenceData = {
  title: 'Strong Performance & Operational Impact',
  description: 'Heritage Week Event:',
  items: [
    'Seamless guest registration and digital ticketing via WhatsApp',
    'Instant attendee support throughout the event',
    'Connected hundreds of heritage enthusiasts',
    'Collected ₹1.5 lakhs through WhatsApp workflows',
    'Delivered a premium, queue-free cultural experience',
  ],
};

const cardContent = [
  {
    title: 'Digital Guest Registration',
    description:
      'Guests registered seamlessly through WhatsApp.',
  },
  {
    title: 'WhatsApp Ticketing',
    description:
      'Tickets and event details were delivered digitally.',
  },
  {
    title: 'Instant Support',
    description:
      'Attendee queries were resolved instantly via WhatsApp.',
  },
  {
    title: 'Effortless Event Management',
    description:
      'Organisers managed the event with minimal manual effort.',
  },
];

const highlighCardData = {
  description:
    'WhatsEase helped us create an effortless and accessible Heritage Week experience while keeping operations simple and efficient.',
  author: 'Heritage Week',
  role: 'Event Organisers',
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

      {/* <HighlightCard data={highlighCardData} /> */}

      <CaseStudiesFeature features={features} />

      <Footer />
    </div>
  );
}

export default page;
