import { Form as FormPrimitive } from "@base-ui/react/form";
import type * as React from "react";

import { cn } from "@/lib/utils";

export function Form({ className, ...props }: React.ComponentProps<typeof FormPrimitive>) {
  return (
    <FormPrimitive
      data-slot="form"
      className={cn("flex w-full flex-col gap-4", className)}
      {...props}
    />
  );
}
