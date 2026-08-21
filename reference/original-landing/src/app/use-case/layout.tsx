import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WhatsEase',
  description: 'AI powered WhatsApp CRM',
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
      <body className="min-h-screen w-full bg-background font-figtreeNormal text-foreground antialiased">
        <main className="flex min-h-screen items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
