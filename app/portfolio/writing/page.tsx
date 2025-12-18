import { Section } from "@/components/Section";
import { WritingList } from "@/components/WritingList";
import { siteConfig } from "@/src/content/site";

export default function WritingPortfolioPage() {
  const featured = siteConfig.writingPortfolio.entries.filter((entry) => entry.featured);
  const others = siteConfig.writingPortfolio.entries.filter((entry) => !entry.featured);

  return (
    <div className="space-y-6">
      <Section
        title="Writing Portfolio"
        description={siteConfig.writingPortfolio.categories}
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-deep/60">Featured</h3>
            <WritingList entries={featured} />
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-deep/60">More writing</h3>
            <WritingList entries={others} />
          </div>
        </div>
      </Section>
    </div>
  );
}
