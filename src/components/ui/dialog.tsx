import { X } from "@keyline-icons/react";
import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import type * as React from "react";

import { cn } from "@/lib/utils";

export const Dialog = DialogPrimitive.Root;

export function DialogTrigger({
  className,
  type = "button",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return (
    <DialogPrimitive.Trigger
      data-slot="dialog-trigger"
      type={type}
      className={cn(className)}
      {...props}
    />
  );
}

export function DialogPopup({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Popup>) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Backdrop data-slot="dialog-backdrop" />
      <DialogPrimitive.Popup
        data-slot="dialog-popup"
        className={cn("fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2", className)}
        {...props}
      >
        {children}
      </DialogPrimitive.Popup>
    </DialogPrimitive.Portal>
  );
}

export function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="dialog-header" className={cn(className)} {...props} />;
}

export function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title data-slot="dialog-title" className={cn(className)} {...props} />;
}

export function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(className)}
      {...props}
    />
  );
}

export function DialogPanel({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="dialog-panel" className={cn(className)} {...props} />;
}

export function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="dialog-footer" className={cn(className)} {...props} />;
}

export function DialogClose({
  className,
  type = "button",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return (
    <DialogPrimitive.Close
      data-slot="dialog-close"
      type={type}
      className={cn(className)}
      {...props}
    />
  );
}

export function DialogDismiss({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return (
    <DialogPrimitive.Close
      data-slot="dialog-dismiss"
      type="button"
      aria-label="Close dialog"
      className={cn(className)}
      {...props}
    >
      <X className="size-4" aria-hidden="true" />
    </DialogPrimitive.Close>
  );
}
