"use client";
import CustomAppNavLink from "../components/button/custom-app-nav-link";
import JobCard from "../components/card/job-card";
import PageTitle from "../components/text/page-title";
import { useLocale } from "@/context/useLocale";

export default function Experience() {
   const locale = useLocale();
   const isEn = locale?.locale === "en";

   const villyzImpacts = isEn
      ? ["x5 investments", "x4 investors", "+€2.6M raised during my time there"]
      : [
           "x5 souscriptions",
           "x4 investisseurs",
           "+2.6 Millions d'€ financés sur la période",
        ];

   const buildrhImpacts = isEn
      ? [
           "WCAG accessibility",
           "Colorblind & monochrome modes",
           "Adjustable font & line spacing",
        ]
      : [
           "Accessibilité WCAG",
           "Modes daltonien & monochrome",
           "Polices et interlignes adaptables",
        ];

   const repozenImpacts = isEn
      ? [
           "Platform in production",
           "From front end to full stack",
           "Multidisciplinary team",
        ]
      : [
           "Plateforme en production",
           "Du front au full stack",
           "Équipe pluridisciplinaire",
        ];

   const beSwarmIpacts = isEn
      ? [
           "Automated testing",
           "API consumption with OAuth2 authentication",
           "Pair & mob programming",
        ]
      : ["Auth OAuth2", "Pair & mob programming", "Tests automatisés"];

   const moduloImpacts = isEn
      ? ["Secured API (OWASP)", "GDPR compliant", "Solo front end + back end"]
      : ["API sécurisée (OWASP)", "Conforme RGPD", "Front + back en solo"];

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
               {isEn
                  ? "My journey through diverse roles"
                  : "Mon parcours à travers mes divers rôles"}
            </h2>
            <div className="mt-15 lg:mt-28">
               <JobCard
                  company="Villyz"
                  description={
                     isEn
                        ? "Fintech crowdfunding startup: started as a developer, then became the technical lead for a live financial product, overseeing it through to the final handover."
                        : "Startup fintech de financement participatif : d'abord développeur, puis responsable technique d'un produit financier en production, jusqu'à sa passation."
                  }
                  jobDuration="2023 - 2026"
                  job={
                     isEn
                        ? "Full-Stack Developer, then Product Technical Lead"
                        : "Développeur full-stack, puis référent technique produit"
                  }
                  jobLink="/experience/villyz"
                  impacts={villyzImpacts}
                  isEn={isEn}
               />
               <JobCard
                  company={
                     isEn
                        ? "Freelance project - Accessibility & UX"
                        : "Mission freelance - Accessibilité et UX"
                  }
                  description={
                     isEn
                        ? "Replacing an aging website with a more modern one that is accessible to all, from requirements analysis to design."
                        : "Remplacement d'un site vieillissant par un site plus moderne et accessible à tous, de l'analyse du besoin à la conception."
                  }
                  jobDuration="2023"
                  job={
                     isEn ? "Full-Stack Developer" : "Développeur full-stack "
                  }
                  jobLink="/experience/website-redesign"
                  impacts={buildrhImpacts}
                  isEn={isEn}
               />
               <JobCard
                  company="Repozen"
                  description={
                     isEn
                        ? "Facilitating access to mental health support through a non-profit platform, driven by a team structured like a genuine tech company. I transitioned from front-end to full-stack development there."
                        : "Faciliter l'accès à la santé mentale via une plateforme associative, portée par une équipe structurée comme une vraie boîte tech. J'y suis passé du front-end au full stack."
                  }
                  jobDuration="2023"
                  job={
                     isEn
                        ? "Front-End Developer, then Full-Stack Developer"
                        : "Développeur front-end, puis développeur full-stack"
                  }
                  jobLink="/experience/repozen"
                  impacts={repozenImpacts}
                  isEn={isEn}
               />
               <JobCard
                  company="Be Swarm"
                  description={
                     isEn
                        ? "As part of a four-developer team, designed the front-end component of a banking management application."
                        : "Au sein d'une équipe de quatre développeurs, conception de la partie Front-End d'une application de gestion bancaire."
                  }
                  jobDuration="2022"
                  job={isEn ? "Front-End Developer" : "Développeur front-end"}
                  jobLink="/experience/beswarm"
                  impacts={beSwarmIpacts}
                  isEn={isEn}
               />
               <JobCard
                  company="Modulo-tech"
                  description={
                     isEn
                        ? "A social forum designed from A to Z, front end and back end, entirely independently."
                        : "Un forum social conçu de A à Z, front et back, en autonomie complète."
                  }
                  jobDuration="2022"
                  job={isEn ? "Full-Stack Developer" : "Développeur full-stack"}
                  jobLink="/experience/modulo-tech"
                  impacts={moduloImpacts}
                  isEn={isEn}
               />
            </div>
            <section className="mt-15 border-t pt-5 mb-20">
               <h2 className="text-2xl">Formation</h2>
               <div className="flex flex-col mt-8 lg:flex-row lg:justify-between">
                  <div className="mt-4 border border-primary bg-card rounded-xl p-4 lg:w-[47%]">
                     <h3 className="text-primary text-lg">
                        {isEn
                           ? "The Arena Project - Software Engineering Fundamentals"
                           : "The Arena Project - Fondamentaux du génie logiciel"}{" "}
                        <i className="text-sm">2022-2023</i>
                     </h3>

                     <h4 className="lg:font-[16px] mt-4 mb-8 overflow-hidden">
                        {isEn
                           ? "Inspired by the École 42 methodology, learning the fundamentals of software engineering : recursive algorithms, iterativity, backtracking, number bases, Big O notation, binary trees, file systems..."
                           : `Inspiré de la méthodologie de l&apos;École 42,
                        apprentissage des fondamentaux du génie logiciel :
                        algorithmie récursive, itérativité, backtracking, bases
                        10, bigO, arbres binaires, file system...`}
                     </h4>
                     <CustomAppNavLink
                        description={isEn ? "Show more" : "Voir plus"}
                        direction="forward"
                        href="/education/the-arena"
                        ariaLabel=""
                     />
                  </div>
                  <div className="mt-4 border border-primary bg-card rounded-xl p-4 lg:w-[47%] ">
                     <h3 className="text-primary text-lg">
                        {isEn
                           ? "Web Developer - Openclassrooms"
                           : "Développeur web - Openclassrooms"}{" "}
                        <i className="text-sm">2021</i>
                     </h3>

                     <h4
                        className={`mt-4 lg:font-[16px] mb-10 lg:mt-10 ${locale?.locale === "en" ? "lg:mb-10" : "lg:mb-15"}`}
                     >
                        {isEn
                           ? "Learning all aspects of the profession (front-end, back-end, full-stack, SEO) through a program centered on completing projects, which are then evaluated by a jury of professionals."
                           : "Apprentissage de tous les aspect du métier (front, back,full stack, SEO), via un parcours de réalisation de projets validés par un jury de professionnels."}
                     </h4>
                     <CustomAppNavLink
                        description={isEn ? "Show more" : "Voir plus"}
                        direction="forward"
                        href="/education/openclassrooms"
                        ariaLabel=""
                     />
                     {/* <button className="mt-8">Voir plus</button> */}
                  </div>
               </div>
            </section>
         </div>
      </main>
   );
}
