"use client";

import { Experience } from "@/types/types";
import InfoCard from "../components/card/info-card";
import ExperienceHeader from "../components/page-layout/experience-header";
import { useLocale } from "@/context/useLocale";
import BubbleText from "../components/text/bubble-text";
import CustomLi from "../components/text/custom-li";
import { Fragment } from "react/jsx-runtime";
import { SECTION_LABELS } from "../../helper/helper";
import TableExperience from "../components/table/table-experience";

type Props = {
   experience: Experience;
};

export default function ExperienceDetail({ experience }: Props) {
   const currentLocale = useLocale()?.locale === "en" ? "en" : "fr";
   const sectionLabels = SECTION_LABELS[currentLocale];

   const sectionSubHeader = (contain: string, style?: string) => {
      if (experience.steps.length > 1) {
         return <h4 className={`${style}`}>{contain}</h4>;
      }
      return <h3 className={style}>{contain}</h3>;
   };

   const listHeader = (contain: string, style?: string) => {
      if (experience.steps.length > 1) {
         return <h5 className={`experience-subtitle ${style}`}>{contain}</h5>;
      }
      return <h4 className={`experience-subtitle ${style}`}>{contain}</h4>;
   };

   const testimonyTitle = {
      en: "Testimony :",
      fr: "Témoignage :",
   };

   return (
      <>
         <ExperienceHeader
            job={experience.role[currentLocale]}
            company={experience.company[currentLocale]}
            period={experience.period[currentLocale]}
            isEn={currentLocale === "en"}
         />
         <div className="mt-14 flex flex-col lg:flex-row mb-10 lg:mb-20">
            <div className="mdPlus:pr-[2rem]">
               <h3
                  data-animate="reveal-up"
                  className="text-xl text-primary font-bold border-l-4 border-typography pl-3"
               >
                  {sectionLabels.context}
               </h3>
               <p data-animate="reveal-up" className="mt-4 ">
                  {experience.context[currentLocale]}
               </p>

               {experience.steps.map((step, index) => {
                  return (
                     <section
                        data-animate={
                           experience.steps.length > 1 ? "" : "reveal-up"
                        }
                        className="mt-14 lg:mt-20 max-w-[62ch]"
                        key={index}
                     >
                        {step.title && (
                           <h3 className="text-2xl text-primary ">
                              {step.title[currentLocale]}
                           </h3>
                        )}
                        {step.period && (
                           <p className="mt-2">
                              <i>{step.period[currentLocale]}</i>
                           </p>
                        )}
                        {step.situation && (
                           <section>
                              {sectionSubHeader(
                                 sectionLabels.situation,
                                 "mt-6 font-bold text-lg",
                              )}
                              <p className="mt-4">
                                 {step.situation[currentLocale]}
                              </p>
                           </section>
                        )}
                        {sectionSubHeader(
                           sectionLabels.whatIDid,
                           "border-l-4 border-typography pl-3 text-xl text-primary mt-10 font-bold lg:mt-12",
                        )}
                        {step.sections?.map((section, index) => {
                           return (
                              <Fragment key={index}>
                                 {section.title &&
                                    listHeader(
                                       section.title[currentLocale],
                                       "font-bold mt-6 lg:mt-8",
                                    )}
                                 <ul className=" pl-5 classic-li mt-4 mb-8">
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
                        {sectionSubHeader(
                           sectionLabels.results,
                           "border-l-4 border-typography pl-3 text-xl text-primary mt-10 font-bold lg:mt-12",
                        )}
                        {step.results !== undefined &&
                        step.results.length > 1 ? (
                           <ul className=" pl-5 classic-li mt-6">
                              {step.results.map((element, index) => {
                                 return (
                                    <CustomLi
                                       key={index}
                                       description={element[currentLocale]}
                                       type="primary"
                                    />
                                 );
                              })}
                           </ul>
                        ) : (
                           <p className="mt-5 lg:mt-6">
                              {step.results![0][currentLocale]}
                           </p>
                        )}
                        {step.metrics && (
                           <>
                              {step.metrics.title &&
                                 sectionSubHeader(
                                    step.metrics.title[currentLocale],
                                    "border-l-4 border-typography pl-3 text-xl text-primary mt-14 font-bold",
                                 )}
                              {step.metrics.description && (
                                 <p className="mt-5 mb-10">
                                    {step.metrics.description[currentLocale]}
                                 </p>
                              )}
                              {step.metrics.table && (
                                 <TableExperience
                                    content={step.metrics.table}
                                 />
                              )}
                              {step.metrics.tableSource && (
                                 <p className="mt-5 italic">
                                    {step.metrics.tableSource[currentLocale]}
                                 </p>
                              )}
                              {step.metrics.citation && (
                                 <div>
                                    {sectionSubHeader(
                                       testimonyTitle[currentLocale],
                                       "pl-3 mt-10 font-bold mb-5",
                                    )}
                                    {step.metrics.citation[currentLocale]}
                                 </div>
                              )}
                           </>
                        )}
                     </section>
                  );
               })}
            </div>
            <aside className=" mt-10 lg:flex lg:min-w-[270px] lg:mt-0 lg:flex-col">
               <InfoCard
                  bg="secondary"
                  title={sectionLabels.keyImpacts}
                  hasBottomMargin
                  animate="from-right"
               >
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
               <InfoCard
                  title={sectionLabels.technologies}
                  bg="card"
                  hasBottomMargin
                  animate="from-right"
               >
                  <p className="flex flex-wrap mt-4 list-none">
                     {experience.technos.map((techno, index) => {
                        return <BubbleText key={index} description={techno} />;
                     })}
                  </p>
               </InfoCard>
               <InfoCard
                  animate="from-right"
                  title={sectionLabels.tools}
                  bg="card"
               >
                  <p className="flex flex-wrap mt-4 list-none">
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
