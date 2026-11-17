import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { terms } from "@/lib/legal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Terms and Conditions",
  description: "The terms that apply when you use the Hashtrik website.",
  path: "/terms",
});

export default function Terms() {
  return (
    <LegalPage
      title="Terms and Conditions"
      intro="The rules for using this website. Client projects and Oikko memberships have their own written agreements."
      sections={terms}
      other={{ href: "/privacy", label: "Read the Privacy Policy" }}
    />
  );
}
