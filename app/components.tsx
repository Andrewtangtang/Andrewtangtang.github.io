import Link from "next/link";
import type { Project } from "./site-data";

export function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Andrewtangtang",
    external: true,
    path: "M12 .5C5.73.5.98 5.24.98 11.52c0 4.84 3.14 8.94 7.5 10.39.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.04-3.05.66-3.7-1.3-3.7-1.3-.5-1.27-1.22-1.6-1.22-1.6-1-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.2.92.1-.71.38-1.2.7-1.48-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.22-2.57 5.15-5.02 5.42.39.34.74 1.02.74 2.05 0 1.48-.01 2.67-.01 3.03 0 .29.2.64.76.53 4.36-1.45 7.5-5.55 7.5-10.39C23.02 5.24 18.27.5 12 .5Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yun-tang-chang/",
    external: true,
    path: "M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.25h4V23h-4V8.25zM8.5 8.25h3.83v2.02h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.63c0-1.58-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.25z",
  },
  {
    label: "Email",
    href: "mailto:candrew9213@gmail.com",
    external: false,
    path: "M2 4h20v16H2V4zm2 2v.01L12 12l8-5.99V6H4zm16 2.24-7.4 5.55a1 1 0 0 1-1.2 0L4 8.24V18h16V8.24z",
  },
] as const;

export function SocialIcons({ className, include }: { className?: string; include?: string[] }) {
  const links = include ? socialLinks.filter((link) => include.includes(link.label)) : socialLinks;
  return (
    <div className={className ?? "social-icons"}>
      {links.map(({ label, href, external, path }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d={path} /></svg>
        </a>
      ))}
    </div>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span />{children}</p>;
}

export function SectionHeading({ index, title, href, linkLabel }: { index?: string; title: string; href?: string; linkLabel?: string }) {
  return (
    <div className={index ? "section-heading" : "section-heading no-index"}>
      {index && <p>{index}</p>}
      <h2>{title}</h2>
      {href && linkLabel ? <Link href={href}>{linkLabel} <Arrow /></Link> : <span />}
    </div>
  );
}

export function ProjectRow({ project, showMetrics = true }: { project: Project; showMetrics?: boolean }) {
  return (
    <article className="project-row">
      <div className="project-row-meta">
        <p className="project-row-type">{project.type}</p>
        <div className="project-row-media">
          {project.image ? (
            project.imageHref ? (
              <a className="project-row-media-link" href={project.imageHref} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} architecture diagram PDF`}>
                <img className={project.imageFit === "contain" ? "project-row-image-contain" : ""} src={project.image} alt={project.imageAlt ?? `${project.title} preview`} />
              </a>
            ) : (
              <img className={project.imageFit === "contain" ? "project-row-image-contain" : ""} src={project.image} alt={project.imageAlt ?? `${project.title} preview`} />
            )
          ) : (
            <span>{project.type}</span>
          )}
        </div>
      </div>
      <div className="project-row-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {showMetrics && project.metrics.length > 0 ? (
          <ul>{project.metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul>
        ) : null}
        <div className="project-row-links">
          <a
            href={project.href}
            {...(project.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
          >
            {project.linkLabel ?? "View project"} <Arrow />
          </a>
        </div>
      </div>
    </article>
  );
}
