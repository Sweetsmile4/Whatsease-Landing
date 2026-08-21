import type { Metadata } from 'next';
import './globals.css';
import ReduxProvider from './providers/ReduxProvider';
import ThemeProvider from './providers/ThemeProvider';
import NavbarWrapper from './components/NavbarWrapper';
import ClientFooter from '@/components/ClientFooter';
import GTMInit from '@/components/GTMInit';
import { AuthProvider } from '@/contexts/AuthContext';
import { RBACProvider } from '@/contexts/RBACContext';
import { ChakraProvider } from '@chakra-ui/react';
import { WhatsAppProvider } from '@/contexts/WhatsappContext';
import { ConfigProvider } from 'antd';
import { App } from 'antd';
import { FacebookProvider } from '@/contexts/FacebookContext';
import { LayoutProvider } from '@/contexts/LayoutContext';
import { UserLimitsProvider } from '@/contexts/UserLimitsContext';
import ReactQueryProvider from './providers/ReactQueryProvider';
import PWAServiceWorkerRegistrar from '@/components/PWAServiceWorkerRegistrar';
export const metadata: Metadata = {
  title: 'WhatsEase',
  description: 'AI powered WhatsApp CRM',
  manifest: '/manifest.json',
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'WhatsEase',
    title: 'WhatsEase - AI Powered WhatsApp CRM',
    description: 'AI powered WhatsApp CRM for managing customer relationships',
  },
  twitter: {
    card: 'summary',
    title: 'WhatsEase - AI Powered WhatsApp CRM',
    description: 'AI powered WhatsApp CRM for managing customer relationships',
  },
  icons: {
    icon: '/whatsease_favicon.svg',
    apple: '/whatsease_favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#25D366" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes"
        />

        {/* Facebook SDK for WhatsApp Embedded Signup */}
        <script
          async
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/en_US/sdk.js"
        ></script>
      </head>
      <body className="min-h-screen bg-background font-figtreeNormal text-foreground antialiased">
        <PWAServiceWorkerRegistrar />
        <GTMInit />
        <ReduxProvider>
          <ReactQueryProvider>
            <ThemeProvider defaultTheme="light">
              <AuthProvider>
                <UserLimitsProvider>
                  <RBACProvider>
                    <ConfigProvider>
                      <App>
                        <NavbarWrapper />
                        <WhatsAppProvider>
                          <FacebookProvider>
                            <LayoutProvider>
                              <main className="mx-auto flex min-h-screen items-center justify-center">
                                {children}
                              </main>
                            </LayoutProvider>
                          </FacebookProvider>
                        </WhatsAppProvider>
                        <ClientFooter />
                      </App>
                    </ConfigProvider>
                  </RBACProvider>
                </UserLimitsProvider>
              </AuthProvider>
            </ThemeProvider>
          </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
