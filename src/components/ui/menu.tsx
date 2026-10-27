import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import type * as React from "react";

import { cn } from "@/lib/utils";

export const Menu = MenuPrimitive.Root;

export function MenuTrigger({
  className,
  type = "button",
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Trigger>) {
  return (
    <MenuPrimitive.Trigger
      data-slot="menu-trigger"
      type={type}
      className={cn(className)}
      {...props}
    />
  );
}

export function MenuPopup({
  className,
  sideOffset = 12,
  align = "start",
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Popup> & {
  sideOffset?: number;
  align?: React.ComponentProps<typeof MenuPrimitive.Positioner>["align"];
}) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner className="z-50 outline-none" sideOffset={sideOffset} align={align}>
        <MenuPrimitive.Popup data-slot="menu-popup" className={cn(className)} {...props}>
          {children}
        </MenuPrimitive.Popup>
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

export type MenuItemProps = React.ComponentProps<typeof MenuPrimitive.Item> & {
  variant?: "default" | "destructive";
};

export function MenuItem({ className, variant = "default", ...props }: MenuItemProps) {
  return (
    <MenuPrimitive.Item
      data-slot="menu-item"
      data-variant={variant}
      className={cn(className)}
      {...props}
    />
  );
}

export function MenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Separator>) {
  return (
    <MenuPrimitive.Separator data-slot="menu-separator" className={cn(className)} {...props} />
  );
}

export function MenuGroup({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Group>) {
  return <MenuPrimitive.Group data-slot="menu-group" className={cn(className)} {...props} />;
}

export function MenuGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.GroupLabel>) {
  return (
    <MenuPrimitive.GroupLabel data-slot="menu-group-label" className={cn(className)} {...props} />
  );
}

export function MenuShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return <span data-slot="menu-shortcut" className={cn(className)} aria-hidden="true" {...props} />;
}
