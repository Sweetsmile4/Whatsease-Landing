'use client';

import React, { Suspense } from 'react';
import InstagramCallbackPageInner from './InstagramCallbackPageInner';
import { Spin } from 'antd';

export default function InstagramCallbackPage() {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center">
        <Spin tip="Loading Instagram callback..." size="large" />
      </div>
    }>
      <InstagramCallbackPageInner />
    </Suspense>
  );
}
