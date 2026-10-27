import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import type * as React from "react";

import { cn } from "@/lib/utils";
import { CheckIcon } from "@/components/ui/icons";

export type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root>;

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root data-slot="checkbox" className={cn(className)} {...props}>
      <CheckboxPrimitive.Indicator keepMounted data-slot="checkbox-indicator" className="relative">
        <CheckIcon data-slot="checkbox-check" />
        <span data-slot="checkbox-indeterminate" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
