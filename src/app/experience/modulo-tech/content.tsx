"use client";
import InfoCard from "@/app/components/card/info-card";
import ExperienceHeader from "@/app/components/page-layout/experience-header";
import BubbleText from "@/app/components/text/bubble-text";
import CustomLi from "@/app/components/text/custom-li";
import { useLocale } from "@/context/useLocale";

export default function ModuloTechContent() {
   const locale = useLocale();
   const technos = [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Styled Components",
   ];
   const tools = ["Git", "Github"];
   return (
      <>
         <ExperienceHeader
            job={
               locale?.locale === "en"
                  ? "Full Stack Developper"
                  : "Développeur Full Stack"
            }
            company="Modulo Tech"
            duration={
               locale?.locale === "en" ? "April - may 2022" : "Avril - mai 2022"
            }
            isEn={locale?.locale === "en"}
         />
         <div className="mt-14 flex flex-col lg:flex-row lg: mb-20">
            <div className="mdPlus:pr-[2rem]">
               <h3 className="text-xl text-primary underline">Le contexte</h3>
               <p className="mt-5">
                  Modulo Tech proposait des projets complets pour se confronter
                  à un vrai cycle de développement, du cahier des charges à la
                  livraison. Le sujet : un forum social de questions-réponses,
                  inspiré de Stack Overflow. J&apos;en avais la charge entière,
                  front comme back.
               </p>
               <h3 className="text-xl text-primary mt-14 underline">
                  {" "}
                  Ce que j&apos;ai fait
               </h3>
               <p className="font-bold mt-5 lg:mt-8">
                  Construire le produit de bout en bout
               </p>
               <ul className="list-disc pl-5 classic-li mt-3">
                  <li className="mt-2">
                     Conception et développement de l&apos;API (Node.js,
                     Express, MongoDB) et de l&apos;interface (React, Redux
                     Toolkit, Styled Components).
                  </li>
                  <li className="mt-2">
                     Gestion complète du cycle de vie du contenu : création,
                     modification et suppression des publications et des
                     comptes.
                  </li>
               </ul>
               <p className="font-bold mt-5 lg:mt-8">
                  Sécuriser et respecter les données des utilisateurs
               </p>
               <ul className="list-disc pl-5 classic-li">
                  <li className="mt-2">
                     API sécurisée en suivant les recommandations OWASP, mots de
                     passe hachés.
                  </li>
                  <li className="mt-2">
                     Parcours de récupération de mot de passe.
                  </li>
                  <li className="mt-2">
                     Conformité RGPD : suppression réelle des données à la
                     demande de l&apos;utilisateur.
                  </li>
                  <li className="mt-2">
                     Protection des routes côté front (composant d&apos;ordre
                     supérieur).
                  </li>
               </ul>
               <h3 className="text-xl text-primary mt-14 underline ">
                  Résultats
               </h3>
               <p className="mt-5">
                  Une application full stack fonctionnelle, livrée seul, avec un
                  code consultable sur{" "}
                  <a
                     href={
                        "https://github.com/khalan1789/Stackoverflou-project"
                     }
                     target="_blank"
                     className="underline hover:text-primary"
                  >
                     GitHub
                  </a>
                  . J’avais déjà construit un forum en formation avec Vue.js et
                  une base SQL. Ce projet m’a permis de le refaire autrement :
                  React et Redux Toolkit côté front, MongoDB côté données, et
                  une sécurité plus poussée (protection des routes, récupération
                  de mot de passe). <br />
                  Comparer les deux approches sur un même produit m’a donné un
                  avis concret sur le choix d’une base relationnelle ou NoSQL
                  selon le projet. Il a aussi renforcé ma curiosité pour le
                  back-end.
               </p>
            </div>
            <aside className=" mt-10 lg:flex lg:min-w-[270px] lg:mt-0 lg:flex-col">
               <InfoCard bg="secondary" title="Impacts clés" hasBottomMargin>
                  <ul>
                     <CustomLi
                        description="Front + back en solo"
                        type="primary"
                     />
                     <CustomLi description="Conforme RGPD" type="primary" />
                     <CustomLi
                        description="API sécurisée (OWASP)"
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
