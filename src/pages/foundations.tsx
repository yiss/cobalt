import { Foundations } from "@/components/docs/foundations";
import { PageHeader, PagePager, PageShell, type TocItem } from "@/components/docs/page";
import { usePageTitle } from "@/hooks/use-page-title";

const toc: TocItem[] = [
  { id: "color", label: "Color" },
  { id: "type", label: "Type" },
  { id: "shape", label: "Shape & motion" },
];

export function FoundationsPage() {
  usePageTitle("Foundations");

  return (
    <PageShell toc={toc}>
      <PageHeader
        kicker="Reference"
        title="Foundations"
        description="Warm porcelain and espresso surfaces, a royal cobalt identity, and a restrained type system sized for dense product work."
      />
      <div className="mt-8">
        <Foundations />
      </div>
      <PagePager
        previous={{ title: "Installation", href: "/docs/installation" }}
        next={{ title: "Components", href: "/components" }}
      />
    </PageShell>
  );
}
