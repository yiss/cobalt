import { Meter as MeterPrimitive } from "@base-ui/react/meter";
import type * as React from "react";

import { cn } from "@/lib/utils";

export type MeterTone = "brand" | "success" | "warning" | "destructive" | "info";

export interface MeterProps extends Omit<
  React.ComponentProps<typeof MeterPrimitive.Root>,
  "children"
> {
  label: React.ReactNode;
  formatValue?: (formattedValue: string, value: number) => React.ReactNode;
  tone?: MeterTone;
  startLabel?: React.ReactNode;
  status?: React.ReactNode;
  endLabel?: React.ReactNode;
}

export function Meter({
  className,
  label,
  formatValue,
  tone = "brand",
  startLabel,
  status,
  endLabel,
  ...props
}: MeterProps) {
  return (
    <MeterPrimitive.Root data-slot="meter" data-tone={tone} className={cn(className)} {...props}>
      <div data-slot="meter-header">
        <MeterPrimitive.Label data-slot="meter-label">{label}</MeterPrimitive.Label>
        {formatValue ? (
          <MeterPrimitive.Value data-slot="meter-value">
            {(formattedValue, value) => formatValue(formattedValue, value)}
          </MeterPrimitive.Value>
        ) : (
          <MeterPrimitive.Value data-slot="meter-value" />
        )}
      </div>
      <MeterPrimitive.Track data-slot="meter-track">
        <MeterPrimitive.Indicator data-slot="meter-indicator" />
      </MeterPrimitive.Track>
      {startLabel || status || endLabel ? (
        <div data-slot="meter-footer">
          <span>{startLabel}</span>
          <span data-slot="meter-status">{status}</span>
          <span>{endLabel}</span>
        </div>
      ) : null}
    </MeterPrimitive.Root>
  );
}
