import OpenclassroomsContent from "@/app/education/openclassrooms/content";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Formation OpenClassrooms",
   description:
      "Le résumé parcours de formation de Benjamin Ducau via OpenClassrooms, le concept et les projets réalisés",
};

export default function Openclassrooms() {
   return (
      <main className="p-2 mdPlus:pl-5 mdPlus:pr-5">
         <OpenclassroomsContent />
      </main>
   );
}
