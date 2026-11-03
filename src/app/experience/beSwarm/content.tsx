"use client";
import InfoCard from "@/app/components/card/info-card";
import ExperienceHeader from "@/app/components/page-layout/experience-header";
import BubbleText from "@/app/components/text/bubble-text";
import CustomLi from "@/app/components/text/custom-li";
import { useLocale } from "@/context/useLocale";

export default function BeSwarmContent() {
   const locale = useLocale();
   const technos = [
      "React",
      "Tailwind CSS",
      "Jest",
      "React Testing Library",
      "OAuth2",
   ];
   const tools = [
      "GitLab",
      "Swagger",
      "Postman",
      "Figma",
      "Prettier",
      "ESLint",
   ];
   return (
      <>
         <ExperienceHeader
            job={
               locale?.locale === "en"
                  ? "Front End Developer"
                  : "Développeur Front End"
            }
            company="Be Swarm"
            duration={
               locale?.locale === "en"
                  ? "May - november 2022"
                  : "Mai - novembre 2022"
            }
            isEn={locale?.locale === "en"}
         />
         <div className="mt-14 flex flex-col lg:flex-row lg: mb-20">
            <div className="mdPlus:pr-[2rem]">
               <h3 className="text-xl text-primary underline">Le contexte</h3>
               <p className="mt-5">
                  BeSwarm organisait un challenge réunissant une centaine de
                  développeurs, répartis en équipes sur des projets réels, afin
                  d&apos;ajouter de nouvelles fonctionnalités à leur catalogue
                  d&apos;applications. Avec trois autres développeurs, nous
                  devions concevoir la partie front-end d&apos;une application
                  de gestion de comptes bancaires pour un utilisateur de la
                  plateforme. Toutes les décisions se prenaient en collectif.
               </p>
               <h3 className="text-xl text-primary mt-14 underline">
                  {" "}
                  Ce que j&apos;ai fait
               </h3>
               <p className="font-bold mt-5 lg:mt-8">Cadrer avant de coder</p>
               <ul className="list-disc pl-5 classic-li mt-3">
                  <li className="mt-2">
                     Rédaction du cahier des charges pour l&apos;équipe.
                  </li>
                  <li className="mt-2">Maquettage des écrans sur Figma.</li>
               </ul>
               <p className="font-bold mt-5 lg:mt-8">Livrer un front fiable</p>
               <ul className="list-disc pl-5 classic-li">
                  <li className="mt-2">
                     Développement de l&apos;interface en React et Tailwind CSS,
                     en s&apos;appuyant sur une API documentée sous Swagger.
                  </li>
                  <li className="mt-2">
                     Authentification sécurisée avec OAuth2.
                  </li>
                  <li className="mt-2">
                     Mise en place des tests automatisés avec Jest et React
                     Testing Library.
                  </li>
               </ul>
               <p className="font-bold mt-5 lg:mt-8">Livrer un front fiable</p>
               <ul className="list-disc pl-5 classic-li">
                  <li className="mt-2">
                     Pair programming et mob programming au quotidien.
                  </li>
                  <li className="mt-2">
                     Première expérience de mentorat, que j&apos;ai prise au
                     sérieux et appréciée.
                  </li>
               </ul>
               <h3 className="text-xl text-primary mt-14 underline ">
                  Résultats
               </h3>
               <p className="mt-5">
                  Une application fonctionnelle livrée en équipe, testée et
                  sécurisée. J&apos;y ai appris que bien décider à plusieurs
                  demande d&apos;expliquer ses choix, une habitude que j&apos;ai
                  gardée.
               </p>
            </div>
            <aside className=" mt-10 lg:flex lg:min-w-[270px] lg:mt-0 lg:flex-col">
               <InfoCard bg="secondary" title="Impacts clés" hasBottomMargin>
                  <ul>
                     <CustomLi description="Tests automatisés" type="primary" />
                     <CustomLi
                        description="Consommation d'API avec Authenfitication OAuth2"
                        type="primary"
                     />
                     <CustomLi
                        description="Pair & mob programming"
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
