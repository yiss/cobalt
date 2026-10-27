import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import type * as React from "react";

import { cn } from "@/lib/utils";

export const Popover = PopoverPrimitive.Root;

export function PopoverTrigger({
  className,
  type = "button",
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return (
    <PopoverPrimitive.Trigger
      data-slot="popover-trigger"
      type={type}
      className={cn(className)}
      {...props}
    />
  );
}

export function PopoverPopup({
  className,
  sideOffset = 8,
  align = "start",
  children,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Popup> & {
  sideOffset?: number;
  align?: React.ComponentProps<typeof PopoverPrimitive.Positioner>["align"];
}) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner
        className="z-50 outline-none"
        sideOffset={sideOffset}
        align={align}
      >
        <PopoverPrimitive.Popup data-slot="popover-popup" className={cn(className)} {...props}>
          {children}
        </PopoverPrimitive.Popup>
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
}

export function PopoverTitle({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Title>) {
  return <PopoverPrimitive.Title data-slot="popover-title" className={cn(className)} {...props} />;
}

export function PopoverDescription({
  className,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Description>) {
  return (
    <PopoverPrimitive.Description
      data-slot="popover-description"
      className={cn(className)}
      {...props}
    />
  );
}

export function PopoverClose({
  className,
  type = "button",
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Close>) {
  return (
    <PopoverPrimitive.Close
      data-slot="popover-close"
      type={type}
      className={cn(className)}
      {...props}
    />
  );
}
