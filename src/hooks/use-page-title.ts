import * as React from "react";

export function usePageTitle(title?: string) {
  React.useEffect(() => {
    document.title = title ? `${title} — Cobalt` : "Cobalt — Base UI design system";
  }, [title]);
}
