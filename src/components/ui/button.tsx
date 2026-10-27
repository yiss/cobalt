import {
  Button as ButtonPrimitive,
  type ButtonProps as BaseButtonProps,
} from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap border font-normal disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        outline: "",
        ghost: "",
        destructive: "",
      },
      size: {
        sm: "h-8 rounded-sm px-3 text-caption",
        md: "h-9 rounded-md px-4 text-label",
        lg: "h-10 rounded-control-lg px-5 text-body",
        icon: "size-9 rounded-md p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = BaseButtonProps & VariantProps<typeof buttonVariants>;

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
      data-slot="button"
      data-variant={variant}
      data-size={size}
    />
  );
}
