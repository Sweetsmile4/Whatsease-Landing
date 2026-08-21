'use client';

import React, { useState } from 'react';
import { Form, Input, Select, Button, ConfigProvider, message, Space } from 'antd';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import {
  GlobalOutlined,
  UserOutlined,
  PhoneOutlined,
  BankOutlined,
  TeamOutlined,
  QuestionCircleOutlined,
  MailOutlined,
  CheckCircleFilled,
} from '@ant-design/icons';
import { useContactForm } from '../hooks/useContactForm';

const { Option } = Select;

const ContactUs = () => {
  const [form] = Form.useForm();
  const { isLoading, isSuccess, error, submitForm } = useContactForm();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: any) => {
    try {
      await submitForm({
        name: values.name,
        company: values.company,
        countryCode: values.countryCode,
        phone: values.phone,
        email: values.email,
        country: values.country,
        companySize: values.companySize,
        referralSource: values.referralSource,
      });

      // Show success message
      messageApi.success(
        'Thank you! Your consultation request has been submitted.',
      );

      // Reset form on success
      if (isSuccess) {
        form.resetFields();
      }
    } catch (err) {
      messageApi.error('Failed to submit the form. Please try again.');
      console.error('Form submission error:', err);
    }
  };

  // CDN avatar images
  const avatars = [
    'https://framerusercontent.com/images/lpfC2vJfBmFITV5tEHskgL6s.png?scale-down-to=512',
    'https://randomuser.me/api/portraits/men/42.jpg',
    'https://randomuser.me/api/portraits/women/55.jpg',
  ];

  // Consultation steps
  const consultationSteps = [
    "Let's determine your company's needs together",
    'Presenting the ideal WhatsEase features',
    "Let's address your questions and explore next steps",
  ];

  // Country options
  const countries = [
    { code: 'IN', name: 'India', emoji: '🇮🇳', dialCode: '+91' },
    { code: 'US', name: 'United States', emoji: '🇺🇸', dialCode: '+1' },
    { code: 'GB', name: 'United Kingdom', emoji: '🇬🇧', dialCode: '+44' },
    { code: 'CA', name: 'Canada', emoji: '🇨🇦', dialCode: '+1' },
    { code: 'AU', name: 'Australia', emoji: '🇦🇺', dialCode: '+61' },
  ];

  return (
    <>
      {contextHolder}
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#04b851',
            borderRadius: 8, // Reduced from 12 to 8
            colorBgContainer: '#ffffff',
            colorBorder: '#e5e7eb',
            colorTextPlaceholder: '#9ca3af',
            fontSize: 14,
          },
          components: {
            Input: {
              controlHeight: 48,
              paddingBlock: 12,
            },
            Select: {
              controlHeight: 48,
            },
            Button: {
              controlHeight: 48,
            },
          },
        }}
      >
        <section  id="bookcontact" className="lg:pt-22 container relative grid w-full max-w-7xl grid-cols-1 gap-x-32 overflow-hidden px-10 py-10 font-figtreeNormal md:py-20 lg:grid-cols-2">
          {/* Left Column */}
          <div className="w-full space-y-10">
            {/* Header */}
            <div className="mb-10 space-y-4 md:max-w-screen-sm lg:max-w-[38.25rem]">
              <h1 className="text-5xl font-medium lg:text-6xl">
                Book a consultation now
              </h1>
              <div className="text-md text-gray-600 md:text-base lg:text-lg lg:leading-[1.625rem]">
                Share a bit about your company and book a meeting with a
                WhatsEase expert. Discover how our product can transform your
                business and get all your questions answered.
              </div>
            </div>

            {/* Desktop content - hidden on mobile */}
            <div className="hidden md:block">
              <div className="space-y-8 pb-20 lg:pb-0">
                <div className="space-y-6">
                  {/* Avatars */}
                  {/* <div className="mt-16 flex -space-x-2 overflow-hidden">
                  {avatars.map((avatar, index) => (
                    <div
                      key={index}
                      className="h-11 w-11 shrink-0 cursor-pointer overflow-hidden rounded-full border-2 border-white"
                    >
                      <Image
                        src={avatar}
                        alt={`avatar-${index}`}
                        width={120}
                        height={120}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div> */}

                  {/* Consultation steps */}
                  <div className="space-y-3">
                    <p className="font-semibold">In the consultation:</p>

                    {consultationSteps.map((step, index) => (
                      <div key={index} className="flex space-x-2.5">
                        <FaCheckCircle className="h-6 w-6 shrink-0 text-gray-600" />
                        <p>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Support phone number */}
                <div className="mt-8 flex w-full flex-col items-start">
                  <span className="text-base font-semibold text-gray-700">
                    Or call us at{' '}
                    <a
                      href="tel:9510468956"
                      className="text-primary underline hover:text-primary/80"
                    >
                      9510468956
                    </a>
                  </span>
                </div>

                {/* Trust badges */}
                {/* <div className="flex items-center space-x-4 md:space-x-8">
                <div className="flex h-14 items-center rounded-md border border-gray-200 bg-white px-3 shadow-sm">
                  <span className="text-sm font-semibold">
                    META BUSINESS PARTNER
                  </span>
                </div>
                <div className="flex h-14 items-center rounded-md border border-gray-200 bg-white px-3 shadow-sm">
                  <span className="text-sm font-semibold">GDPR COMPLIANT</span>
                </div>
                <div className="flex h-8 items-center rounded-md border border-gray-200 bg-white px-3 shadow-sm">
                  <span className="text-sm font-semibold">EU SERVERS</span>
                </div>
              </div> */}
              </div>
            </div>
          </div>

          {/* Right Column - Form with Ant Design Components */}
          <div className="flex w-full justify-center lg:mt-2.5">
            <div className="relative flex w-full min-w-[22rem] max-w-[30.375rem] flex-col items-center overflow-visible md:min-w-[24rem]">
              {/* Form */}
              <motion.div
                className="z-10 w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Gradient circles positioned absolutely */}
                <div className="absolute -left-24 top-16 h-40 w-40 animate-pulse rounded-full bg-gradient-to-r from-primary/30 to-blue-400/40 opacity-60 blur-xl" />
                <div
                  className="absolute -right-20 bottom-20 h-36 w-36 animate-pulse rounded-full bg-gradient-to-l from-primary/20 to-indigo-400/30 opacity-60 blur-xl"
                  style={{ animationDuration: '7s' }}
                />
                <div
                  className="absolute -left-12 bottom-40 h-20 w-20 animate-pulse rounded-full bg-gradient-to-tr from-yellow-400/20 to-primary/20 opacity-60 blur-lg"
                  style={{ animationDuration: '10s' }}
                />
                <div
                  className="absolute right-4 top-10 h-16 w-16 animate-pulse rounded-full bg-gradient-to-bl from-pink-400/20 to-blue-300/20 opacity-70 blur-lg"
                  style={{ animationDuration: '8s' }}
                />

                {/* Form card with gradient background */}
                <div className="w-full rounded-lg bg-gradient-to-br from-white via-white to-gray-50 p-6 shadow-sm">
                  <Form
                    form={form}
                    name="consultation_form"
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark={false}
                    size="large"
                    initialValues={{
                      countryCode: 'IN',
                      country: 'IN',
                    }}
                  >
                    <Form.Item
                      name="name"
                      label={<span className="font-semibold">Full name</span>}
                      rules={[
                        { required: true, message: 'Please enter your name' },
                      ]}
                    >
                      <Input
                        placeholder="John Smith"
                        prefix={<UserOutlined className="mr-2 text-gray-400" />}
                      />
                    </Form.Item>

                    <Form.Item
                      name="company"
                      label={<span className="font-semibold">Company</span>}
                      rules={[
                        {
                          required: true,
                          message: 'Please enter your company name',
                        },
                      ]}
                    >
                      <Input
                        placeholder="Smith Ltd."
                        prefix={<BankOutlined className="mr-2 text-gray-400" />}
                      />
                    </Form.Item>

                    {/* Fixed phone field layout */}
                    <Form.Item
                      label={
                        <span className="font-semibold">Phone number</span>
                      }
                      className="mb-4"
                      style={{ marginBottom: '24px' }} // Ensure consistent spacing
                    >
                      <Space.Compact>
                        <Form.Item
                          name="countryCode"
                          noStyle
                          rules={[{ required: true, message: 'Required' }]}
                        >
                          <Select
                            style={{ width: '30%' }}
                            popupMatchSelectWidth={false}
                          >
                            {countries.map((country) => (
                              <Option key={country.code} value={country.code}>
                                <div className="flex items-center">
                                  <span className="mr-1">{country.emoji}</span>
                                  <span>{country.dialCode}</span>
                                </div>
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                        <Form.Item
                          name="phone"
                          noStyle
                          rules={[
                            {
                              required: true,
                              message: 'Please enter your phone number',
                            },
                          ]}
                        >
                          <Input
                            style={{ width: '70%' }}
                            placeholder="157 97116427"
                            prefix={
                              <PhoneOutlined className="mr-2 text-gray-400" />
                            }
                          />
                        </Form.Item>
                      </Space.Compact>
                    </Form.Item>

                    <Form.Item
                      name="email"
                      label={
                        <span className="font-semibold">E-mail (business)</span>
                      }
                      rules={[
                        { required: true, message: 'Please enter your email' },
                        {
                          type: 'email',
                          message: 'Please enter a valid email',
                        },
                      ]}
                    >
                      <Input
                        placeholder="john.smith@company.com"
                        prefix={<MailOutlined className="mr-2 text-gray-400" />}
                      />
                    </Form.Item>

                    <Form.Item
                      name="country"
                      label={<span className="font-semibold">Country</span>}
                      rules={[
                        {
                          required: true,
                          message: 'Please select your country',
                        },
                      ]}
                    >
                      <Select
                        placeholder="Select country"
                        popupMatchSelectWidth={false}
                        suffixIcon={<GlobalOutlined />}
                      >
                        {countries.map((country) => (
                          <Option key={country.code} value={country.code}>
                            <div className="flex items-center">
                              <span className="mr-2">{country.emoji}</span>
                              <span>{country.name}</span>
                            </div>
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name="companySize"
                      label={
                        <span className="font-semibold">Company size</span>
                      }
                      rules={[
                        {
                          required: true,
                          message: 'Please select your company size',
                        },
                      ]}
                    >
                      <Select
                        placeholder="Select company size"
                        suffixIcon={<TeamOutlined />}
                      >
                        <Option value="1-9">1 - 9</Option>
                        <Option value="10-24">10 - 24</Option>
                        <Option value="25-49">25 - 49</Option>
                        <Option value="50-99">50 - 99</Option>
                        <Option value="100-199">100 - 199</Option>
                        <Option value="200-500">200 - 500</Option>
                        <Option value="500+">500+</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name="referralSource"
                      label={
                        <span>
                          <span className="font-semibold">
                            How did you hear about us?
                          </span>
                          <span className="ml-1 font-medium text-gray-400">
                            (optional)
                          </span>
                        </span>
                      }
                    >
                      <Select
                        placeholder="Select source"
                        suffixIcon={<QuestionCircleOutlined />}
                      >
                        <Option value="facebook">Facebook</Option>
                        <Option value="google">Google</Option>
                        <Option value="instagram">Instagram</Option>
                        <Option value="linkedin">LinkedIn</Option>
                        <Option value="tiktok">TikTok</Option>
                        <Option value="recommendation">Recommendation</Option>
                        <Option value="bing">Bing</Option>
                        <Option value="press">Press</Option>
                        <Option value="youtube">YouTube</Option>
                        <Option value="other">Other</Option>
                      </Select>
                    </Form.Item>

                    <Form.Item className="mt-6">
                      <Button
                        type="primary"
                        htmlType="submit"
                        block
                        size="large"
                        loading={isLoading}
                        disabled={isLoading || isSuccess}
                        className="h-12 rounded-lg border border-black/[0.1] font-figtreeSemibold font-semibold text-black shadow-inner shadow-white/[0.3] transition-all hover:opacity-90 active:scale-[0.98]"
                      >
                        {isSuccess ? (
                          <>
                            <CheckCircleFilled className="mr-2" />
                            Request Submitted
                          </>
                        ) : (
                          'Schedule an appointment now'
                        )}
                      </Button>
                      <div className="mt-3 text-xs text-gray-400">
                        For more information about how WhatsEase handles your
                        personal information, please visit our{' '}
                        <Link
                          className="font-semibold underline"
                          target="_blank"
                          href="/privacy"
                        >
                          privacy policy
                        </Link>
                        .
                      </div>

                      {error && (
                        <div className="mt-3 text-xs text-red-500">
                          Error: {error}
                        </div>
                      )}
                    </Form.Item>
                  </Form>
                </div>
              </motion.div>

              {/* Background */}
              <div className="absolute -bottom-10 -left-10 -right-10 -top-10 z-0 rounded-lg bg-gradient-to-r from-blue-50/50 via-white to-green-50/50"></div>
            </div>
          </div>

          {/* Mobile content - visible only on mobile */}
          <div className="md:hidden">
            <div className="space-y-8 pb-20 lg:pb-0">
              <div className="space-y-6">
                {/* Avatars */}
                {/* <div className="mt-16 flex -space-x-2 overflow-hidden">
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="h-11 w-11 shrink-0 cursor-pointer overflow-hidden rounded-full border-2 border-white"
                  >
                    <Image
                      src={avatar}
                      alt={`avatar-${index}`}
                      width={120}
                      height={120}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div> */}

                {/* Consultation steps */}
                <div className="space-y-3">
                  <p className="font-semibold">In the consultation:</p>

                  {consultationSteps.map((step, index) => (
                    <div key={index} className="flex space-x-2.5">
                      <FaCheckCircle className="h-6 w-6 shrink-0 text-gray-600" />
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
                {/* Support phone number */}
                <div className="mt-8 flex w-full flex-col items-center">
                  <span className="text-base font-semibold text-gray-700">
                    Or call us at{' '}
                    <a
                      href="tel:9510468956"
                      className="text-primary underline hover:text-primary/80"
                    >
                      9510468956
                    </a>
                  </span>
                </div>
              </div>

              {/* Trust badges */}
              {/* <div className="flex items-center space-x-4 md:space-x-8">
              <div className="flex h-10 items-center rounded-md border border-gray-200 bg-white px-3 shadow-sm">
                <span className="text-xs font-semibold">META PARTNER</span>
              </div>
              <div className="flex h-10 items-center rounded-md border border-gray-200 bg-white px-3 shadow-sm">
                <span className="text-xs font-semibold">GDPR</span>
              </div>
              <div className="flex h-10 items-center rounded-md border border-gray-200 bg-white px-3 shadow-sm">
                <span className="text-xs font-semibold">EU SERVERS</span>
              </div>
            </div> */}
            </div>
          </div>
        </section>
      </ConfigProvider>
    </>
  );
};

export default ContactUs;
