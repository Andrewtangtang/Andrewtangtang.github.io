"use client";

import { useEffect, useState } from "react";

export type OutlineHeading = {
  id: string;
  level: 2 | 3;
  text: string;
};

export function PostOutline({ headings }: { headings: OutlineHeading[] }) {
  const [activeId, setActiveId] = useState(headings[0]?.id ?? "");

  useEffect(() => {
    const elements = headings
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    function updateActiveHeading() {
      const current = elements.filter((element) => element.getBoundingClientRect().top <= 150).at(-1);
      setActiveId((current ?? elements[0])?.id ?? "");
    }

    updateActiveHeading();
    window.addEventListener("scroll", updateActiveHeading, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveHeading);
  }, [headings]);

  if (!headings.length) return null;

  return (
    <aside className="post-outline">
      <p>Outline</p>
      <nav aria-label="Article outline">
        {headings.map((heading) => (
          <a
            className={`${heading.level === 3 ? "post-outline-sub" : ""} ${activeId === heading.id ? "is-active" : ""}`.trim()}
            href={`#${heading.id}`}
            key={heading.id}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </aside>
  );
}
