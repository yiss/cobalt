import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import type * as React from "react";

import { cn } from "@/lib/utils";

type SliderValue = number | readonly number[];

export interface SliderProps extends Omit<
  React.ComponentProps<typeof SliderPrimitive.Root>,
  "children" | "defaultValue" | "value"
> {
  label: string;
  defaultValue?: SliderValue;
  value?: SliderValue;
  startLabel?: React.ReactNode;
  endLabel?: React.ReactNode;
  formatValue?: (formattedValues: readonly string[], values: readonly number[]) => React.ReactNode;
}

export function Slider({
  className,
  label,
  defaultValue,
  value,
  startLabel,
  endLabel,
  formatValue,
  min = 0,
  max = 100,
  ...props
}: SliderProps) {
  const initialValue = value ?? defaultValue;
  const thumbCount = Array.isArray(initialValue) ? Math.max(initialValue.length, 1) : 1;
  const thumbs = Array.from({ length: thumbCount }, (_, index) => index);

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(className)}
      {...props}
    >
      <div className="flex w-full items-start justify-between gap-4">
        <SliderPrimitive.Label className="text-label text-text-primary">
          {label}
        </SliderPrimitive.Label>
        {formatValue ? (
          <SliderPrimitive.Value className="text-caption text-accent-text">
            {(formattedValues, values) => formatValue(formattedValues, values)}
          </SliderPrimitive.Value>
        ) : (
          <SliderPrimitive.Value className="text-caption text-accent-text" />
        )}
      </div>

      <SliderPrimitive.Control data-slot="slider-control" className="flex items-center">
        <SliderPrimitive.Track data-slot="slider-track">
          <SliderPrimitive.Indicator data-slot="slider-indicator" />
          {thumbs.map((index) => (
            <SliderPrimitive.Thumb
              key={index}
              index={index}
              data-slot="slider-thumb"
              getAriaLabel={(thumbIndex) =>
                thumbCount > 1 ? `${label} ${thumbIndex === 0 ? "minimum" : "maximum"}` : label
              }
            />
          ))}
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>

      {startLabel || endLabel ? (
        <div data-slot="slider-ends">
          <span>{startLabel}</span>
          <span>{endLabel}</span>
        </div>
      ) : null}
    </SliderPrimitive.Root>
  );
}
