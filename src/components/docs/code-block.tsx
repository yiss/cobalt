import { Check, Copy, X } from "@keyline-icons/react";
import * as React from "react";

import { CodeHighlight, type CodeLanguage } from "@/components/docs/code-highlight";
import { cn } from "@/lib/utils";

export function CopyButton({ code, className }: { code: string; className?: string }) {
  const [status, setStatus] = React.useState<"idle" | "copied" | "error">("idle");
  const resetTimer = React.useRef<number | null>(null);

  React.useEffect(() => {
    return () => {
      if (resetTimer.current !== null) {
        window.clearTimeout(resetTimer.current);
      }
    };
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setStatus("copied");
    } catch {
      setStatus("error");
    }

    if (resetTimer.current !== null) {
      window.clearTimeout(resetTimer.current);
    }

    resetTimer.current = window.setTimeout(() => setStatus("idle"), 1800);
  }

  const statusLabel = status === "copied" ? "Copied" : status === "error" ? "Copy failed" : "";

  return (
    <>
      <button
        type="button"
        onClick={copy}
        aria-label="Copy code"
        title={statusLabel || "Copy code"}
        className={cn(
          "inline-flex size-7 items-center justify-center rounded-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
          status === "copied"
            ? "text-success-foreground"
            : status === "error"
              ? "text-destructive-text"
              : "text-text-muted hover:bg-surface hover:text-text-primary",
          className,
        )}
      >
        {status === "copied" ? (
          <Check className="size-4" aria-hidden="true" />
        ) : status === "error" ? (
          <X className="size-4" aria-hidden="true" />
        ) : (
          <Copy className="size-4" aria-hidden="true" />
        )}
      </button>
      <span className="sr-only" aria-live="polite">
        {statusLabel}
      </span>
    </>
  );
}

export function CodeBlock({
  code,
  label,
  language = "tsx",
  className,
}: {
  code: string;
  label?: string;
  language?: CodeLanguage;
  className?: string;
}) {
  const trimmed = code.trim();

  return (
    <div className={cn("flex min-w-0 flex-col gap-2", className)}>
      <div className="flex min-h-7 items-center justify-between gap-4">
        {label ? <span className="text-micro text-text-muted">{label}</span> : <span />}
        <CopyButton code={trimmed} />
      </div>
      <div data-docs-code className="overflow-hidden rounded-lg">
        <CodeHighlight code={trimmed} language={language} />
      </div>
    </div>
  );
}
