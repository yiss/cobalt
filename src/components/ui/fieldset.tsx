import { Fieldset as FieldsetPrimitive } from "@base-ui/react/fieldset";
import type * as React from "react";

import { cn } from "@/lib/utils";

export function Fieldset({
  className,
  ...props
}: React.ComponentProps<typeof FieldsetPrimitive.Root>) {
  return (
    <FieldsetPrimitive.Root
      data-slot="fieldset"
      className={cn("m-0 flex min-w-0 flex-col gap-4 border-0 p-0", className)}
      {...props}
    />
  );
}

export function FieldsetLegend({
  className,
  ...props
}: React.ComponentProps<typeof FieldsetPrimitive.Legend>) {
  return (
    <FieldsetPrimitive.Legend
      data-slot="fieldset-legend"
      className={cn("w-full text-title text-text-primary", className)}
      {...props}
    />
  );
}
