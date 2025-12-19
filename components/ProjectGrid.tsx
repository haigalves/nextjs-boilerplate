import { Project } from "@/src/content/site";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex h-full flex-col justify-between rounded-2xl bg-surface p-5 ring-1 ring-deep/10"
        >
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-deep">{project.title}</h3>
            <p className="text-sm text-deep/75">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-base px-3 py-1 text-xs font-semibold uppercase tracking-wide text-deep/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {project.links && project.links.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
