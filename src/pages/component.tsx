import { Link, useParams } from "react-router-dom";

import { CodeBlock } from "@/components/docs/code-block";
import { PageHeader, PagePager, PageShell, type TocItem } from "@/components/docs/page";
import { PreviewExplorer } from "@/components/docs/preview-explorer";
import { getAccessibilityNotes, getComponentApi, getPrimitiveLabel } from "@/docs/api";
import { getAdjacentComponents, getComponent } from "@/docs/registry";
import { usePageTitle } from "@/hooks/use-page-title";

function SectionHeading({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className="m-0 scroll-mt-24 text-heading-1 text-text-primary">
        {title}
      </h2>
      <p className="mt-2 text-body text-text-secondary">{description}</p>
    </div>
  );
}

function Step({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-3">
      <span className="w-8 shrink-0 pt-0.5 font-mono text-micro text-accent-text">{index}</span>
      <div className="flex min-w-0 flex-col gap-1">
        <span className="text-label text-text-primary">{title}</span>
        <div className="text-caption text-text-secondary">{children}</div>
      </div>
    </li>
  );
}

function PropsTable({
  props,
}: {
  props: NonNullable<ReturnType<typeof getComponentApi>["props"]>;
}) {
  return (
    <div className="mt-6 overflow-x-auto rounded-md">
      <table className="w-full border-collapse text-left text-caption">
        <thead className="bg-surface-elevated text-micro text-text-muted">
          <tr>
            <th className="px-4 py-3 font-normal">Prop</th>
            <th className="px-4 py-3 font-normal">Type</th>
            <th className="px-4 py-3 font-normal">Default</th>
            <th className="px-4 py-3 font-normal">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="even:bg-surface">
              <td className="px-4 py-3 align-top">
                <code className="font-mono text-micro text-text-primary">{prop.name}</code>
              </td>
              <td className="px-4 py-3 align-top font-mono text-micro text-text-secondary">
                {prop.type}
              </td>
              <td className="px-4 py-3 align-top font-mono text-micro text-text-muted">
                {prop.defaultValue ?? "—"}
              </td>
              <td className="px-4 py-3 align-top text-text-secondary">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ComponentPage() {
  const { componentId } = useParams();
  const record = getComponent(componentId);
  usePageTitle(record ? record.section.title : "Page not found");

  if (!record) {
    return (
      <PageShell>
        <PageHeader
          kicker="404"
          title="Component not found"
          description="This component does not exist in the Cobalt registry."
        />
        <p className="mt-8 text-body text-text-secondary">
          Return to the{" "}
          <Link
            to="/components"
            className="text-text-primary underline decoration-border-strong underline-offset-4 hover:decoration-accent-text"
          >
            component index
          </Link>
          .
        </p>
      </PageShell>
    );
  }

  const { group, section } = record;
  const { previous, next } = getAdjacentComponents(section.id);
  const api = getComponentApi(section);
  const accessibility = getAccessibilityNotes(group, section);
  const primitive = getPrimitiveLabel(section.id);
  const dependencyCommand =
    primitive === "Base UI"
      ? "pnpm add @base-ui/react\npnpm add cn\npnpm add class-variance-authority"
      : "pnpm add cn\npnpm add class-variance-authority";
  const toc: TocItem[] = [
    { id: "preview", label: "Preview" },
    { id: "installation", label: "Installation" },
    { id: "usage", label: "Usage" },
    ...(section.examples?.length ? [{ id: "examples", label: "Examples" }] : []),
    { id: "api", label: "API Reference" },
    { id: "accessibility", label: "Accessibility" },
  ];

  return (
    <PageShell toc={toc}>
      <PageHeader
        kicker={`Components / ${group.label}`}
        title={section.title}
        description={section.description}
      />

      <section id="preview" className="mt-8 scroll-mt-24">
        <h2 className="sr-only">Preview</h2>
        <PreviewExplorer key={section.id} preview={section.preview} code={section.code} />
      </section>

      <section className="mt-16 scroll-mt-24">
        <SectionHeading
          id="installation"
          title="Installation"
          description="Cobalt is source-distributed. Install the dependency, copy the component, and reuse the shared tokens and aliases."
        />
        <div className="mt-7 flex flex-col gap-8">
          <ol className="m-0 flex min-w-0 list-none flex-col gap-6 p-0">
            <Step index="01" title="Install dependencies">
              <p>
                Add the runtime packages used by the component.{" "}
                {primitive === "Base UI"
                  ? "Base UI supplies behavior and accessibility."
                  : "The component is native HTML with Cobalt styling."}{" "}
                Tailwind utilities and CVA supply the visual variants.
              </p>
            </Step>
            <Step index="02" title="Copy the source">
              <p>
                Copy{" "}
                <code className="font-mono text-micro break-words text-text-primary">
                  src/components/ui/{section.id}.tsx
                </code>{" "}
                into your project and update the import aliases if needed.
              </p>
            </Step>
            <Step index="03" title="Reuse Cobalt tokens">
              <p>
                Keep the semantic tokens, radii, and motion values from{" "}
                <code className="font-mono text-micro text-text-primary">src/index.css</code>. The
                full setup is documented in{" "}
                <Link
                  to="/docs/installation"
                  className="text-text-primary underline decoration-border-strong underline-offset-4 hover:decoration-accent-text"
                >
                  Installation
                </Link>
                .
              </p>
            </Step>
          </ol>
          <CodeBlock label="Terminal" language="bash" code={dependencyCommand} />
        </div>
      </section>

      <section className="mt-16 scroll-mt-24">
        <SectionHeading
          id="usage"
          title="Usage"
          description={`Import the parts from @/components/ui/${section.id} and compose them with their native or Base UI props.`}
        />
        <div className="mt-6">
          <CodeBlock language="tsx" code={section.usage ?? section.code} />
        </div>
      </section>

      {section.examples?.length ? (
        <section className="mt-16 scroll-mt-24">
          <SectionHeading
            id="examples"
            title="Examples"
            description="Variants and states beyond the primary preview."
          />
          <div className="mt-8 flex flex-col gap-10">
            {section.examples.map((example) => (
              <article key={example.id} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="m-0 text-label text-text-primary">{example.title}</h3>
                  {example.description ? (
                    <p className="m-0 text-caption text-text-secondary">{example.description}</p>
                  ) : null}
                </div>
                <PreviewExplorer compact preview={example.preview} code={example.code} />
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-16 scroll-mt-24">
        <SectionHeading
          id="api"
          title="API Reference"
          description="The exported parts, their roles, and the props that extend the underlying primitive."
        />
        <dl className="mt-7 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {api.parts.map((part) => (
            <div key={part.name} className="flex flex-col gap-1">
              <dt className="font-mono text-caption text-text-primary">{part.name}</dt>
              <dd className="m-0 text-caption text-text-secondary">{part.description}</dd>
            </div>
          ))}
        </dl>
        {api.props?.length ? (
          <div className="mt-8">
            <h3 className="m-0 text-label text-text-primary">Props</h3>
            <PropsTable props={api.props} />
          </div>
        ) : (
          <p className="mt-8 text-caption text-text-secondary">
            This component accepts the props of its {primitive} primitive. Cobalt adds semantic
            styling, data attributes, and the shared focus and motion treatments.
          </p>
        )}
        <p className="mt-8 text-caption text-text-muted">
          Source ·{" "}
          <span className="font-mono text-text-secondary">src/components/ui/{section.id}.tsx</span>{" "}
          · {primitive} · Dark and light
        </p>
      </section>

      <section className="mt-16 scroll-mt-24">
        <SectionHeading
          id="accessibility"
          title="Accessibility"
          description="Behavior inherited from the primitive plus the Cobalt interaction contract."
        />
        <div className="mt-7 grid gap-7 sm:grid-cols-2">
          {accessibility.map((note) => (
            <div key={note.title} className="flex flex-col gap-1.5">
              <h3 className="m-0 text-label text-text-primary">{note.title}</h3>
              <p className="m-0 text-caption text-text-secondary">{note.body}</p>
            </div>
          ))}
        </div>
      </section>

      <PagePager
        previous={
          previous
            ? { title: previous.section.title, href: `/components/${previous.section.id}` }
            : undefined
        }
        next={
          next ? { title: next.section.title, href: `/components/${next.section.id}` } : undefined
        }
      />
    </PageShell>
  );
}
