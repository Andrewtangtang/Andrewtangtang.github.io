"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getClosedPullRequests, type ClosedPullRequest } from "./github";

const githubSearch = "https://github.com/duckdb/duckdb/pulls?q=is%3Apr+is%3Aclosed+author%3AAndrewtangtang";

export default function PullRequestsPage() {
  const [pullRequests, setPullRequests] = useState<ClosedPullRequest[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    getClosedPullRequests(controller.signal)
      .then(setPullRequests)
      .catch(() => { if (!controller.signal.aborted) setError(true); });
    return () => controller.abort();
  }, []);

  return (
    <main className="shell pull-requests-page">
      <Link className="post-back-link" href="/projects">← All projects</Link>
      <header className="pull-requests-header">
        <h1>DuckDB PRs</h1>
        <p>Pull requests by Yun-Tang Chang to duckdb/duckdb.</p>
        <a href={githubSearch} target="_blank" rel="noreferrer">View on GitHub ↗</a>
      </header>

      {pullRequests ? <p className="pull-requests-count">{pullRequests.length} PRs</p> : null}
      {!pullRequests && !error ? <p>Loading PRs…</p> : null}
      {error ? <p>GitHub could not load the list right now. <a href={githubSearch} target="_blank" rel="noreferrer">See DuckDB PRs on GitHub ↗</a></p> : null}

      <ul className="pull-requests-list">
        {pullRequests?.map((pr) => (
          <li key={pr.id}>
            <a href={pr.html_url} target="_blank" rel="noreferrer">{pr.title} ↗</a>
            <span>#{pr.number}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
