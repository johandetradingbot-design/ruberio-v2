"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

type ContactFormValues = {
  naam: string;
  bedrijfsnaam: string;
  email: string;
  telefoon: string;
  bericht: string;
};

const initialValues: ContactFormValues = {
  naam: "",
  bedrijfsnaam: "",
  email: "",
  telefoon: "",
  bericht: "",
};

export default function ContactClient() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [state, setState] = useState<FormState>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setState("success");
      setValues(initialValues);
    } catch {
      setState("error");
    }
  };

  const fieldClassName =
    "w-full border border-white/20 bg-transparent px-4 py-3 font-mono text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#ff3300]";

  return (
    <main className="bg-black px-4 pb-24 pt-32 text-white md:px-8">
      <section className="mx-auto max-w-6xl">
        <h1 className="font-syne text-[16vw] font-extrabold uppercase leading-[0.85] tracking-[-0.04em] md:text-[11vw]">
          INITIEER CONTACT.
        </h1>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-white/60">
          System Status: Accepting Connections
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-3xl">
        <div className="relative border border-white/20 p-6 md:p-10">
          <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-[#ff3300]" />
          <div className="absolute right-0 top-0 h-4 w-4 border-r-2 border-t-2 border-[#ff3300]" />
          <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-[#ff3300]" />
          <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#ff3300]" />

          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="naam" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-[#ff3300]">
                Naam
              </label>
              <input
                id="naam"
                value={values.naam}
                onChange={(event) => setValues((prev) => ({ ...prev, naam: event.target.value }))}
                required
                className={fieldClassName}
                placeholder="Jouw naam"
              />
            </div>

            <div>
              <label
                htmlFor="bedrijfsnaam"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-[#ff3300]"
              >
                Bedrijfsnaam
              </label>
              <input
                id="bedrijfsnaam"
                value={values.bedrijfsnaam}
                onChange={(event) => setValues((prev) => ({ ...prev, bedrijfsnaam: event.target.value }))}
                required
                className={fieldClassName}
                placeholder="Naam van je bedrijf"
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-[#ff3300]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                  required
                  className={fieldClassName}
                  placeholder="naam@bedrijf.nl"
                />
              </div>

              <div>
                <label
                  htmlFor="telefoon"
                  className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-[#ff3300]"
                >
                  Telefoon (optioneel)
                </label>
                <input
                  id="telefoon"
                  value={values.telefoon}
                  onChange={(event) => setValues((prev) => ({ ...prev, telefoon: event.target.value }))}
                  className={fieldClassName}
                  placeholder="+31 6 12345678"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="bericht"
                className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-[#ff3300]"
              >
                Bericht
              </label>
              <textarea
                id="bericht"
                value={values.bericht}
                onChange={(event) => setValues((prev) => ({ ...prev, bericht: event.target.value }))}
                required
                rows={6}
                className={fieldClassName}
                placeholder="Beschrijf je projectdoel, scope en deadline"
              />
            </div>

            <div className="flex flex-col items-start gap-4">
              <button
                type="submit"
                disabled={state === "loading"}
                className="inline-flex items-center gap-4 bg-white px-8 py-5 font-mono text-sm font-bold uppercase tracking-widest text-black transition-colors duration-0 hover:bg-[#ff3300] hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span className="h-2 w-2 animate-pulse bg-black" />
                {state === "loading" ? "TRANSMITTING..." : "INITIATE PROJECT"}
              </button>

              {state === "success" && (
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff3300]">
                  CONNECTION ESTABLISHED.
                </p>
              )}

              {state === "error" && (
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70">
                  ERROR: CONNECTION FAILED.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
