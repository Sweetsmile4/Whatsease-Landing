'use client';
import Navbar from '@/app/components/Navbar';
import Herosection from '@/components/comparison/Herosection';
import MoreThanJustSection from '@/components/comparison/MoreThanJustSection';
import OverfiveHundread from '@/components/comparison/OverfiveHundread';
import ReasonToChoose from '@/components/comparison/ReasonToChoose';
import SeamlessIntegration from '@/components/comparison/SeamlessIntegration';
import TheRowsThatProveSection from '@/components/comparison/TheRowsThatProveSection';
import Footer from '@/components/Footer';

import React from 'react';

const data = {
  title: 'Reasons to Choose',
  companyName: 'Whatsease',
  competitor: 'Business on bot',
  features: [
    {
      title: 'Growth-Focused Platform vs. Generic Automation',
      description:
        'BusinessOnBot primarily provides automated communication for customer support and engagement. WhatsEase.in, however, is <b>  designed to drive growth </b> — offering tools tailored for <b>  D2C brands </b> and <b> event organizers </b> such as WhatsApp-based ticketing, personalized campaigns, and sales funnels that go beyond simple messaging.  ',
      image: '/svg/comp/completeevent.svg',
      imageAlt: 'Complete event lifecycle',
      imageFirst: false,
    },
    {
      title: 'Seamless Commerce & Event Integration',
      description:
        'WhatsEase.in integrates commerce and event flows seamlessly into the WhatsApp experience — from product recommendations and cart recovery to event registrations and QR check-ins. BusinessOnBot focuses on basic automation and lacks this level of cross-functional utility, making WhatsEase more versatile for diverse business needs.  ',
      image: '/svg/comp/realtime.svg',
      imageAlt: 'Real-time support',
      imageFirst: true,
    },
    {
      title: 'Smart Automation, Higher Efficiency',
      description:
        'WhatsEase.in optimizes customer engagement with <b>  automated product drops, reminders, and retargeting,</b> helping brands scale more effectively and reduce acquisition costs. BusinessOnBot, while efficient, lacks the same level of <b>  sales-driven automation </b> and <b>  conversion-centric workflows </b> that directly contribute to business growth. ',
      image: '/svg/comp/smartbulk.svg',
      imageAlt: 'Smart bulk messaging',
      imageFirst: false,
    },
  ],
};

const heroContent = {
  headingHtml: `<h1>WhatsEase vs BusinessOnBot:</h1> <h1 class='mt-3'><i class='text-black'> All-in-One Growth </i> Engine for D2C & Events vs. Basic WhatsApp Automation</h1>`,
  description:
    'Weekend Bazaar used WhatsEase for ticket booking and entry management via WhatsApp, enhancing event operations and customer experience.',
  buttonText: 'Try Now',
  mainImage: '/images/12.png',
  cornerImage: '/svg/comp/blackcurv.svg',
};

function page() {
  return (
    <div>
      <Navbar />
      <div className="h-auto min-h-screen bg-[#04B851] px-3 py-6 pb-0 pt-20 sm:px-6 md:px-12 md:pb-[130px] lg:px-20">
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
