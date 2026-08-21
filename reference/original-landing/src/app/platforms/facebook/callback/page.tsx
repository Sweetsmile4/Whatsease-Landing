'use client';

import React, { Suspense } from 'react';
import FacebookCallbackPageInner from './FacebookCallbackPageInner';
import { Spin } from 'antd';

export default function FacebookCallbackPage() {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center">
        <Spin tip="Loading Facebook callback..." size="large" />
      </div>
    }>
      <FacebookCallbackPageInner />
    </Suspense>
  );
}
