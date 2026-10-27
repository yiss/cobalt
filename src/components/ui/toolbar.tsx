import { Toolbar as ToolbarPrimitive } from "@base-ui/react/toolbar";
import type * as React from "react";

import { cn } from "@/lib/utils";

export function Toolbar({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Root>) {
  return <ToolbarPrimitive.Root data-slot="toolbar" className={cn(className)} {...props} />;
}

export type ToolbarButtonProps = React.ComponentProps<typeof ToolbarPrimitive.Button> & {
  variant?: "ghost" | "secondary" | "primary";
  size?: "default" | "icon";
};

export function ToolbarButton({
  className,
  variant = "ghost",
  size = "default",
  type = "button",
  ...props
}: ToolbarButtonProps) {
  return (
    <ToolbarPrimitive.Button
      data-slot="toolbar-button"
      data-variant={variant}
      data-size={size}
      type={type}
      className={cn(className)}
      {...props}
    />
  );
}

export function ToolbarGroup({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Group>) {
  return <ToolbarPrimitive.Group data-slot="toolbar-group" className={cn(className)} {...props} />;
}

export function ToolbarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Separator>) {
  return (
    <ToolbarPrimitive.Separator
      data-slot="toolbar-separator"
      className={cn(className)}
      {...props}
    />
  );
}

export function ToolbarLink({
  className,
  ...props
}: React.ComponentProps<typeof ToolbarPrimitive.Link>) {
  return <ToolbarPrimitive.Link data-slot="toolbar-link" className={cn(className)} {...props} />;
}
