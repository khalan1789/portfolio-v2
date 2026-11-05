"use client";

import { Experience, Locale } from "@/types/types";
import InfoCard from "../components/card/info-card";
import ExperienceHeader from "../components/page-layout/experience-header";
import { useLocale } from "@/context/useLocale";
import BubbleText from "../components/text/bubble-text";
import CustomLi from "../components/text/custom-li";
import { Fragment } from "react/jsx-runtime";

type Props = {
   experience: Experience;
};

type SectionLabels = {
   context: string;
   whatIDid: string;
   results: string;
   takeaway: string;
   keyImpacts: string;
   technologies: string;
   tools: string;
};

const SECTION_LABELS: Record<Locale, SectionLabels> = {
   fr: {
      context: "Le contexte",
      whatIDid: "Ce que j'ai fait",
      results: "Résultats",
      takeaway: "Ce que j'en retiens",
      keyImpacts: "Impacts clés",
      technologies: "Technologies",
      tools: "Outils",
   },
   en: {
      context: "Context",
      whatIDid: "What I did",
      results: "Results",
      takeaway: "What I take away",
      keyImpacts: "Key impacts",
      technologies: "Technologies",
      tools: "Tools",
   },
};

export default function ExperienceDetail({ experience }: Props) {
   const currentLocale = useLocale()?.locale === "en" ? "en" : "fr";
   const sectionLabels = SECTION_LABELS[currentLocale];

   const hasSeveralSteps = experience.steps.length > 1;

   const SectionSubHeader = hasSeveralSteps ? "h4" : "h3"; // ToDO : change rendering h4 in including classname
   return (
      <>
         <ExperienceHeader
            job={experience.role[currentLocale]}
            company={experience.company[currentLocale]}
            period={experience.period[currentLocale]}
            isEn={currentLocale === "en"}
         />
         <div className="mt-14 flex flex-col lg:flex-row lg: mb-20">
            <div className="mdPlus:pr-[2rem]">
               <h3 className="text-xl text-primary underline">
                  {sectionLabels.context}
               </h3>
               <p className="mt-5">{experience.context[currentLocale]}</p>

               {experience.steps.map((step, index) => {
                  return (
                     <section className="mt-14" key={index}>
                        {step.title && (
                           <h3 className="text-xl text-primary ">
                              {step.title[currentLocale]}
                           </h3>
                        )}
                        {step.period && (
                           <p className="mt-3">{step.period[currentLocale]}</p>
                        )}
                        {step.context && (
                           <>
                              <SectionSubHeader>
                                 {sectionLabels.context}
                              </SectionSubHeader>
                              <p className="mt-5">
                                 {step.context[currentLocale]}
                              </p>
                           </>
                        )}

                        <SectionSubHeader className="text-xl text-primary underline mt-8">
                           {sectionLabels.whatIDid}
                        </SectionSubHeader>
                        {step.sections?.map((section, index) => {
                           return (
                              <Fragment key={index}>
                                 {section.title && (
                                    <p className="font-bold mt-5 lg:mt-8">
                                       {section.title[currentLocale]}
                                    </p>
                                 )}
                                 <ul className="list-disc pl-5 classic-li mt-3">
                                    {section.items.map((item, index) => {
                                       return (
                                          <CustomLi
                                             key={index}
                                             description={item[currentLocale]}
                                             type="primary"
                                          />
                                       );
                                    })}
                                 </ul>
                              </Fragment>
                           );
                        })}
                        <SectionSubHeader className="text-xl text-primary underline mt-14">
                           {sectionLabels.results}
                        </SectionSubHeader>
                        {step.results !== undefined &&
                        step.results.length > 1 ? (
                           step.results.map((element, index) => {
                              return (
                                 <CustomLi
                                    key={index}
                                    description={element[currentLocale]}
                                    type="primary"
                                 />
                              );
                           })
                        ) : (
                           <p className="mt-5">
                              {step.results![0][currentLocale]}
                           </p>
                        )}
                        {experience.takeaway && (
                           <>
                              <h3 className="text-xl text-primary mt-14 underline">
                                 {sectionLabels.takeaway}
                              </h3>
                              <p className="mt-5">
                                 {experience.takeaway[currentLocale]}
                              </p>
                           </>
                        )}
                     </section>
                  );
               })}
            </div>
            <aside className=" mt-10 lg:flex lg:min-w-[270px] lg:mt-0 lg:flex-col">
               <InfoCard bg="secondary" title="Impacts clés" hasBottomMargin>
                  <ul>
                     {experience.impacts.map((impact, index) => {
                        return (
                           <CustomLi
                              key={index}
                              description={impact[currentLocale]}
                              type="primary"
                           />
                        );
                     })}
                  </ul>
               </InfoCard>
               <InfoCard title="Technologies" bg="card" hasBottomMargin>
                  <p className="flex flex-wrap mt-4">
                     {experience.technos.map((techno, index) => {
                        return <BubbleText key={index} description={techno} />;
                     })}
                  </p>
               </InfoCard>
               <InfoCard title="Outils" bg="card">
                  <p className="flex flex-wrap mt-4">
                     {experience.tools.map((tool, index) => {
                        return <BubbleText key={index} description={tool} />;
                     })}
                  </p>
               </InfoCard>
            </aside>
         </div>
      </>
   );
}
