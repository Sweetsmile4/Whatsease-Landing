'use client';

import React, { Suspense } from 'react';
import CalendlyCallbackPageInner from './CalendlyCallbackPageInner';
import { Spin } from 'antd';

export default function CalendlyCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <Spin tip="Loading Calendly callback..." size="large" />
        </div>
      }
    >
      <CalendlyCallbackPageInner />
    </Suspense>
  );
}
