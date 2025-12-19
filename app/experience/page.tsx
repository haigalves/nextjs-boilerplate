import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { siteConfig } from "@/src/content/site";

export default function ExperiencePage() {
  return (
    <div className="space-y-6">
      <Section
        title="Professional Experience"
        description="Roles spanning research, operations, and applied analytics."
      >
        <Timeline items={siteConfig.experience.professional} />
      </Section>

      <Section
        title="Leadership & Programs"
        description="Campus journalism, robotics, and community impact initiatives."
      >
        <Timeline items={siteConfig.experience.leadership} />
      </Section>
    </div>
  );
}
