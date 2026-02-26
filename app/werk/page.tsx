import type { Metadata } from "next";

const projects = [
  { number: "01", name: "VELDT INSTALLATIES", sector: "Installatiebedrijf" },
  { number: "02", name: "BRON FYSIOTHERAPIE", sector: "Zorg" },
  { number: "03", name: "APEX TRAINING", sector: "Sport & Fitness" },
  { number: "04", name: "MERIDIAN ADVOCATEN", sector: "Juridisch" },
  { number: "05", name: "FLORA CATERING", sector: "Horeca" },
  { number: "06", name: "STAAL ARCHITECTEN", sector: "Architectuur" },
];

export const metadata: Metadata = {
  title: "Ons Werk — Ruberio Portfolio | High-End Webdesign",
  description:
    "Bekijk het werk van Ruberio. Elk project een statement. Geen templates, geen compromissen.",
};

export default function WerkPage() {
  return (
    <main className="bg-black px-4 pb-24 pt-32 text-white md:px-8">
      <section className="mx-auto max-w-6xl">
        <h1 className="font-syne text-[16vw] font-extrabold uppercase leading-[0.85] tracking-[-0.04em] md:text-[11vw]">
          ONS WERK.
        </h1>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-white/60">
          Elk project een statement. Geen templates.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.number}
            className="group relative border border-white/10 bg-black p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff3300] [will-change:transform]"
          >
            <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-[#ff3300]" />
            <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-[#ff3300]" />
            <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#ff3300]" />
            <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#ff3300]" />

            <p className="font-syne text-5xl font-extrabold text-[#ff3300]">{project.number}</p>
            <h2 className="mt-6 font-syne text-3xl font-extrabold uppercase leading-[0.9] tracking-[-0.04em]">
              {project.name}
            </h2>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-white/70">{project.sector}</p>
            <p className="mt-2 font-mono text-xs text-white/60">High-end website / SEO Content</p>
            <div className="relative mt-8 aspect-video w-full overflow-hidden border border-white/10 bg-[#0a0a0a] transition-colors duration-300 group-hover:border-[#ff3300]/60">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4 text-center">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#ff3300] uppercase">
                  {index % 2 === 0 ? "[CLASSIFIED]" : "[COMING SOON]"}
                </span>
                <span className="font-syne text-2xl font-extrabold uppercase tracking-tight text-white/30 md:text-3xl">
                  {project.name}
                </span>
              </div>
              <div className="absolute left-2 top-2 h-3 w-3 border-l border-t border-[#ff3300]" />
              <div className="absolute right-2 top-2 h-3 w-3 border-r border-t border-[#ff3300]" />
              <div className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-[#ff3300]" />
              <div className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-[#ff3300]" />
            </div>
          </article>
        ))}
      </section>

      <p className="mx-auto mt-16 max-w-6xl font-mono text-xs text-white/30">Meer werk? Dat komt.</p>
    </main>
  );
}
