import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible";
import type * as React from "react";

import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@/components/ui/icons";

export function Collapsible({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" className={cn(className)} {...props} />;
}

export function CollapsibleTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Trigger>) {
  return (
    <CollapsiblePrimitive.Trigger
      data-slot="collapsible-trigger"
      className={cn(className)}
      {...props}
    >
      <span>{children}</span>
      <ChevronRightIcon data-slot="collapsible-chevron" />
    </CollapsiblePrimitive.Trigger>
  );
}

export function CollapsiblePanel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Panel>) {
  return (
    <CollapsiblePrimitive.Panel data-slot="collapsible-panel" className={cn(className)} {...props}>
      <div data-slot="collapsible-panel-content">{children}</div>
    </CollapsiblePrimitive.Panel>
  );
}
