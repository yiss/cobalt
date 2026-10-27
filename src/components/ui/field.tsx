import { Field as FieldPrimitive } from "@base-ui/react/field";
import type * as React from "react";

import { cn } from "@/lib/utils";
import { inputVariants } from "@/components/ui/input";

export function Field({ className, ...props }: React.ComponentProps<typeof FieldPrimitive.Root>) {
  return (
    <FieldPrimitive.Root
      data-slot="field"
      className={cn("flex w-full flex-col items-start gap-1.5", className)}
      {...props}
    />
  );
}

export function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Label>) {
  return (
    <FieldPrimitive.Label
      data-slot="field-label"
      className={cn("text-label text-text-secondary", className)}
      {...props}
    />
  );
}

export function FieldDescription({
  className,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Description>) {
  return (
    <FieldPrimitive.Description
      data-slot="field-description"
      className={cn("text-caption text-text-muted", className)}
      {...props}
    />
  );
}

export function FieldError({
  className,
  ...props
}: React.ComponentProps<typeof FieldPrimitive.Error>) {
  return (
    <FieldPrimitive.Error
      data-slot="field-error"
      className={cn("text-micro text-destructive-text", className)}
      {...props}
    />
  );
}

export function FieldControl({
  className,
  size = "md",
  ...props
}: Omit<React.ComponentProps<typeof FieldPrimitive.Control>, "size"> & {
  size?: "sm" | "md" | "lg";
}) {
  return (
    <FieldPrimitive.Control
      data-slot="input"
      data-size={size}
      className={cn(inputVariants({ size }), className)}
      {...props}
    />
  );
}
