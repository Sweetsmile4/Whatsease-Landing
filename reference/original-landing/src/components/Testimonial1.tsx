"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We used Whatsease for ticketing at our 'Be Here Now' event, and it was a game-changer! Attendees could book tickets via WhatsApp seamlessly, making payments and accessing eventdetails with ease. As an organizer, it simplified everything ticketing, lineup, and data collection-all in one place.Whatsease made event management truly effortless!",
    name: "Rajasi Rastogi",
    role: "Associate Founder: Savitri SociaLabs",
    image:
      "https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg",
  },
  {
    quote:
      "As a musician, Whatsease made event management effortless. I didn't have to worry about ticketing or data collection-I could focus entirely on my performance. The communication throughout the event was seamless, with the Whatsease team always responsive and supportive. Unlike major platforms, Whatsease provides a human touch, giving artists more control over their events. I'd highly recommend it to performers looking for a customized, hassle-free ticketing solution!",
    name: "Jigar Panchal",
    role: "3D Designer & Musician",
    image:
      "https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg",
  },
  {
    quote:
      "Whatsease made ticketing and attendee management seamless! Guests easily booked tickets via WhatsApp, accessed event details, and stayed updated, ensuring a smooth experience. The platform simplified registrations and coordination, allowing us to focus on creating an unforgettable celebration. With its intuitive system and great support, Whatsease is a must-have for hasslefree event management!",
    name: "Alpesh Patel",
    role: "Organizer: Vadodara Fun Fiesta (VFF)",
    image:
      "https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg",
  },
  {
    quote:
      "I would like to extend my heartfelt thanks to Whatsease for their incredible support. One of the major challenges we faced was related to payment issues, and I'm happy to share that Whatsease resolved them seamlessly. Their user interface is intuitive and easy to navigate, and their developers are not only highly skilled but also extremely helpful throughout the process. Special thanks to the founder, Anubhav Chaturvedi, for building such a reliable platform. We're truly grateful to Whatsease for streamlining our ticketing process.",
    name: "Prashant Bhavsar",
    role: "The Hackers MeetUP (THM) Ahmedabad Lead",
    image:
      "https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg",
  },
];

const Testimonial1: React.FC = () => {
  return (
    <div className="w-full  h-auto overflow-hidden">
      <div className=" mx-auto">
        <div className="w-full h-auto overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial1;
