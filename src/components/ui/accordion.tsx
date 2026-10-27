import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import type * as React from "react";

import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@/components/ui/icons";

export function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" className={cn(className)} {...props} />;
}

export function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item data-slot="accordion-item" className={cn(className)} {...props} />
  );
}

export function AccordionHeader({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Header>) {
  return (
    <AccordionPrimitive.Header data-slot="accordion-header" className={cn(className)} {...props} />
  );
}

export function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Trigger data-slot="accordion-trigger" className={cn(className)} {...props}>
      <span>{children}</span>
      <ChevronRightIcon data-slot="accordion-chevron" />
    </AccordionPrimitive.Trigger>
  );
}

export function AccordionPanel({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Panel>) {
  return (
    <AccordionPrimitive.Panel data-slot="accordion-panel" className={cn(className)} {...props}>
      <div data-slot="accordion-panel-content">{children}</div>
    </AccordionPrimitive.Panel>
  );
}
