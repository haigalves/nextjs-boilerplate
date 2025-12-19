import { ReactNode } from "react";

export function Section({
  title,
  eyebrow,
  description,
  children,
  actions,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl bg-base/90 p-6 shadow-sm ring-1 ring-deep/10">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          {eyebrow && <p className="text-xs uppercase tracking-[0.2em] text-deep/60">{eyebrow}</p>}
          <h2 className="text-xl font-semibold text-deep">{title}</h2>
          {description && <p className="text-sm text-deep/75">{description}</p>}
        </div>
        {actions && <div className="flex gap-2">{actions}</div>}
      </div>
      <div className="mt-4 space-y-4 sm:mt-6">{children}</div>
    </section>
  );
}
