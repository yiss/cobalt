import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field";
import type * as React from "react";

import { cn } from "@/lib/utils";

export interface NumberFieldProps extends Omit<
  React.ComponentProps<typeof NumberFieldPrimitive.Root>,
  "children"
> {
  suffix?: React.ReactNode;
  inputProps?: React.ComponentProps<typeof NumberFieldPrimitive.Input>;
  decrementLabel?: string;
  incrementLabel?: string;
}

export function NumberField({
  className,
  suffix,
  inputProps,
  decrementLabel = "Decrease value",
  incrementLabel = "Increase value",
  ...props
}: NumberFieldProps) {
  return (
    <NumberFieldPrimitive.Root data-slot="number-field" className={cn(className)} {...props}>
      <NumberFieldPrimitive.Group data-slot="number-field-group">
        <NumberFieldPrimitive.Decrement
          data-slot="number-field-step"
          type="button"
          aria-label={decrementLabel}
        >
          <span aria-hidden="true">−</span>
        </NumberFieldPrimitive.Decrement>
        <div data-slot="number-field-value">
          <NumberFieldPrimitive.Input data-slot="number-field-input" {...inputProps} />
          {suffix ? <span data-slot="number-field-suffix">{suffix}</span> : null}
        </div>
        <NumberFieldPrimitive.Increment
          data-slot="number-field-step"
          type="button"
          aria-label={incrementLabel}
        >
          <span aria-hidden="true">+</span>
        </NumberFieldPrimitive.Increment>
      </NumberFieldPrimitive.Group>
    </NumberFieldPrimitive.Root>
  );
}
