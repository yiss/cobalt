import { Input as InputPrimitive, type InputProps as BaseInputProps } from "@base-ui/react/input";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const inputVariants = cva("block text-left", {
  variants: {
    size: {
      sm: "h-8 rounded-sm px-2.5 text-caption",
      md: "h-9 rounded-md px-3 text-label",
      lg: "h-10 rounded-control-lg px-3.5 text-body",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type InputProps = Omit<BaseInputProps, "size"> &
  VariantProps<typeof inputVariants> & {
    startIcon?: React.ReactNode;
  };

export function Input({ className, size = "md", startIcon, ...props }: InputProps) {
  const control = (
    <InputPrimitive
      data-slot="input"
      data-size={size}
      className={cn(inputVariants({ size }), className)}
      {...props}
    />
  );

  if (!startIcon) {
    return control;
  }

  return (
    <div data-slot="input-with-icon">
      <span data-slot="input-icon" aria-hidden="true">
        {startIcon}
      </span>
      {control}
    </div>
  );
}
