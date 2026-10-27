import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";
import type * as React from "react";

import { cn } from "@/lib/utils";

export function Menubar({ className, ...props }: React.ComponentProps<typeof MenubarPrimitive>) {
  return <MenubarPrimitive data-slot="menubar" className={cn(className)} {...props} />;
}
