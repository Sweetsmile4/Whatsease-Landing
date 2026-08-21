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
    title: 'Automating Milk Orders with WhatsApp for Daily Efficiency',
    content:
      'At WhatsEase, we help local businesses simplify daily operations through conversational automation — saving time, reducing errors, and improving customer experience.',
    secondContent:
      'In this case study, see how a milk distribution business transformed its manual ordering process with WhatsEase to boost efficiency, reduce payment failures, and scale operations — all via WhatsApp.',
    highlight:
      'Discover how the business handled 50% more orders, reduced payment failures by 80%, and saved 4+ hours of manual work daily with automation.',
    imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'The milk distribution business previously relied on phone calls and text messages to collect daily customer orders and track payments. This manual system often resulted in misplaced orders, communication errors, and inconsistent records. Staff spent late-night hours compiling order sheets, which was both time-consuming and exhausting. Additionally, delays in payment confirmations created cash flow issues and made it difficult to track pending dues. As the number of customers grew, the process became increasingly difficult to manage. The business urgently needed a streamlined, scalable solution that could automate daily operations without hiring additional staff.',
    imgSrc: '/svg/all/cows.svg',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'The goal was to digitize and automate the entire order and payment workflow. With WhatsEase, the business allowed customers to place their daily orders directly through WhatsApp — a platform they were already comfortable using. Customers received instant confirmations and real-time updates about their orders and payments. WhatsEase automatically generated clean, accurate order sheets every night based on confirmed transactions, completely eliminating the need for manual compilation. The system aimed to boost operational efficiency, reduce workload, minimize errors, and enable the business to scale smoothly.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'Automation, Payments & Communication',
    content:
      'With WhatsEase, customers could place their orders in less than 2 minutes via a user-friendly WhatsApp flow. Payments were seamlessly integrated and automatically tracked, significantly lowering the chances of missed or failed payments. The platform ensured that only confirmed orders were added to the order sheet, improving order accuracy and reducing waste. Staff no longer needed to manually prepare sheets at night — the system handled it automatically. Additionally, automated WhatsApp messages were sent for order confirmations, payment receipts, and delivery updates, leading to better customer communication, increased trust, and fewer support calls.',
    imgSrc: '/svg/all/casestudy3.svg',
    isImgFirst: true,
  },
];

const stretegicData = {
  title: 'Smart Order & Payment Automation for Milk Distribution',
  description:
    'To streamline daily operations, the milk distribution business integrated WhatsEase for WhatsApp-based order and payment automation. Customers placed orders in < 2 minutes, received real-time payment confirmations, and stayed updated through automated messages. The system auto-generated accurate order sheets every night, eliminating late-night manual work. With automation handling order intake, payment tracking, and customer communication, the business scaled efficiently, improved cash flow, and significantly reduced errors—without increasing staff or operational hours.',
  img: '/svg/all/strageticapp.svg',
};
const highlighCardData = {
  description:
    'The implementation of WhatsEase.in transformed the milk distribution business by automating key processes and enhancing operational efficiency. By switching to WhatsApp for order collection and payment tracking, the business significantly reduced errors, improved payment success rates, and increased its ability to handle larger order volumes. These improvements contributed to greater customer satisfaction, cost savings, and a more scalable operation. The results were clear: the business experienced substantial growth and improved customer retention, positioning it for future expansion. ',
  author: '',
  role: '',
};

const heroContent = {
  headingHtml: `WhatsEase x Milk Biz: <i class='text-black'> 50% </i> More Orders, <i class='text-black'>80%</i> Fewer Failures`,
  description:
    'WhatsEase automated orders, payments & sheets—boosting efficiency and customer satisfaction..',
  stats: [
    { value: '50%', label1: 'Order', label2: 'Volume' },
    { value: '80%', label1: 'Fewer Payment', label2: 'Failures' },
    { value: '4 hrs/day', label1: 'Time ', label2: 'Saved' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/milk.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const stronPerfomenceData = {
  title: 'Strong Results & Operational Impact',
  description:
    'With WhatsEase, the milk distributor streamlined operations, improved accuracy, and boosted customer satisfaction—without extra staff:',
  items: [
    '<b>50%</b> more daily orders handled <b>(from 200 to 300)</b>',
    '<b>80% </b>drop in payment failures',
    '<b>4+</b> hours saved daily on manual tasks',
    'Improved accuracy & customer satisfaction',
    '<b>30% drop </b> in operational costs without hiring extra staff',
  ],
};

const cardContent = [
  {
    title: 'Order Collection via WhatsApp',
    description:
      'Orders were placed on WhatsApp, improving clarity and reducing mistakes.',
  },
  {
    title: 'Automated Payment Tracking',
    description:
      'Payments were instantly confirmed via WhatsApp, reducing delays.',
  },
  {
    title: 'Automated Order Sheet Generation',
    description:
      'Order sheets were auto-generated after payment, saving effort.',
  },
  {
    title: 'Scalable Operations',
    description: 'Automation handled more orders without extra staff or time.',
  },
];

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

      <HighlightCard data={highlighCardData} />

      <CaseStudiesFeature features={features} />

      <Footer />
    </div>
  );
}

export default page;
