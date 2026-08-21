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
  competitor: 'Contlo',
  features: [
    {
      title: 'WhatsApp-Native vs. Omnichannel Overload',
      description:
        'While Contlo focuses on email, SMS, and other channels, WhatsEase.in is <b> built natively for WhatsApp,</b> where engagement and conversion rates are naturally higher. This focus allows brands to cut through the noise and connect faster — leading to better campaign efficiency without the bloat of managing multiple platforms.  ',
      image: '/svg/comp/completeevent.svg',
      imageAlt: 'Complete event lifecycle',
      imageFirst: false,
    },
    {
      title: ' Streamlined Funnels That Actually Convert',
      description:
        'WhatsEase.in offers tightly integrated workflows — from lead capture and product drops to abandoned cart recovery and event reminders — all in one place. This helps D2C brands convert more with fewer steps, ultimately driving stronger returns and reducing the cost of acquiring and re-engaging customers.  ',
      image: '/svg/comp/realtime.svg',
      imageAlt: 'Real-time support',
      imageFirst: true,
    },
    {
      title: 'Commerce + Community in One Platform',
      description:
        'Contlo lacks support for offline or hybrid brand experiences. WhatsEase.in bridges the gap by offering  <b> ticketing, registration, and QR check-ins, </b> making it ideal for D2C brands that run product launches, pop-ups, or community events alongside online campaigns. One tool, both channels — no silos.  ',
      image: '/svg/comp/smartbulk.svg',
      imageAlt: 'Smart bulk messaging',
      imageFirst: false,
    },
  ],
};

const heroContent = {
  headingHtml: `<h1>WhatsEase vs Contlo:</h1> <h1 class='mt-3'> <i class='text-black'>WhatsApp-First Efficiency </i> vs. Omnichannel Overload</h1>`,
  description:
    'Weekend Bazaar used WhatsEase for ticket booking and entry management via WhatsApp, enhancing event operations and customer experience.',
  buttonText: 'Try Now',
  mainImage: '/images/4.png',
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
