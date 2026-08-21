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
    title: 'Delivering Seamless Event Experiences Through WhatsApp Automation',
    content:
      'At WhatsEase, we take pride in enabling organizations to streamline their operations and elevate user experiences through smart, conversational automation.',
    secondContent:
      'In this case study, we explore how Conmat Projects successfully executed the Urban Savitri Food Forest Festival — a creative weekend of music, art, and workshops — by leveraging WhatsEase for registration, communication, and check-ins.',
    highlight:
      'Discover how they achieved a 2.7x ROAS, reduced manual workloads, and ensured a 90% check-in success rate — all while creating a delightful experience for over 1500 attendees.',
    imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'Urban Savitri Food Forest Festival is a unique cultural gathering hosted by Conmat Projects, Vadodara, celebrating sustainability, music, creativity, and community. In 2025, the organizers partnered with WhatsEase to simplify registrations, manage ticketing, and automate guest engagement — all through the ease and familiarity of WhatsApp. The goal was to reduce manual overhead and deliver a smooth, tech-enabled experience for attendees.',
    imgSrc: '/svg/all/savitri1.svg',
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
    title: 'Automation, Reminders & Real-Time Management',
    content:
      'WhatsEase automated key event functions for the Urban Savitri Food Forest Festival, including ticketing, reminders, and real-time check-ins. Automated reminders kept attendees informed, while QR-based ticketing and secure payment integrations streamlined operations. The admin dashboard provided real-time analytics, saving over 25 man-hours and ensuring efficient event management.',
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
  description: `We used WhatsEase for ticketing at our  Be Here Now      event, and it was a game-changer! Attendees could book tickets via WhatsApp seamlessly, making payments and accessing event details with ease. As an organizer, it simplified everything—ticketing, lineup, and data collection—all in one place. WhatsEase made event management truly effortless`,
  author: 'Rajasi Rastogi,',
  role: 'Event Organizer',
};

const heroContent = {
  headingHtml: `WhatsEase Delivers Big at   Be Here Now Festival: <i class='text-black'>27x</i> ROAS`,
  description:
    'Conmat Projects used WhatsEase to streamline ticketing and check-ins entirely via WhatsApp.',
  stats: [
    { value: '212+', label1: 'Attendees', label2: 'Registered' },
    { value: '70%', label1: 'Faster', label2: 'Registration' },
    { value: '25+', label1: 'Man-Hours', label2: ' Saved' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/15.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const stronPerfomenceData = {
  title: 'Strong Performance & Return on Investment',
  description:
    'Urban Savitri Food Forest Festival leveraged WhatsEase to drive seamless ticketing and communication via WhatsApp, resulting in:',
  items: [
    '<b>Rs. 1.5 lakhs</b> in ticket sales from <b>130+ attendees</b>',
    '<b>100%</b> of bookings completed through WhatsApp',
    '<b>2.7x ROAS</b> from a low-budget <b>Rs. 750</b> Instagram campaign',
    '<b>90%</b> attendee check-in within the first <b>30 minutes</b>',
    '<b>70%</b> reduction in manual registration effort',
    'Saved <b>25+ man-hours</b> over the <b>3-day event</b>',
  ],
};

const cardContent = [
  {
    title: 'Event Registration & Ticketing via WhatsApp',
    description:
      'Attendees register through WhatsApp by clicking a link or scanning a QR code, providing details, paying, and receiving a QR ticket.',
  },
  {
    title: 'Auto Reminders & Notifications',
    description:
      'WhatsEase sends reminders 1 day, 1 hour, and 10 minutes before the event, with custom messages for agenda, location, and speakers.',
  },
  {
    title: 'Admin Panel Check-in & Validation',
    description:
      "Event staff scan tickets at entry, marking attendees as 'Checked-in', with real-time updates on the dashboard.",
  },
  {
    title: 'Event Setup Preconditions',
    description:
      'The host must create and publish the event before attendees can register via WhatsApp.',
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
