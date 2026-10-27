import * as React from "react";

import { CodeHighlight } from "@/components/docs/code-highlight";
import { CopyButton } from "@/components/docs/code-block";
import { cn } from "@/lib/utils";

type View = "preview" | "code";

export function PreviewExplorer({
  preview,
  code,
  className,
  compact = false,
}: {
  preview: React.ReactNode;
  code: string;
  className?: string;
  compact?: boolean;
}) {
  const [view, setView] = React.useState<View>("preview");

  return (
    <div data-docs-panel className={cn("overflow-hidden rounded-xl", className)}>
      <div className="flex h-12 items-center justify-between gap-4 px-3">
        <div role="group" aria-label="Component view" className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setView("preview")}
            aria-pressed={view === "preview"}
            className={cn(
              "rounded-xs px-2.5 py-1 text-caption transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              view === "preview"
                ? "bg-surface-card text-text-primary"
                : "text-text-muted hover:bg-surface-elevated hover:text-text-primary",
            )}
          >
            Preview
          </button>
          <button
            type="button"
            onClick={() => setView("code")}
            aria-pressed={view === "code"}
            className={cn(
              "rounded-xs px-2.5 py-1 text-caption transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
              view === "code"
                ? "bg-surface-card text-text-primary"
                : "text-text-muted hover:bg-surface-elevated hover:text-text-primary",
            )}
          >
            Code
          </button>
        </div>
        {view === "code" ? <CopyButton code={code.trim()} /> : null}
      </div>

      {view === "preview" ? (
        <div
          className={cn(
            "flex items-center justify-center overflow-x-auto bg-surface p-6",
            compact ? "min-h-32" : "min-h-48 sm:p-8",
          )}
        >
          {preview}
        </div>
      ) : (
        <div data-docs-code>
          <CodeHighlight code={code.trim()} language="tsx" />
        </div>
      )}
    </div>
  );
}
