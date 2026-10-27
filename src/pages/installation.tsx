import type { ReactNode } from "react";

import { CodeBlock } from "@/components/docs/code-block";
import { PageHeader, PagePager, PageShell, type TocItem } from "@/components/docs/page";
import { usePageTitle } from "@/hooks/use-page-title";

const toc: TocItem[] = [
  { id: "requirements", label: "Requirements" },
  { id: "install", label: "Install the workspace" },
  { id: "dependencies", label: "Dependencies" },
  { id: "aliases", label: "Path aliases" },
  { id: "shadcn-cli", label: "shadcn CLI" },
  { id: "styles", label: "Styles and fonts" },
  { id: "usage", label: "Usage" },
];

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="m-0 text-heading-1 text-text-primary">{title}</h2>
      <div className="mt-4 flex flex-col gap-4">{children}</div>
    </section>
  );
}

export function InstallationPage() {
  usePageTitle("Installation");

  return (
    <PageShell toc={toc}>
      <PageHeader
        kicker="Getting started"
        title="Installation"
        description="Set up Cobalt in a Vite + React project with pnpm. Cobalt is source-distributed: copy the components into your app and keep the tokens in one stylesheet."
      />

      <div className="mt-8 flex flex-col gap-8">
        <div className="rounded-lg bg-surface p-5 text-caption text-text-secondary">
          This repository is a complete Vite Plus workspace. If you are working inside it, start
          with the install step. To use Cobalt in another project, follow the dependency, alias, and
          style steps.
        </div>

        <Section id="requirements" title="Requirements">
          <p className="text-body text-text-secondary">
            Node 22.12 or newer and pnpm 10. Cobalt uses React 19, Base UI, Tailwind CSS v4, and
            Vite Plus.
          </p>
        </Section>

        <Section id="install" title="Install the workspace">
          <p className="text-body text-text-secondary">
            Install the pinned dependencies and start the documentation app.
          </p>
          <CodeBlock label="Terminal" language="bash" code={`pnpm install\npnpm dev`} />
        </Section>

        <Section id="dependencies" title="Dependencies">
          <p className="text-body text-text-secondary">
            Add the runtime packages Cobalt’s components and variants depend on. Tailwind belongs in
            dev dependencies.
          </p>
          <CodeBlock
            label="Terminal"
            language="bash"
            code={`pnpm add @base-ui/react cn class-variance-authority
pnpm add @keyline-icons/react
pnpm add -D tailwindcss @tailwindcss/vite`}
          />
        </Section>

        <Section id="aliases" title="Path aliases">
          <p className="text-body text-text-secondary">
            Components import through <code className="font-mono text-micro">@/</code>. Register the
            alias in TypeScript and Vite so both the editor and bundler resolve it.
          </p>
          <CodeBlock
            label="tsconfig.app.json"
            language="json"
            code={`{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}`}
          />
          <CodeBlock
            label="vite.config.ts"
            language="tsx"
            code={`import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});`}
          />
        </Section>

        <Section id="shadcn-cli" title="Using the shadcn CLI">
          <p className="text-body text-text-secondary">
            Cobalt uses the shadcn project contract:{" "}
            <code className="font-mono text-micro">components.json</code>,{" "}
            <code className="font-mono text-micro">@/components/ui</code>,{" "}
            <code className="font-mono text-micro">@/lib/utils</code>, CVA, and{" "}
            <code className="font-mono text-micro">cn</code>. In a new app, initialize that
            structure with the CLI; in an existing shadcn project, you can go straight to the
            migration.
          </p>
          <CodeBlock
            label="Terminal"
            language="bash"
            code={`pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest migrate cn`}
          />
          <p className="text-caption text-text-secondary">
            Cobalt’s own components are source-distributed. After initialization, copy a component
            from <code className="font-mono text-micro">src/components/ui</code> into{" "}
            <code className="font-mono text-micro">components/ui</code>. Use the standard{" "}
            <code className="font-mono text-micro">shadcn add &lt;registry&gt;/&lt;item&gt;</code>{" "}
            command for any registry items your project already uses.
          </p>
          <p className="text-caption text-text-secondary">
            The class helper is the new <code className="font-mono text-micro">cn</code> engine from
            shadcn. It replaces <code className="font-mono text-micro">clsx</code> and{" "}
            <code className="font-mono text-micro">tailwind-merge</code> with the same call
            signature. If you migrate manually, keep the stable import path used by every component:
          </p>
          <CodeBlock label="src/lib/utils.ts" language="tsx" code={`export { cn } from "cn"`} />
        </Section>

        <Section id="styles" title="Styles and fonts">
          <p className="text-body text-text-secondary">
            Cobalt’s CSS-first theme lives in{" "}
            <code className="font-mono text-micro">src/index.css</code>. Copy{" "}
            <code className="font-mono text-micro">TimelessSansVF.woff2</code> and the Commit Mono
            files into <code className="font-mono text-micro">src/assets/fonts/</code>. The
            stylesheet declares both families locally, so the entry file only imports the theme.
          </p>
          <CodeBlock label="src/main.tsx" language="tsx" code={`import "./index.css"`} />
          <p className="text-caption text-text-secondary">
            The theme stylesheet starts with{" "}
            <code className="font-mono text-micro">@import "tailwindcss";</code>, declares Timeless
            Sans and Commit Mono with <code className="font-mono text-micro">@font-face</code>, and
            owns the dark variant, semantic colors, type scale, radii, and motion tokens. Both font
            licenses sit beside the font files.
          </p>
        </Section>

        <Section id="usage" title="Usage">
          <p className="text-body text-text-secondary">
            Copy a component from <code className="font-mono text-micro">src/components/ui</code>{" "}
            into your project, then compose it with the matching Base UI parts.
          </p>
          <CodeBlock
            label="src/components/save-action.tsx"
            language="tsx"
            code={`import { Button } from "@/components/ui/button"

export function SaveAction() {
  return <Button>Save changes</Button>
}`}
          />
        </Section>
      </div>

      <PagePager
        previous={{ title: "Introduction", href: "/" }}
        next={{ title: "Foundations", href: "/foundations" }}
      />
    </PageShell>
  );
}
