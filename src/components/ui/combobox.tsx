import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import type * as React from "react";

import { cn } from "@/lib/utils";
import { CheckIcon, ChevronDownIcon } from "@/components/ui/icons";

export const Combobox = ComboboxPrimitive.Root;

export function ComboboxInputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="combobox-input-group" className={cn(className)} {...props} />;
}

export function ComboboxInput({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Input>) {
  return (
    <ComboboxPrimitive.Input data-slot="combobox-input" className={cn(className)} {...props} />
  );
}

export function ComboboxTrigger({
  className,
  children,
  type = "button",
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Trigger>) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      type={type}
      className={cn(className)}
      {...props}
    >
      {children}
      <ComboboxPrimitive.Icon data-slot="combobox-icon">
        <ChevronDownIcon />
      </ComboboxPrimitive.Icon>
    </ComboboxPrimitive.Trigger>
  );
}

export function ComboboxPopup({
  className,
  sideOffset = 6,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Popup> & {
  sideOffset?: number;
}) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        className="z-50 outline-none"
        sideOffset={sideOffset}
        align="start"
      >
        <ComboboxPrimitive.Popup data-slot="combobox-popup" className={cn(className)} {...props}>
          {children}
        </ComboboxPrimitive.Popup>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
}

export function ComboboxList({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.List>) {
  return <ComboboxPrimitive.List data-slot="combobox-list" className={cn(className)} {...props} />;
}

export function ComboboxEmpty({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Empty>) {
  return (
    <ComboboxPrimitive.Empty data-slot="combobox-empty" className={cn(className)} {...props} />
  );
}

export function ComboboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Item>) {
  return (
    <ComboboxPrimitive.Item data-slot="combobox-item" className={cn(className)} {...props}>
      <span className="truncate">{children}</span>
      <ComboboxPrimitive.ItemIndicator data-slot="combobox-item-indicator">
        <CheckIcon />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  );
}
