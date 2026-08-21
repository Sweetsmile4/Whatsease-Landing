import React, { useState, useRef } from 'react';
import { FaStar, FaTimes } from 'react-icons/fa';

// Define the testimonial type
interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
}

// Updated testimonial data with Shubham Londhe's testimonial added
const testimonialData: Testimonial[] = [
    {
    id: 1,
    quote:
      "We needed a highly customized WhatsApp ticketing solution for an HNI event under CII Young Indians. Whatsease stood out with their flexibility, real-time support, and willingness to co-create solutions. We managed ticket sales worth over ₹1.5 crore seamlessly. The team was always available, even on weekends. Truly a reliable and future-ready platform.",
    name: 'Harshit Gupta, Chartered Accountant',
role: 'Event Organiser, Young Indians (CII)',
    image:
      '/testimonials/harshit.png',
  },
     {
    id: 2,
    quote:
      "We’re here at Take Pride’25, and honestly, the hotel booking experience felt almost magical. The entire process—from start to finish—happened seamlessly on WhatsApp. There was no need to log into any website or deal with complicated steps. It was just a few messages, a few simple choices, a couple of button clicks, and the booking was done.It was incredibly smooth and intuitive. Kudos to the WhatsEase team for making hotel booking so effortless for all the delegates at Take Pride'25",
    name: 'Palash Khandelwal – Founder, Aarambh School',
    role: 'Event Attendee',
    image:
      '/testimonials/palash.png',
  },
     {
    id: 3,
    quote:
      "I’m Pranav from the Lucknow chapter. We used WhatsEase, and it has a brilliant interface. It’s very convenient and extremely user-friendly. I would definitely recommend it to everyone.I think it can be easily incorporated into businesses, irrespective of the industry. With the way AI is evolving and changing business dynamics, this is something that should definitely be considered.",
   name: 'Pranav Charan, CII Lucknow Chapter Founder, Space & Formz Interior',
role: 'Event Attendee',
    image:
      '/testimonials/pranav_charan.png',
  },
    {
    id: 4,
    quote:
      "Whatsease was our ticketing and digital marketing partner for our food festival. Their innovative ideas, latest technology, and strong execution helped us reach more people and make the event a success. Highly recommended for hospitality and large-scale events.",
    name: 'Dev Sain',
    role: 'Corporate General Manager , Waves Food Club',
    image:
      'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
  },
    {
    id: 5,
    quote:
      "WhatsEase handled our complex ticketing needs perfectly—multiple pass types, payments, and backend management. The system saved us a lot of time and made the entire Garba event smooth for parents, kids, and organizers alike.",
    name: 'Garima Dave',
    role: 'Operations Manager, Alaiya Balaiya Garba',
    image:
      'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
  },
      {
    id: 6,
    quote:
      "The support from the WhatsEase team has been phenomenal. The product is powerful, the team is hardworking, and the overall experience has been fantastic. I highly recommend their services to anyone looking for reliable and effective WhatsApp-based solutions.",
    name: 'Shubham Londhe',
    role: 'Founder - TrainWithShubham',
    image:
      '/testimonials/shubham.png',
  },
    {
    id: 7,
    name: 'Event Attendee',
    role: 'Weekend Bazaar, Vadodara',
    image:
      'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
    quote:
      'Booking tickets via WhatsApp was quick and hassle-free. No standing in long queues, instant payment via UPI, and smooth entry. It was a fast, comfortable, and completely digital experience.',
  },
  {
    id: 8,
    quote:
      "We used Whatsease for ticketing at our 'Be Here Now' event, and it was a game-changer! Attendees could book tickets via WhatsApp seamlessly, making payments and accessing event details with ease. As an organizer, it simplified everything ticketing, lineup, and data collection-all in one place. Whatsease made event management truly effortless!",
    name: 'Rajasi Rastogi',
    role: 'Associate Founder , Savitri SociaLabs',
    image:
      '/testimonials/rajasi_rastogi.png',
  },
  {
    id: 9,
    quote:
      "As a musician, Whatsease made event management effortless. I didn't have to worry about ticketing or data collection-I could focus entirely on my performance. The communication throughout the event was seamless, with the Whatsease team always responsive and supportive. Unlike major platforms, Whatsease provides a human touch and more control for artists.",
    name: 'Jigar Panchal',
    role: '3D Designer & Musician',
    image:
      'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
  },
  {
    id: 10,
    quote:
      'Whatsease made ticketing and attendee management seamless. Guests booked tickets via WhatsApp, received updates instantly, and the entire registration process was smooth. It allowed us to focus on creating a memorable event while everything else ran effortlessly in the background.',
    name: 'Alpesh Patel',
    role: 'Organizer: Vadodara Fun Fiesta (VFF)',
    image:
      'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
  },
  {
    id: 11,
    quote:
      "Whatsease helped us overcome major payment challenges smoothly. Their platform is intuitive, and the team was incredibly supportive throughout. Special thanks to Anubhav and the team for their dedication and reliability. They truly simplified our ticketing operations.",
    name: 'Prashant Bhavsar',
    role: 'The Hackers MeetUP (THM) Ahmedabad Lead',
    image:
      'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
  },


  // NEW TESTIMONIALS 👇


  // {
  //   id: 8,
  //   quote:
  //     'Booking tickets through WhatsApp at Weekend Bazaar was extremely easy and time-saving. Just scan the QR code, pay via UPI, and get instant tickets. No queues, no confusion, and smooth digital entry. A wonderful and unique experience.',
  //   name: 'Visitor',
  //   role: 'Weekend Bazaar Attendee',
  //   image:
  //     'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
  // },
  {
    id: 12,
    quote:
      "Booking workshops and performances via WhatsApp was surprisingly seamless. I could browse events, select sessions, and pay for everything together in minutes. No website hopping, no confusion—just a smooth and enjoyable booking experience.",
    name: 'Event Attendee',
    role: 'Savitri Urban Forest Concert',
    image:
      'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
  },
  // {
  //   id: 10,
  //   quote:
  //     "Whatsease helped us manage ticketing and attendee communication effortlessly. Real-time updates, WhatsApp reminders, and clear attendee tracking made outreach easy. The team was highly cooperative and responsive throughout. A great alternative to large platforms with no human touch.",
  //   name: 'Organizer',
  //   role: 'Savitri Urban Forest',
  //   image:
  //     'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
  // }
];


const Testimonials: React.FC = () => {

  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [showAll, setShowAll] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollToTestimonials = () => {
    testimonialsRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
    setShowAll(true);
  };

  return (
    <div className="my-32 flex w-full flex-col items-center justify-center bg-[#f9fafb] pb-5 pt-12 font-sans sm:pt-16">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-12 px-5 sm:px-10">
        {/* Top section with heading and ratings */}
        <div className="flex w-full flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          {/* Left side - heading and button */}
          <div className="flex w-full flex-col items-start justify-center gap-4 text-start">
            <h1 className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
              You are in good company
            </h1>
            <p className="text-sm text-gray-500 sm:text-base md:text-lg">
              Read what our customers say about us and see{' '}
              <br className="hidden sm:block" /> for yourself!
            </p>
          </div>

          {/* Right side - rating logos */}
          <div className="flex w-full flex-row items-center justify-center gap-8 sm:w-auto sm:justify-end">
            {/* Google rating */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="relative mb-2 flex h-8 w-24 items-center justify-center md:h-10 md:w-28">
                <img
                  src="/Companies/tws.png"
                  alt="Google"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="h-4 w-4 text-yellow-400 md:h-5 md:w-5"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 sm:text-base">4.8/5</p>
            </div>

            {/* Microsoft rating */}
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="relative mb-5 flex h-8 w-24 items-center justify-center md:h-10 md:w-28">
                <img
                  src="/Companies/wavesclub.png"
                  alt="Microsoft"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="h-4 w-4 text-yellow-400 md:h-5 md:w-5"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 sm:text-base">4.9/5</p>
            </div>
          </div>
        </div>

        {/* Testimonial cards with improved hover effect */}
        <div 
          ref={testimonialsRef}
          className="relative grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          {(showAll ? testimonialData : testimonialData.slice(0, 6)).map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative flex h-full max-h-[200px] min-h-[180px] flex-col items-start rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 group-hover:border-transparent group-hover:shadow-none"
            >
              {/* Content container that gets reduced opacity */}
              <div className="flex h-full w-full flex-col transition-all duration-300 group-hover:opacity-20">
                {/* Quote - truncate long quotes for better UI */}
                <p
                  className="mb-6 text-sm text-gray-700 sm:text-base"
                  style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 6,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Profile section */}
                <div className="mt-auto flex w-full items-center gap-3">
                  <div className="h-10 w-10 overflow-hidden rounded-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-medium text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Hover button - positioned above content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                <button
                  onClick={() => setSelectedTestimonial(testimonial)}
                  className="rounded-xl border border-[#04b851]/[0.5] bg-[#04b851] px-3 py-1.5 text-xs font-semibold text-white shadow-inner shadow-white/[0.3] transition-all hover:scale-95 md:px-4 md:py-2 md:text-sm"
                >
                  Read full story
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full testimonial */}
      {selectedTestimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl sm:p-8"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
            >
              <FaTimes className="h-5 w-5" />
            </button>

            {/* Profile header */}
            <div className="mb-6 flex items-center gap-4">
              <div className="h-16 w-16 overflow-hidden rounded-full">
                <img
                  src={selectedTestimonial.image}
                  alt={selectedTestimonial.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {selectedTestimonial.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {selectedTestimonial.role}
                </p>
              </div>
            </div>

            {/* Full quote */}
            <div className="mb-4">
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                &quot;{selectedTestimonial.quote}&quot;
              </p>
            </div>

            {/* Rating */}
            {/* <div className="flex items-center gap-2 border-t border-gray-200 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className="h-4 w-4 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-500">5/5</span>
            </div> */}
          </div>
        </div>
      )}
      <div className='mt-2 '></div>
                {!showAll && (
              <button 
                onClick={scrollToTestimonials}
                className="rounded-xl border border-gray-500/[0.2] bg-white px-3 py-2 text-sm font-semibold shadow-sm transition-all hover:bg-gray-50 md:px-4 md:py-2.5 md:text-base"
              >
                More success stories
              </button>
            )}
    </div>
  );
};

export default Testimonials;