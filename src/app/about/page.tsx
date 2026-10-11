"use client";
import { useLocale } from "@/context/useLocale";
import React from "react";
import CustomSpan from "../components/text/custom-span";
import CustomLi from "../components/text/custom-li";

export default function About() {
   const locale = useLocale();
   return (
      <main className="p-2">
         <h1 className="text-3xl mt-10 text-center">
            {locale?.locale === "en" ? "About " : "À propos "}
            <CustomSpan label={locale?.locale === "en" ? "me " : " de moi "} />
         </h1>
         <p className="mt-8 text-2xl">
            {locale?.locale === "en"
               ? "My journey as a developer and what drives me "
               : "Mon parcours, en bref"}
         </p>
         <div>
            <h2 className="text-xl text-primary mt-10">
               {locale?.locale === "en"
                  ? "My story"
                  : "D'un métier de contact..."}
            </h2>
            <p className="mt-5">
               {locale?.locale === "en"
                  ? " "
                  : "Avant de coder ma première ligne, j’ai passé plus de treize ans dans la téléphonie mobile, et sans le savoir, j’y ai fait à la fois du front et du back. "}
            </p>
            <p className="mt-5">
               {locale?.locale === "en"
                  ? " "
                  : "Côté front, j’étais conseiller : c’était moi que le client voyait, celui qui lui présentait les produits et traduisait ses envies en solution. Puis, du jour au lendemain, la réparation m’a fait passer de l’autre côté, sous le capot, pour comprendre comment ces appareils étaient conçus. Dans les deux rôles, il fallait aussi servir les objectifs de l’enseigne, le business restant toujours en toile de fond."}
            </p>
            <h2 className="text-xl text-primary mt-10">
               {locale?.locale === "en" ? " " : "À celui de développeur"}
            </h2>
            <p className="mt-5">
               {locale?.locale === "en"
                  ? " "
                  : "C’est peut-être un clin d’œil du destin. Aujourd’hui, en développement, je retrouve ce même double regard, mais de façon volontaire : l’interface que l’utilisateur voit, et le code qui la fait tourner. Ma curiosité, déjà là à l’époque, m’a toujours poussé à comprendre avant de construire."}
            </p>
            <h2 className="text-xl text-primary mt-10">
               {locale?.locale === "en" ? " " : "Ce qui compte pour moi"}
            </h2>
            <ul>
               <CustomLi type="primary" description="Lorem ipsum dolor sit." />
               <CustomLi
                  type="primary"
                  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  "
               />
               <CustomLi
                  type="primary"
                  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  "
               />
               <CustomLi
                  type="primary"
                  description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi praeuta"
               />
            </ul>
         </div>
         <aside>
            <div className="rounded bg-card border border-primary mt-10 p-5">
               <h4 className="mt-5">Spécialisation</h4>
               <p className="mt-1 font-bold">Web full-stack</p>
               <h4 className="mt-5">Sensibilité</h4>
               <p className="mt-1 font-bold">Produit & utilisateurs</p>
               <h4 className="mt-5">Mode de travail</h4>
               <p className="mt-1 font-bold">
                  Full remote - Ouvert à de l&apos;hybride
               </p>
               <h4 className="mt-5">Localisation</h4>
               <p className="mt-1 font-bold">Dax / Landes</p>
            </div>
            <div></div>
         </aside>
      </main>
   );
}
