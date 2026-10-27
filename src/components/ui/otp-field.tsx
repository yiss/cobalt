import { OTPField as OTPFieldPrimitive } from "@base-ui/react/otp-field";
import * as React from "react";

import { cn } from "@/lib/utils";

export interface OTPFieldProps extends Omit<
  React.ComponentProps<typeof OTPFieldPrimitive.Root>,
  "children" | "length"
> {
  label: string;
  length?: number;
}

export function OTPField({ className, label, length = 6, id, ...props }: OTPFieldProps) {
  const generatedId = React.useId();
  const fieldId = id ?? generatedId;

  return (
    <>
      <label htmlFor={fieldId} className="sr-only">
        {label}
      </label>
      <OTPFieldPrimitive.Root
        data-slot="otp-field"
        id={fieldId}
        length={length}
        className={cn(className)}
        {...props}
      >
        {Array.from({ length }, (_, index) => (
          <OTPFieldPrimitive.Input
            key={index}
            data-slot="otp-field-input"
            aria-label={index === 0 ? undefined : `${label}, character ${index + 1} of ${length}`}
            autoComplete={index === 0 ? "one-time-code" : "off"}
            placeholder="·"
            inputMode="numeric"
          />
        ))}
      </OTPFieldPrimitive.Root>
    </>
  );
}
