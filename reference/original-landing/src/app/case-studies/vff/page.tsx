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
    title: 'Showcasing Impactful Results Through WhatsApp Automation',
    content:
      'At WhatsEase, we take pride in enabling organizations to streamline their operations and elevate user experiences through smart, conversational automation.\n\nIn this case study, we highlight the success story of Vadodara Fun Fiesta (VFF) — a large-scale Holi celebration that leveraged WhatsEase to power ticket bookings, manage guest engagement, and drive exceptional ROI, all through WhatsApp.',
    highlight:
      'Discover how VFF achieved an 11.6x ROAS while ensuring a smooth, hassle-free experience for both organizers and attendees.',
    imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'Vadodara Fun Fiesta is a vibrant Holi event known for its energetic atmosphere and massive youth turnout. For the 2025 edition, VFF partnered with WhatsEase to digitize and automate the entire ticketing process — from booking to entry — while keeping things simple and user-friendly through WhatsApp.',
    imgSrc: '/svg/all/showcaseleft.svg',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'WhatsEase enabled end-to-end ticket booking directly through WhatsApp, offering users a seamless experience from inquiry to confirmation. The platform automated payment collection and QR-based ticket generation, significantly reducing manual coordination for event organizers. Additionally, a cost-effective Instagram ad campaign was implemented to drive targeted traffic, further streamlining conversions and enhancing overall event efficiency.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'Automation, Reminders & Real-Time Management for VFF 2025',
    content:
      'WhatsEase automated key functions such as ticket bookings, payment integrations, and real-time attendee management for Vadodara Fun Fiesta (VFF). Automated WhatsApp reminders ensured attendees were well-informed, while QR-based ticketing streamlined the check-in process, eliminating long queues. The real-time admin dashboard provided event organizers with instant insights, reducing operational challenges and saving valuable time..',
    imgSrc: '/svg/all/casestudy3.svg',
    isImgFirst: true,
  },
];

const stretegicData = {
  title: 'Strategic Marketing Approach',
  description:
    'With a modest Instagram ad budget of just Rs. 2,500, the Vadodara Fun Fiesta team executed a hyper-localized campaign targeting the youth demographic in the region. Instead of relying on traditional landing pages or third-party booking forms, all ad traffic was directed straight to WhatsApp. This direct-to-chat strategy ensured a seamless, low-friction user journey—converting interest into confirmed bookings with minimal drop-off.',
  img: '/svg/all/strageticapp.svg',
};
const highlighCardData = {
  description:
    'WhatsEase made ticketing and attendee management seamless! Guests easily booked tickets via WhatsApp, accessed event details, and stayed updated, ensuring a smooth experience. The platform simplified registrations and coordination, allowing us to focus on creating an unforgettable celebration. With its intuitive system and great support, WhatsEase is a must-have for hassle-free event management!',
  author: 'Alpesh patel',
  role: 'Organizer, Vadodara Fun Fiesta 2025',
};

const heroContent = {
  headingHtml: `WhatsEase Powers VFF to a <span class='text-black'>11.6x</span> ROAS Milestone`,
  description:
    'Vadodara Fun Fiesta  used WhatsEase for ticket bookings, spending Rs 2,500 on ads to earn Rs 29,000 with an 11.6x ROAS.',
  stats: [
    { value: '11.6x', label1: 'Massive', label2: 'RAOS' },
    { value: '100%', label1: 'Massive', label2: 'RAOS' },
    { value: '130+', label1: 'Massive', label2: 'RAOS' },
  ],
  buttonText: 'Try Now',
  mainImage: '/images/13.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const stronPerfomenceData = {
  title: 'Strong Performance & Return on Investment',
  description:
    'VFF leveraged WhatsEase for seamless ticketing and communication, resulting in:',
  items: [
    '<b>Rs 29,000 </b> in total ticket sales from <b>130+ attendees</b>',
    '100% of bookings completed through WhatsApp',
    '<b>11.6x ROAS</b> from a targeted <b>Rs 2,500</b> Instagram ad campaign',
    'Instant QR code ticket generation for smooth event access',
    '<b>70%</b> reduction in manual coordination and administrative work',
    '<b>4+ hours</b> saved daily on manual tasks, improving event execution',
  ],
};

const cardContent = [
  {
    title: 'WhatsApp-based Ticket Booking',
    description:
      'Seamless conversational flow for event info, booking, and payment through WhatsApp.',
  },
  {
    title: 'Automated Payment Integration',
    description:
      'Users received UPI payment links directly within the WhatsApp chat.',
  },
  {
    title: 'QR Code Ticket Generation',
    description:
      'Post-payment, users received unique QR-coded tickets for event entry.',
  },
  {
    title: 'Admin Dashboard for Check-in',
    description:
      'Organizers scanned QR codes for quick and efficient entry validation.',
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
