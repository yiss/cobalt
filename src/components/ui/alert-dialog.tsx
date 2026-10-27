import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import type * as React from "react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const AlertDialog = AlertDialogPrimitive.Root;

export function AlertDialogTrigger({
  className,
  type = "button",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger
      data-slot="alert-dialog-trigger"
      type={type}
      className={cn(className)}
      {...props}
    />
  );
}

export function AlertDialogPopup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Popup>) {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Backdrop data-slot="alert-dialog-backdrop" />
      <AlertDialogPrimitive.Popup
        data-slot="alert-dialog-popup"
        className={cn("fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2", className)}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Popup>
    </AlertDialogPrimitive.Portal>
  );
}

export function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(className)}
      {...props}
    />
  );
}

export function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn(className)}
      {...props}
    />
  );
}

export function AlertDialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="alert-dialog-footer" className={cn(className)} {...props} />;
}

export function AlertDialogClose({
  className,
  type = "button",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Close>) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-close"
      type={type}
      className={cn(className)}
      {...props}
    />
  );
}

export type AlertDialogButtonProps = React.ComponentProps<typeof AlertDialogPrimitive.Close> & {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
};

export function AlertDialogAction({
  variant = "primary",
  size = "md",
  ...props
}: AlertDialogButtonProps) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-action"
      type="button"
      render={<Button variant={variant} size={size} />}
      {...props}
    />
  );
}

export function AlertDialogCancel({
  variant = "outline",
  size = "md",
  ...props
}: AlertDialogButtonProps) {
  return (
    <AlertDialogPrimitive.Close
      data-slot="alert-dialog-cancel"
      type="button"
      render={<Button variant={variant} size={size} />}
      {...props}
    />
  );
}
