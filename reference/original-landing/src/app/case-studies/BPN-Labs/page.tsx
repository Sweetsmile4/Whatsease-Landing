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
    image: '/images/case-std/bpn_labs/authentication.png',
    title: 'Authenticity Verification',
    description:
      'Customers verified product authenticity directly on WhatsApp, increasing trust and reducing counterfeit concerns.',
  },
  {
    image: '/images/case-std/bpn_labs/personalized_usage_guidance.png',
    title: 'Personalized Usage Guidance',
    description:
      'Automated, product-specific video guides helped customers understand correct protein usage post-purchase.',
  },
  {
    image: '/images/case-std/bpn_labs/refill_notification.png',
    title: 'Automated Refill Reminders',
    description:
      'Refill reminders were triggered based on purchase cycles, improving repeat engagement without manual follow-ups.',
  },
];

const dummyData = [
  {
    title: 'Building Trust & Retention for BPN Labs Using WhatsApp',
    content:
      'At WhatsEase, we help consumer brands streamline post-purchase communication and customer engagement through WhatsApp automation.',
    secondContent:
      'In this case study, see how BPN Labs used WhatsEase to verify product authenticity, educate customers on protein usage, and automate refill reminders.',
    highlight:
      'The result: improved customer trust, structured data collection, and higher repeat engagement through WhatsApp.',
    imgSrc: '/svg/all/showcaseright.svg',
    isImgFirst: false,
  },
  {
    title: 'Background',
    content:
      'BPN Labs sells protein supplements where customer trust and correct usage are critical. The brand lacked a centralized system for verifying product authenticity, collecting customer data, and guiding customers after purchase. Most interactions were manual or fragmented, making it difficult to maintain consistency as the customer base grew.',
    imgSrc: '/images/case-std/bpn_labs/descriptionimg.png',
    isImgFirst: true,
  },
  {
    title: 'Objectives',
    content:
      'The goal was to centralize post-purchase communication on WhatsApp, enable easy product authenticity verification, provide clear protein usage guidance, and automate refill reminders based on purchase cycles — all without increasing manual effort.',
    imgSrc: '/svg/all/showcaseright2.svg',
    isImgFirst: false,
  },
  {
    title: 'Automation, Data & Communication',
    content:
      'Using WhatsEase, BPN Labs implemented a WhatsApp AI CRM. Customers verified product authenticity via WhatsApp, while structured customer and purchase data was collected automatically. Personalized video guides were sent based on the product purchased, and refill reminders were triggered according to consumption cycles — reducing manual follow-ups and improving consistency.',
    imgSrc: '/images/case-std/bpn_labs/image.png',
    isImgFirst: true,
  },
];

const stretegicData = {
  title: 'WhatsApp AI CRM for Post-Purchase Engagement',
  description:
    'BPN Labs integrated WhatsEase to centralize post-purchase communication on WhatsApp. The solution enabled authenticity verification, automated customer data collection, personalized protein usage videos, and refill reminders based on purchase cycles. This reduced manual outreach, improved customer trust, and supported repeat engagement without adding operational overhead.',
  img: '/svg/all/strageticapp.svg',
};


const heroContent = {
  headingHtml: `WhatsEase x BPN Labs: <i class='text-black'>Trust</i>, <i class='text-black'>Education</i> & Retention on WhatsApp`,
  description:
    'WhatsEase enabled authenticity checks, usage guidance, and refill reminders through WhatsApp automation.',
  stats: [
    { value: '100%', label1: 'Product', label2: 'Verification' },
    { value: 'Auto', label1: 'Refill', label2: 'Reminders' },
    { value: 'AI CRM', label1: 'Customer', label2: 'Data' },
  ],
  buttonText: 'Chat Now',
  mainImage: '/images/case-std/bpn_labs/mainimage.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};
const highlighCardData = {
  description:
    'By implementing WhatsEase, BPN Labs streamlined post-purchase communication and customer engagement. WhatsApp-based automation improved trust through authenticity verification, ensured correct product usage via personalized video guides, and encouraged repeat purchases with timely refill reminders — all while reducing manual effort.',
  author: '',
  role: '',
};



const stronPerfomenceData = {
  title: 'Operational Impact',
  description:
    'With WhatsEase, BPN Labs improved trust, engagement, and repeat purchase flow:',
  items: [
    'Enabled product authenticity verification via WhatsApp',
    'Centralized customer data using WhatsApp AI CRM',
    'Automated refill reminders based on purchase cycles',
    'Reduced manual follow-ups and support queries',
  ],
};

const headline='Enabling Product Authenticity While Driving Repeat Purchases Through WhatsApp AI'
const title1 = 'Simplified Verification with';
const title2 = 'Seamless Post-Purchase Engagement with WhatsEase';

const cardContent =[
  {
    title: 'Authenticity Verification',
    description:
      'Customers verified product authenticity directly on WhatsApp.',
  },
  {
    title: 'WhatsApp AI CRM',
    description:
      'Customer and purchase data was captured automatically.',
  },
  {
    title: 'Personalized Usage Videos',
    description:
      'Product-specific protein usage guidance was delivered post-purchase.',
  },
  {
    title: 'Automated Refill Reminders',
    description:
      'Reminders were triggered based on consumption cycles.',
  },
];


function page() {
  return (
    <div>
      <div className="h-auto bg-[#04B851] px-3 py-6 pb-0 sm:px-6 md:px-12 md:pb-[130px] lg:px-10">
        <Navbar />
        <Herosection content={heroContent}  />
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
        <SimplifiedSection content={cardContent} headline={headline} title1={title1} title2={title2} />

        <StrategicAppr data={stretegicData} />
      </div>

      {/* <HighlightCard data={highlighCardData} /> */}

      <CaseStudiesFeature features={features} />

      <Footer />
    </div>
  );
}

export default page;
