import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline";
import { siteConfig } from "@/src/content/site";

export default function Home() {
  const featuredExperience = siteConfig.experience.professional.slice(0, 2);
  const leadership = siteConfig.experience.leadership.slice(0, 2);

  return (
    <div className="space-y-6">
      <Hero />

      <Section
        title="Experience highlights"
        description="A quick look at research, operations, and leadership work."
        actions={<Link className="text-sm font-semibold text-primary underline-offset-4 hover:underline" href="/experience">View full timeline</Link>}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-deep/60">Professional</h3>
            <Timeline items={featuredExperience} />
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-deep/60">Leadership</h3>
            <Timeline items={leadership} />
          </div>
        </div>
      </Section>

      <Section
        title="Projects"
        description="Selected initiatives to pair science, design, and storytelling."
        actions={<Link className="text-sm font-semibold text-primary underline-offset-4 hover:underline" href="/projects">See all projects</Link>}
      >
        <ProjectGrid projects={siteConfig.projects} />
      </Section>

      <Section
        title="Education"
        description="Grounded in interdisciplinary training and scholarship support."
        actions={<Link className="text-sm font-semibold text-primary underline-offset-4 hover:underline" href="/about">More about Elías</Link>}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {siteConfig.education.map((edu) => (
            <div key={edu.school} className="rounded-2xl bg-surface/70 p-4 ring-1 ring-deep/10">
              <p className="text-sm font-semibold text-deep">{edu.school}</p>
              <p className="text-sm text-deep/80">{edu.program}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-deep/60">
                {edu.start} – {edu.end} • {edu.location}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
