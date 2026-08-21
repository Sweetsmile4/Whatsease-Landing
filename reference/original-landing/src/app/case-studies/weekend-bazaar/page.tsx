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
    title: 'Streamlining Ticketing with WhatsApp Automation for Weekend Bazaar',
    content:
      'At WhatsEase, we empower event organizers to optimize ticketing, entry management, and marketing through conversational automation.',
    secondContent:
      'In this case study, we explore how Weekend Bazaar leveraged WhatsEase to handle high-volume ticket bookings, manage entry, and reduce wait times—all through WhatsApp.',
    highlight: '',
    imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'Weekend Bazaar, a vibrant 2-day flea market event with a footfall of 10,000–12,000 visitors, needed a scalable solution to manage ticket sales and event entry efficiently. With multiple vendors, food stalls, and entertainment, ensuring a smooth check-in process was critical to providing a great attendee experience. The organizers partnered with WhatsEase to automate the ticket booking, check-in, and entry flow, while handling high foot traffic seamlessly.',
    imgSrc: '/svg/all/weeknd.svg',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'To ensure a seamless event experience, WhatsEase enabled fast ticket booking through WhatsApp, allowing attendees to secure their tickets in under 60 seconds with zero downtime and instant ticket delivery. The system was designed to efficiently handle peak loads, ensuring smooth entry by integrating WhatsApp-powered ticketing with concurrent scanning stations that reduced waiting times. Additionally, the marketing strategy leveraged both digital and physical channels, boosting event awareness through targeted Instagram ads and strategically placed QR code flyers, driving ticket sales and engagement from both online and offline audiences.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'Automation, Communication & Data Management',
    content:
      'WhatsEase streamlined the ticketing process by allowing attendees to book tickets directly via WhatsApp, with users receiving a QR code for entry within 60 seconds of booking. To manage high-volume traffic seamlessly, the backend leveraged AWS Lambda and message queues, ensuring no downtime and immediate processing. For fast entry, concurrent ticket scanning stations were deployed, synchronized with a real-time guest validation system, significantly reducing wait times and ensuring smooth and efficient guest flow at the event.',
    imgSrc: '/svg/all/casestudy3.svg',
    isImgFirst: true,
  },
];

const stretegicData = {
  title: 'Strategic Ticket Booking & Entry Management for Weekend Bazaar',
  description:
    'To streamline ticket booking and entry management, Weekend Bazaar implemented a WhatsApp-based ticketing system. Attendees could book tickets in under 60 seconds and receive instant QR codes for entry. With AWS Lambda and message queues, the system efficiently handled peak traffic, ensuring zero downtime during the 2-day event. Concurrent ticket scanning stations further reduced entry wait times by 60%. Over 12,000 tickets were processed, and the integration of digital and physical marketing boosted ticket sales and event visibility.',
  img: '/svg/all/strageticapp.svg',
};
const highlighCardData = {
  description:
    'WhatsEase made ticketing and attendee management seamless! Guests easily booked tickets via WhatsApp, accessed event details, and stayed updated, ensuring a smooth experience. The platform simplified registrations and coordination, allowing us to focus on creating an unforgettable celebration.',
  author: '',
  role: '',
};

const heroContent = {
  headingHtml: `WhatsEase x Weekend Bazaar: <i class='text-black'> 60% </i> Faster Entry, <i class='text-black'>12,000+ </i> Tickets Processed`,
  description:
    'Weekend Bazaar used WhatsEase for ticket booking and entry management via WhatsApp, enhancing event operations and customer experience.',
  stats: [
    { value: '60%', label1: 'Faster', label2: 'Entry' },
    { value: '100%', label1: 'Tickets', label2: 'Processed' },
    { value: '100%', label1: 'Sales via ', label2: 'WhatsApp' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/17.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const stronPerfomenceData = {
  title: 'Strong Performance & Operational Impact',
  description:
    'The WhatsEase solution enabled Weekend Bazaar to efficiently manage the ticketing process and provide a seamless experience for visitors, achieving outstanding results:',
  items: [
    '<b>12,000+</b> tickets processed with zero downtime over two days.',
    '<b><5 seconds</b> response time for <b>95%</b> of ticket bookings..',
    '<b>60%</b> reduction in entry time with optimized scanning processes..',
    '<b>100%</b> ticket sales via WhatsApp, minimizing queues and wait times at the venue.',
    '<b>High ROAS </b> from Instagram Ads, contributing to the bulk of ticket sales.',
  ],
};

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
        {/* <SimplifiedSection /> */}

        <StrategicAppr data={stretegicData} />
      </div>

      <HighlightCard data={highlighCardData} />

      <CaseStudiesFeature features={features} />

      <Footer />
    </div>
  );
}

export default page;
