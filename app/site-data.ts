export type Project = {
  title: string;
  type: string;
  description: string;
  metrics: string[];
  tags: string[];
  href: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageHref?: string;
  linkLabel?: string;
  blogHref?: string;
  blogLinkLabel?: string;
};

export type Experience = {
  period: string;
  role: string;
  org: string;
  track: "research" | "work";
  advisor?: string;
  focus: string;
  detail: string;
  bullets?: string[];
  href?: string;
  papers?: { title: string; venue: string; href?: string; image?: string }[];
  relatedWork?: { label: string; title: string; href: string }[];
};

export const experiences: Experience[] = [
  {
    period: "Jun 2026 — Present",
    role: "Research Intern",
    org: "University of Toronto · Computer Engineering Group",
    track: "research",
    advisor: "Prof. Ashvin Goel",
    focus: "Flink autoscaling · Stateful operators",
    detail: "Apache Flink is a distributed stream-processing system whose Kubernetes autoscaler uses DS2’s performance model and operator-rate estimates to determine parallelism. Building on Justin’s hybrid CPU/memory autoscaling approach for stateful operators and its trial-and-error reconfiguration challenge, we are building a model that directly derives efficient CPU and memory scaling rules at runtime while preserving resource efficiency.",
    href: "https://www.eecg.utoronto.ca/~ashvin/",
    relatedWork: [
      {
        label: "DS2",
        title: "Three steps is all you need: fast, accurate, automatic scaling decisions for distributed streaming dataflows",
        href: "https://www.usenix.org/conference/osdi18/presentation/kalavri",
      },
      {
        label: "Justin",
        title: "Justin: Hybrid CPU/Memory Elastic Scaling for Distributed Stream Processing",
        href: "https://link.springer.com/chapter/10.1007/978-3-031-95728-4_6",
      },
    ],
  },
  {
    period: "Feb — Jun 2026",
    role: "Undergraduate Researcher",
    org: "NTU Secure System Lab",
    track: "research",
    advisor: "Prof. Shih-Wei Li",
    focus: "SEV-SNP · vsock · eBPF",
    detail: "Removed the large, attack-surface-heavy Linux network stack from confidential VMs’ Trusted Computing Base (TCB) by delegating network traffic to the host stack. Despite the performance overhead typically introduced by delegation, optimized virtio-vsock communication and leveraged eBPF sockmaps for zero-copy packet redirection in the host kernel, achieving 12.59× higher throughput and up to 10× faster Nginx performance under TLS encryption.",
    href: "https://liswei.sh/sslab/",
    papers: [
      { title: "Vsock-net: Making Paravirtualized Network I/Os for Linux-based Confidential VMs Safe and Fast", venue: "Preprint, 2026", image: "/vsock-net-architecture.png" },
    ],
  },
  {
    period: "Sep 2023 — Jun 2025",
    role: "Backend Software Engineer",
    org: "NCKU Office of International Affairs",
    track: "work",
    focus: "Agentic systems · Redis",
    detail: "Built an agentic assistant backend serving 500+ students, including an MCP retrieval server, FAISS semantic caching, and Redis-coordinated workers.",
    bullets: [
      "Built the backend for an agentic assistant serving 500+ students, with a custom MCP server for document retrieval.",
      "Optimized frequent-query handling with FAISS-based semantic caching, improving end-to-end throughput by 3×.",
      "Designed Redis-coordinated asynchronous worker pipelines to scale concurrent agent workflows.",
    ],
  },
];

export type Award = {
  period: string;
  title: string;
  role: string;
  location: string;
  detail: string;
  stack: string[];
  image?: string;
  imageFit?: "cover" | "contain";
  links?: { label: string; href: string }[];
};

export const awards: Award[] = [
  {
    period: "Apr 2026",
    title: "ClickHouse + Open Source Builders Night",
    role: "Speaker (with Peter Lee)",
    location: "Taipei, Taiwan",
    detail: "Talk: \"From ClickHouse to DuckDB: Bringing the Query Condition Cache to Embedded Analytics.\" Walked through ClickHouse's predicate-caching design — which can substantially speed up repeated queries on 71M rows of HDFS logs — and how we adapted it from ClickHouse's clustered MergeTree engine into an open-source condition cache extension for DuckDB's embedded, in-process model.",
    stack: ["DuckDB", "ClickHouse", "C++"],
    image: "/clickhouse-meetup.png",
    links: [
      { label: "Slides", href: "https://canva.link/nzkhoous31927jl" },
      { label: "Video", href: "https://youtu.be/N9FyFslDSMY?si=_df5nmTZMjzXbio9&t=1701" },
    ],
  },
  {
    period: "Jan 2025",
    title: "Taipei Blockchain Week Hackathon",
    role: "1st Place, Student Track",
    location: "Taipei, Taiwan",
    detail: "Built dMart, a decentralized fundraising platform on Solana that uses Chainlink oracles to automatically trigger fund releases when on-chain conditions are met, speeding up fundraising and cutting manual management overhead.",
    stack: ["React", "Solana", "Chainlink automation"],
    image: "/blockchain.png",
    imageFit: "contain",
  },
  {
    period: "Sep 2024",
    title: "Taipei Hackathon 2024",
    role: "3rd Place",
    location: "Taipei, Taiwan",
    detail: "Engineered ParkFlow, a real-time parking and navigation app integrated into Taipei's 400,000-user city platform, cutting lookup latency by 53% through geospatial search and database-query optimization over the Taipei Parking API.",
    stack: ["Python", "Vue 3", "Flutter", "Geospatial indexing"],
    image: "/parkflow.png",
  },
  {
    period: "Jul 2024",
    title: "SITCON Hackathon 2024",
    role: "Group Award Winner",
    location: "Taipei, Taiwan",
    detail: "Built ccDiary, an app that uses daily journaling to record your day and gently ask reflective mental-health questions, with AI-powered emotion analysis and anonymous social support.",
    stack: ["LangChain", "RAG", "Hugging Face", "PyTorch"],
    image: "/ccdiary.png",
  },
];

export const projects: Project[] = [
  {
    title: "Query Condition Cache",
    type: "DuckDB extension",
    description: "A predicate cache in DuckDB’s filter-pruning path that skips decompression of non-qualifying blocks for repeated analytical queries.",
    metrics: ["Up to 3.2× faster on HDFS_v2", "Filter-pruning path integration"],
    tags: ["C++", "DuckDB", "Data"],
    href: "https://duckdb.org/community_extensions/extensions/query_condition_cache",
    blogHref: "/writing/query-condition-cache",
    blogLinkLabel: "View blog",
    image: "/writing/query-condition-cache/img/cache_representation.png",
    imageAlt: "Query Condition Cache bitmap layout",
    imageFit: "contain",
  },
  {
    title: "Vsock-net: Making Paravirtualized Network I/Os for Linux-based Confidential VMs Safe and Fast",
    type: "Preprint, 2026",
    description: "Removed the large, attack-surface-heavy Linux network stack from confidential VMs’ Trusted Computing Base by delegating network traffic to the host stack, then optimized virtio-vsock and eBPF sockmaps to recover performance.",
    metrics: ["12.59× higher throughput", "Up to 10× faster Nginx under TLS"],
    tags: ["Linux", "Confidential VMs", "eBPF"],
    href: "/research",
    linkLabel: "View research",
    image: "/vsock-net-architecture.png",
    imageAlt: "Vsock-net architecture diagram",
    imageFit: "contain",
  },
  {
    title: "Table Inspector",
    type: "DuckDB extension",
    description: "Storage observability tooling for understanding database file usage, compression efficiency, free blocks, and index reclaiming.",
    metrics: ["16K+ community downloads", "Table-level storage analysis"],
    tags: ["C++", "Storage", "OSS"],
    href: "https://duckdb.org/community_extensions/extensions/table_inspector",
    image: "/projects/table-inspector-architecture.png",
    imageAlt: "Table Inspector extension architecture",
    imageFit: "contain",
    imageHref: "/projects/table-inspector-architecture.pdf",
  },
  {
    title: "DuckDB",
    type: "Open source",
    description: "DuckDB is an analytical in-process SQL database management system.",
    metrics: [],
    tags: ["C++", "DuckDB", "Open source"],
    href: "https://www.duckdb.org/",
    image: "/writing/query-condition-cache/img/duckdb_mark.jpg",
    imageAlt: "DuckDB mark",
    imageFit: "contain",
  },
  {
    title: "Moonlink",
    type: "Open source",
    description: "Moonlink is an Iceberg-native ingestion engine bringing streaming inserts and upserts to your lakehouse. It ingests Postgres CDC, event streams (Kafka), and OTEL into Iceberg without complex maintenance and compaction. Moonlink buffers, caches, and indexes data so Iceberg tables stay read-optimized.",
    metrics: ["GCRA throughput emulation", "More reliable REST and metadata operations"],
    tags: ["Rust", "Iceberg", "Streaming"],
    href: "https://github.com/Mooncake-Labs/moonlink",
    image: "/projects/moonlink.png",
    imageAlt: "Moonlink mark",
    imageFit: "contain",
  },
  {
    title: "ParkFlow",
    type: "Civic technology",
    description: "A real-time parking and navigation application integrated into Taipei’s city platform using geospatial search and query optimization.",
    metrics: ["53% lower lookup latency", "400K-user city platform"],
    tags: ["Python", "Vue", "Flutter"],
    href: "https://github.com/vaclisinc/ParkFlow",
  },
  {
    title: "Retail Heatmap Pipeline",
    type: "AWS GenAI Hackathon",
    description: "An edge-to-cloud retail analytics pipeline for real-time heatmap inference and delivery.",
    metrics: ["Jetson edge inference", "Kinesis, SageMaker and Lambda pipeline"],
    tags: ["AWS", "Edge AI", "Streaming"],
    href: "https://github.com/Andrewtangtang",
  },
];

export const skills = ["C++", "Rust", "Python", "Go", "Linux", "eBPF", "DuckDB", "Apache Flink", "Kubernetes", "Redis", "PostgreSQL", "AWS"];
