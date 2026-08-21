import Herosection from '@/components/comparison/Herosection';
import MoreThanJustSection from '@/components/comparison/MoreThanJustSection';
import OverfiveHundread from '@/components/comparison/OverfiveHundread';
import ReasonToChoose from '@/components/comparison/ReasonToChoose';
import SeamlessIntegration from '@/components/comparison/SeamlessIntegration';
import TheRowsThatProveSection from '@/components/comparison/TheRowsThatProveSection';
import Footer from '@/components/Footer';
import Navbar from '@/app/components/Navbar';
import React from 'react';

const data = {
  title: 'Reasons to Choose',
  companyName: 'Whatsease',
  competitor: 'Gallabox',
  features: [
    {
      title: ' Full-Funnel Growth vs. Limited Messaging Solutions',
      description:
        "Gallabox primarily focuses on automating WhatsApp communication for customer support, including order tracking and updates. WhatsEase.in goes beyond simple messaging — it's a <b> growth-driven platform </b> that supports <b> D2C brands </b> and <b> event organizers </b> with tools like WhatsApp ticketing, retargeting, and personalized sales funnels, all within a single platform.  ",
      image: '/svg/comp/completeevent.svg',
      imageAlt: 'Complete event lifecycle',
      imageFirst: false,
    },
    {
      title: 'Unified D2C & Event Experience',
      description:
        'WhatsEase.in integrates both <b>  eCommerce </b> and <b> event workflows, </b> enabling businesses to run product campaigns, event registrations, and QR-based check-ins — all through WhatsApp. Gallabox, on the other hand, doesn’t offer event-specific features and is more focused on customer communication, making it less versatile for brands that want to scale across multiple use cases.  ',
      image: '/svg/comp/realtime.svg',
      imageAlt: 'Real-time support',
      imageFirst: true,
    },
    {
      title: 'Smart Automation for Higher Efficiency',
      description:
        'WhatsEase.in’s automated workflows allow brands to boost their <b>  ROAS </b> and <b> lower CAC </b> by engaging customers at the right touchpoints — from cart recovery to event reminders. Gallabox, while helpful for communication, lacks the same level of <b>  sales-driven automation </b> and comprehensive tools for long-term customer engagement and retention.  ',
      image: '/svg/comp/smartbulk.svg',
      imageAlt: 'Smart bulk messaging',
      imageFirst: false,
    },
  ],
};

const heroContent = {
  headingHtml: `<h1>WhatsEase vs Gallabox:</h1> <h1 class='mt-3'> <i class='text-black'>Full-Funnel Growth </i> vs. Limited Customer Messaging Solutions</h1>`,
  description:
    'Weekend Bazaar used WhatsEase for ticket booking and entry management via WhatsApp, enhancing event operations and customer experience.',
  buttonText: 'Try Now',
  mainImage: '/images/5.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

function page() {
  return (
    <div>
      <div className="h-auto min-h-screen bg-[#04B851] px-3 py-6 pb-0 pt-20 sm:px-6 md:px-12 md:pb-[130px] lg:px-20">
        <Navbar />
        <Herosection content={heroContent} />
      </div>
      <div className="">
        {/* OverfiveHundread */}
        <ReasonToChoose data={data} />
        <SeamlessIntegration />
        <MoreThanJustSection />
        <TheRowsThatProveSection />
        <Footer />
      </div>
    </div>
  );
}

export default page;
