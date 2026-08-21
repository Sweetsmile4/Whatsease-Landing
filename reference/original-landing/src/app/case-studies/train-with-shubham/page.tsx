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
      'At WhatsEase, we empower educators and entrepreneurs to streamline operations and enhance user journeys through conversational automation.',
    secondContent:
      'In this case study, we explore how Train with Shubham, a fast-growing DevOps coaching platform, used WhatsEase to automate enrollments, improve backend operations, and deliver a smooth experience to students — all through WhatsApp.',
    highlight:
      'Discover how Shubham doubled his conversions, reduced support queries, and built a real-time dashboard for end-to-end course management.',
    imgSrc: '/svg/case-std/train-with-shubham/train_with_shubham_image_1.jpg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content: `
Train with Shubham is an EdTech platform founded by Shubham, a DevOps coach and educator. With rising demand for his technical training courses, managing registrations through spreadsheets and scattered DMs became inefficient.
To eliminate manual work and provide a seamless journey for learners, Shubham integrated WhatsEase — transforming how his platform handled course sales, registrations, and tracking through WhatsApp and a custom admin dashboard.`,
    imgSrc: '/svg/all/tws.svg',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'To streamline the growing demand for his DevOps courses, Shubham aimed to automate the entire enrollment journey via WhatsApp. The goal was to provide learners with a simple, intuitive registration and payment process while equipping the backend team with real-time visibility into sign-ups and transactions. By reducing manual coordination and support queries, the system would not only improve efficiency but also deliver a seamless experience for both students and administrators.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'Automation, Communication & Backend Management',
    content: `
WhatsEase built a seamless WhatsApp-first enrollment system for Train with Shubham, activated through links in Instagram bios and YouTube descriptions. This end-to-end flow managed course selection, user details, and payment — all within WhatsApp. Once a student completed payment via integrated UPI or Razorpay links, they received a personalized confirmation message. On the backend, a custom admin dashboard gave Shubham’s team real-time visibility into sign-ups, with tools to filter data, export records, and receive instant notifications for each new registration — eliminating the need for spreadsheets and manual tracking.`,
    imgSrc: '/svg/all/casestudy3.svg',
    isImgFirst: true,
  },
];

const stretegicData = {
  title: 'Strategic Marketing Approach',
  description:
    'To scale enrollments for his DevOps courses, Shubham focused on a content-driven strategy across Instagram and YouTube. Instead of using traditional landing pages, he embedded WhatsApp entry points—via bio links and video descriptions—directly into his content. This "chat-first" funnel allowed interested learners to jump straight into course conversations, browse options, and complete enrollment without friction. The approach led to a 2x increase in conversions, streamlining the student journey while reducing dependency on manual follow-ups.',
  img: '/svg/all/strageticapp.svg',
};
const highlighCardData = {
  description:
    'The WhatsEase integration has been a game-changer for me. Course enrollments now run on autopilot, and the dashboard helps us stay organized and focused on delivering value to our students.',
  author: 'Train with Shubham',
  role: 'Shubham (DevOps Coach & Educator)',
};

const heroContent = {
  headingHtml: `WhatsEase Boosts Enrollments <i class='text-black'>2x</i> for Train with Shubham`,
  description:
    'Shubham’s DevOps coaching platform scaled effortlessly by automating student onboarding through WhatsApp with WhatsEase.',
  stats: [
    { value: '2x', label1: 'Higher', label2: 'Conversions' },
    { value: '70%', label1: 'Quicker', label2: 'Enrollments' },
    { value: '60%', label1: 'Fewer', label2: 'Queries' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/tws.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const stronPerfomenceData = {
  title: 'Strong Performance & Operational Impact',
  description:
    'With WhatsEase powering enrollments, Train with Shubham saw significant improvements in speed, transparency, and efficiency:',
  items: [
    '<b>70%</b> faster enrollment process compared to manual handling',
    '<b>2x</b> conversion rate via WhatsApp, thanks to the frictionless journey',
    '<b>100%</b> transparency in backend ops with real-time dashboards',
    'Major reduction in support queries related to payment and registration',
  ],
};

const cardContent = [
  {
    title: 'Faster Enrollment Process',
    description:
      '70% quicker than manual methods, speeding up user onboarding.',
  },
  {
    title: 'Higher Conversions via WhatsApp',
    description:
      '2x increase in conversions due to a smooth, frictionless journey.',
  },
  {
    title: 'Transparent Backend Operations',
    description: '100% visibility with live dashboards for real-time tracking.',
  },
  {
    title: 'Reduced Support Queries',
    description:
      'Fewer questions about enrollment and payments thanks to clarity.',
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
