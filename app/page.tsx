"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    title: "WEBDESIGN",
    copy: "High-end maatwerk websites die converteren. Geen templates, geen compromissen.",
  },
  {
    title: "SEO CONTENT",
    copy: "Maandelijks 2 blogartikelen die jouw site laten klimmen in Google. Content als wapen.",
  },
  {
    title: "ONDERHOUD",
    copy: "Maandelijks abonnement. Technisch scherp, altijd up-to-date, nul zorgen.",
  },
];

const steps = [
  {
    number: "01/",
    name: "ANALYSE",
    description: "Data, doelgroep en marktpositie vormen het startpunt van elke keuze.",
  },
  {
    number: "02/",
    name: "ONTWERP",
    description: "We ontwerpen een visuele hiarchie die focus afdwingt en vertrouwen bouwt.",
  },
  {
    number: "03/",
    name: "BOUWEN",
    description: "Code-first maatwerk met performance als harde randvoorwaarde.",
  },
  {
    number: "04/",
    name: "LANCEER",
    description: "Livegang met meetplan, iteratie en continue verbetering op conversie.",
  },
];

export default function Home() {
  const lineRefs = useRef<Array<HTMLElement | null>>([]);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    lineRefs.current.forEach((line, index) => {
      if (!line) return;

      line.style.transform = "translateY(100%)";

      window.setTimeout(() => {
        line.style.transition = "transform 600ms cubic-bezier(0.16, 1, 0.3, 1)";
        line.style.transform = "translateY(0)";
      }, index * 150);
    });

    if (subtitleRef.current) {
      window.setTimeout(() => {
        if (!subtitleRef.current) return;

        subtitleRef.current.style.transition = "opacity 500ms ease";
        subtitleRef.current.style.opacity = "1";
      }, 800);
    }
  }, []);

  useEffect(() => {
    const updatePanel = () => {
      if (!panelRef.current) return;

      const panelTranslate = Math.max(0, window.innerHeight - window.scrollY * 1.5);
      panelRef.current.style.transform = `translate3d(0, ${panelTranslate}px, 0) translateZ(0)`;
    };

    updatePanel();
    window.addEventListener("scroll", updatePanel, { passive: true });
    window.addEventListener("resize", updatePanel);

    return () => {
      window.removeEventListener("scroll", updatePanel);
      window.removeEventListener("resize", updatePanel);
    };
  }, []);

  return (
    <main className="bg-black text-white font-mono font-[var(--font-mono)]">
      <section className="relative h-[300vh] bg-black">
        <div
          className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden"
          style={{ transform: "translateZ(0)", willChange: "transform", backfaceVisibility: "hidden" }}
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="font-syne font-[var(--font-syne)] text-[30vw] font-extrabold -rotate-12 select-none opacity-[0.03]">
              BUILD OR DIE.
            </span>
          </div>

          <div className="relative z-10 px-4 text-center">
            <div className="overflow-hidden">
              <h1
                ref={(node) => {
                  lineRefs.current[0] = node;
                }}
                className="font-syne font-[var(--font-syne)] text-[14vw] md:text-[12vw] font-extrabold leading-[0.85] tracking-[-0.04em] uppercase text-white"
                style={{ transform: "translateY(100%)", willChange: "transform" }}
              >
                GEEN TEMPLATES.
              </h1>
            </div>
            <div className="overflow-hidden">
              <p
                ref={(node) => {
                  lineRefs.current[1] = node;
                }}
                className="font-syne font-[var(--font-syne)] text-[14vw] md:text-[12vw] font-extrabold leading-[0.85] tracking-[-0.04em] uppercase text-[#ff3300]"
                style={{ transform: "translateY(100%)", willChange: "transform" }}
              >
                GEEN EXCUSES.
              </p>
            </div>
            <p
              ref={subtitleRef}
              className="mt-12 font-mono text-xs tracking-[0.3em] uppercase text-white/50"
              style={{ opacity: 0 }}
            >
              HIGH-END WEBDESIGN BUREAU // BRABANT, NL
            </p>
          </div>

          <div
            ref={panelRef}
            className="fixed bottom-0 left-0 z-20 h-screen w-full border-t-[20px] border-[#ff3300] bg-white text-black"
            style={{
              transform: "translate3d(0, 100vh, 0) translateZ(0)",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="grid h-full grid-cols-1 gap-8 p-8 md:grid-cols-12 md:p-16">
              <div className="col-span-8 flex flex-col justify-end pb-20">
                <h2 className="font-syne font-[var(--font-syne)] text-[6vw] font-extrabold leading-[0.9] tracking-tighter uppercase">
                  Webdesign is dood. Wij bouwen conversiemachines.
                </h2>
              </div>
              <div className="col-span-4 flex flex-col justify-end pb-20">
                <div className="space-y-12 border-l-4 border-black pl-6">
                  <div>
                    <span className="font-syne font-[var(--font-syne)] text-5xl font-extrabold">0.4s</span>
                    <p className="mt-2 font-mono text-xs font-bold tracking-widest uppercase">Laadtijd Protocol</p>
                    <p className="mt-4 font-mono text-xs text-black/70">
                      Onze baseline: razendsnel laden voor maximale retentie en lagere bounce.
                    </p>
                  </div>
                  <div>
                    <span className="font-syne font-[var(--font-syne)] text-5xl font-extrabold text-[#ff3300]">15%</span>
                    <p className="mt-2 font-mono text-xs font-bold tracking-widest uppercase">Conversie Doel</p>
                    <p className="mt-4 font-mono text-xs text-black/70">
                      We optimaliseren op meetbare resultaten, geen visuele ruis zonder impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-30 bg-black px-4 py-32 md:px-8">
        <h2 className="mb-16 font-syne font-[var(--font-syne)] text-5xl md:text-6xl font-extrabold uppercase tracking-[-0.04em] leading-[0.85]">
          DIENSTEN.
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative border border-white/10 p-8 transition-transform duration-300 hover:-translate-y-2 [will-change:transform]"
            >
              <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[#ff3300]" />
              <div className="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 border-[#ff3300]" />
              <h3 className="mb-4 font-syne font-[var(--font-syne)] text-3xl font-extrabold uppercase tracking-[-0.04em] leading-[0.85]">
                {service.title}
              </h3>
              <p className="font-mono text-sm text-white/70">{service.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-30 bg-black px-4 py-32 md:px-8">
        <h2 className="mb-0 font-syne font-[var(--font-syne)] text-5xl font-extrabold uppercase tracking-[-0.04em] leading-[0.85]">
          DE METHODE.
        </h2>
        <div>
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-8 border-b border-white/10 py-12 md:items-center"
            >
              <span className="w-24 shrink-0 font-syne font-[var(--font-syne)] text-5xl font-extrabold text-[#ff3300]">
                {step.number}
              </span>
              <span className="flex-1 font-syne font-[var(--font-syne)] text-xl font-extrabold uppercase tracking-[-0.04em] leading-[0.85]">
                {step.name}
              </span>
              <p className="hidden max-w-xs text-right font-mono text-sm text-white/50 md:block">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-30 flex justify-center bg-black px-4 py-32">
        <div className="relative w-full max-w-4xl border border-white/20 p-8 md:p-16">
          <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-[#ff3300]" />
          <div className="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 border-[#ff3300]" />
          <p className="mb-12 font-mono text-xs tracking-[0.2em] uppercase text-[#ff3300]">
            System Status: Ready
          </p>
          <h2 className="mb-12 font-syne font-[var(--font-syne)] text-5xl md:text-7xl font-extrabold leading-[0.9] uppercase tracking-[-0.04em]">
            KLAAR OM TE
            <br />
            <span className="text-white/30">DOMINEREN.</span>
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-4 bg-white px-8 py-5 font-mono text-sm font-bold tracking-widest uppercase text-black transition-colors duration-0 hover:bg-[#ff3300] hover:text-white"
          >
            <span className="h-2 w-2 animate-pulse bg-black" />
            INITIATE PROJECT
          </a>
        </div>
      </section>
    </main>
  );
}
