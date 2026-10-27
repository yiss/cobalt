import type * as React from "react";

import { cn } from "@/lib/utils";

export function Textarea({ className, rows = 3, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      rows={rows}
      className={cn(
        "block min-h-18 w-full resize-y rounded-md px-3 py-3 text-label leading-5",
        className,
      )}
      {...props}
    />
  );
}
