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
import StrongPerfomence from '@/components/case-studies/StrongPerfomence';

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
      'At WhatsEase, we specialize in streamlining operations and enhancing user experiences through conversational automation. In this case study, we explore how The Hackers Meetup (THM) in Ahmedabad leveraged WhatsEase for ticketing, communication, and check-ins, resulting in a smooth and efficient experience for attendees.',
    highlight:
      'Discover how they achieved a 2.8x ROAS, reduced manual workloads, and ensured a 95% check-in success rate—all while providing an exceptional experience for over 200 attendees.',
    imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'The Hackers Meetup (THM) is a prominent community-driven initiative focused on cybersecurity, bringing together experts, researchers, ethical hackers, and digital law specialists across India. For the Ahmedabad chapter in 2025, THM partnered with WhatsEase to simplify registrations, manage ticketing, and automate guest engagement, all through WhatsApp. The goal was to minimize manual tasks and create a streamlined experience for both attendees and organizers.',
    imgSrc: '/svg/all/thm1.svg',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'WhatsEase helped THM transform the event experience by enabling end-to-end ticket booking directly through WhatsApp. The platform automated payment collection and QR-based ticket generation, minimizing manual coordination. A targeted LinkedIn ad campaign further drove registrations, ensuring higher conversion rates and improving overall event efficiency.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'Automation, Reminders & Real-Time Management',
    content:
      'WhatsEase automated key functions such as ticketing, reminders, and real-time check-ins for THM. Automated reminders ensured attendees were well-informed, while QR-based ticketing and secure payment integrations simplified the check-in process. The real-time admin dashboard provided valuable insights, reducing operational efforts and saving significant time.',
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
  description: `
A big thank you to WhatsEase for their amazing support. They resolved our payment issues seamlessly, and their intuitive interface made the process easy to navigate. Special thanks to Anubhav Chaturvedi for creating such a reliable platform. We’re grateful for WhatsEase in streamlining our ticketing process.
  `,
  author: '-Prashant Bhavsar',
  role: 'The Hackers MeetUP (THM) Ahmedabad Lead',
};

const heroContent = {
  headingHtml: `WhatsEase Delivers Big at The Hackers Meetup: <i class='text-black'>47%</i> Conversion`,
  description:
    'FF used WhatsEase for ticket bookings, spending Rs 2,500 on ads to earn Rs 29,000 with an 11.6x ROAS.',
  stats: [
    { value: '98.5%', label1: 'Check-in', label2: 'Success' },
    { value: '47%', label1: 'Conversion', label2: 'Rate' },
    { value: '85%', label1: 'Fewer Support ', label2: 'Requests' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/14.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const stronPerfomenceData = {
  title: 'Strong Performance & Return on Investment',
  description:
    'THM leveraged WhatsEase to manage ticketing and communication via WhatsApp, resulting in:',
  items: [
    '<b>Rs. 40,000</b> in ticket sales from <b>200+ attendees</b>',
    '<b>100%</b> of bookings completed through WhatsApp',
    '<b>2.8x ROAS</b> from a cost-effective LinkedIn ad campaign',
    '<b>95%</b> attendee check-in within the first 30 minutes',
    '<b>70%</b> reduction in manual registration effort',
    'Saved <b>35+ man-hours</b> over the course of the event',
  ],
};

const cardContent = [
  {
    title: '100% Online Ticket Booking',
    description:
      'WhatsApp-based ticket delivery with live sales tracking. Fully digital bookings, no manual work, and 3 custom ticket types.',
  },
  {
    title: 'Personalized WhatsApp Journey',
    description:
      'Attendees got confirmations, QR passes, reminders, and updates on WhatsApp. Admins sent broadcasts. Resulted in high engagement.',
  },
  {
    title: 'QR-based Check-In System',
    description:
      'Mobile dashboard enabled fast QR scans and real-time check-in updates. No printed badges. Average check-in time: 3.5s.',
  },
  {
    title: 'Data-Rich Admin Dashboard',
    description:
      'Dashboard tracked ticket sales, user segments, funnel data, and engagement. Found key insights like LinkedIn leads and top booking days.',
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

        <StrongPerfomence data={stronPerfomenceData} />
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
