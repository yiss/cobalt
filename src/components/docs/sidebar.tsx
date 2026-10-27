import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { componentCount, groups } from "@/docs/registry";
import { cn } from "@/lib/utils";

const linkClass =
  "flex items-center justify-between gap-2 rounded-xs px-2.5 py-1.5 text-caption transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const inactiveClass = "text-text-secondary hover:bg-surface hover:text-text-primary";
const activeClass = "bg-surface-elevated text-text-primary";

function NavItem({
  to,
  children,
  badge,
  end = false,
  onNavigate,
}: {
  to: string;
  children: React.ReactNode;
  badge?: string;
  end?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) => cn(linkClass, isActive ? activeClass : inactiveClass)}
    >
      <span>{children}</span>
      {badge ? <span className="text-micro text-text-muted">{badge}</span> : null}
    </NavLink>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-1.5 px-2.5 text-micro text-text-muted">{children}</p>;
}

function scrollActiveLinkIntoView(nav: HTMLElement | null) {
  const activeLink = nav?.querySelector<HTMLElement>('[aria-current="page"]');

  if (!activeLink) {
    return;
  }

  const scrollContainer =
    activeLink.closest<HTMLElement>('[data-slot="drawer-body"]') ??
    activeLink.closest<HTMLElement>('[data-slot="docs-sidebar"]');

  if (!scrollContainer) {
    activeLink.scrollIntoView({ block: "nearest" });
    return;
  }

  const containerRect = scrollContainer.getBoundingClientRect();
  const linkRect = activeLink.getBoundingClientRect();
  const padding = 24;

  if (linkRect.top < containerRect.top + padding) {
    scrollContainer.scrollTop -= containerRect.top + padding - linkRect.top;
  } else if (linkRect.bottom > containerRect.bottom - padding) {
    scrollContainer.scrollTop += linkRect.bottom - (containerRect.bottom - padding);
  }
}

export function DocsNav({ onNavigate }: { onNavigate?: () => void }) {
  const { pathname } = useLocation();
  const navRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const firstFrame = window.requestAnimationFrame(() => {
      scrollActiveLinkIntoView(navRef.current);
      window.requestAnimationFrame(() => scrollActiveLinkIntoView(navRef.current));
    });

    return () => window.cancelAnimationFrame(firstFrame);
  }, [pathname]);

  return (
    <nav ref={navRef} aria-label="Documentation" className="flex flex-col gap-5">
      <div className="flex flex-col gap-0.5">
        <GroupLabel>Getting started</GroupLabel>
        <NavItem to="/" end onNavigate={onNavigate}>
          Introduction
        </NavItem>
        <NavItem to="/docs/installation" onNavigate={onNavigate}>
          Installation
        </NavItem>
      </div>

      <div className="flex flex-col gap-0.5">
        <GroupLabel>Reference</GroupLabel>
        <NavItem to="/foundations" onNavigate={onNavigate}>
          Foundations
        </NavItem>
        <NavItem to="/components" end badge={String(componentCount)} onNavigate={onNavigate}>
          Components
        </NavItem>
      </div>

      {groups.map((group) => (
        <div key={group.id} className="flex flex-col gap-0.5">
          <GroupLabel>{group.label}</GroupLabel>
          {group.sections.map((section) => (
            <NavItem key={section.id} to={`/components/${section.id}`} onNavigate={onNavigate}>
              {section.title}
            </NavItem>
          ))}
        </div>
      ))}
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside
      aria-label="Documentation sidebar"
      data-slot="docs-sidebar"
      className="sticky top-16 hidden w-60 shrink-0 overflow-y-auto px-6 py-8 lg:block"
    >
      <DocsNav />
    </aside>
  );
}
