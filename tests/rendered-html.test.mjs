import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const normalized = path === "/" ? "index.html" : `${path.replace(/^\//, "").replace(/\/$/, "")}/index.html`;
  return readFile(new URL(`../dist/client/${normalized}`, import.meta.url), "utf8");
}

test("renders Yun-Tang's portfolio homepage", async () => {
  const html = await render();
  assert.match(html, /YUN-TANG/);
  assert.match(html, /\(Andrew\), Chang/);
  assert.match(html, /張昀棠/);
  assert.match(html, /Query Condition Cache/);
  assert.match(html, /Vsock-net: Making Paravirtualized Network I\/Os/);
  assert.doesNotMatch(html, /Up to 3\.2× faster on HDFS_v2/);
  assert.doesNotMatch(html, /12\.59× higher throughput/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/);
});

test("renders projects and writing routes", async () => {
  const projects = await render("/projects");
  const writing = await render("/writing");
  const queryConditionCache = await render("/writing/query-condition-cache");
  assert.match(projects, /Selected projects/);
  assert.match(projects, /Moonlink/);
  assert.match(projects, /moonlink\.png/);
  assert.match(projects, /duckdb_mark\.jpg/);
  assert.match(projects, /cache_representation\.png/);
  assert.match(projects, /table-inspector-architecture\.pdf/);
  assert.match(projects, /DuckDB is an analytical in-process SQL database management system/);
  assert.match(projects, /https:\/\/www\.duckdb\.org\//);
  assert.match(projects, /Moonlink is an Iceberg-native ingestion engine/);
  assert.doesNotMatch(projects, /C\+\+ · DuckDB · Open source/);
  assert.match(writing, /Building a Query Condition Cache for DuckDB/);
  assert.doesNotMatch(writing, /DRAFT/);
  assert.doesNotMatch(writing, /Tracing the confidential VM networking path/);
  assert.doesNotMatch(writing, /Autoscaling when state and I\/O matter/);
  assert.match(queryConditionCache, /Query Condition Cache Design/);
  assert.match(queryConditionCache, /Cold OS Page Cache/);
  assert.match(queryConditionCache, /aria-label="Article outline"/);
  assert.match(queryConditionCache, /github\.com\/dentiny\/duckdb-query-condition-cache/);
  assert.match(queryConditionCache, /cache_representation\.png/);
  assert.match(queryConditionCache, /duckdb_mark\.jpg/);
  assert.match(queryConditionCache, /more open-source DuckDB extensions/);
  assert.match(queryConditionCache, /github\.com\/dentiny/);
});
