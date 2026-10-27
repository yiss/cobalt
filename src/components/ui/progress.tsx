import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import type * as React from "react";

import { cn } from "@/lib/utils";

export interface ProgressProps extends Omit<
  React.ComponentProps<typeof ProgressPrimitive.Root>,
  "children"
> {
  label?: React.ReactNode;
  formatValue?: (formattedValue: string | null, value: number | null) => React.ReactNode;
}

export function Progress({ className, label, formatValue, ...props }: ProgressProps) {
  return (
    <ProgressPrimitive.Root data-slot="progress" className={cn(className)} {...props}>
      {label ? (
        <div className="flex items-center justify-between gap-4">
          <ProgressPrimitive.Label data-slot="progress-label">{label}</ProgressPrimitive.Label>
          {formatValue ? (
            <ProgressPrimitive.Value data-slot="progress-value">
              {(formattedValue, value) => formatValue(formattedValue, value)}
            </ProgressPrimitive.Value>
          ) : (
            <ProgressPrimitive.Value data-slot="progress-value" />
          )}
        </div>
      ) : null}
      <ProgressPrimitive.Track data-slot="progress-track">
        <ProgressPrimitive.Indicator data-slot="progress-indicator" />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  );
}
