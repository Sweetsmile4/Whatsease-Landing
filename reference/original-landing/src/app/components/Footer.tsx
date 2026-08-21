'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ConfigProvider, Button, Input, Form, Collapse, message } from 'antd';
import { motion } from 'framer-motion';
import {
  LinkedinFilled,
  InstagramOutlined,
  ArrowRightOutlined,
  DownOutlined,
  RightOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';
import { scroller } from 'react-scroll';
import { toast } from 'sonner';
import { getApiClient } from '@/utils/api';
const { Panel } = Collapse;

const Footer = () => {
  const apiClient = getApiClient();
  const [form] = Form.useForm();
  const [email, setEmail] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  // Add the number as a constant for easy reference/use
  const supportPhoneNumber = '9510468956';

  const quickLinks = [
    { label: 'Demo', href: '/demo' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Features', href: '/features' },
    {
      label: 'Contact',
      href: '/contact',
      scroll: true, // custom flag for scroll
    },
  ];

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Overview', href: '/product' },
        { label: 'Features', href: '/features' },
        // { label: 'Solutions', href: '/solutions' },
        { label: 'Pricing', href: '/pricing' },
        // { label: 'Enterprise', href: '/enterprise' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'Help Center', href: '/contact' },
        // { label: 'API Reference', href: '/api' },
        // { label: 'Status', href: '/status' },
        // { label: 'Tutorials', href: '/tutorials' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about-us' },
        // { label: 'Careers', href: '/careers' },
        // { label: 'Blog', href: '/blog' },
        // { label: 'Press', href: '/press' },
        // { label: 'Partners', href: '/partners' },
      ],
    },
  ];

  const onFinish = async (values: any) => {
    setIsSubmitting(true);
    try {
      const { data } = await apiClient.post('/newsletter/subscribe', {
        email: values.email,
      });

      // handle success response
      messageApi.success(
        data.message || 'Successfully subscribed to newsletter!',
      );
      setEmail('');
      form.resetFields();
    } catch (error: any) {
      console.error('Error subscribing to newsletter:', error);

      const status = error?.response?.status;
      const detail =
        error?.response?.data?.detail ||
        error?.response?.data?.message ||
        error?.message ||
        'Failed to subscribe. Please try again.';

      if (status === 400) {
        messageApi.warning(detail || 'This email is already subscribed.');
      } else {
        messageApi.error(detail);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#04b851',
          borderRadius: 8,
        },
        components: {
          Collapse: {
            headerBg: 'transparent',
            contentBg: 'transparent',
          },
        },
      }}
    >
      {contextHolder}
      <footer className="relative bg-[#020210] text-white">
        {/* Decorative elements */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
          <div className="absolute -right-48 top-40 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
          <div className="absolute bottom-20 left-1/3 h-[300px] w-[300px] translate-x-1/2 rounded-full bg-primary/5 blur-[80px]" />

          {/* Mesh grid - subtle background pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
          />

          {/* Diagonal lines */}
          <div className="absolute right-0 top-0 h-64 w-64 overflow-hidden opacity-10">
            <div className="absolute -right-32 -top-32 h-64 w-64 rotate-12 border-l-2 border-t-2 border-primary/30" />
          </div>
          <div className="absolute bottom-0 left-0 h-64 w-64 overflow-hidden opacity-10">
            <div className="absolute -bottom-32 -left-32 h-64 w-64 -rotate-12 border-r-2 border-t-2 border-primary/30" />
          </div>
        </div>

        {/* Pre-footer CTA */}
        <div className="relative border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8 backdrop-blur-sm sm:p-12">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[60px]" />
              <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    Ready to transform your business communication?
                  </h2>
                  <p className="mt-4 text-lg text-white/80">
                    Join thousands of businesses using WhatsEase to streamline
                    customer interactions.
                  </p>
                </div>
                <div className="flex flex-shrink-0 flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button
                    type="default"
                    size="large"
                    className="flex items-center justify-center gap-2 border border-none border-black bg-white text-[#020210] shadow-inner-and-outer shadow-black/[0.4] hover:border hover:border-primary/[.2] hover:bg-white"
                    href="/demo"
                  >
                    <span className="font-Pangea">Book a demo</span>
                    <ArrowRightOutlined />
                  </Button>
                  <Button
                    size="large"
                    className="border-white/30 bg-transparent font-Pangea text-white hover:border-white hover:bg-white/10"
                    href="/contact"
                  >
                    Contact sales
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="relative mx-auto max-w-[90rem] px-4 pt-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-8 lg:grid-cols-12">
            {/* Brand column */}
            <div className="space-y-8 md:col-span-8 lg:col-span-4">
              <div>
                <Image
                  src="/logo.svg"
                  alt="WhatsEase"
                  width={180}
                  height={45}
                  className="h-12 w-auto"
                />
                <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
                  WhatsEase revolutionizes business messaging with AI-powered
                  automation that creates personalized customer experiences at
                  scale.
                </p>
                {/* Add support phone number here */}
                <p className="mt-4 text-base text-white/80">
                  <span className="font-semibold">Support:</span>{' '}
                  <a
                    href={`tel:${supportPhoneNumber}`}
                    className="text-primary underline hover:text-primary/80"
                  >
                    {supportPhoneNumber}
                  </a>
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-medium uppercase tracking-wider text-white/50">
                  Follow us
                </h4>
                <div className="flex gap-4">
                  {[
                    {
                      icon: <InstagramOutlined />,
                      href: 'https://www.instagram.com/whatsease.in?igsh=NTM2OGI1MTZlamdr',
                      label: 'Instagram',
                    },
                    {
                      icon: <WhatsAppOutlined />,
                      href: 'https://api.whatsapp.com/send?phone=919427606998&text=Connect%20with%20WhatsEase%20team%20for%20my%20business%20requirements!',
                      label: 'Whatsapp',
                    },
                    {
                      icon: <LinkedinFilled />,
                      href: 'https://www.linkedin.com/company/whatsease/',
                      label: 'LinkedIn',
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-all hover:bg-primary hover:text-white"
                    >
                      <span className="transform transition-transform duration-300 group-hover:scale-110">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              {/* 
              <div>
                <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 px-4 py-2">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
                  </span>
                  <span className="text-sm font-medium text-white/90">
                    We&apos;re hiring!{' '}
                    <Link
                      href="/careers"
                      className="text-primary hover:underline"
                    >
                      View open positions →
                    </Link>
                  </span>
                </div>
              </div> */}
            </div>

            {/* Navigation - desktop */}
            <div className="hidden md:col-span-8 md:grid md:grid-cols-3 md:gap-8 lg:col-span-5">
              {footerSections.map((section) => (
                <div key={section.title} className="space-y-6">
                  <h4 className="text-sm font-medium uppercase tracking-wider text-white/50">
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="group text-base text-white/70 transition-all hover:text-primary"
                        >
                          <span className="inline-flex items-center">
                            <span className="border-b border-transparent transition-all group-hover:border-primary">
                              {link.label}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile accordion navigation */}
            <div className="md:hidden">
              <Collapse
                ghost
                expandIconPosition="end"
                expandIcon={({ isActive }) =>
                  isActive ? (
                    <DownOutlined className="text-white/70" />
                  ) : (
                    <RightOutlined className="text-white/70" />
                  )
                }
                items={footerSections.map((section) => ({
                  key: section.title,
                  label: (
                    <h4 className="text-sm font-medium uppercase tracking-wider text-white/70">
                      {section.title}
                    </h4>
                  ),
                  children: (
                    <ul className="space-y-4 pl-2">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="text-base text-white/70 transition-colors hover:text-primary"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ),
                }))}
              />
            </div>

            {/* Newsletter */}
            <div className="md:col-span-8 lg:col-span-3">
              <div className="space-y-6 rounded-2xl bg-white/5 p-6">
                <h4 className="text-sm font-medium uppercase tracking-wider text-white/50">
                  Stay updated
                </h4>
                <p className="text-sm leading-relaxed text-white/70">
                  Subscribe to our newsletter for product updates, industry
                  insights, and expert tips to improve your customer engagement.
                </p>

                <Form form={form} name="newsletter" onFinish={onFinish}>
                  <div
                    className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                      isEmailFocused ? 'ring-2 ring-primary/50' : ''
                    }`}
                  >
                    <Form.Item
                      name="email"
                      className="mb-0"
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        {
                          type: 'email',
                          message: 'Please enter a valid email',
                        },
                      ]}
                    >
                      <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setIsEmailFocused(true)}
                        onBlur={() => setIsEmailFocused(false)}
                        placeholder="Your email address"
                        suffix={
                          <Button
                            type="primary"
                            htmlType="submit"
                            size="small"
                            className="flex items-center justify-center gap-1 rounded-md border-none bg-primary text-white transition-colors hover:bg-white/90"
                            style={{
                              background:
                                'linear-gradient(90deg, #04b851 0%, #0ea5e9 100%)',
                              color: '#fff',
                              boxShadow: '0 2px 8px 0 rgba(4,184,81,0.15)',
                            }}
                          >
                            <span className="text-xs font-semibold">
                              Subscribe
                            </span>
                          </Button>
                        }
                        className="border-none bg-white/90 text-black transition-all placeholder:text-black/50 focus:ring-2 focus:ring-white/60"
                        style={{
                          borderRadius: 8,
                          boxShadow: isEmailFocused
                            ? '0 0 0 2px #04b85155'
                            : '0 1px 4px 0 rgba(4,184,81,0.07)',
                          background: 'rgba(255,255,255,0.95)',
                          color: '#222',
                        }}
                      />
                    </Form.Item>
                  </div>
                </Form>
                <p className="text-xs leading-relaxed text-white/50">
                  By subscribing, you agree to our{' '}
                  <Link
                    href="/privacy"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>{' '}
                  and consent to receive marketing communications.
                </p>
              </div>
            </div>
          </div>

          {/* Quick links + bottom bar */}
          <div className="mt-16 border-t border-white/10 py-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {quickLinks.map((link) =>
                  link.scroll ? (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scroller.scrollTo('contact-us-section', {
                          duration: 600,
                          delay: 0,
                          smooth: 'easeInOutQuart',
                          offset: -80,
                        });
                      }}
                      className="text-sm text-white/50 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-white/50">
                    © {new Date().getFullYear()} WhatsEase Technologies
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <Link href="/privacy" className="hover:text-primary">
                    Privacy
                  </Link>
                  <span>•</span>
                  <Link href="/terms" className="hover:text-primary">
                    Terms
                  </Link>
                  <span>•</span>
                  <Link href="/cookies" className="hover:text-primary">
                    Cookies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ConfigProvider>
  );
};

export default Footer;
