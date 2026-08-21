'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView, trackEvent } from '@/utils/analytics';
import { captureUTMParams, getUTMForDataLayer } from '@/utils/utm';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-KVJC4R97';

export default function GTMInit() {
  const pathname = usePathname();

  useEffect(() => {
    captureUTMParams();
    const utm = getUTMForDataLayer();
    if (utm) {
      trackEvent('page_view', { page_path: pathname, page_title: document.title, ...utm });
    } else {
      trackPageView(pathname, document.title);
    }
  }, [pathname]);

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}
