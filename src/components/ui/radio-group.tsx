import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import {
  RadioGroup as RadioGroupPrimitive,
  type RadioGroupProps as BaseRadioGroupProps,
} from "@base-ui/react/radio-group";
import type * as React from "react";

import { cn } from "@/lib/utils";

export type RadioGroupProps<Value = string> = BaseRadioGroupProps<Value>;

export function RadioGroup<Value = string>({ className, ...props }: RadioGroupProps<Value>) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("flex w-full flex-col gap-3", className)}
      {...props}
    />
  );
}

export function Radio({ className, ...props }: React.ComponentProps<typeof RadioPrimitive.Root>) {
  return (
    <RadioPrimitive.Root data-slot="radio" className={cn(className)} {...props}>
      <RadioPrimitive.Indicator keepMounted data-slot="radio-indicator" />
    </RadioPrimitive.Root>
  );
}
