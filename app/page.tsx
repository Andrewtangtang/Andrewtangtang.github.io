import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ProjectRow, SectionHeading } from "./components";
import { projects } from "./site-data";

export const metadata: Metadata = {
  title: "Yun-Tang Chang — Systems, Data & Infrastructure",
  description:
    "Systems researcher and software engineer working across data infrastructure, secure systems, and open source.",
};

export default function Home() {
  return (
    <>
      <main>
        <section className="hero shell" aria-labelledby="hero-title">
          <figure className="hero-portrait reveal">
            <img
              src="/personal_image.JPG"
              alt="Portrait of Andrew Chang"
              width="1108"
              height="1477"
            />
          </figure>
          <div className="hero-content">
            <div className="hero-name reveal reveal-late">
              <h1 id="hero-title">YUN-TANG<span>(Andrew), Chang</span></h1>
              <p className="chinese-name" lang="zh-Hant">張昀棠</p>
            </div>
            <div className="about-placeholder" aria-label="About Andrew">
              <div className="about-placeholder-label">
                <span>About</span>
              </div>
              <div className="about-copy">
                <p>
                  I am currently a Computer Science and Information Engineering student at National Cheng Kung University. My work focuses on enhancing system performance while balancing resource-usage trade-offs, including improving network I/O in Confidential Virtual Machines (CVMs), database query optimization, and stateful autoscaling algorithms for streaming data systems.
                </p>
                <p>
                  I conduct research with the{" "}
                  <a href="https://liswei.sh/sslab/" target="_blank" rel="noreferrer">Secure System Lab</a>{" "}
                  at National Taiwan University (NTU), advised by Prof. Shih-Wei Li, and with the Computer Engineering research group in the Department of ECE at the University of Toronto, advised by{" "}
                  <a href="https://www.eecg.utoronto.ca/~ashvin/" target="_blank" rel="noreferrer">Prof. Ashvin Goel</a>. I also develop open-source DuckDB extensions — including Condition Cache and Table Inspector — with engineer{" "}
                  <a href="https://github.com/dentiny" target="_blank" rel="noreferrer">Hao Jiang</a>.
                </p>
              </div>
              <div className="about-placeholder-label about-interests-label" id="research-interests">
                <span>Research interests</span>
              </div>
              <p className="about-interests-note">
                My research interests span operating systems, database systems, and data streaming systems. More recently, I have been exploring systems support for AI workloads, particularly scheduling, caching, and resource management for efficient and predictable execution. I am also interested in how these ideas might extend to confidential VMs, where performance, resource efficiency, and isolation must be considered together. I am always open to research, open-source collaboration, and systems engineering opportunities.
              </p>
            </div>
          </div>
        </section>

        <nav className="quick-links" aria-label="Quick links">
          <div className="shell quick-links-inner">
            <Link href="/experience">Experience <Arrow /></Link>
            <Link href="/writing">Blogs <Arrow /></Link>
            <Link href="/projects">Projects <Arrow /></Link>
            <Link href="/research">Research <Arrow /></Link>
          </div>
        </nav>

        <section className="section section-projects" id="work">
          <div className="shell">
            <SectionHeading title="Selected work" href="/projects" linkLabel="View all projects" />
            <div className="project-list">
              {projects.slice(0, 2).map((project) => (
                <ProjectRow key={project.title} project={project} showMetrics={false} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
