import type * as React from "react";

import { cn } from "@/lib/utils";

export function DemoRow({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("flex flex-wrap items-center gap-3", className)}>{children}</div>;
}

export function DemoStack({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex w-full max-w-control flex-col gap-4", className)}>{children}</div>
  );
}

export function DemoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {children}
    </div>
  );
}

export function DemoLabel({ children }: { children: React.ReactNode }) {
  return <span className="text-micro text-text-muted">{children}</span>;
}
