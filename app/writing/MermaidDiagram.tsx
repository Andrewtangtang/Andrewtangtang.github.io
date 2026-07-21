"use client";

import { useEffect, useId, useRef } from "react";

let mermaidConfigured = false;

export function MermaidDiagram({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const id = `mermaid-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;

  useEffect(() => {
    let active = true;

    import("mermaid")
      .then(({ default: mermaid }) => {
        if (!mermaidConfigured) {
          mermaid.initialize({
            startOnLoad: false,
            securityLevel: "strict",
            theme: "base",
            themeVariables: {
              background: "#fbf8f1",
              primaryColor: "#edf3ef",
              primaryTextColor: "#153f36",
              primaryBorderColor: "#6b8b7f",
              secondaryColor: "#f0e8dc",
              tertiaryColor: "#f4f0e7",
              lineColor: "#6f776f",
              fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
            },
          });
          mermaidConfigured = true;
        }
        return mermaid.render(id, chart);
      })
      .then(({ svg, bindFunctions }) => {
        if (!active || !ref.current) return;
        ref.current.innerHTML = svg;
        bindFunctions?.(ref.current);
      })
      .catch(() => {
        if (!active || !ref.current) return;
        ref.current.textContent = chart;
        ref.current.classList.add("mermaid-diagram--fallback");
      });

    return () => {
      active = false;
    };
  }, [chart, id]);

  return <div ref={ref} className="mermaid-diagram" aria-label="System flow diagram" />;
}
