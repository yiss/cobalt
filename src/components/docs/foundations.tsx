const brandRamp = [
  { name: "Cobalt 900", hex: "#0D1466", swatch: "bg-cobalt-900" },
  { name: "Cobalt 800", hex: "#161E94", swatch: "bg-cobalt-800" },
  { name: "Cobalt 700", hex: "#1D25B5", swatch: "bg-cobalt-700" },
  { name: "Cobalt 600", hex: "#232ED1", swatch: "bg-cobalt-600" },
  { name: "Cobalt 500", hex: "#454FE0", swatch: "bg-cobalt-500" },
  { name: "Cobalt 400", hex: "#6B74EB", swatch: "bg-cobalt-400" },
  { name: "Cobalt 300", hex: "#9BA1F3", swatch: "bg-cobalt-300" },
  { name: "Cobalt 200", hex: "#CBCEFA", swatch: "bg-cobalt-200" },
  { name: "Cobalt 50", hex: "#EEF0FE", swatch: "bg-cobalt-50" },
];

const surfaces = [
  { name: "Canvas", swatch: "bg-canvas" },
  { name: "Surface base", swatch: "bg-surface" },
  { name: "Surface card", swatch: "bg-surface-card" },
  { name: "Surface elevated", swatch: "bg-surface-elevated" },
  { name: "Surface hover", swatch: "bg-surface-hover" },
];

const semantics = [
  { name: "Success", hex: "#10B981", swatch: "bg-success" },
  { name: "Warning", hex: "#F59E0B", swatch: "bg-warning" },
  { name: "Destructive", hex: "#EF4444", swatch: "bg-destructive-base" },
  { name: "Destructive action", hex: "#DC2626", swatch: "bg-destructive" },
  { name: "Info", hex: "#0EA5E9", swatch: "bg-info" },
];

const radii = [
  { name: "2XS · 4", swatch: "rounded-2xs" },
  { name: "XS · 6", swatch: "rounded-xs" },
  { name: "SM · 8", swatch: "rounded-sm" },
  { name: "MD · 10", swatch: "rounded-md" },
  { name: "Control · 12", swatch: "rounded-control-lg" },
  { name: "LG · 14", swatch: "rounded-lg" },
  { name: "XL · 18", swatch: "rounded-xl" },
];

const typeScale = [
  {
    name: "Display",
    spec: "32 / 40 · -0.8",
    note: "Hero and marketing headers",
    className: "text-display",
    sample: "Engineered for Velocity",
  },
  {
    name: "Heading 1",
    spec: "24 / 32 · -0.5",
    note: "Page and section titles",
    className: "text-heading-1",
    sample: "Sprint Cycle Overview",
  },
  {
    name: "Heading 2",
    spec: "18 / 26 · -0.3",
    note: "Card and modal titles",
    className: "text-heading-2",
    sample: "Developer API Webhooks",
  },
  {
    name: "Title",
    spec: "15 / 22 · -0.2",
    note: "List items and subheadings",
    className: "text-title",
    sample: "Authentication Middleware & Tokens",
  },
  {
    name: "Body",
    spec: "14 / 20 · 0",
    note: "Primary content and inputs",
    className: "text-body",
    sample: "Standard body text used across documentation and forms.",
  },
  {
    name: "Caption",
    spec: "13 / 18 · 0",
    note: "Metadata and helper descriptions",
    className: "text-caption",
    sample: "Secondary metadata, timestamp labels, and helper descriptions.",
  },
  {
    name: "Micro",
    spec: "12 / 16 · 0",
    note: "Keyboard hints and badges",
    className: "text-micro",
    sample: "⌘K Search / tag_stable",
  },
];

function SectionTitle({ title, detail }: { title: string; detail?: string }) {
  return (
    <div className="mb-5 flex flex-col gap-1">
      <h2 className="m-0 text-heading-2 text-text-primary">{title}</h2>
      {detail ? <p className="m-0 text-caption text-text-muted">{detail}</p> : null}
    </div>
  );
}

export function Foundations() {
  return (
    <div className="flex flex-col gap-5">
      <div id="color" data-docs-panel className="scroll-mt-24 rounded-lg p-5 sm:p-6">
        <SectionTitle
          title="Color"
          detail="Brand is the identity and selection anchor. Action is the interactive cobalt used by controls."
        />
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-xs bg-surface px-2.5 py-1.5 text-micro text-text-secondary">
            <span className="size-2 rounded-full bg-brand border border-border-strong" />
            Brand · #232ED1
          </span>
          <span className="inline-flex items-center gap-2 rounded-xs bg-surface px-2.5 py-1.5 text-micro text-text-secondary">
            <span className="size-2 rounded-full bg-action border border-border-strong" />
            Action · #2F3CFA
          </span>
          <span className="inline-flex items-center gap-2 rounded-xs bg-surface px-2.5 py-1.5 text-micro text-text-secondary">
            <span className="size-2 rounded-full bg-espresso border border-border-strong" />
            Dark base · #252422
          </span>
          <span className="inline-flex items-center gap-2 rounded-xs bg-surface px-2.5 py-1.5 text-micro text-text-secondary">
            <span className="size-2 rounded-full bg-porcelain border border-border-strong" />
            Light base · #F7F6F3
          </span>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-9">
          {brandRamp.map((token) => (
            <div key={token.name} className="flex flex-col gap-1.5">
              <div className={`h-12 rounded-sm border border-border ${token.swatch}`} />
              <span className="text-micro text-text-primary">{token.name}</span>
              <span className="font-mono text-micro text-text-muted">{token.hex}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {surfaces.map((token) => (
            <div key={token.name} className="flex flex-col gap-1.5">
              <div className={`h-12 rounded-sm border border-border ${token.swatch}`} />
              <span className="text-micro text-text-primary">{token.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {semantics.map((token) => (
            <div key={token.name} className="flex flex-col gap-1.5">
              <div className={`h-12 rounded-sm border border-border ${token.swatch}`} />
              <span className="text-micro text-text-primary">{token.name}</span>
              <span className="font-mono text-micro text-text-muted">{token.hex}</span>
            </div>
          ))}
        </div>
      </div>

      <div id="type" data-docs-panel className="scroll-mt-24 rounded-lg p-5 sm:p-6">
        <SectionTitle
          title="Type"
          detail="Timeless Sans for interface text, Commit Mono for code and numeric labels. Foreground hierarchy carries emphasis."
        />
        <div className="flex flex-col">
          {typeScale.map((type) => (
            <div
              key={type.name}
              className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div className={type.className}>{type.sample}</div>
              <div className="flex shrink-0 flex-col gap-0.5 sm:items-end sm:text-right">
                <span className="text-micro text-text-primary">{type.name}</span>
                <span className="font-mono text-micro text-text-muted">
                  {type.spec} · {type.note}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="shape" data-docs-panel className="scroll-mt-24 rounded-lg p-5 sm:p-6">
        <SectionTitle
          title="Shape & motion"
          detail="Squircles are the base geometry. Radii stay concentric with the containing surface."
        />
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
          {radii.map((radius) => (
            <div key={radius.name} className="flex flex-col items-center gap-2">
              <div
                className={`h-12 w-full border border-border-strong bg-surface-card ${radius.swatch}`}
              />
              <span className="text-center text-micro text-text-muted">{radius.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-3 pt-5 sm:grid-cols-3">
          <div className="flex flex-col gap-1">
            <span className="text-micro text-text-primary">Enter</span>
            <span className="font-mono text-micro text-text-muted">140–180ms · ease-out</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-micro text-text-primary">Exit</span>
            <span className="font-mono text-micro text-text-muted">160–240ms · ease-out</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-micro text-text-primary">Drawer</span>
            <span className="font-mono text-micro text-text-muted">320ms · (0.32, 0.72, 0, 1)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
