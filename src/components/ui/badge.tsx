import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

export const badgeVariants = cva("inline-flex shrink-0 items-center justify-center", {
  variants: {
    variant: {
      brand: "",
      success: "",
      warning: "",
      destructive: "",
      info: "",
      neutral: "",
    },
  },
  defaultVariants: {
    variant: "brand",
  },
});

export type BadgeProps = React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant = "brand", ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}
