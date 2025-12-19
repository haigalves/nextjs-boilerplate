import { Section } from "@/components/Section";
import { siteConfig } from "@/src/content/site";

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <Section
        title="About"
        description="Scientist, engineer, and writer focused on equitable impact."
      >
        <div className="space-y-3 text-deep/80">
          <p>
            Elías Sebastián Haig Alves is a Venezuelan-Portuguese student at Vanderbilt University studying Chemical
            Engineering and Applied Mathematics. He pairs scientific rigor with storytelling and design to make complex ideas
            actionable for communities and policymakers.
          </p>
          <p>
            From the United World College in Mostar to research roles in Caracas and Nashville, Elías brings a global lens to
            every project. He is committed to accessible science communication, inclusive innovation, and building systems that
            scale opportunity.
          </p>
        </div>
      </Section>

      <Section title="Awards" description="Scholarship and competition highlights.">
        <ul className="grid gap-3 sm:grid-cols-2">
          {siteConfig.awards.map((award) => (
            <li
              key={award}
              className="rounded-2xl bg-surface/70 p-3 text-sm font-semibold text-deep ring-1 ring-deep/10"
            >
              {award}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Skills" description="Technical toolkit, interests, and languages." >
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-surface/70 p-4 ring-1 ring-deep/10">
            <h3 className="text-sm font-semibold text-deep">Technical</h3>
            <ul className="mt-2 space-y-1 text-sm text-deep/75">
              {siteConfig.skills.technical.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-surface/70 p-4 ring-1 ring-deep/10">
            <h3 className="text-sm font-semibold text-deep">Interests</h3>
            <ul className="mt-2 space-y-1 text-sm text-deep/75">
              {siteConfig.skills.interests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-surface/70 p-4 ring-1 ring-deep/10">
            <h3 className="text-sm font-semibold text-deep">Languages</h3>
            <ul className="mt-2 space-y-1 text-sm text-deep/75">
              {siteConfig.skills.languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
