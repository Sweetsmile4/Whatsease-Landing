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
  competitor: 'Zoko',
  features: [
    {
      title: 'More Than a Sales Channel — A Full Funnel Engine',
      description:
        "Zoko is focused on using WhatsApp as a sales channel by linking carts, products, and transactions. WhatsEase.in goes much deeper — it enables <b> end-to-end funnels </b> with lead capture, behavioral automation, reminders, payments, ticketing, and QR check-ins. It's not just about selling, it’s about <b> lifecycle growth </b> across D2C and events.   ",
      image: '/svg/comp/completeevent.svg',
      imageAlt: 'Complete event lifecycle',
      imageFirst: false,
    },
    {
      title: '8–10x ROAS & 80% Lower CAC',
      description:
        'WhatsEase.in consistently delivers  <b> 8–10x ROAS </b> through smarter segmentation, abandoned cart nudges, and personalized campaigns. With integrated retargeting, brands have seen <b> up to 80% reduction in CAC. </b> Zoko supports broadcasts and flows, but often requires additional tools to match this level of performance and cost-efficiency.  ',
      image: '/svg/comp/realtime.svg',
      imageAlt: 'Real-time support',
      imageFirst: true,
    },
    {
      title: 'Events + Commerce in One Platform',
      description:
        'Unlike Zoko — which is focused on D2C stores only — WhatsEase.in uniquely blends <b> event workflows (ticketing, registration, check-ins) with D2C commerce flows.</b> This makes it ideal for brands running pop-ups, workshops, product launches, or experiential campaigns alongside online sales — no third-party tools needed.  ',
      image: '/svg/comp/smartbulk.svg',
      imageAlt: 'Smart bulk messaging',
      imageFirst: false,
    },
  ],
};

const heroContent = {
  headingHtml: `<h1>WhatsEase vs Zoko:</h1> <h1 class='mt-3'><i class='text-black'> Full-Funnel Growth </i> vs. Sales-Only Focus</h1>`,
  description:
    'Weekend Bazaar used WhatsEase for ticket booking and entry management via WhatsApp, enhancing event operations and customer experience.',
  buttonText: 'Try Now',
  mainImage: '/images/11.png',
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
