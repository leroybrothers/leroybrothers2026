import * as React from "react";

export type BrandMarkProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
};

/**
 * Leroy Brothers brand mark (vector).
 * Uses currentColor so it can adapt to theme tokens.
 */
export default function BrandMark({ title = "Leroy Brothers logo", ...props }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 14 6"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      shapeRendering="crispEdges"
      {...props}
    >
      <title>{title}</title>
      <path
        fill="currentColor"
        d="M0 3h14v3H0z M2 0h3v3H2z M6 0h3v3H6z M10 0h3v3h-3z"
      />
    </svg>
  );
}
