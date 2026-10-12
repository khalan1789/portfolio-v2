"use client";
import { useLocale } from "@/context/useLocale";
import PageTitle from "../components/text/page-title";
import SkillCard from "../components/card/skill-card";
import CustomLi from "../components/text/custom-li";

export default function Skills() {
   const locale = useLocale();
   return (
      <main className="p-2 mdPlus:pl-5 mdPlus:pr-5">
         <div className="max-w-5xl mx-auto 2xl:max-w-5xl">
            <PageTitle
               baseTextEn="My"
               coloredTextEn=" Skills"
               baseTextFr="Mes"
               coloredTextFr=" Compétences"
            />
            <p className="mt-8 text-2xl mdPlus:mt-4 text-center">
               {locale?.locale === "en"
                  ? "Stack and expertise"
                  : "Stack et expertise"}
            </p>

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
                     <CustomLi description="CSS in JS" type="secondary" />
                     <CustomLi description="Next.js" type="secondary" />
                  </ul>
               </SkillCard>
               <SkillCard bg="card">
                  <h3 className="text-primary text-lg font-bold md:text-xl">
                     Back-end
                  </h3>
                  <ul className="mt-3 lg:text-lg lg:mt-6">
                     <CustomLi description="C# / .NET" type="secondary" />
                     <CustomLi description="REST APIs" type="secondary" />
                     <CustomLi
                        description="SQL - PostgreSQL"
                        type="secondary"
                     />
                     <CustomLi description="Node.js" type="secondary" />
                  </ul>
               </SkillCard>
               <SkillCard bg="card">
                  <h3 className="text-primary text-lg font-bold md:text-xl">
                     {locale?.locale === "en" ? "Tools" : "Outils"}
                  </h3>
                  <ul className="mt-3 lg:text-lg lg:mt-6">
                     <CustomLi description="Git" type="secondary" />
                     <CustomLi description="Sql Server" type="secondary" />
                     <CustomLi description="Wave" type="secondary" />
                     <CustomLi description="Figma" type="secondary" />
                  </ul>
               </SkillCard>
            </div>
            <div className="border-t border-tercary mt-10 sm:mt-15 lg:text-lg">
               <h4 className="mt-10 sm:mt-15">
                  {locale?.locale === "en"
                     ? "OTHER SKILLS"
                     : "AUTRES COMPÉTENCES"}
               </h4>
               <p className="mt-5">
                  <span> Jira</span> ·<span> Confluence</span> ·
                  <span> OVH Cloud</span> ·<span> Filezilla</span> ·
                  <span> Semantic UI</span> ·
                  <span> Outils d&apos;accessibilité (Wave / Lightouse)</span> ·
               </p>
            </div>
         </div>
      </main>
   );
}
