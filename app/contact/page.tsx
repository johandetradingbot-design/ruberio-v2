import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Start Je Project Met Ruberio | Webdesign Brabant",
  description:
    "Klaar om te domineren? Neem contact op met Ruberio. Wij bouwen high-end websites die converteren.",
};

export default function ContactPage() {
  return <ContactClient />;
}
