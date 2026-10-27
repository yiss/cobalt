import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import type * as React from "react";

import { cn } from "@/lib/utils";

export const PreviewCard = PreviewCardPrimitive.Root;

export function PreviewCardTrigger({
  className,
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Trigger>) {
  return (
    <PreviewCardPrimitive.Trigger
      data-slot="preview-card-trigger"
      className={cn(className)}
      {...props}
    />
  );
}

export function PreviewCardPopup({
  className,
  sideOffset = 8,
  align = "start",
  children,
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Popup> & {
  sideOffset?: number;
  align?: React.ComponentProps<typeof PreviewCardPrimitive.Positioner>["align"];
}) {
  return (
    <PreviewCardPrimitive.Portal>
      <PreviewCardPrimitive.Positioner
        className="z-50 outline-none"
        sideOffset={sideOffset}
        align={align}
      >
        <PreviewCardPrimitive.Popup
          data-slot="preview-card-popup"
          className={cn(className)}
          {...props}
        >
          {children}
        </PreviewCardPrimitive.Popup>
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  );
}
