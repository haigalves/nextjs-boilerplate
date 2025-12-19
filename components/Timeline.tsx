import { TimelineItem } from "@/src/content/site";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-6 border-l border-deep/20 pl-6">
      {items.map((item) => (
        <li key={`${item.organization}-${item.title}-${item.start}`} className="space-y-2">
          <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full border border-base bg-primary" aria-hidden />
          <div className="flex flex-wrap items-center gap-2 text-sm text-deep/70">
            <span className="font-semibold text-deep">{item.title}</span>
            <span className="text-deep/60">• {item.organization}</span>
          </div>
          <p className="text-sm text-deep/60">
            {item.start} – {item.end}
            {item.location ? ` · ${item.location}` : ""}
          </p>
          <ul className="list-disc space-y-1 pl-4 text-sm text-deep/80">
            {item.description.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
