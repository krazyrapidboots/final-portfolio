import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * "DL" monogram logo mark.
 * Swap the artwork by replacing /public/logo-dl.png.
 * Size & shape are controlled with className (height, width, radius).
 *
 * Example: <LogoMark className="h-8 w-8 rounded-lg" />
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 overflow-hidden rounded-xl ring-1 ring-white/10 shadow-lg shadow-primary/20",
        className
      )}
    >
      <Image
        src="/logo-dl.png"
        alt="DL — Densel Lacson logo"
        fill
        sizes="48px"
        priority
        className="object-cover"
      />
    </span>
  );
}
