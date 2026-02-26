"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "KLANTONDERZOEK",
    description:
      "Wie ben je, wat doe je, voor wie doe je het. We lezen je business als een boek.",
  },
  {
    number: "02",
    title: "MARKTONDERZOEK",
    description:
      "Je concurrenten. Hun zwaktes. Jouw kansen. Vastgelegd voordat er ook maar een pixel getekend wordt.",
  },
  {
    number: "03",
    title: "DESIGNBESLISSINGEN",
    description:
      "Typografie. Kleur. Sfeer. Animatiestrategie. Alles vastgelegd voor de bouw. Geen verrassingen.",
  },
  {
    number: "04",
    title: "BOUWEN",
    description:
      "Codex-snelle oplevering. Performance-first, SEO-klaar, mobiel perfect.",
  },
  {
    number: "05",
    title: "REVIEW & LIVE",
    description:
      "Drie revisierondes. Kwaliteitscheck. Dan live - scherp en klaar om te converteren.",
  },
];

export default function MethodeClient() {
  const heroRefs = useRef<Array<HTMLElement | null>>([]);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    heroRefs.current.forEach((line, index) => {
      if (!line) return;

      line.style.transform = "translateY(100%)";
      line.style.opacity = "0";

      window.setTimeout(() => {
        line.style.transition = "transform 650ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease";
        line.style.transform = "translateY(0)";
        line.style.opacity = "1";
      }, index * 150);
    });

    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = "0";
      window.setTimeout(() => {
        if (!subtitleRef.current) return;

        subtitleRef.current.style.transition = "opacity 420ms ease";
        subtitleRef.current.style.opacity = "1";
      }, 380);
    }
  }, []);

  return (
    <main className="bg-black px-4 pb-24 pt-32 text-white md:px-8">
      <section className="mx-auto max-w-6xl">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-[#ff3300]">Protocol</p>

        <div className="overflow-hidden">
          <h1
            ref={(node) => {
              heroRefs.current[0] = node;
            }}
            className="font-syne text-[16vw] font-extrabold uppercase leading-[0.85] tracking-[-0.04em] md:text-[11vw]"
            style={{ transform: "translateY(100%)", opacity: 0, willChange: "transform" }}
          >
            DE
          </h1>
        </div>

        <div className="overflow-hidden">
          <p
            ref={(node) => {
              heroRefs.current[1] = node;
            }}
            className="font-syne text-[16vw] font-extrabold uppercase leading-[0.85] tracking-[-0.04em] text-[#ff3300] md:text-[11vw]"
            style={{ transform: "translateY(100%)", opacity: 0, willChange: "transform" }}
          >
            METHODE.
          </p>
        </div>

        <p
          ref={subtitleRef}
          className="mt-8 max-w-xl font-mono text-xs uppercase tracking-[0.3em] text-white/60"
          style={{ opacity: 0 }}
        >
          Zo bouwen wij. Geen bullshit.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-6xl">
        {steps.map((step) => (
          <article
            key={step.number}
            className="grid grid-cols-1 gap-6 border-b border-white/15 py-10 md:grid-cols-[140px_1fr_1.3fr] md:items-start"
          >
            <p className="font-syne text-6xl font-extrabold leading-none text-[#ff3300] md:text-7xl">
              {step.number}
            </p>
            <h2 className="font-syne text-3xl font-extrabold uppercase leading-[0.85] tracking-[-0.04em] md:text-4xl">
              {step.title}
            </h2>
            <p className="font-mono text-sm leading-relaxed text-white/70 md:text-base">{step.description}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto mt-24 max-w-4xl">
        <div className="relative border border-white/20 px-8 py-10 md:px-16 md:py-14">
          <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-[#ff3300]" />
          <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-[#ff3300]" />
          <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#ff3300]" />
          <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#ff3300]" />

          <p className="mb-10 font-mono text-xs uppercase tracking-[0.2em] text-[#ff3300]">NEXT STEP</p>
          <h2 className="mb-10 font-syne text-5xl font-extrabold uppercase leading-[0.9] tracking-[-0.04em] md:text-7xl">
            Klaar om te starten?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-white px-8 py-5 font-mono text-sm font-bold uppercase tracking-widest text-black transition-colors duration-0 hover:bg-[#ff3300] hover:text-white"
          >
            <span className="h-2 w-2 animate-pulse bg-black" />
            INITIATE PROJECT
          </Link>
        </div>
      </section>
    </main>
  );
}
