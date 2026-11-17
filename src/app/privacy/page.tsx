import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { privacy } from "@/lib/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: "What information the Hashtrik website collects, how it is used, and the choices you have.",
  path: "/privacy",
});

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="What this website collects, why, and what you can ask us to do with it."
      sections={privacy}
      other={{ href: "/terms", label: "Read the Terms" }}
    />
  );
}
