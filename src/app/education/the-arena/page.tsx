import TheArenaContent from "./content";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Formation The Arena Project",
   description:
      "Le parcours de Benjamin Ducau via la formation de The Arena Project : de l'apprentissage à la maîtrise des fondamentaux logiciels, inspirée de la méthodologie de l'École 42",
};

export default function TheArena() {
   return (
      <main className="p-2 mdPlus:pl-5 mdPlus:pr-5">
         <TheArenaContent />
      </main>
   );
}
