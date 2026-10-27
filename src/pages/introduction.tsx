import { Link } from "react-router-dom";

import { ChevronRightIcon } from "@/components/ui/icons";
import { PageHeader, PagePager, PageShell, type TocItem } from "@/components/docs/page";
import { componentCount } from "@/docs/registry";
import { usePageTitle } from "@/hooks/use-page-title";

const toc: TocItem[] = [
  { id: "overview", label: "Overview" },
  { id: "start-here", label: "Start here" },
  { id: "principles", label: "Principles" },
  { id: "stack", label: "Stack" },
];

const startLinks = [
  {
    label: "Getting started",
    title: "Installation",
    description: "Set up Cobalt with pnpm, Tailwind, and Base UI.",
    href: "/docs/installation",
  },
  {
    label: "Reference",
    title: "Foundations",
    description: "Color, typography, shape, and motion tokens.",
    href: "/foundations",
  },
  {
    label: "Reference",
    title: "Components",
    description: "Browse every component in the system.",
    href: "/components",
  },
];

const principles = [
  {
    title: "Material contrast",
    description: "Warm espresso and porcelain surfaces carry depth through tone, not shadow.",
  },
  {
    title: "Two cobalt roles",
    description:
      "Brand cobalt anchors identity and selection. Action cobalt carries interactive controls.",
  },
  {
    title: "Quiet motion",
    description:
      "State changes resolve in 140–180ms. Motion supports feedback, never the only signal.",
  },
];

const stack = [
  "React 19",
  "Base UI",
  "Tailwind CSS v4",
  "Vite Plus",
  "Timeless Sans",
  "TypeScript",
];

export function IntroductionPage() {
  usePageTitle("Introduction");

  return (
    <PageShell toc={toc}>
      <PageHeader
        kicker="Getting started"
        title="Introduction"
        description="Cobalt is a high-precision interface system built around warm material contrast, royal cobalt, and compact, keyboard-first controls."
      />

      <div className="mt-8 flex flex-col gap-14">
        <section id="overview" className="scroll-mt-24">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col gap-4 md:col-span-2">
              <p className="text-body text-text-secondary">
                A modern, high-precision interface architecture inspired by the craftsmanship,
                keyboard ergonomics, and subtle luminous surfaces of Linear and Polar. Royal cobalt
                anchors identity, warm espresso grounds the dark theme, and porcelain carries
                daylight.
              </p>
              <p className="text-body text-text-secondary">
                Components are built on Base UI primitives, styled with semantic Tailwind tokens,
                and kept compatible with shadcn conventions: composable parts, CVA variants, and a
                shared{" "}
                <code className="rounded-2xs bg-surface-card px-1.5 py-0.5 font-mono text-micro text-text-primary">
                  @/components/ui
                </code>{" "}
                import path.
              </p>
            </div>

            <dl data-docs-panel className="grid grid-cols-2 gap-6 rounded-lg p-5">
              <div className="flex flex-col gap-1">
                <dt className="text-micro text-text-muted">Components</dt>
                <dd className="m-0 text-heading-2 text-text-primary">{componentCount}</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-micro text-text-muted">Themes</dt>
                <dd className="m-0 text-heading-2 text-text-primary">02</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-micro text-text-muted">Primitive</dt>
                <dd className="m-0 pt-1 text-label text-text-primary">Base UI</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-micro text-text-muted">Typeface</dt>
                <dd className="m-0 pt-1 text-label text-text-primary">Timeless Sans</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="start-here" className="scroll-mt-24">
          <h2 className="text-heading-1 text-text-primary">Start here</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {startLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                data-docs-card
                className="group flex min-h-40 flex-col rounded-lg p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span className="text-micro text-text-muted">{link.label}</span>
                <span className="mt-3 flex items-center justify-between gap-3 text-title text-text-primary">
                  {link.title}
                  <span className="text-text-muted transition-colors group-hover:text-accent-text">
                    <ChevronRightIcon />
                  </span>
                </span>
                <span className="mt-2 text-caption text-text-secondary">{link.description}</span>
              </Link>
            ))}
          </div>
        </section>

        <section id="principles" className="scroll-mt-24">
          <h2 className="text-heading-1 text-text-primary">Principles</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                data-docs-card
                className="flex flex-col gap-3 rounded-lg p-5"
              >
                <span className="font-mono text-micro text-accent-text">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="m-0 text-title text-text-primary">{principle.title}</h3>
                <p className="m-0 text-caption text-text-secondary">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="stack" className="scroll-mt-24">
          <h2 className="text-heading-1 text-text-primary">Stack</h2>
          <ul className="m-0 mt-5 flex list-none flex-wrap gap-x-2.5 gap-y-1 p-0 text-caption text-text-secondary">
            {stack.map((item, index) => (
              <li key={item} className="flex items-center gap-2.5">
                {item}
                {index < stack.length - 1 ? (
                  <span className="text-text-muted" aria-hidden="true">
                    ·
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <PagePager next={{ title: "Installation", href: "/docs/installation" }} />
    </PageShell>
  );
}
