"use client";

/**
 * Floating blurred gradient blobs + faint grid.
 * Purely decorative; sits fixed behind all content.
 * Positions are static (no random) to avoid hydration mismatches.
 */
export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* faint grid */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      {/* primary blob */}
      <div className="animate-blob absolute -left-32 top-[-10%] h-[36rem] w-[36rem] rounded-full bg-primary/25 blur-[120px]" />
      {/* accent blob */}
      <div className="animate-blob animation-delay-2000 absolute right-[-10%] top-1/4 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[120px]" />
      {/* emerald blob */}
      <div className="animate-blob animation-delay-4000 absolute bottom-[-10%] left-1/3 h-[34rem] w-[34rem] rounded-full bg-emerald-600/20 blur-[120px]" />

      {/* top vignette */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
    </div>
  );
}
