"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav
      className="pointer-events-none fixed z-50 flex w-full items-start justify-between px-4 py-6 md:px-8"
      style={{
        mixBlendMode: "difference",
        transform: "translateZ(0)",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      <Link
        href="/"
        className="pointer-events-auto font-syne font-[var(--font-syne)] text-2xl font-extrabold tracking-tighter uppercase transition-colors hover:text-[#ff3300] md:text-3xl"
      >
        RUBERIO<span className="text-[#ff3300]">.</span>
      </Link>
      <div className="pointer-events-auto flex flex-col items-end gap-1">
        <div className="flex gap-8">
          <Link
            href="/methode"
            className="text-sm font-bold tracking-widest uppercase transition-colors hover:text-[#ff3300]"
          >
            Method
          </Link>
          <Link
            href="/werk"
            className="text-sm font-bold tracking-widest uppercase transition-colors hover:text-[#ff3300]"
          >
            Werk
          </Link>
          <Link
            href="/contact"
            className="text-sm font-bold tracking-widest uppercase transition-colors hover:text-[#ff3300]"
          >
            Initiate
          </Link>
        </div>
        <div className="hidden text-xs text-white/40 md:block">LOC: NL // BRABANT</div>
      </div>
    </nav>
  );
}
