import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/src/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-surface p-6 shadow-sm ring-1 ring-deep/10 sm:p-10">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-surface to-base" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] text-deep/60">Science, design, writing</p>
          <h1 className="text-3xl font-semibold leading-snug text-deep sm:text-4xl">
            {siteConfig.name}
          </h1>
          <p className="text-lg text-deep/80">{siteConfig.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-base shadow-sm transition hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep"
              href={siteConfig.primaryCta.href}
            >
              {siteConfig.primaryCta.label}
            </Link>
            <Link
              className="rounded-full border border-deep/20 bg-base px-5 py-2 text-sm font-semibold text-deep transition hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep"
              href={siteConfig.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
            >
              {siteConfig.secondaryCta.label}
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {siteConfig.highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-base/70 p-3 ring-1 ring-deep/10"
              >
                <p className="text-sm font-semibold text-deep">{item.title}</p>
                <p className="text-sm text-deep/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-deep/10 bg-base shadow-lg">
            <Image
              src={siteConfig.headshot}
              alt={`${siteConfig.name} headshot`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
