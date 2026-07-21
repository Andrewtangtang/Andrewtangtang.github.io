import type { Metadata } from "next";
import { Arrow } from "../components";
import { awards, experiences } from "../site-data";

export const metadata: Metadata = { title: "Experience", description: "Research and engineering experience across systems, data, and infrastructure." };

export default function ExperiencePage() {
  const research = experiences.filter((experience) => experience.track === "research");
  const work = experiences.filter((experience) => experience.track === "work");

  return (
    <main>
      <header className="page-hero experience-page-hero shell">
        <h1>Experience</h1>
      </header>
      <section className="page-section experience-list-section shell">
        <div className="track-columns">
          <div className="track-column">
            <p className="track-label">Research</p>
            <div className="track-rail">
              {research.map((experience) => (
                <article className="track-item" key={`${experience.org}-${experience.role}`}>
                  <span className="track-dot" aria-hidden="true" />
                  <time>{experience.period}</time>
                  <h3>
                    {experience.href ? (
                      <a href={experience.href} target="_blank" rel="noreferrer">{experience.org} <Arrow /></a>
                    ) : experience.org}
                  </h3>
                  <p className="track-role">{experience.role} · {experience.focus}</p>
                  {experience.advisor && <p className="track-advisor">Advised by {experience.advisor}</p>}
                  {experience.papers && (
                    <ol className="track-papers">
                      {experience.papers.map((paper) => (
                        <li key={paper.title}>
                          {paper.href ? (
                            <a className="track-paper-title track-paper-link" href={paper.href} target="_blank" rel="noreferrer">{paper.title}</a>
                          ) : (
                            <span className="track-paper-title">{paper.title}</span>
                          )}{" "}
                          <span className="track-paper-venue">({paper.venue})</span>
                        </li>
                      ))}
                    </ol>
                  )}
                  {experience.bullets ? (
                    <ul className="track-bullets">
                      {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  ) : (
                    <p className="track-detail">{experience.detail}</p>
                  )}
                  {experience.relatedWork && (
                    <div className="track-related">
                      <span>Related work:</span>
                      {experience.relatedWork.map((work, index) => (
                        <span key={work.label} className="track-related-item">
                          {index > 0 && <span aria-hidden="true">·</span>}
                          <a href={work.href} target="_blank" rel="noreferrer" title={work.title}>{work.label}</a>
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
          <div className="track-column">
            <p className="track-label">Work</p>
            <div className="track-rail">
              {work.map((experience) => (
                <article className="track-item" key={`${experience.org}-${experience.role}`}>
                  <span className="track-dot" aria-hidden="true" />
                  <time>{experience.period}</time>
                  <h3>
                    {experience.href ? (
                      <a href={experience.href} target="_blank" rel="noreferrer">{experience.org} <Arrow /></a>
                    ) : experience.org}
                  </h3>
                  <p className="track-role">{experience.role} · {experience.focus}</p>
                  {experience.advisor && <p className="track-advisor">Advised by {experience.advisor}</p>}
                  {experience.papers && (
                    <ol className="track-papers">
                      {experience.papers.map((paper) => (
                        <li key={paper.title}>
                          {paper.href ? (
                            <a className="track-paper-title track-paper-link" href={paper.href} target="_blank" rel="noreferrer">{paper.title}</a>
                          ) : (
                            <span className="track-paper-title">{paper.title}</span>
                          )}{" "}
                          <span className="track-paper-venue">({paper.venue})</span>
                        </li>
                      ))}
                    </ol>
                  )}
                  {experience.bullets ? (
                    <ul className="track-bullets">
                      {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  ) : (
                    <p className="track-detail">{experience.detail}</p>
                  )}
                  {experience.relatedWork && (
                    <div className="track-related">
                      <span>Related work:</span>
                      {experience.relatedWork.map((work, index) => (
                        <span key={work.label} className="track-related-item">
                          {index > 0 && <span aria-hidden="true">·</span>}
                          <a href={work.href} target="_blank" rel="noreferrer" title={work.title}>{work.label}</a>
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
        <article className="education-card">
          <span>Education</span>
          <div><h2>National Cheng Kung University</h2><p>B.S. in Computer Science and Information Engineering · 2022—2026</p></div>
          <strong>GPA 4.19 / 4.3</strong>
        </article>
      </section>
      <section className="page-section shell awards-section">
        <h2>Selected awards &amp; leadership</h2>
        <div className="award-list">
          {awards.map((award) => (
            <article className="award-item" key={award.title}>
              {award.image && (
                <div className={`award-media${award.imageFit === "contain" ? " award-media-contain" : ""}`}>
                  <img src={award.image} alt={`${award.title} preview`} />
                </div>
              )}
              <div className="award-body">
                <div className="award-heading">
                  <h3>{award.title}</h3>
                  <time>{award.period}</time>
                </div>
                <p className="award-role">{award.role} · {award.location}</p>
                <p className="award-detail">{award.detail}</p>
                <p className="award-stack">{award.stack.join(" · ")}</p>
                {award.links && (
                  <div className="award-links">
                    {award.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} <Arrow /></a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
