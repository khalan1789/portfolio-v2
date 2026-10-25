"use client";
import "./methodology.css";
import Step from "../step/step";
import { useLocale } from "@/context/useLocale";

export default function Methodology() {
   const locale = useLocale();
   return (
      <section className="methodo-section-container">
         <div className=" methodo-container ">
            <p>{locale?.locale === "en" ? "MY METHOD" : "MA MÉTHODE"}</p>
            <h2 className="font-bold text-3xl mt-5">
               {locale?.locale === "en"
                  ? "Understanding before building"
                  : "Comprendre avant de construire"}
            </h2>
            <div className="steps-container">
               <div className="step-block">
                  <Step stepNumber={1} />
                  <div className="step-description-container">
                     <h3>{locale?.locale === "en" ? "Engage" : "Échanger"}</h3>
                     <p className="step-paragraph">
                        {locale?.locale === "en"
                           ? "Pinpoint the need together with the people involved."
                           : "Cerner le besoin avec les personnes concernées."}
                     </p>
                  </div>
               </div>
               <div className="step-block">
                  <Step stepNumber={2} />
                  <div className="step-description-container">
                     <h3>
                        {locale?.locale === "en" ? "Understand" : "Comprendre"}
                     </h3>
                     <p className="step-paragraph">
                        {locale?.locale === "en"
                           ? "Identify the business constraints and edge cases."
                           : "Identifier les contraintes métier et les cas limites."}
                     </p>
                  </div>
               </div>
               <div className="step-block">
                  <Step stepNumber={3} />
                  <div className="step-description-container">
                     <h3>
                        {locale?.locale === "en" ? "Architect" : "Concevoir"}
                     </h3>
                     <p className="step-paragraph">
                        {locale?.locale === "en"
                           ? "Lay down an architecture and simple user journeys that are easy to evolve."
                           : "Poser une architecture et des parcours simples à faire évoluer."}
                     </p>
                  </div>
               </div>
               <div className="step-block">
                  <Step stepNumber={4} />
                  <div className="step-description-container">
                     <h3>{locale?.locale === "en" ? "Build" : "Construire"}</h3>
                     <p className="step-paragraph">
                        {locale?.locale === "en"
                           ? "Write clean code, with regular feedback along the way."
                           : "Développer proprement, avec des retours réguliers."}
                     </p>
                  </div>
               </div>
               <div className="step-block">
                  <Step stepNumber={5} />
                  <div className="step-description-container">
                     <h3>{locale?.locale === "en" ? "Ship" : "Livrer"}</h3>
                     <p className="step-paragraph">
                        {locale?.locale === "en"
                           ? "Measure real-world usage and adjust."
                           : " Mesurer l'usage réel et ajuster."}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
