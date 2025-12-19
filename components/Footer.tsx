import Link from "next/link";
import { siteConfig } from "@/src/content/site";

export function Footer() {
  const { social, primaryEmail } = siteConfig;
  const socials = [
    { label: "LinkedIn", href: social.linkedin },
    { label: "GitHub", href: social.github },
    { label: "Twitter/X", href: social.twitter },
    { label: "Google Scholar", href: social.googleScholar },
    { label: "ORCID", href: social.orcid },
    { label: "Medium", href: social.medium },
  ].filter((item) => item.href);

  return (
    <footer className="border-t border-deep/10 bg-surface/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-deep/80 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-deep">{siteConfig.name}</p>
          <p className="text-deep/70">Reach out: {primaryEmail}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socials.map((item) => (
            <Link
              key={item.label}
              className="rounded-full bg-base px-3 py-1 text-deep transition hover:bg-primary/80 hover:text-base"
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
