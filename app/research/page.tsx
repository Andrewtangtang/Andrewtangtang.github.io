import type { Metadata } from "next";
import { experiences } from "../site-data";

export const metadata: Metadata = { title: "Research", description: "Research interests and ongoing work in operating systems, database systems, and data streaming systems." };

export default function ResearchPage() {
  const publications = experiences
    .filter((experience) => experience.track === "research" && experience.papers)
    .flatMap((experience) => experience.papers!.map((paper) => ({ experience, paper })));

  return (
    <main>
      <header className="writing-header shell">
        <h1>Research</h1>
      </header>
      <section className="page-section shell">
        <div className="pub-list">
          {publications.map(({ experience, paper }) => {
            const figureId = `fig-${paper.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
            return (
              <article className="pub-item" key={paper.title}>
                <div className="pub-meta">
                  <p className="pub-venue">{paper.venue}</p>
                  <p className="pub-lab">{experience.org}</p>
                  {paper.image && (
                    <figure className="pub-figure">
                      <a href={`#${figureId}`}>
                        <img src={paper.image} alt={`${paper.title} architecture diagram`} />
                      </a>
                      <figcaption>Click to enlarge</figcaption>
                    </figure>
                  )}
                </div>
                <div className="pub-body">
                  <h2>{paper.title}</h2>
                  {experience.advisor && <p className="pub-advisor">Advised by {experience.advisor}</p>}
                  <p className="pub-detail">{experience.detail}</p>
                </div>
                {paper.image && (
                  <div id={figureId} className="lightbox">
                    <a href="#" className="lightbox-backdrop" aria-label="Close"></a>
                    <img src={paper.image} alt={`${paper.title} architecture diagram, enlarged`} className="lightbox-img" />
                    <a href="#" className="lightbox-close" aria-label="Close">×</a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
