export type ClosedPullRequest = {
  id: number;
  number: number;
  title: string;
  html_url: string;
};

export async function getClosedPullRequests(signal?: AbortSignal): Promise<ClosedPullRequest[]> {
  const results: ClosedPullRequest[] = [];

  for (let page = 1; ; page++) {
    const query = new URLSearchParams({
      q: "author:Andrewtangtang is:pr is:closed repo:duckdb/duckdb",
      sort: "created",
      order: "desc",
      per_page: "100",
      page: String(page),
    });
    const response = await fetch(`https://api.github.com/search/issues?${query}`, { signal });
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);

    const data: { total_count: number; items: ClosedPullRequest[] } = await response.json();
    results.push(...data.items);
    if (results.length >= data.total_count || data.items.length === 0) return results;
  }
}
