import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import type * as React from "react";

import { cn } from "@/lib/utils";

export function Toggle({
  className,
  type = "button",
  ...props
}: React.ComponentProps<typeof TogglePrimitive>) {
  return <TogglePrimitive data-slot="toggle" type={type} className={cn(className)} {...props} />;
}
