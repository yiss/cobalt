import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import type * as React from "react";

import { cn } from "@/lib/utils";

export function Drawer({
  swipeDirection = "right",
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root swipeDirection={swipeDirection} {...props} />;
}

export function DrawerTrigger({
  className,
  type = "button",
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return (
    <DrawerPrimitive.Trigger
      data-slot="drawer-trigger"
      type={type}
      className={cn(className)}
      {...props}
    />
  );
}

export function DrawerPopup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Popup>) {
  return (
    <DrawerPrimitive.Portal>
      <DrawerPrimitive.Backdrop data-slot="drawer-backdrop" />
      <DrawerPrimitive.Viewport data-slot="drawer-viewport">
        <DrawerPrimitive.Popup data-slot="drawer-popup" className={cn(className)} {...props}>
          <DrawerPrimitive.Content data-slot="drawer-content">{children}</DrawerPrimitive.Content>
        </DrawerPrimitive.Popup>
      </DrawerPrimitive.Viewport>
    </DrawerPrimitive.Portal>
  );
}

export function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="drawer-header" className={cn(className)} {...props} />;
}

export function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return <DrawerPrimitive.Title data-slot="drawer-title" className={cn(className)} {...props} />;
}

export function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn(className)}
      {...props}
    />
  );
}

export function DrawerBody({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="drawer-body" className={cn(className)} {...props} />;
}

export function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="drawer-footer" className={cn(className)} {...props} />;
}

export function DrawerClose({
  className,
  type = "button",
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return (
    <DrawerPrimitive.Close
      data-slot="drawer-close"
      type={type}
      className={cn(className)}
      {...props}
    />
  );
}

export function DrawerDismiss({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return (
    <DrawerPrimitive.Close
      data-slot="drawer-dismiss"
      type="button"
      aria-label="Close drawer"
      className={cn(className)}
      {...props}
    >
      <span aria-hidden="true">✕</span>
    </DrawerPrimitive.Close>
  );
}
