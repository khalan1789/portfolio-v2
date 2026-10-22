import Step from "../step/step";
import "./methodology.css";
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
                     <h4>Échanger</h4>
                     <p className="step-paragraph">
                        Cerner le besoin avec les personnes concernées.
                     </p>
                  </div>
               </div>
               <div className="step-block">
                  <Step stepNumber={2} />
                  <div className="step-description-container">
                     <h4>Comprendre</h4>
                     <p className="step-paragraph">
                        Identifier les contraintes métier et les cas limites.
                     </p>
                  </div>
               </div>
               <div className="step-block">
                  <Step stepNumber={3} />
                  <div className="step-description-container">
                     <h4>Concevoir</h4>
                     <p className="step-paragraph">
                        Poser une architecture et des parcours simples à faire
                        évoluer.
                     </p>
                  </div>
               </div>
               <div className="step-block">
                  <Step stepNumber={4} />
                  <div className="step-description-container">
                     <h4>Construire</h4>
                     <p className="step-paragraph">
                        Développer proprement, avec des retours réguliers.
                     </p>
                  </div>
               </div>
               <div className="step-block">
                  <Step stepNumber={5} />
                  <div className="step-description-container">
                     <h4>Livrer</h4>
                     <p className="step-paragraph">
                        Mesurer l&apos;usage réel et ajuster.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
