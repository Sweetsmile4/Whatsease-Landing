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
  competitor: 'Limechat',
  features: [
    {
      title: '8–10x ROAS vs. Chat-Only Conversions',
      description:
        'WhatsEase.in delivers <b> 8–10x return on ad spend (ROAS) </b> by combining WhatsApp automation with payment collection, upselling flows, and post-sale engagement — all in one journey. LimeChat focuses heavily on AI-powered chat, which is great for support, but lacks the end-to-end funnel optimization needed for such high ROAS performance.  ',
      image: '/svg/comp/completeevent.svg',
      imageAlt: 'Complete event lifecycle',
      imageFirst: false,
    },
    {
      title: '80% Lower CAC with Built-in Retargeting',
      description:
        'WhatsEase.in helps D2C brands <b> reduce customer acquisition cost (CAC) by up to 80% </b> using retargeting, automated product drops, and behavioral broadcasts directly on WhatsApp. LimeChat mostly captures users after they land on your store, while WhatsEase proactively engages them across the funnel — from lead gen to repeat purchase. . ',
      image: '/svg/comp/realtime.svg',
      imageAlt: 'Real-time support',
      imageFirst: true,
    },
    {
      title: ' Not Just Support, Full-Funnel Growth',
      description:
        'LimeChat shines as a conversational support tool, but it lacks features like ticketing, real-time reminders, campaign scheduling, or QR-based event check-ins. WhatsEase.in, by contrast, is built for <b> growth-first use cases, </b> supporting both D2C commerce and hybrid/IRL campaigns — making it a better fit for fast-scaling brands.  ',
      image: '/svg/comp/smartbulk.svg',
      imageAlt: 'Smart bulk messaging',
      imageFirst: false,
    },
  ],
};

const heroContent = {
  headingHtml: `<h1>WhatsEase vs LimeChat:</h1> <h1 class='mt-3'><i class='text-black'>8-10x ROAS & Full-Funnel Growth </i>vs. Chat-Only Support<h1>`,
  description:
    'Weekend Bazaar used WhatsEase for ticket booking and entry management via WhatsApp, enhancing event operations and customer experience.',
  buttonText: 'Try Now',
  mainImage: '/images/8.png',
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
