import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";
import type * as React from "react";

import { cn } from "@/lib/utils";

export const ContextMenu = ContextMenuPrimitive.Root;

type ContextMenuTriggerProps = React.ComponentProps<typeof ContextMenuPrimitive.Trigger>;
type ContextMenuTriggerKeyEvent = Parameters<NonNullable<ContextMenuTriggerProps["onKeyDown"]>>[0];

export function ContextMenuTrigger({
  className,
  onKeyDown,
  tabIndex = 0,
  "aria-haspopup": ariaHaspopup = "menu",
  ...props
}: ContextMenuTriggerProps) {
  function handleKeyDown(event: ContextMenuTriggerKeyEvent) {
    onKeyDown?.(event);

    if (event.defaultPrevented) return;

    if (event.key === "ContextMenu" || (event.shiftKey && event.key === "F10")) {
      event.preventDefault();
      const rect = event.currentTarget.getBoundingClientRect();

      event.currentTarget.dispatchEvent(
        new MouseEvent("contextmenu", {
          bubbles: true,
          cancelable: true,
          button: 2,
          clientX: rect.left + rect.width / 2,
          clientY: rect.top + rect.height / 2,
        }),
      );
    }
  }

  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      aria-haspopup={ariaHaspopup}
      tabIndex={tabIndex}
      className={cn(className)}
      onKeyDown={handleKeyDown}
      {...props}
    />
  );
}

export function ContextMenuPopup({
  className,
  sideOffset = 2,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Popup> & {
  sideOffset?: number;
}) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Positioner className="z-50 outline-none" sideOffset={sideOffset}>
        <ContextMenuPrimitive.Popup
          data-slot="context-menu-popup"
          className={cn(className)}
          {...props}
        >
          {children}
        </ContextMenuPrimitive.Popup>
      </ContextMenuPrimitive.Positioner>
    </ContextMenuPrimitive.Portal>
  );
}

export type ContextMenuItemProps = React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  variant?: "default" | "destructive";
};

export function ContextMenuItem({
  className,
  variant = "default",
  ...props
}: ContextMenuItemProps) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-variant={variant}
      className={cn(className)}
      {...props}
    />
  );
}

export function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn(className)}
      {...props}
    />
  );
}
