import { ProjectGrid } from "@/components/ProjectGrid";
import { Section } from "@/components/Section";
import { siteConfig } from "@/src/content/site";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <Section
        title="Projects"
        description="A growing collection of research, design, and writing initiatives."
      >
        <ProjectGrid projects={siteConfig.projects} />
      </Section>
    </div>
  );
}
