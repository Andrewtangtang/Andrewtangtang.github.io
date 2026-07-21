"use client";

import { useEffect, useState } from "react";

export function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
  }

  return (
    <button className="code-copy" type="button" onClick={copyCode} aria-label="Copy code to clipboard">
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
