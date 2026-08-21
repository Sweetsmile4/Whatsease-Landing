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
    title: 'On-Ground QR Ticketing',
    description:
      'QR code banners enabled instant ticket purchases at the venue via WhatsApp.',
  },
  {
    image: '/svg/all/highroi.svg',
    title: 'WhatsApp AI Support',
    description:
      'AI agents provided real-time ticket details and query resolution during the concert.',
  },
  {
    image: '/svg/all/fastsecure.svg',
    title: 'Targeted Promotions',
    description:
      'Facebook ads, CTA-driven posts, and celebrity PR supported ticket visibility.',
  },
];

const dummyData = [
  {
    title: 'Driving Concert Ticket Sales with WhatsApp Automation',
    content:
      'At WhatsEase, we help event organizers manage ticketing, communication, and promotions using WhatsApp automation.',
    secondContent:
      'In this case study, see how Savitri Urban Forest Concert used WhatsEase to run QR-based ticket sales, AI-powered support, and targeted promotions.',
    highlight:
      'The concert generated ₹1.5 lakhs in ticket sales and collected 10+ verified testimonials using WhatsApp-led execution.',
 imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'Savitri Urban Forest hosted a live concert experience that required fast, on-ground ticket sales and real-time audience support. With limited time and high footfall, the organizers needed a simple system to sell tickets, answer attendee queries, and manage payments without operational delays.',
    imgSrc: '/images/case-std/savitri_urban_forest/descriptionimg.png',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'The objective was to enable quick QR-based ticket sales at the venue, integrate digital payments, provide instant ticket-related support, and promote the event through social channels and existing customer communities.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'Ticketing, Payments & Communication',
    content:
      'WhatsEase deployed QR code banners linked to WhatsApp AI agents at the venue. Attendees could scan, get ticket details, complete digital payments, and receive confirmations instantly. SDR tracking monitored conversions, while bulk notifications were sent to previous customer communities. Facebook ads, CTA-based promotions, and celebrity PR supported reach and engagement.',
    imgSrc: '/images/case-std/wave_food_festival/computer.png',
    isImgFirst: true,
  },
];

const stretegicData = {
  title: 'WhatsApp-First On-Ground Ticketing Strategy',
  description:
    'Savitri Urban Forest adopted a WhatsApp-first approach for live ticket sales. QR banners at the venue connected attendees to AI agents for instant assistance, while digital payments and SDR tracking ensured smooth conversions. Promotions were supported through Facebook ads, CTA-led social posts, and celebrity PR to maximize visibility.',
  img: '/svg/all/strageticapp.svg',
};



const heroContent = {
  headingHtml: `WhatsEase x Savitri Urban Forest: <i class='text-black'>₹1.5L</i> Concert Sales via WhatsApp`,
  description:
    'QR-based WhatsApp ticketing, AI support, and targeted promotions powered live concert sales.',
  stats: [
    { value: '₹1.5L', label1: 'Ticket', label2: 'Sales' },
    { value: 'Live QR', label1: 'On-Ground', label2: 'Ticketing' },
    { value: 'AI Agent', label1: 'Instant', label2: 'Support' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/case-std/savitri_urban_forest/mainimage.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};




const stronPerfomenceData = {
  title: 'Strong Performance & Operational Impact',
  description: 'Savitri Urban Forest (Concert):',
  items: [
    'QR code banner-based ticket sales supported by WhatsApp AI agents at the venue',
    'Integrated digital payments with SDR conversion tracking',
    'Bulk notifications sent to previous customer communities',
    'Facebook ads and CTA-driven social promotions',
    'Facilitated celebrity PR and event visibility',
    'Generated ₹1.5 lakhs in ticket sales',
    'Collected 10+ verified customer testimonials',
  ],
};
const cardContent = [
  {
    title: 'QR-Based Ticket Sales',
    description:
      'On-ground QR banners enabled instant ticket purchases via WhatsApp.',
  },
  {
    title: 'AI-Powered Support',
    description:
      'WhatsApp AI agents handled ticket queries in real time.',
  },
  {
    title: 'Sales & Conversion Tracking',
    description:
      'Digital payments and SDR tracking ensured smooth conversions.',
  },
  {
    title: 'Promotions & PR',
    description:
      'Social ads, CTAs, and celebrity PR increased event visibility.',
  },
];

const highlighCardData1 = {
  description: `
The booking process through Whatsease was incredibly seamless.  
I just had to send a simple 'Hi' on WhatsApp, and I was immediately given a full list of workshops and performances to choose from.  

What impressed me most was the ability to select multiple activities and pay for everything altogether with a single link.  
I didn't have to navigate away to external websites; everything happened right within the chat.  

It was satisfying, fast, and completely eliminated the usual back-and-forth.
  `,
  author: 'Attendee at Savitri Urban Food Forest',
  role: 'Event Participant',
};

const highlighCardData2 = {
  description: `
We organize an event called “We Her Now” and run an NGO called Savitri Urban Food Forest.  
We used Whatsease to create our tickets so people could book directly through WhatsApp for our musical events and workshops.  

I really liked their live updating mechanism—whenever we needed to send messages to attendees who had booked or not booked, we could automatically track the status and send updates.  
Getting reminders on WhatsApp made it easy to reach everyone.  

The Whatsease team was cooperative throughout, with clear communication at every step.  
I highly recommend Whatsease, especially for supporting local developers and creating a ticketing platform tailored to your event’s needs.
  `,
  author: 'Savitri Urban Food Forest',
  role: 'Event Organizing Team',
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

      <HighlightCard data={highlighCardData1} />

      <HighlightCard data={highlighCardData2} />

      {/* <CaseStudiesFeature features={features} /> */}

      <Footer />
    </div>
  );
}

export default page;
