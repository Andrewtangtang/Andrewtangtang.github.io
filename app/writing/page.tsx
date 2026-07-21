import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

export const metadata: Metadata = { title: "Writing", description: "Field notes on systems, databases, infrastructure, and open-source engineering." };

export default function WritingPage() {
  return (
    <main>
      <header className="writing-header shell">
        <h1>Writing</h1>
      </header>
      <section className="page-section shell">
        <div className="note-list">
          {posts.map((post, index) => (
            <Link className="note-card" href={`/writing/${post.slug}`} key={post.slug}>
              <span>Notebook {String(index + 1).padStart(2, "0")}</span>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
