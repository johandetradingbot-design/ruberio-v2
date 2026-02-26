import type { Metadata } from "next";
import MethodeClient from "./MethodeClient";

export const metadata: Metadata = {
  title: "De Methode — Hoe Ruberio Werkt | Webdesign Brabant",
  description:
    "Ontdek hoe Ruberio high-end websites bouwt. Van klantonderzoek tot live lancering — geen bullshit, wel resultaat.",
};

export default function MethodePage() {
  return <MethodeClient />;
}
