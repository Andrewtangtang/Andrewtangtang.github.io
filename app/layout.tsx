import type { Metadata } from "next";
import Link from "next/link";
import { SocialIcons } from "./components";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://andrewtangtang.github.io"),
  title: {
    default: "Yun-Tang Chang — Systems, Data & Infrastructure",
    template: "%s — Yun-Tang Chang",
  },
  description:
    "Systems researcher and software engineer working across data infrastructure, secure systems, and open source.",
  openGraph: {
    type: "website",
    title: "Yun-Tang Chang",
    description: "Systems · Data · Infrastructure",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Yun-Tang Chang — Systems, Data, Infrastructure" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yun-Tang Chang",
    description: "Systems · Data · Infrastructure",
    images: ["/og.png"],
  },
};

const navItems = [
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Writing", "/writing"],
  ["Research", "/research"],
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="shell nav-wrap">
            <Link className="wordmark" href="/" aria-label="Yun-Tang, Chang, home">
              <span>Yun-Tang</span>, Chang
            </Link>
            <nav className="desktop-nav" aria-label="Main navigation">
              {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
              <a className="nav-cv" href="/cv.pdf" target="_blank">CV ↗</a>
              <SocialIcons />
            </nav>
            <details className="mobile-nav">
              <summary aria-label="Open navigation"><span /><span /></summary>
              <nav aria-label="Mobile navigation">
                {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
                <a href="/cv.pdf" target="_blank">CV ↗</a>
                <SocialIcons className="social-icons social-icons--mobile" />
              </nav>
            </details>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="shell footer-grid">
            <div><strong>Yun-Tang Chang</strong></div>
            <div className="footer-links">
              <a href="mailto:candrew9213@gmail.com">Email</a>
              <a href="https://github.com/Andrewtangtang" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/yun-tang-chang/" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <p>© {new Date().getFullYear()}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
