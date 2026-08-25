import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const figtree = localFont({
  src: [
    { path: "../public/fonts/figtree/Figtree-Regular.ttf", weight: "400" },
    { path: "../public/fonts/figtree/Figtree-Medium.ttf", weight: "500" },
    { path: "../public/fonts/figtree/Figtree-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/figtree/Figtree-Bold.ttf", weight: "700" },
    { path: "../public/fonts/figtree/Figtree-ExtraBold.ttf", weight: "800" },
  ],
  variable: "--font-geist",
  display: "swap",
});

const pangea = localFont({
  src: [
    { path: "../public/fonts/PangeaAfrikanTrial-Regular.otf", weight: "400" },
    { path: "../public/fonts/PangeaAfrikanTrial-Medium.otf", weight: "500" },
    { path: "../public/fonts/PangeaAfrikanTrial-SemiBold.otf", weight: "600" },
    { path: "../public/fonts/PangeaAfrikanTrial-Bold.otf", weight: "700" },
  ],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WhatsEase | AI-powered WhatsApp CRM, Automation & Commerce",
  description: "Manage conversations, leads, campaigns, AI automation, Shopify journeys, catalogs and customer support from one WhatsApp-first platform.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body className={`${figtree.variable} ${pangea.variable}`}>{children}</body></html>;
}
