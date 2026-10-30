"use client";
import JobCard from "../components/card/job-card";
import PageTitle from "../components/text/page-title";
import { useLocale } from "@/context/useLocale";

export default function Experience() {
   const locale = useLocale();
   const villyzImpacts = [
      "x5 souscriptions",
      "x4 investisseurs",
      "+2.6 Millions d'€ financés sur la période",
   ];

   const buildrhImpacts = [
      "Accessibilité WCAG",
      "Modes daltonien & monochrome",
      "Polices et interlignes adaptables",
   ];

   const repozenImpacts = [
      "Plateforme en production",
      "Du front au full stack",
      "Équipe pluridisciplinaire",
   ];

   const beSwarmIpacts = [
      "Auth OAuth2",
      "Pair & mob programming",
      "Tests automatisés",
   ];

   const moduloImpacts = [
      "API sécurisée (OWASP)",
      "Conforme RGPD",
      "Front + back en solo",
   ];

   const isEn = locale?.locale === "en";
   return (
      <main className="p-2 mdPlus:pl-5 mdPlus:pr-5">
         <div className="max-w-5xl mx-auto 2xl:max-w-5xl">
            <PageTitle
               baseTextEn="Professionnal "
               coloredTextEn="Experience"
               baseTextFr="Expérience "
               coloredTextFr="Professionnelle"
            />
            <h2 className="mt-8 text-lg mdPlus:text-2xl text-center mdPlus:mt-4">
               {locale?.locale === "en"
                  ? "My journey through diverse roles"
                  : "Mon parcours à travers mes divers rôles"}
            </h2>
            <div className="mt-15 lg:mt-28">
               <JobCard
                  company="Villyz"
                  description="Startup fintech de financement participatif : d’abord développeur, puis responsable technique d’un produit financier en production, jusqu’à sa passation."
                  jobDuration="2023 - 2026"
                  job="Développeur full-stack, puis référent technique"
                  jobLink="/experience/villyz"
                  impacts={villyzImpacts}
                  isEn={isEn}
               />
               <JobCard
                  company="Mission freelance - Accessibilité et UX"
                  description="Remplacement d'un site vieillissant par un site plus moderne et accessible à tous, de l’analyse du besoin à la mise en ligne."
                  jobDuration="2023"
                  job="Développeur full-stack "
                  jobLink="/experience/website-redesign"
                  impacts={buildrhImpacts}
                  isEn={isEn}
               />
               <JobCard
                  company="Repozen"
                  description="Faciliter l’accès à la santé mentale via une plateforme associative, portée par une équipe structurée comme une vraie boîte tech. J’y suis passé du front-end au full stack."
                  jobDuration="2023"
                  job="Développeur front-end, puis développeur full-stack"
                  jobLink="/experience/repozen"
                  impacts={repozenImpacts}
                  isEn={isEn}
               />
               <JobCard
                  company="Be Swarm"
                  description="Au sein d'une équipe de quatre développeurs, conception de la partie Front-End d'une application de gestion bancaire."
                  jobDuration="2022"
                  job="Développeur front-end"
                  jobLink="/experience/beSwarm"
                  impacts={beSwarmIpacts}
                  isEn={isEn}
               />
               <JobCard
                  company="Modulo-tech"
                  description="Un forum social conçu de A à Z, front et back, en autonomie complète."
                  jobDuration="2022"
                  job="Développeur full-stack"
                  jobLink="/experience/modulo-tech"
                  impacts={moduloImpacts}
                  isEn={isEn}
               />
            </div>
            <section className="mt-15 border-t pt-5">
               <h2 className="text-2xl">Formation</h2>
               <div className="flex flex-col lg:flex-row lg:justify-between">
                  <div className="mt-4 border border-primary bg-card rounded-xl p-4 lg:w-[47%] ">
                     <h3 className="text-primary text-lg">
                        Développeur web - Openclassrooms{" "}
                        <i className="text-sm">2021</i>
                     </h3>

                     <h4 className="mt-4 lg:font-[16px] ">
                        Apprentissage de tous les aspect du métier (front, back,
                        full stack, SEO), via un parcours de réalisation de
                        projets validés par un jury de professionnels.
                     </h4>
                     <button className="mt-8">Voir plus</button>
                  </div>
                  <div className="mt-4 border border-primary bg-card rounded-xl p-4 lg:w-[47%]">
                     <h3 className="text-primary text-lg">
                        The Arena Project - Fondamentaux du génie logiciel{" "}
                        <i className="text-sm">2022-2023</i>
                     </h3>

                     <h4 className="lg:font-[16px] mt-4">
                        Apprentissage des fondamentaux du génie logiciel,
                        inspiré de la méthodologie de l&apos;École 42, sous
                        JavaScript / TypeScript / NodeJs : algorithmie
                        récursive, itérativité, backtracking, bases 10, bigO,
                        arbres binaires, file system...
                     </h4>
                  </div>
               </div>
            </section>
         </div>
      </main>
   );
}
