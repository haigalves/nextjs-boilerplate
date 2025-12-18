import { siteConfig } from "@/src/content/site";

export default function ResumePage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-deep">Resume</h1>
          <p className="text-deep/70">Downloadable CV for quick reference.</p>
        </div>
        <a
          href={siteConfig.resume.filename}
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-base shadow-sm transition hover:bg-primary/80"
          target={siteConfig.resume.openInNewTab ? "_blank" : "_self"}
          rel="noreferrer"
        >
          Download PDF
        </a>
      </div>
      <div className="overflow-hidden rounded-3xl bg-surface/70 ring-1 ring-deep/10">
        <iframe
          src={siteConfig.resume.filename}
          title="Resume PDF"
          className="h-[80vh] w-full"
        />
      </div>
    </div>
  );
}
