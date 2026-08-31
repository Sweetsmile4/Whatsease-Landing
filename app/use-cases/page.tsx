import type { Metadata } from "next";
import { UseCasesExperience } from "../components/GrowthPages";

export const metadata: Metadata = {
  title: "WhatsEase Use Cases | Automate Leads, Sales & Customer Conversations",
  description: "Explore how WhatsEase helps businesses capture leads, automate follow-ups, recover sales, run WhatsApp campaigns, support customers with AI and manage events.",
};

export default function UseCasesPage() { return <UseCasesExperience />; }
