import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export interface TocItem {
  id: string;
  label: string;
}

export interface PagerItem {
  title: string;
  href: string;
}

export function PageHeader({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description: string;
}) {
  return (
    <header className="pb-8">
      {kicker ? <p className="text-micro text-accent-text">{kicker}</p> : null}
      <h1 className="mt-3 text-display text-text-primary">{title}</h1>
      <p className="mt-3 max-w-2xl text-body text-text-secondary">{description}</p>
    </header>
  );
}

function TableOfContents({ items }: { items: TocItem[] }) {
  const active = useActiveSection(items.map((item) => item.id));

  return (
    <aside aria-label="On this page" className="sticky top-24 hidden w-40 shrink-0 xl:block">
      <p className="text-micro text-text-muted">On this page</p>
      <nav aria-label="On this page" className="mt-3 flex flex-col gap-0.5">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "rounded-xs px-2.5 py-1.5 text-caption transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              active === item.id
                ? "bg-surface-elevated text-text-primary"
                : "text-text-muted hover:bg-surface hover:text-text-secondary",
            )}
            aria-current={active === item.id ? "location" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export function PageShell({
  children,
  toc,
  wide = false,
}: {
  children: React.ReactNode;
  toc?: TocItem[];
  wide?: boolean;
}) {
  const { pathname } = useLocation();

  return (
    <div className="mx-auto flex w-full max-w-5xl items-start gap-8 px-5 py-10 sm:px-6 lg:px-10">
      <div data-docs-content data-wide={wide ? "true" : undefined} className="min-w-0 flex-1">
        {children}
      </div>
      {toc?.length ? <TableOfContents key={pathname} items={toc} /> : null}
    </div>
  );
}

export function PagePager({ previous, next }: { previous?: PagerItem; next?: PagerItem }) {
  if (!previous && !next) {
    return null;
  }

  return (
    <nav aria-label="Documentation pagination" className="mt-16 grid gap-3 sm:grid-cols-2">
      {previous ? (
        <Link
          to={previous.href}
          data-docs-card
          className="group flex flex-col gap-1 rounded-lg p-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <span className="text-micro text-text-muted">Previous</span>
          <span className="text-title text-text-primary transition-colors group-hover:text-accent-text">
            {previous.title}
          </span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
      {next ? (
        <Link
          to={next.href}
          data-docs-card
          className={cn(
            "group flex flex-col gap-1 rounded-lg p-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-right",
            !previous && "sm:col-start-2",
          )}
        >
          <span className="text-micro text-text-muted">Next</span>
          <span className="text-title text-text-primary transition-colors group-hover:text-accent-text">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
