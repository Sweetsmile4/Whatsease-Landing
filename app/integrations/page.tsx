import type { Metadata } from "next";
import { IntegrationsExperience } from "../components/GrowthPages";

export const metadata: Metadata = {
  title: "WhatsEase Integrations | Connect WhatsApp, Shopify, CRM & More",
  description: "Connect WhatsEase with WhatsApp, Shopify, CRM, Google tools, APIs and more to automate customer conversations and business workflows.",
};

export default function IntegrationsPage() { return <IntegrationsExperience />; }
