import { Metadata } from "next";
import ExperienceContent from "./content";

export const metadata: Metadata = {
   title: "Expériences",
   description:
      "Les expériences de Benjamin Ducau en développement, du dev front au dev full stack : fintech réglementée, SaaS en production, accessibilité web, React, .NET et Node.js.",
};

export default function Experience() {
   return (
      <main className="p-2 mdPlus:pl-5 mdPlus:pr-5">
         <ExperienceContent />
      </main>
   );
}
