import { WritingEntry } from "@/src/content/site";

export function WritingList({ entries }: { entries: WritingEntry[] }) {
  if (!entries.length) {
    return <p className="text-deep/70">Add writing clips in src/content/site.ts to populate this section.</p>;
  }

  return (
    <div className="space-y-4">
      {entries.map((entry) => (
        <article key={`${entry.title}-${entry.date}`} className="rounded-2xl bg-surface p-4 ring-1 ring-deep/10">
          <div className="flex flex-wrap items-center gap-2 text-xs text-deep/60">
            <span className="rounded-full bg-base px-2 py-1 font-semibold text-deep/80">{entry.publication}</span>
            <span>{entry.date}</span>
            {entry.tags?.length ? <span>• {entry.tags.join(", ")}</span> : null}
          </div>
          <h3 className="mt-2 text-lg font-semibold text-deep">{entry.title}</h3>
          <p className="text-sm text-deep/75">{entry.blurb}</p>
          {entry.link && (
            <a
              href={entry.link}
              className="mt-2 inline-block text-sm font-semibold text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Read more
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
