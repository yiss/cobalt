import * as React from "react";
import { Link, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";

import { PageHeader, PageShell } from "@/components/docs/page";
import { Sidebar } from "@/components/docs/sidebar";
import { SiteHeader } from "@/components/docs/site-header";
import { ComponentPage } from "@/pages/component";
import { ComponentsIndexPage } from "@/pages/components-index";
import { FoundationsPage } from "@/pages/foundations";
import { InstallationPage } from "@/pages/installation";
import { IntroductionPage } from "@/pages/introduction";
import { usePageTitle } from "@/hooks/use-page-title";

const skipLinkClass =
  "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-xs focus:border focus:border-border focus:bg-canvas focus:px-3 focus:py-2 focus:text-caption focus:text-text-primary";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function NotFoundPage() {
  usePageTitle("Page not found");

  return (
    <PageShell>
      <PageHeader
        kicker="404"
        title="Page not found"
        description="The page you are looking for does not exist in the Cobalt documentation."
      />
      <p className="mt-8 text-body text-text-secondary">
        Start from the{" "}
        <Link
          to="/"
          className="text-text-primary underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent-text"
        >
          introduction
        </Link>{" "}
        or browse the{" "}
        <Link
          to="/components"
          className="text-text-primary underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent-text"
        >
          components
        </Link>
        .
      </p>
    </PageShell>
  );
}

function DocsLayout() {
  return (
    <div id="top" className="min-h-svh bg-canvas text-foreground">
      <a href="#docs-content" className={skipLinkClass}>
        Skip to content
      </a>
      <ScrollToTop />
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-7xl items-start">
        <Sidebar />
        <main id="docs-content" tabIndex={-1} className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<DocsLayout />}>
        <Route index element={<IntroductionPage />} />
        <Route path="docs" element={<Navigate to="/docs/installation" replace />} />
        <Route path="docs/installation" element={<InstallationPage />} />
        <Route path="foundations" element={<FoundationsPage />} />
        <Route path="components" element={<ComponentsIndexPage />} />
        <Route path="components/:componentId" element={<ComponentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
