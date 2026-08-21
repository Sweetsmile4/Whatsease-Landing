// import ThemeToggle from './components/ThemeToggle';
'use client';
import CRMFeaturesGrid from './components/AllFeatures';
import BentoGrid from './components/BentoGrid';
import ContactUs from './components/ContactUs';
import Features from './components/Features';
import { HeroVideoDialogDemo } from './components/HeroDialogue';
import Landing from './components/Home/page';
import LeadBucket from './components/LeadBucket';
import Solution from './components/Solution';
import Testimonials from './components/Testimonials';
import { Element } from 'react-scroll';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      {/* <ThemeToggle /> */}

      <Landing />
      <Features />

      <Solution />

      <LeadBucket />

      <HeroVideoDialogDemo />
      <BentoGrid />
      <Testimonials />
      <CRMFeaturesGrid />
      {/* Wrap ContactUs with Element for scroll target */}
     <section id="contact-us">
  <ContactUs />
</section>

    </div>
  );
}
