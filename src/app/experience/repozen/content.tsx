"use client";
import InfoCard from "@/app/components/card/info-card";
import ExperienceHeader from "@/app/components/page-layout/experience-header";
import BubbleText from "@/app/components/text/bubble-text";
import CustomLi from "@/app/components/text/custom-li";
import { useLocale } from "@/context/useLocale";

export default function RepozenContent() {
   const locale = useLocale();
   const technos = [
      "TypeScript",
      "React",
      "React Query",
      "Next.Js",
      "Material UI",
      "PostgreSQL",
   ];
   const tools = ["GitLab", "GitLab CI/CD", "Husky", "Figma", "ClickUp"];
   return (
      <>
         <ExperienceHeader
            job={
               locale?.locale === "en"
                  ? "Front End Developper, then Full Stack Developer"
                  : "Développeur Front End, puis Développeur Full Stack"
            }
            company="Repozen"
            duration={
               locale?.locale === "en"
                  ? "May - september 2023"
                  : "Mai - septembre 2023"
            }
            isEn={locale?.locale === "en"}
         />
         <div className="mt-14 flex flex-col lg:flex-row lg: mb-20">
            <div className="mdPlus:pr-[2rem]">
               <h3 className="text-xl text-primary underline">Le contexte</h3>
               <p className="mt-5">
                  Repozen veut que chacun puisse prendre soin de sa santé
                  mentale sereinement. Sa plateforme met en relation le grand
                  public et les associations du secteur social.
                  L&apos;association fonctionnait comme une entreprise :
                  développeurs front, back et full stack, équipe UX/UI, équipe
                  SEO, deux DevOps, équipe communication, le tout piloté par un
                  CTO. C&apos;était ma première expérience dans une équipe
                  pluridisciplinaire de cette taille. Je l&apos;ai rejointe
                  d&apos;abord en tant que développeur front end, avant de
                  passer full stack.
               </p>
               <h3 className="text-xl text-primary mt-14 underline">
                  {" "}
                  Ce que j&apos;ai fait
               </h3>
               <p className="font-bold mt-5 lg:mt-8">
                  Faire évoluer le portail partenaires
               </p>
               <ul className="list-disc pl-5 classic-li mt-3">
                  <li className="mt-2">
                     Nouvelles fonctionnalités pour l&apos;espace des
                     associations partenaires (TypeScript, Next.js, React Query,
                     Material UI).
                  </li>
                  <li className="mt-2">
                     Débogage et refactoring de l&apos;existant, en lisant le
                     code back (Node.js) pour comprendre ce que le front
                     consommait.
                  </li>
                  <li className="mt-2">
                     Prise d&apos;initiative sur le backlog : dès que
                     j&apos;avais de la marge, je prenais des tickets
                     supplémentaires, corrections de bugs ou quick wins.
                  </li>
               </ul>
               <p className="font-bold mt-5 lg:mt-8">
                  Construire un nouveau produit en équipe
               </p>
               <ul className="list-disc pl-5 classic-li">
                  <li className="mt-2">
                     Passage en full stack pour participer à la création du blog
                     de l&apos;association, en Next.js et TypeScript, selon
                     l&apos;architecture définie par l&apos;équipe.
                  </li>
               </ul>
               <p className="font-bold mt-5 lg:mt-8">
                  S&apos;intégrer dans un cadre structuré
               </p>
               <ul className="list-disc pl-5 classic-li">
                  <li className="mt-2">
                     Sprints de 3 semaines, daily tech hebdomadaires, revues de
                     code.
                  </li>
                  <li className="mt-2">
                     Une vraie chaîne CI/CD : le code devait compiler en local
                     (hooks Husky) avant tout push, puis chaque branche était
                     revérifiée par la pipeline avant fusion.
                  </li>
                  <li className="mt-2">
                     Communication majoritairement asynchrone, tickets gérés
                     dans ClickUp, organisé comme un Jira.
                  </li>
                  <li className="mt-2">
                     Travail en lien avec l&apos;UX/UI, le SEO et les DevOps.
                  </li>
               </ul>
               <h3 className="text-xl text-primary mt-14 underline ">
                  Résultats
               </h3>
               <p className="mt-5">
                  Les sites tournent en{" "}
                  <a
                     href="https://repozen.fr/"
                     target="_blank"
                     className="underline"
                  >
                     production depuis
                  </a>
                  . Mon périmètre s&apos;est élargi du front au full stack en
                  quelques mois. Surtout, j&apos;ai appris à travailler avec des
                  métiers qui ne sont pas le mien, ce qui me servira par la
                  suite, notamment dès mon arrivée chez Villyz.
               </p>
            </div>
            <aside className=" mt-10 lg:flex lg:min-w-[270px] lg:mt-0 lg:flex-col">
               <InfoCard bg="secondary" title="Impacts clés" hasBottomMargin>
                  <ul>
                     <CustomLi
                        description="Plateforme en production"
                        type="primary"
                     />
                     <CustomLi
                        description="Du front au full stack"
                        type="primary"
                     />
                     <CustomLi
                        description="Équipe pluridisciplinaire"
                        type="primary"
                     />
                  </ul>
               </InfoCard>
               <InfoCard title="Technologies" bg="card" hasBottomMargin>
                  <p className="flex flex-wrap mt-4">
                     {technos.map((techno) => {
                        return (
                           <BubbleText
                              key={
                                 technos.indexOf(techno) + techno.slice(0, 4)[0]
                              }
                              description={techno}
                           />
                        );
                     })}
                  </p>
               </InfoCard>
               <InfoCard title="Outils" bg="card">
                  <p className="flex flex-wrap mt-4">
                     {tools.map((tool) => {
                        return (
                           <BubbleText
                              key={tools.indexOf(tool) + tool.slice(0, 4)[0]}
                              description={tool}
                           />
                        );
                     })}
                  </p>
               </InfoCard>
            </aside>
         </div>
      </>
   );
}
