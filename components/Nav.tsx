"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/methode", label: "Method" },
  { href: "/werk", label: "Werk" },
  { href: "/contact", label: "Initiate" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
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
        <div className="pointer-events-auto hidden flex-col items-end gap-1 md:flex">
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

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
          className="pointer-events-auto relative h-10 w-10 md:hidden"
        >
          <span
            className={`absolute left-2 right-2 top-3 h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-2 right-2 top-[18px] h-0.5 bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-2 right-2 top-7 h-0.5 bg-white transition-transform duration-300 ${
              isOpen ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6 px-6 text-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${index * 90 + 120}ms` : "0ms" }}
              className={`font-syne font-[var(--font-syne)] text-[14vw] font-extrabold leading-[0.85] tracking-[-0.04em] uppercase transition-all duration-500 ${
                pathname === link.href ? "text-[#ff3300]" : "text-white hover:text-[#ff3300]"
              } ${isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            >
              {link.label}
            </Link>
          ))}
          <p
            style={{ transitionDelay: isOpen ? "420ms" : "0ms" }}
            className={`mt-8 font-mono text-xs tracking-[0.3em] uppercase text-white/40 transition-all duration-500 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            LOC: NL // BRABANT
          </p>
        </div>
      </div>
    </>
  );
}
