'use client';

import React, { Suspense } from 'react';
import WhatsAppCallbackPageInner from './WhatsappCallbackPageInner';
import { Spin } from 'antd';

export default function WhatsAppCallbackPage() {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center">
        <Spin tip="Loading WhatsApp callback..." size="large" />
      </div>
    }>
      <WhatsAppCallbackPageInner />
    </Suspense>
  );
}
