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
      'In this case study, we explore how Shri Ganga Ram Hospital used WhatsEase to automate appointment bookings, improve backend operations, and provide a smooth patient experience — all via WhatsApp.',
    secondContent:
      'In this case study, we explore how Shri Ganga Ram Hospital used WhatsEase to automate appointment bookings, improve backend operations, and provide a smooth patient experience — all via WhatsApp.',
    highlight:
      'Discover how the hospital reduced front-desk overload, improved show-up rates, and saved significant admin time with a custom WhatsApp appointment bot.',
    imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'Shri Ganga Ram Hospital, a renowned multi-specialty healthcare provider, faced challenges with high call volumes, long wait times for appointment confirmations, and manual rescheduling processes. The manual effort was overwhelming the front-desk staff and causing inefficiencies in managing appointments. To address these challenges, WhatsEase implemented a custom WhatsApp bot to handle appointment scheduling, rescheduling, cancellations, and refunds — all while reducing no-show rates and ensuring seamless patient communication.',
    imgSrc: '/svg/all/gangaram.svg',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'To optimize appointment scheduling and reduce manual work, the hospital sought to automate the entire booking process. The goal was to provide patients with a quick, easy way to book, cancel, or reschedule appointments via WhatsApp, while also giving the admin team real-time visibility into patient appointments. This automation would reduce support queries, improve patient satisfaction, and free up valuable staff time.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'Automation, Communication & Backend Management',
    content:
      'WhatsEase created a WhatsApp-first appointment scheduling system for Shri Ganga Ram Hospital, activated via WhatsApp interactions. Patients could select their desired department, view available time slots, book appointments, and make payments — all without leaving WhatsApp. For reschedules or cancellations, the system offered a 4-hour advance window to trigger automated refunds. On the backend, the admin team had full visibility into appointment logs through a custom dashboard, allowing them to monitor bookings, filter by status, and export data. This automated solution streamlined communication and drastically reduced the time spent managing appointments manually.',
    imgSrc: '/svg/all/casestudy3.svg',
    isImgFirst: true,
  },
];

const stretegicData = {
  title: 'Strategic Marketing Approach',
  description:
    'To streamline patient appointments, Shri Ganga Ram Hospital implemented a WhatsApp-first strategy for appointment scheduling. Instead of relying on traditional phone calls and manual confirmations, the hospital integrated WhatsApp as the primary communication channel. Patients could directly interact with the hospital’s appointment bot via the WhatsApp number, view available slots, and complete the booking process in real-time. This simplified approach resulted in a 92% show-up rate, reduced front-desk workload by 60%, and automated refunds, ensuring smoother operations and an enhanced patient experience.',
  img: '/svg/all/strageticapp.svg',
};
const highlighCardData = {
  description:
    'WhatsEase helped us modernize how we interact with patients—now booking an appointment is as easy as sending a message.',
  author: 'Anil Swarup',
  role: 'Shri Ganga Ram Hospital',
};

const heroContent = {
  headingHtml: `WhatsEase x Shri Ganga Ram: <i class='text-black'>92%</i> Show-up, <i class='text-black'>60%</i> Load Cut`,
  description:
    'Shri Ganga Ram Hospital leveraged WhatsEase to streamline appointment bookings and cancellations via WhatsApp.',
  stats: [
    { value: '92%', label1: 'Show-up', label2: 'Rate' },
    { value: '25+ hours', label1: 'Saved', label2: 'Monthly' },
    { value: '85%+', label1: 'Whatsapp', label2: 'Bookings' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/16.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const stronPerfomenceData = {
  title: 'Strong Performance & Operational Impact',
  description:
    'With WhatsEase handling appointment bookings, Shri Ganga Ram Hospital achieved significant improvements:',
  items: [
    '<b>60%</b> Reduction in front-desk appointment load',
    '<b>92%</b> Show-Up Rate, up from <b>68%</b>',
    '<b>85%+</b> Bookings Done Fully Through WhatsApp within the first<b> 3 weeks</b>',
    '<b>100%</b> Automated Refunds for eligible cancellations, saving over <b>25 hours</b> per month for the admin team',
    'Improved Patient Satisfaction with an average feedback score of <b>4.7/5</b>',
  ],
};

const cardContent = [
  {
    title: 'Payment Integration',
    description:
      'Pay during booking with instant confirmation (UPI, Razorpay, etc.)',
  },
  {
    title: 'Reschedule/Cancellation',
    description: 'Enabled with a 4-hour cutoff for full refund',
  },
  {
    title: 'WhatsApp Notifications',
    description: 'Auto-reminders and reschedule confirmations',
  },
  {
    title: 'Admin Dashboard',
    description: 'Staff access to appointment logs & analytics',
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
