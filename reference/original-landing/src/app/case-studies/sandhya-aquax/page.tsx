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
    title:
      'Streamlining Field Surveys with WhatsApp Automation for Sandhya AquaX',
    content:
      'At WhatsEase, we empower businesses in the aquaculture industry to optimize operations and enhance data collection through conversational automation.',
    secondContent:
      'In this case study, we explore how Sandhya AquaX used WhatsEase to automate field surveys, improve data accuracy, and simplify operations—all through WhatsApp.',
    highlight:
      'Discover how Sandhya AquaX achieved a 60% reduction in data entry time, 100% adoption by field agents, and gained clean, centralized data with a custom WhatsApp field survey bot.',
    imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'Sandhya AquaX, a leading aquaculture company, faced challenges in managing field surveys for their widespread operations. Field agents had to manually record data about farms, ponds, and species, often resulting in inconsistencies and delays. With limited technical proficiency among agents and low connectivity in some areas, the company needed an easy-to-use solution that could streamline data collection and ensure accuracy.',
    imgSrc: '/svg/all/sandhya.svg',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'To standardize data collection and improve efficiency, Sandhya AquaX aimed to automate the entire field survey process. The goal was to provide agents with a simple, intuitive system to capture farm, field, pond, and species data via WhatsApp, while ensuring that all information was properly formatted and centralized for analysis.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'Automation, Communication & Data Management',
    content:
      'WhatsEase created a WhatsApp-based field survey bot for Sandhya AquaX. Agents interacted with the bot to input key details about farms, fields, ponds, species, and water quality. The dynamic survey bot guided them through each step, ensuring no data was missed and everything was recorded in a standardized format. The data was then directly integrated into the company’s internal dashboards for analysis, providing the operations team with real-time insights into field conditions.',
    imgSrc: '/svg/all/casestudy3.svg',
    isImgFirst: true,
  },
];

const stretegicData = {
  title: 'Strategic Field Survey Data Collection Approach',
  description:
    'To streamline field data collection, Sandhya AquaX implemented a WhatsApp-first strategy for their field agents. Rather than relying on traditional paper logs or complex apps, the company created a WhatsApp-based survey bot. Field agents could easily input data on aquaculture operations, including farm, field, and pond details, directly through WhatsApp, a platform they were already familiar with. This approach reduced data entry time by 60%, ensured consistency, and automatically centralized the data for easier review and analysis, enabling better insights into pond health and operational compliance.',
  img: '/svg/all/strageticapp.svg',
};
const highlighCardData = {
  description:
    'The WhatsEase bot made life easy for our field agents. It eliminated our paperwork backlog and helped us scale data collection across regions with ease.',
  author: 'Operations Head',
  role: 'Sandhya AquaX',
};

const heroContent = {
  headingHtml: `WhatsEase x Sandhya AquaX: <i class='text-black'> 60% </i> Faster Data Entry, <i class='text-black'> 100% </i> Adoption`,
  description:
    'Sandhya AquaX used WhatsEase to automate field data collection via WhatsApp, boosting efficiency and accuracy.',
  stats: [
    { value: '60%', label1: 'Faster Data', label2: 'Entry' },
    { value: '100%', label1: 'Agent', label2: 'Adoption' },
    { value: '100%', label1: 'Real-Time ', label2: 'Data' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/aqua.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

const stronPerfomenceData = {
  title: 'Strong Performance & Operational Impact',
  description:
    'The WhatsEase-powered field survey bot enabled 100% agent adoption, reduced data entry time by 60%, centralized data for easy analysis, and provided real-time insights for quicker decision-making.',
  items: [
    '<b>100%</b> adoption by field agents: Even first-time users completed surveys without external assistance.',
    '<b>60%</b> reduction in data entry time: Compared to traditional manual methods.',
    '<b>Clean, centralized data:</b> Pushed directly into internal systems for easy review and analysis.',
    '100% Automated Refunds for eligible cancellations, saving over 25 hours per month for the admin team',
    '<b>Better insights:</b> Real-time data allowed for faster decision-making regarding pond health and compliance.',
  ],
};

const cardContent = [
  {
    title: 'Farm, Field, and Pond Structure',
    description:
      'Select or enter the number of farms being surveyed. For each farm, enter the number of fields. Within each field, enter the number of ponds.',
  },
  {
    title: 'Species Data Collection',
    description:
      'For each pond, record types of aquatic species (Shrimp, Crabs, etc.), along with quantity, size, and health observations.',
  },
  {
    title: 'Water Quality Data',
    description:
      'Collect water quality parameters such as temperature, pH, salinity, turbidity, and other regulatory requirements. Values are validated inline to ensure regulatory compliance.',
  },
  {
    title: 'Optional Notes/Observations',
    description: 'Agents could add additional comments or photos via WhatsApp.',
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
