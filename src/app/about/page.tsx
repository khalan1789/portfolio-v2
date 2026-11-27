import { Metadata } from "next";
import AboutContent from "./content";

export const metadata: Metadata = {
   title: "À propos",
   description:
      "Le parcours de Benjamin Ducau à travers ses divers rôles, de la relation client au développement full stack. Une approche produit guidée par une idée : comprendre avant de construire.",
};
export default function About() {
   return (
      <main className="p-2 mdPlus:pl-5 mdPlus:pr-5 lg:mx-auto ">
         <AboutContent />
      </main>
   );
}
