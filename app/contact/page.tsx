import Link from "next/link";
import { Section } from "@/components/Section";
import { siteConfig } from "@/src/content/site";

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <Section
        title="Contact"
        description="Reach out for research collaborations, design support, or writing projects."
      >
        <div className="rounded-3xl bg-surface/70 p-6 ring-1 ring-deep/10">
          <p className="text-deep/80">Preferred channel: email.</p>
          <Link
            href={`mailto:${siteConfig.contact.email}`}
            className="mt-3 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-semibold text-base shadow-sm transition hover:bg-primary/80"
          >
            Email {siteConfig.name}
          </Link>
          <p className="mt-3 text-sm text-deep/70">
            Add a quick note about your project scope, timeline, and goals, and Elías will follow up.
          </p>
        </div>
      </Section>
    </div>
  );
}
