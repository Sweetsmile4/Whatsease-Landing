import type { Metadata } from "next";
import { UseCasesExperience } from "../components/GrowthPages";

export const metadata: Metadata = {
  title: "WhatsEase Use Cases | Automate Customer Conversations",
  description: "Discover how WhatsEase helps businesses capture leads, support customers, automate workflows, run WhatsApp campaigns, recover sales, manage events and improve retention.",
};

export default function UseCasesPage() { return <UseCasesExperience />; }
