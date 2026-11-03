import InfoCard from "@/app/components/card/info-card";
import ExperienceHeader from "@/app/components/page-layout/experience-header";
import BubbleText from "@/app/components/text/bubble-text";
import CustomLi from "@/app/components/text/custom-li";

export default function WebsiteRedesignContent() {
   const technos = ["Next.js", "Tailwind Css", "React.js", "Supabase"];
   const tools = ["Vercel", "Figma", "Git", "Github"];
   return (
      <>
         <ExperienceHeader
            job="Développeur full stack"
            company=" Mission client freelance"
            duration="Mai 2023 - Novembre 2023"
            isEn={false}
         />
         <div className="mt-14 flex flex-col lg:flex-row lg: mb-20">
            <div className="mdPlus:pr-[2rem]">
               <h3 className="text-xl text-primary underline">Le contexte</h3>
               <p className="mt-5">
                  La cliente avait un site wordpress vieillissant et difficile à
                  faire évoluer. Elle voulait le moderniser sans interrompre son
                  activité, et pouvoir gérer son contenu seule.
                  L&apos;accessibilité était une exigence de départ, pas une
                  option ajoutée à la fin.
               </p>
               <h3 className="text-xl text-primary mt-14 underline">
                  {" "}
                  Ce que j&apos;ai fait
               </h3>
               <p className="font-bold mt-5 lg:mt-8">
                  Comprendre avant de construire :
               </p>
               <ul className="list-disc pl-5 classic-li mt-3">
                  <li className="mt-2">
                     Analyse des besoins et priorisation des fonctionnalités
                     avec la cliente.
                  </li>
                  <li className="mt-2">
                     Réflexion UX et maquettes sur Figma avant toute ligne de
                     code.
                  </li>
                  <li className="mt-2">
                     Choix des technologies une fois le besoin posé : Next.js,
                     Supabase, déploiement sur Vercel, pour la maintenabilité et
                     les performances.
                  </li>
               </ul>
               <p className="font-bold mt-5 lg:mt-8">
                  Rendre le site utilisable par tous :
               </p>
               <ul className="list-disc pl-5 classic-li">
                  <li className="mt-2">
                     Travail selon les standards WCAG : structure sémantique
                     pour les technologies d&apos;assistance, navigation au
                     clavier, contrastes au moins AA.
                  </li>
                  <li className="mt-2">
                     Un module d&apos;accessibilité pour adapter
                     l&apos;affichage à chaque visiteur : modes daltonien et
                     monochrome, contrastes renforcés, police adaptée à la
                     dyslexie, interlignes augmentés.
                  </li>
                  <li className="mt-2">
                     Vérifications régulières avec WAVE et Lighthouse.
                  </li>
               </ul>
               <p className="font-bold mt-5 lg:mt-8">
                  Rendre la cliente autonome :
               </p>
               <ul className="list-disc pl-5 classic-li">
                  <li className="mt-2">
                     Un espace d&apos;administration pour publier et gérer son
                     contenu, notamment ses annonces, à l&apos;image de ce
                     qu&apos;elle avait sur son ancien site, sans passer par un
                     développeur.
                  </li>
                  <li className="mt-2">
                     Passage de relais à un collègue pour la finalisation et la
                     mise en ligne, avec un suivi à distance.
                  </li>
               </ul>
               <h3 className="text-xl text-primary mt-14 underline ">
                  Résultats
               </h3>
               <p className="mt-5">
                  Un site modernisé, accessible à tous, et que la cliente fait
                  vivre seule grâce à son espace d&apos;administration. <br />{" "}
                  Le module d&apos;accessibilité conçu pour ce projet sert
                  d&apos;ailleurs de base à celui de ce portfolio.
               </p>
            </div>
            {/* <aside className=" mt-10 sm:flex sm:justify-between sm:flex-wrap mdPlus:min-w-[270px] mdPlus:justify-start lg:w-[390px] lg:mt-0 lg:flex-col"> */}
            <aside className=" mt-10 lg:flex lg:min-w-[270px] lg:mt-0 lg:flex-col">
               <InfoCard bg="secondary" title="Impacts clés" hasBottomMargin>
                  <ul>
                     <CustomLi
                        description="Accessibilité WCAG"
                        type="primary"
                     />
                     <CustomLi
                        description="Modes daltonien & monochromes"
                        type="primary"
                     />
                     <CustomLi
                        description="Police & interlignes adaptables"
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
