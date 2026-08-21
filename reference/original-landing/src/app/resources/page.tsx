// ditya Garg\OneDrive\Desktop\Consult Anubhav\WHATSEASE\api-dev\whatsease\src\app\resources\page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageTemplate from '@/app/components/PageTemplate';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Resources | WhatsEase',
  description:
    'Access guides, case studies, webinars and more to help you get the most out of WhatsEase.',
};

const featuredResource = {
  title: 'The Ultimate Guide to WhatsApp Business API',
  description:
    'Everything you need to know about implementing and leveraging WhatsApp Business API for your company.',
  image:
    'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&auto=format&fit=crop',
  href: '/resources/whatsapp-guide',
  ctaText: 'Download now',
};

const blogPosts = [
  {
    title: '10 Ways AI is Transforming Customer Service in 2023',
    excerpt:
      'Discover how AI technologies are revolutionizing customer service and what it means for your business.',
    image:
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&auto=format&fit=crop',
    category: 'AI & Automation',
    date: 'June 12, 2023',
    href: '/blog/ai-transforming-customer-service',
  },
  {
    title: 'WhatsApp vs. SMS: Which Channel Delivers Better ROI?',
    excerpt:
      'A data-driven comparison of WhatsApp and SMS for business messaging, with real-world case studies.',
    image:
      'https://images.unsplash.com/photo-1640552435936-0ac1e6c4c84f?w=800&auto=format&fit=crop',
    category: 'Channel Strategy',
    date: 'May 28, 2023',
    href: '/blog/whatsapp-vs-sms-roi',
  },
  {
    title: 'Building Conversational Flows That Convert',
    excerpt:
      'Learn how to design effective conversational flows that guide customers to conversion.',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop',
    category: 'Conversation Design',
    date: 'May 15, 2023',
    href: '/blog/conversational-flows-that-convert',
  },
];

const webinars = [
  {
    title: 'Mastering WhatsApp Business API',
    description:
      'Learn how to leverage WhatsApp Business API to enhance customer engagement and drive sales.',
    image:
      'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop',
    date: 'June 22, 2023',
    time: '11:00 AM EST',
    href: '/webinars/mastering-whatsapp-business-api',
  },
  {
    title: 'AI Chatbot Design Best Practices',
    description:
      'Expert tips for designing conversational AI that delivers exceptional customer experiences.',
    image:
      'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800&auto=format&fit=crop',
    date: 'July 5, 2023',
    time: '2:00 PM EST',
    href: '/webinars/ai-chatbot-design',
  },
];

export default function ResourcesPage() {
  return (
    <PageTemplate
      title="Resources to help you succeed"
      subtitle="Resources"
      description="Explore our library of guides, tutorials, webinars, and case studies to help you get the most out of WhatsEase."
      imagePath="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=2000&auto=format&fit=crop"
      ctaText="Browse the blog"
      ctaLink="/blog"
    >
      {/* Resource Categories */}
      <section className="mb-16">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {[
            {
              title: 'Blog',
              description: 'Tips, trends, and insights',
              icon: '📝',
              href: '/blog',
            },
            {
              title: 'Guides',
              description: 'Step-by-step tutorials',
              icon: '📚',
              href: '/guides',
            },
            {
              title: 'Webinars',
              description: 'Live and on-demand events',
              icon: '🎥',
              href: '/webinars',
            },
            {
              title: 'Case Studies',
              description: 'Customer success stories',
              icon: '📊',
              href: '/case-studies',
            },
          ].map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
            >
              <span className="mb-4 text-4xl">{category.icon}</span>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Resource */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
          Featured Resource
        </h2>
        <div className="overflow-hidden rounded-xl bg-gradient-to-r from-[#04b851]/10 via-blue-500/10 to-purple-500/10">
          <div className="grid gap-8 p-8 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
                {featuredResource.title}
              </h3>
              <p className="mb-6 text-gray-600">
                {featuredResource.description}
              </p>
              <Link
                href={featuredResource.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#04b851] px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-[#04b851]/90"
              >
                {featuredResource.ctaText}
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
              <Image
                src={featuredResource.image}
                alt={featuredResource.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="mb-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Latest from our blog
          </h2>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-[#04b851] hover:underline"
          >
            <span>View all posts</span>
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center gap-4">
                  <span className="rounded-full bg-[#04b851]/10 px-3 py-1 text-xs font-medium text-[#04b851]">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mb-4 text-gray-600">{post.excerpt}</p>
                <Link
                  href={post.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#04b851] hover:underline"
                >
                  <span>Read more</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="mb-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Upcoming Webinars
          </h2>
          <Link
            href="/webinars"
            className="flex items-center gap-2 text-[#04b851] hover:underline"
          >
            <span>View all webinars</span>
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {webinars.map((webinar) => (
            <div
              key={webinar.title}
              className="grid overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md md:grid-cols-[1fr_1.5fr]"
            >
              <div className="relative h-48 md:h-auto">
                <Image
                  src={webinar.image}
                  alt={webinar.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-[#04b851]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm text-gray-500">
                    {webinar.date} • {webinar.time}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900">
                  {webinar.title}
                </h3>
                <p className="mb-4 text-gray-600">{webinar.description}</p>
                <Link
                  href={webinar.href}
                  className="inline-flex items-center gap-2 rounded-xl bg-[#04b851] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#04b851]/90"
                >
                  <span>Register now</span>
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resource Library */}
      <section>
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
          Resource Library
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Getting Started with WhatsEase',
              type: 'Guide',
              href: '#',
            },
            {
              title: 'WhatsApp Business API Implementation Checklist',
              type: 'Checklist',
              href: '#',
            },
            {
              title: 'Conversation Design Template',
              type: 'Template',
              href: '#',
            },
            { title: 'ROI Calculator', type: 'Tool', href: '#' },
            {
              title: 'WhatsApp Message Templates Gallery',
              type: 'Examples',
              href: '#',
            },
            {
              title: 'Customer Service Automation Playbook',
              type: 'Guide',
              href: '#',
            },
          ].map((resource, index) => (
            <Link
              key={index}
              href={resource.href}
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-[#04b851]/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#04b851]/10 text-[#04b851]">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{resource.title}</h3>
                <p className="text-xs text-gray-500">{resource.type}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageTemplate>
  );
}
