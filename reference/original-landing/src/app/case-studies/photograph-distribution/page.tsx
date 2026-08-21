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
    title: 'Automating Photo Delivery for Photography Studios with WhatsEase',
    content:
      'At WhatsEase, we simplify operations for photography studios, enhancing client satisfaction and reducing manual workload through automation..',
    secondContent:
      'In this case study, see how a photography studio improved photo delivery efficiency and boosted client engagement by using WhatsEase to streamline photo sharing via WhatsApp.',
    highlight:
      'Discover how the studio cut delivery time by 90%, increased client referrals by 50%, and saved 30% of administrative time with WhatsEase automation.',
    imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'Photography studios often struggle with delivering large volumes of event photos to clients quickly and efficiently. Traditional methods, such as emailing or sharing files via cloud storage, are time-consuming and prone to errors. Studios also face challenges in personalizing access to photos for each client. The studio needed a solution that would automate photo delivery, reduce administrative effort, and provide a seamless client experience.',
    imgSrc: '/images/photogra.png',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'WhatsEase automated the entire photo delivery process by integrating WhatsApp with cloud storage. The platform allowed clients to receive personalized photo links instantly, enhancing user experience while significantly reducing manual tasks for photographers. WhatsEase aimed to speed up delivery, improve client satisfaction, and streamline administrative work for the studio.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'Automation, Cloud Integration & Communication',
    content:
      "With WhatsEase, photographers uploaded event photos to cloud storage and used WhatsApp to send clients personalized links to their photo galleries. The system automatically matched clients' selfies with their event photos, ensuring the correct images were shared. The automated process reduced delivery time by 90%, allowing clients to access their photos within minutes. Photographers no longer needed to manually manage photo delivery, saving them valuable time.",
    imgSrc: '/svg/all/repeatpur2.svg',
    isImgFirst: true,
  },
];

const stretegicData = {
  title: 'Smart Photo Delivery Automation for Photography Studios',
  description:
    'To streamline photo delivery and enhance client experience, the photography studio integrated WhatsEase for WhatsApp-based photo sharing. Clients received personalized links to their event photos within minutes, with automatic cloud storage integration for easy access. The system eliminated manual photo sorting and delivery, reducing the time spent on administrative tasks. With seamless automation handling photo sharing and client communication, the studio increased efficiency, reduced customer support requests, and boosted client satisfaction—without additional staff or effort.',
  img: '/svg/all/strageticapp.svg',
};
const highlighCardData = {
  description: `WhatsEase.in provided a seamless, automated solution that allows photography studios to integrate WhatsApp with cloud storage, enabling personalized and instant photo delivery to clients. By leveraging WhatsEase.in's platform, photographers can upload all event photos to cloud storage and allow clients to access their photos with ease through a personalized WhatsApp message. `,
  author: 'Photography Studios specializing in Wedding and Event Photography.',
  role: '',
};

const heroContent = {
  headingHtml: `WhatsEase x Photography: <i class='text-black'>90%</i> Faster,<i class='text-black'>  50% </i> More Referrals`,
  description:
    'WhatsEase automated orders, payments & sheets—boosting efficiency and customer satisfaction..',
  stats: [
    { value: '90%', label1: 'Faster', label2: 'Delivery' },
    { value: '50%', label1: 'More', label2: 'Referrals' },
    { value: '70%', label1: 'Fewer Support', label2: 'Requests' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/photography.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const stronPerfomenceData = {
  title: 'Strong Results & Operational Impact',
  description:
    'With WhatsEase, the photography studio experienced significant improvements in both operational efficiency and client satisfaction:',
  items: [
    'A <b>90% reduction </b> in photo delivery time, allowing clients to access their photos almost immediately after an event, enhancing the overall customer experience.',
    'A <b>50% increase</b> in client referrals, as happy clients easily shared their personalized photo links with friends and family, helping the studio gain more business through word-of-mouth.',
    'A <b>30% reduction</b> in time spent on administrative tasks, with automated processes handling the majority of photo organization and delivery, enabling the studio to focus more on capturing memorable moments and interacting with clients.',
  ],
};

const cardContent = [
  {
    title: 'Efficiency and Automation',
    description:
      'Photo upload to link-sharing is fully automated, letting the studio focus on photography.',
  },
  {
    title: 'Seamless User Experience',
    description:
      'Clients get their photos instantly via WhatsApp, ensuring ease of access and accurate delivery.',
  },
  {
    title: 'Increased Client Engagement',
    description:
      'Clients can easily share their personalized photo links, boosting studio exposure and word-of-mouth referrals.',
  },
  {
    title: 'Cost-Effective',
    description:
      'Automation reduces the need for manual labor, cutting costs for the studio in managing and sharing photos.',
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
