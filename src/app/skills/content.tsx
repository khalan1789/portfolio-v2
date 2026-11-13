"use client";
import { useLocale } from "@/context/useLocale";
import PageTitle from "../components/text/page-title";
import SkillCard from "../components/card/skill-card";
import CustomLi from "../components/text/custom-li";

export default function SkillsContent() {
   const locale = useLocale();
   return (
      <div className="max-w-5xl mx-auto 2xl:max-w-5xl">
         <PageTitle
            baseTextEn="My"
            coloredTextEn=" Skills"
            baseTextFr="Mes"
            coloredTextFr=" Compétences"
         />
         <h2 className="mt-8 text-2xl mdPlus:mt-4 text-center">
            {locale?.locale === "en"
               ? "Stack and expertise"
               : "Stack et expertise"}
         </h2>

         <div className="flex flex-col justify-around mt-10 p-2 sm:flex-row sm:flex-wrap mdPlus:justify-between">
            <SkillCard bg="card">
               <h3 className="text-primary text-lg font-bold md:text-xl">
                  Front-end
               </h3>
               <ul className="mt-3 lg:text-lg lg:mt-6">
                  <CustomLi description="React" type="secondary" />
                  <CustomLi
                     description="TypeScript / JavaScript"
                     type="secondary"
                  />
                  <CustomLi
                     description="CSS in JS / Tailwind"
                     type="secondary"
                  />
                  <CustomLi description="Next.js" type="secondary" />
               </ul>
            </SkillCard>
            <SkillCard bg="card">
               <h3 className="text-primary text-lg font-bold md:text-xl">
                  Back-end
               </h3>
               <ul className="mt-3 lg:text-lg lg:mt-6">
                  <CustomLi description="C# / .NET" type="secondary" />
                  <CustomLi
                     description={
                        locale?.locale === "en" ? "REST APIs" : "API REST"
                     }
                     type="secondary"
                  />
                  <CustomLi description="SQL - PostgreSQL" type="secondary" />
                  <CustomLi description="Node.js" type="secondary" />
               </ul>
            </SkillCard>
            <SkillCard bg="card">
               <h3 className="text-primary text-lg font-bold md:text-xl">
                  {locale?.locale === "en" ? "Tools" : "Outils"}
               </h3>
               <ul className="mt-3 lg:text-lg lg:mt-6">
                  <CustomLi description="Git / GitHub" type="secondary" />

                  <CustomLi description="Jira" type="secondary" />
                  <CustomLi description="Figma" type="secondary" />
                  <CustomLi
                     description="SQL Server Management"
                     type="secondary"
                  />
               </ul>
            </SkillCard>
         </div>
         <section className="border-primary border-t mt-10 lg:text-lg">
            <h4 className="mt-10 text-primary text-lg uppercase sm:mt-15 ">
               {locale?.locale === "en"
                  ? "Digital accessibility"
                  : "Accessibilité numérique"}
            </h4>
            <ul className="mt-5 inline-flex flex-wrap" role="list">
               <li>WCAG</li>
               <span aria-hidden="true" className="mx-3">
                  ·
               </span>
               <li>WAVE</li>
               <span aria-hidden="true" className="mx-3">
                  ·
               </span>
               <li>Lighthouse</li>
               <span aria-hidden="true" className="mx-3">
                  ·
               </span>
               <li>VoiceOver</li>
               <span aria-hidden="true" className="mx-3">
                  ·
               </span>
               <li className="whitespace-nowrap">
                  {locale?.locale === "en"
                     ? "Keyboard navigation"
                     : "Navigation clavier"}
               </li>
            </ul>
         </section>
         <section className="border-t border-primary mt-10 mb-15 sm:mt-15 lg:text-lg">
            <h4 className="mt-10 uppercase text-primary sm:mt-15">
               {locale?.locale === "en"
                  ? "Others skills"
                  : "Autres compétences"}
            </h4>
            <ul className="mt-5 inline-flex flex-wrap" role="list">
               <li>Confluence</li>
               <span aria-hidden="true" className="mx-3">
                  ·
               </span>
               <li>Metabase</li>
               <span aria-hidden="true" className="mx-3">
                  ·
               </span>
               <li className="whitespace-nowrap">Semantic UI</li>
               <span aria-hidden="true" className="mx-3">
                  ·
               </span>
               <li className="whitespace-nowrap">OVH Cloud</li>
               <span aria-hidden="true" className="mx-3">
                  ·
               </span>
               <li>Vue.js</li>
               <span aria-hidden="true" className="mx-3">
                  ·
               </span>
               <li>Notion</li>

               <span aria-hidden="true" className="mx-3">
                  ·
               </span>
               <li>Mailjet</li>
               <span aria-hidden="true" className="mx-3">
                  ·
               </span>
               <li>Mangopay</li>
            </ul>
         </section>
      </div>
   );
}
