import Image from "next/image";
import { PortfolioPiece } from "@/src/content/site";

export function PortfolioGrid({ pieces }: { pieces: PortfolioPiece[] }) {
  if (!pieces.length) {
    return <p className="text-deep/70">Add portfolio pieces in src/content/site.ts to showcase your work.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {pieces.map((piece) => (
        <div key={`${piece.title}-${piece.year}`} className="overflow-hidden rounded-2xl bg-surface shadow-sm ring-1 ring-deep/10">
          {piece.image && (
            <div className="relative h-48 w-full">
              <Image src={piece.image} alt={piece.title} fill className="object-cover" />
            </div>
          )}
          <div className="space-y-2 p-4">
            <div className="flex items-center justify-between text-xs text-deep/60">
              <span>{piece.medium}</span>
              <span>{piece.year}</span>
            </div>
            <p className="text-base font-semibold text-deep">{piece.title}</p>
            <p className="text-sm text-deep/70">{piece.description}</p>
            {piece.link && (
              <a
                href={piece.link}
                className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View project
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
