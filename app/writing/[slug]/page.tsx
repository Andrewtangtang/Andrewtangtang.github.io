import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isValidElement, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import { SocialIcons } from "../../components";
import { CopyCodeButton } from "../CopyCodeButton";
import { MermaidDiagram } from "../MermaidDiagram";
import { PostOutline, type OutlineHeading } from "../PostOutline";
import { getPost, posts } from "../posts";

function getTextContent(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getTextContent).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return getTextContent(node.props.children);
  return "";
}

function cleanHeadingText(text: string) {
  return text
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[~*_]/g, "")
    .trim();
}

function createHeadingId(text: string) {
  return cleanHeadingText(text)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

function extractOutline(content: string): OutlineHeading[] {
  return Array.from(content.matchAll(/^(#{2,3})\s+(.+?)\s*#*\s*$/gm), (match) => ({
    id: createHeadingId(match[2]),
    level: match[1].length as 2 | 3,
    text: cleanHeadingText(match[2]),
  }));
}

function GitHubRepoCard({ href, image, description }: { href: string; image?: string; description?: string }) {
  const repositoryName = href.replace(/^https?:\/\/github\.com\//, "").replace(/\/$/, "");

  return (
    <a className="repo-card" href={href} target="_blank" rel="noreferrer">
      {image ? (
        <span className="repo-card-media">
          <img src={image} alt={`${repositoryName} repository preview`} />
        </span>
      ) : null}
      <span className="repo-card-body">
        <span className="repo-card-label">GitHub repository</span>
        <strong>{repositoryName}<span aria-hidden="true"> ↗</span></strong>
        {description ? <span className="repo-card-description">{description}</span> : null}
      </span>
    </a>
  );
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Writing" };

  const metadata: Metadata = { title: post.title, description: post.description };
  if (post.socialImage) {
    metadata.openGraph = {
      type: "article",
      title: post.title,
      description: post.description,
      images: [post.socialImage],
    };
    metadata.twitter = {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.socialImage],
    };
  }
  return metadata;
}

export default async function WritingPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const outline = extractOutline(post.content);

  return (
    <main>
      <header className={`post-hero shell${post.heroImage ? " post-hero--with-image" : ""}`}>
        <div className="post-hero-content">
          <div className="post-kicker">{post.tags.join(" · ")}</div>
          <h1>{post.title}</h1>
          <p className="post-summary">{post.description}</p>
          <div className="post-meta">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <div className="post-author">
            <span>Author</span>
            <strong>{post.author}</strong>
            <SocialIcons className="social-icons post-author-social" include={["GitHub", "LinkedIn"]} />
          </div>
        </div>
        {post.heroImage ? <img className="post-hero-mark" src={post.heroImage} alt={post.heroImageAlt ?? ""} /> : null}
      </header>
      <div className="post-layout shell">
        <PostOutline headings={outline} />
        <article className="post-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={{
              h2: ({ children, node: _node, ...props }) => <h2 id={createHeadingId(getTextContent(children))} {...props}>{children}</h2>,
              h3: ({ children, node: _node, ...props }) => <h3 id={createHeadingId(getTextContent(children))} {...props}>{children}</h3>,
              p: ({ children, node: _node, ...props }) => {
                const isTldr = getTextContent(children).trimStart().startsWith("TL;DR:");
                return (
                  <>
                    <p {...props}>{children}</p>
                    {isTldr && post.repository ? (
                      <GitHubRepoCard
                        href={post.repository}
                        image={post.repositoryImage}
                        description={post.repositoryDescription}
                      />
                    ) : null}
                  </>
                );
              },
              a: ({ href, children, ...props }) => (
                <a href={href} {...(href?.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})} {...props}>
                  {children}
                </a>
              ),
              pre: ({ children, ...props }) => {
                const codeClassName = isValidElement<{ className?: string }>(children)
                  ? children.props.className ?? ""
                  : "";
                if (
                  isValidElement<{ className?: string; children?: ReactNode }>(children) &&
                  codeClassName.includes("language-mermaid")
                ) {
                  return <MermaidDiagram chart={String(children.props.children).trim()} />;
                }
                const language = codeClassName.match(/language-([\w-]+)/)?.[1] ?? "text";
                const code = isValidElement<{ children?: ReactNode }>(children)
                  ? getTextContent(children.props.children).replace(/\n$/, "")
                  : "";
                return (
                  <div className="code-frame">
                    <div className="code-toolbar">
                      <span>{language}</span>
                      <CopyCodeButton code={code} />
                    </div>
                    <pre {...props}>{children}</pre>
                  </div>
                );
              },
              table: ({ children, ...props }) => (
                <div className="post-table-scroll">
                  <table {...props}>{children}</table>
                </div>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
          <Link className="post-back-link" href="/writing">← All writing</Link>
        </article>
      </div>
    </main>
  );
}
