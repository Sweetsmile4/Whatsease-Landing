'use client';

import { useEffect } from 'react';
import { registerMessagingServiceWorker } from '@/lib/firebase/messaging';

export default function PWAServiceWorkerRegistrar() {
  useEffect(() => {
    registerMessagingServiceWorker().catch((error) => {
      console.error('Failed to register the PWA service worker:', error);
    });
  }, []);

  return null;
}
