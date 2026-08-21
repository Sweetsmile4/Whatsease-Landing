'use client';

import React, { Suspense } from 'react';
import GoogleCalendarCallbackPageInner from './GoogleCalendarCallbackPageInner';
import { Spin } from 'antd';

export default function GoogleCalendarCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <Spin tip="Loading Google Calendar callback..." size="large" />
        </div>
      }
    >
      <GoogleCalendarCallbackPageInner />
    </Suspense>
  );
}
