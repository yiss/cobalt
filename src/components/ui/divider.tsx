import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import type * as React from "react";

import { cn } from "@/lib/utils";

export function Divider({ className, ...props }: React.ComponentProps<typeof SeparatorPrimitive>) {
  return <SeparatorPrimitive data-slot="divider" className={cn(className)} {...props} />;
}
