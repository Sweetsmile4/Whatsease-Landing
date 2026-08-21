'use client';

import React, { Suspense } from 'react';
import GmailCallbackPageInner from './GmailCallbackPageInner';
import { Spin } from 'antd';

export default function GmailCallbackPage() {
  return (
    <Suspense fallback={
      <div className="flex h-screen items-center justify-center">
        <Spin tip="Loading Gmail callback..." size="large" />
      </div>
    }>
      <GmailCallbackPageInner />
    </Suspense>
  );
}