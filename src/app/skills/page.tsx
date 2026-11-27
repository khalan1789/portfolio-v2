import { Metadata } from "next";
import SkillsContent from "./content";

export const metadata: Metadata = {
   title: "Compétences",
   description:
      "Compétences de Benjamin Ducau, développeur full stack à l'approche centrée utilisateur et à la vision produit : React, TypeScript, C#, .NET, SQL, Accessibilité et UX.",
};

export default function Skills() {
   return (
      <main className="p-2 mdPlus:pl-5 mdPlus:pr-5">
         <SkillsContent />
      </main>
   );
}
