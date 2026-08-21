'use client';

import { useIsDashboardRoute } from '@/utils/routeUtils';
import Footer from '@/app/components/Footer';

export default function ClientFooter() {
  const isDashboard = useIsDashboardRoute();

  // Don't render the footer on dashboard pages
  if (isDashboard) {
    return null;
  }

  // Render the footer component on non-dashboard pages
  return <Footer />;
}
