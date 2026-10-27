import type { SVGProps } from "react";

/**
 * Cobalt's icon set is intentionally tiny.
 * Every path below is traced from CobaltDS.fig, on a 10 × 10 optical grid.
 */
export function CheckIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      <path d="M1.67 5L3.75 7.08L7.92 2.5" />
    </svg>
  );
}

export function ChevronDownIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
      {...props}
    >
      <path d="M2.08 3.75L5 6.67L7.92 3.75" />
    </svg>
  );
}

export function ChevronRightIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
      {...props}
    >
      <path d="M3.75 2.08L6.67 5L3.75 7.92" />
    </svg>
  );
}
