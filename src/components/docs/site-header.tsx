import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import { DocsNav } from "@/components/docs/sidebar";
import { SearchDialog } from "@/components/docs/search-dialog";
import { useTheme } from "@/components/docs/theme-provider";
import {
  Drawer,
  DrawerBody,
  DrawerDescription,
  DrawerDismiss,
  DrawerHeader,
  DrawerPopup,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const actionClass =
  "flex h-8 items-center rounded-xs px-2.5 text-caption text-text-secondary transition-colors hover:bg-surface-elevated hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

const topLinkClass =
  "rounded-xs px-2 py-1.5 text-caption transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const topLinkInactive = "text-text-muted hover:bg-surface-elevated hover:text-text-primary";
const topLinkActive = "bg-surface-card text-text-primary";

function TopLink({
  to,
  active,
  children,
}: {
  to: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      aria-current={active ? "page" : undefined}
      className={cn(topLinkClass, active ? topLinkActive : topLinkInactive)}
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const { pathname } = useLocation();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-30 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center gap-4 px-5 sm:px-6">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2.5 rounded-xs py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <span className="size-2.5 rounded-full bg-brand" aria-hidden="true" />
          <span className="text-title text-text-primary">Cobalt</span>
          <span className="hidden text-micro text-text-muted sm:inline">v3.0</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <TopLink to="/" active={pathname === "/" || pathname.startsWith("/docs")}>
            Docs
          </TopLink>
          <TopLink to="/components" active={pathname.startsWith("/components")}>
            Components
          </TopLink>
          <TopLink to="/foundations" active={pathname === "/foundations"}>
            Foundations
          </TopLink>
        </nav>

        <div className="ml-auto flex items-center gap-1.5">
          <SearchDialog />

          <label htmlFor="theme-switch" className="flex min-h-11 items-center gap-2.5 px-1.5">
            <span className="hidden text-micro text-text-muted sm:inline">
              {theme === "dark" ? "Dark" : "Light"}
            </span>
            <Switch
              id="theme-switch"
              checked={theme === "dark"}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
              aria-label="Dark theme"
            />
          </label>

          <button
            type="button"
            className={cn(actionClass, "lg:hidden")}
            onClick={() => setMobileOpen(true)}
            aria-label="Open documentation menu"
            aria-haspopup="dialog"
            aria-expanded={mobileOpen}
            aria-controls={mobileOpen ? "docs-mobile-navigation" : undefined}
          >
            Menu
          </button>
        </div>
      </div>

      <Drawer open={mobileOpen} onOpenChange={setMobileOpen}>
        <DrawerPopup id="docs-mobile-navigation">
          <DrawerHeader>
            <DrawerTitle>Documentation</DrawerTitle>
            <DrawerDescription className="sr-only">
              Browse Cobalt foundations and components.
            </DrawerDescription>
            <DrawerDismiss />
          </DrawerHeader>
          <DrawerBody>
            <DocsNav onNavigate={() => setMobileOpen(false)} />
          </DrawerBody>
        </DrawerPopup>
      </Drawer>
    </header>
  );
}
