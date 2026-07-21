import type { Metadata } from "next";
import { ProjectRow, SectionHeading } from "../components";
import { projects } from "../site-data";

export const metadata: Metadata = { title: "Projects", description: "Open-source, systems, and data infrastructure projects by Yun-Tang Chang." };

export default function ProjectsPage() {
  const selectedTitles = new Set(["Query Condition Cache", "Table Inspector"]);
  const openSourceTitles = new Set(["DuckDB", "Moonlink"]);
  const selected = projects.filter((project) => selectedTitles.has(project.title));
  const openSource = projects.filter((project) => openSourceTitles.has(project.title));

  return (
    <main>
      <header className="page-hero projects-page-hero shell">
        <h1>Projects</h1>
      </header>
      <section className="page-section projects-page-section shell" aria-label="Selected projects">
        <SectionHeading title="Selected projects" />
        <div className="project-list all-projects">
          {selected.map((project) => <ProjectRow key={project.title} project={project} />)}
        </div>
      </section>
      <section className="page-section projects-page-section shell" aria-label="Open source contributions">
        <SectionHeading title="Open source contributions" />
        <div className="project-list all-projects">
          {openSource.map((project) => <ProjectRow key={project.title} project={project} />)}
        </div>
      </section>
    </main>
  );
}
