import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Section } from "@/components/Section";
import { siteConfig } from "@/src/content/site";

export default function DesignPortfolioPage() {
  return (
    <div className="space-y-6">
      <Section
        title="Design Portfolio"
        description={siteConfig.designPortfolio.types}
      >
        <PortfolioGrid pieces={siteConfig.designPortfolio.pieces} />
      </Section>
    </div>
  );
}
