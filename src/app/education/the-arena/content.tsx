"use client";
import ExperienceHeader from "../../components/page-layout/experience-header";
import { useLocale } from "@/context/useLocale";
import ArenaSteps from "./arena-steps";

export default function TheArenaContent() {
   const locale = useLocale();
   const isEn = locale?.locale === "en";
   return (
      <div className="max-w-5xl mx-auto 2xl:max-w-5xl">
         <ExperienceHeader
            company="The Arena"
            job="Fondamentaux du génie logiciel"
            period="2022 - 2023"
            isEn={isEn}
         />
         <section>
            <p className="mt-8 mb-10 sm:mt-10 lg:mb-13">
               {isEn
                  ? "Arena 01 is a program designed by former École 42 students to give developers the foundations that job-focused courses don't have time to cover. A 42-inspired approach: no lectures, just research, experimentation and reading the docs. Each step is only validated after a strict review, with no way to move on until it's passed. The concepts are language-agnostic; hands-on work was done in TypeScript and Node.js. These foundations serve me every day, and they are what will allow me to get to grips with C# so quickly later on."
                  : "Arena 01 est un parcours conçu par d'anciens élèves de l'École 42 pour donner aux développeurs les fondations que les formations au métier n'ont pas le temps d'aborder. Pédagogie inspirée de 42 : pas de cours magistral, on cherche, on teste, on lit la documentation. Chaque étape n'est validée qu'après un contrôle strict, sans possibilité de passer à la suivante avant. Les notions étudiées sont indépendantes du langage ; pour la pratique, le parcours utilisait TypeScript et Node.js. Ces bases me servent tous les jours, et ce sont elles qui me permettrons de prendre en main C# aussi rapidement par la suite."}
            </p>
            <ArenaSteps />
            <p className="mt-10 italic text-primary mb-10">
               {isEn
                  ? "The Arena Project has since ceased operations. The badges from each step and the final certificate above attest to the successful completion of the program."
                  : "The Arena Project a depuis cessé son activité. Les badges de chaque étape et le certificat final ci-dessus attestent de la réussite du parcours."}
            </p>
         </section>
      </div>
   );
}
