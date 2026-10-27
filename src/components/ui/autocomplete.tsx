import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";
import type * as React from "react";

import { cn } from "@/lib/utils";

export const Autocomplete = AutocompletePrimitive.Root;

export function AutocompleteInput({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Input>) {
  return (
    <AutocompletePrimitive.Input
      data-slot="autocomplete-input"
      className={cn(className)}
      {...props}
    />
  );
}

export function AutocompletePopup({
  className,
  sideOffset = 6,
  children,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Popup> & {
  sideOffset?: number;
}) {
  return (
    <AutocompletePrimitive.Portal>
      <AutocompletePrimitive.Positioner
        className="z-50 outline-none"
        sideOffset={sideOffset}
        align="start"
      >
        <AutocompletePrimitive.Popup
          data-slot="autocomplete-popup"
          className={cn(className)}
          {...props}
        >
          {children}
        </AutocompletePrimitive.Popup>
      </AutocompletePrimitive.Positioner>
    </AutocompletePrimitive.Portal>
  );
}

export function AutocompleteList({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.List>) {
  return (
    <AutocompletePrimitive.List
      data-slot="autocomplete-list"
      className={cn(className)}
      {...props}
    />
  );
}

export function AutocompleteEmpty({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Empty>) {
  return (
    <AutocompletePrimitive.Empty
      data-slot="autocomplete-empty"
      className={cn(className)}
      {...props}
    />
  );
}

export type AutocompleteItemProps = React.ComponentProps<typeof AutocompletePrimitive.Item> & {
  shortcut?: React.ReactNode;
};

export function AutocompleteItem({
  className,
  shortcut,
  children,
  ...props
}: AutocompleteItemProps) {
  return (
    <AutocompletePrimitive.Item data-slot="autocomplete-item" className={cn(className)} {...props}>
      <span className="truncate">{children}</span>
      {shortcut ? <span data-slot="suggestion-shortcut">{shortcut}</span> : null}
    </AutocompletePrimitive.Item>
  );
}

export function AutocompleteGroup({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Group>) {
  return (
    <AutocompletePrimitive.Group
      data-slot="autocomplete-group"
      className={cn(className)}
      {...props}
    />
  );
}

export function AutocompleteGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.GroupLabel>) {
  return (
    <AutocompletePrimitive.GroupLabel
      data-slot="suggestion-group-label"
      className={cn(className)}
      {...props}
    />
  );
}
