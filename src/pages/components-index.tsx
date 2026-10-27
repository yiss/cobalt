import { Link } from "react-router-dom";

import { ChevronRightIcon } from "@/components/ui/icons";
import { PageHeader, PagePager, PageShell } from "@/components/docs/page";
import { componentCount, groups } from "@/docs/registry";
import { usePageTitle } from "@/hooks/use-page-title";

export function ComponentsIndexPage() {
  usePageTitle("Components");

  return (
    <PageShell wide>
      <PageHeader
        kicker="Reference"
        title="Components"
        description={`${componentCount} composable controls built on Base UI, documented with live previews, source examples, and design notes.`}
      />

      <div className="mt-10 flex flex-col gap-12">
        {groups.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-24">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="m-0 text-heading-2 text-text-primary">{group.label}</h2>
              <span className="text-micro text-text-muted">{group.sections.length} components</span>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {group.sections.map((section) => (
                <Link
                  key={section.id}
                  to={`/components/${section.id}`}
                  data-docs-card
                  className="group flex min-h-28 flex-col rounded-lg p-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="text-title text-text-primary">{section.title}</span>
                    <span className="text-text-muted transition-colors group-hover:text-accent-text">
                      <ChevronRightIcon />
                    </span>
                  </span>
                  <span className="mt-2 line-clamp-2 text-caption text-text-secondary">
                    {section.description}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <PagePager previous={{ title: "Foundations", href: "/foundations" }} />
    </PageShell>
  );
}
