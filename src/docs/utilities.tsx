import { Kbd } from "@/components/ui/kbd";
import type { DocGroup } from "@/docs/types";

function KbdPreview() {
  return (
    <div className="flex items-center gap-3 text-body text-text-secondary">
      <span>Open search</span>
      <span className="flex items-center gap-1.5">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </span>
    </div>
  );
}

function KbdCombinationPreview() {
  return (
    <span className="flex items-center gap-1.5">
      <Kbd>⇧</Kbd>
      <Kbd>⌘</Kbd>
      <Kbd>P</Kbd>
    </span>
  );
}

function KbdInlinePreview() {
  return (
    <p className="m-0 flex flex-wrap items-center gap-1.5 text-body text-text-secondary">
      Press
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      to open the command search.
    </p>
  );
}

export const utilitiesGroup: DocGroup = {
  id: "utilities",
  label: "Utilities",
  sections: [
    {
      id: "kbd",
      title: "Kbd",
      description:
        "Keycaps for shortcuts, with enough padding and spacing to read as separate keys instead of a cramped string.",
      preview: <KbdPreview />,
      code: `
import { Kbd } from "@/components/ui/kbd"

<div className="flex items-center gap-3">
  <span>Open search</span>
  <span className="flex items-center gap-1.5">
    <Kbd>⌘</Kbd>
    <Kbd>K</Kbd>
  </span>
</div>
`,
      usage: `
import { Kbd } from "@/components/ui/kbd"

<span className="flex items-center gap-1.5">
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</span>
`,
      examples: [
        {
          id: "combination",
          title: "Combination",
          description: "Use one keycap per key and keep a small gap between modifiers and the key.",
          preview: <KbdCombinationPreview />,
          code: `
import { Kbd } from "@/components/ui/kbd"

<span className="flex items-center gap-1.5">
  <Kbd>⇧</Kbd>
  <Kbd>⌘</Kbd>
  <Kbd>P</Kbd>
</span>
`,
        },
        {
          id: "inline",
          title: "Inline",
          description: "Keycaps can sit inside a sentence without breaking the line rhythm.",
          preview: <KbdInlinePreview />,
          code: `
import { Kbd } from "@/components/ui/kbd"

<p className="flex flex-wrap items-center gap-1.5">
  Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command search.
</p>
`,
        },
      ],
    },
  ],
};
