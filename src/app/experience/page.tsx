"use client";
import JobCard from "../components/card/job-card";
import PageTitle from "../components/text/page-title";
import { useLocale } from "@/context/useLocale";

export default function Experience() {
   const locale = useLocale();
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
                  description="Fintech de financement participatif"
                  jobDuration="2023 - 2026"
                  job="Développeur full-stack, puis référent technique"
                  jobLink="/experiences"
               />
               <JobCard
                  company="Mission freelance - Accessibilité et UX"
                  description="Refonte d'un site client avec l'accessibilité comme exigence de départ : contraste, struture, prise en compte de déficiences utilisateur."
                  jobDuration="2023"
                  job="Développeur full-stack "
                  jobLink="/about"
               />
               <JobCard
                  company="Repozen"
                  description="Un site pour une association structurée comme une boîte tech (CTO, dev ops, équipes dev front et back, equipe UX, équipe SEO...), pour lequel j'ai démarré en tant que développeur front-end sur le portail partenaire, avant d'évoluer en full-stack sur la partie blog."
                  jobDuration="2023"
                  job="Développeur front-end, puis développeur full-stack"
                  jobLink="/experiences"
               />
               <JobCard
                  company="Be Swarm"
                  description="Au sein d'une équipe de quatre développeurs, conception de la partie Front-End d'une application bancaire en collaboration avec les autres membres du projet."
                  jobDuration="2022"
                  job="Développeur front-end"
                  jobLink="/experiences"
               />
               <JobCard
                  company="Modulo-tech"
                  description="Participation à un projet destiné à permettre aux développeurs juniors d'acquérir une première expérience complète de développement Full Stack."
                  jobDuration="2022"
                  job="Développeur full-stack"
                  jobLink="/experiences"
               />
            </div>
         </div>
      </main>
   );
}
