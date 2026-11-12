"use client";
import ExperienceHeader from "@/app/components/page-layout/experience-header";
import CustomLi from "@/app/components/text/custom-li";
import ExternalLink from "@/app/components/text/external-link";
import { useLocale } from "@/context/useLocale";

export default function OpenclassroomsContent() {
   const locale = useLocale();
   const isEn = locale?.locale === "en";

   return (
      <div className="max-w-5xl mx-auto 2xl:max-w-5xl">
         <ExperienceHeader
            company="OpenClassrooms"
            job={
               isEn
                  ? "State-recognized qualification · EQF Level 5"
                  : "Développeur web · Titre RNCP Niveau 5 (Bac +2)"
            }
            isEn={isEn}
            period="2021"
         />
         <section>
            <h3 className="mt-10 text-xl font-bold">
               {isEn
                  ? "A hands-on professional program, validated project by project."
                  : "Un parcours professionnalisant, validé projet par projet."}
            </h3>
            <p className="mt-8 sm:mt-5 lg:mt3">
               {isEn
                  ? "Every step is a real project, presented to a panel of industry professionals and required to pass before moving on to the next. Guided by a dedicated mentor, but driven by autonomy: researching, understanding and digging deep were part of the learning. It covered the full scope of web development, from turning mockups into HTML/CSS and optimizing SEO to building back-ends and a complete full-stack application, all within the JavaScript ecosystem."
                  : "Chaque étape est un projet concret, soutenu devant un jury de professionnels et obligatoirement validé avant de pouvoir passer au suivant. Accompagné par un mentor dédié, mais avant tout autonome : chercher, comprendre et aller au fond des choses faisait partie de l'apprentissage. J'y ai appris le métier de développeur web de bout en bout, de l'intégration de maquettes en HTML/CSS au SEO, puis du back-end jusqu'à une application full stack complète, dans l'écosystème JavaScript."}
            </p>
         </section>
         <section className="mb-10 sm:mt-12 lg:mt-18">
            <h3 className="mt-10 text-2xl font-bold text-primary">
               {isEn ? "Completed projects" : "Les projets réalisés"}
            </h3>
            <h4 className="mt-14  text-lg font-bold sm:mt-10 lg:mt-10">
               {isEn
                  ? "Full-stack application · Groupomania"
                  : "Application full-stack · Groupomania"}
            </h4>
            <p className="mt-3 lg:mt-5">
               {isEn
                  ? "I was tasked with designing a comprehensive corporate social networ, from the database to the user interface, in accordance with a specific set of requirements. The goal of creating this social network was to foster stronger connections among the various employees at the company Groupomania."
                  : "Je devais concevoir un réseau social d'entreprise complet, de la base de données à l'interface, suivant un cahier des charges précis. Le but de la création de ce réseau social : recréé du liant entre les différents employés de l'entreprise Groupomania."}
            </p>
            <ul className="list-disc mt-5 classic-li">
               <CustomLi
                  description={
                     isEn
                        ? "Separate front-end/back-end architecture with a relational database"
                        : "Architecture front/back séparée avec base de données relationnelle"
                  }
                  type="primary"
               />
               <CustomLi
                  description={
                     isEn
                        ? "Secure authentication: bcrypt password hashing, JWT sessions, route-protecting middlewares"
                        : "Authentification sécurisée : mots de passe hachés (bcrypt), sessions par JWT, middlewares de protection des routes"
                  }
                  type="primary"
               />
               <CustomLi
                  description={
                     isEn
                        ? "Role management: an admin moderates content and can grant rights"
                        : "Gestion des rôles : un administrateur modère et peut accorder des droits"
                  }
                  type="primary"
               />
               <CustomLi
                  description={
                     isEn
                        ? "Implementation of a like system, with no option to dislike. This ensures that posts or comments can only be supported in a positive way, thereby improving interpersonal relations"
                        : "Mise en place d'un système de like, sans possibilité de dislike. Ainsi, les initiatives de publications ou commentaires ne peuvent être soutenuent que positivement, améliorant le relationnel"
                  }
                  type="primary"
               />
               <CustomLi
                  description={
                     isEn
                        ? "Free choice of framework: after comparing Vue, React and Angular, I picked Vue for its fast learning curve under a very tight deadline. This was also my first Single Page Application"
                        : "Choix de framework libre : après avoir comparé Vue, React et Angular, j'ai choisi Vue pour sa prise en main rapide, avec un délai très serré. C'était aussi ma découverte des Single Page Applications"
                  }
                  type="primary"
               />
            </ul>
            <p className="mt-6 mb-3 md:mb-5 lg:mb-6">
               <strong>{isEn ? "Stack : " : "Technos : "} </strong>
               Javascript · Vue 3 · Vuex · Bootstrap 5 · Node.js · Sequelize ·
               MySQL
            </p>
            <ExternalLink
               href="https://github.com/khalan1789/Groupomania-Social-Network-Project"
               ariaLabel={
                  isEn
                     ? "link to the github for the groupomania project, in a new tab"
                     : "lien vers le repo github du projet groupomania, dans un nouvel onglet"
               }
            >
               {" "}
               {isEn ? "See the repo on github" : `Voir le repo sur github`}
            </ExternalLink>
            <h4 className="mt-14  text-lg font-bold lg:mt-18">
               {isEn ? "Secure API · So Pekocko" : "API sécurisée · So Pekocko"}
            </h4>
            <p className="mt-3">
               {isEn
                  ? "Building the back-end of a food review app on my own, with user data security at its core."
                  : "Construire seul le back-end d'une application d'avis gastronomiques, en sécurisant les données des utilisateurs."}
            </p>
            <ul className="list-disc mt-5 classic-li">
               <CustomLi
                  description={
                     isEn
                        ? "REST API: routes, controllers, data models"
                        : "API REST : routes, contrôleurs, modèles de données"
                  }
                  type="primary"
               />
               <CustomLi
                  description={
                     isEn
                        ? "Bcrypt password hashing, JWT authentication"
                        : "Mots de passe hachés avec bcrypt, authentification par JWT"
                  }
                  type="primary"
               />
               <CustomLi
                  description={
                     isEn
                        ? "Authentication middlewares on sensitive routes"
                        : "Middlewares d'authentification sur les routes sensibles"
                  }
                  type="primary"
               />
               <CustomLi
                  description={
                     isEn
                        ? "Sensitive data isolated in environment variables"
                        : "Données sensibles isolées dans des variables d'environnement"
                  }
                  type="primary"
               />
            </ul>
            <p className="mt-6 mb-3 md:mb-5 lg:mb-6">
               <strong>{isEn ? "Stack : " : "Technos : "} </strong>
               Node.js · Express · MongoDB · Mongoose · BCrypt · JSON Web Token
               (JWT)
            </p>
            <ExternalLink
               href="https://github.com/khalan1789/So-Pejocko-Project"
               ariaLabel={
                  isEn
                     ? "link to the github groupomania's project, in a new tab"
                     : "lien vers le repo github du projet groupomania, dans un nouvel onglet"
               }
            >
               {" "}
               {isEn ? "See the project on github" : `Voir le repo sur github`}
            </ExternalLink>
            <h4 className="mt-14  text-lg font-bold lg:mt-18">
               {isEn
                  ? "SEO, performance & accessibility optimization · La Chouette Agence"
                  : "Optimisation SEO, performance & accessibilité · La Chouette Agence"}
            </h4>
            <p className="mt-3 lg:mt-5">
               {isEn
                  ? "Taking over an existing website to make it more visible, faster and more accessible."
                  : "Reprendre un site existant pour le rendre plus visible, plus rapide et plus accessible."}
            </p>
            <ul className="list-disc mt-5 classic-li">
               <CustomLi
                  description={
                     isEn
                        ? "Full audit, then selection of the 10 highest-impact improvements"
                        : "Audit complet du site, puis sélection des 10 améliorations les plus impactantes"
                  }
                  type="primary"
               />
               <CustomLi
                  description={
                     isEn
                        ? "SEO and performance optimizations, measured with Lighthouse"
                        : "Optimisations SEO et performance, mesurées avec Lighthouse"
                  }
                  type="primary"
               />
               <CustomLi
                  description={
                     isEn
                        ? "Accessibility fixes: contrast, colors and backgrounds reworked"
                        : "Corrections d'accessibilité : contrastes, couleurs et fonds revus"
                  }
                  type="primary"
               />
               <CustomLi
                  description={
                     isEn
                        ? "Written report presenting each improvement and its impact"
                        : "Rapport présentant chaque amélioration et son impact"
                  }
                  type="primary"
               />
            </ul>
            <p className="mt-6 mb-3">
               <strong>{isEn ? "Links : " : "Liens : "} </strong>
               <span>
                  {isEn ? "The repo" : "Le dépôt"}{" "}
                  <ExternalLink
                     href="https://github.com/khalan1789/P4_La_chouettte_agence_avant_optimisation"
                     ariaLabel={
                        isEn
                           ? "See the project before upgrades on github, in a new tab"
                           : "Voir le repo avant améliorations sur github, dans une nouvelle fenêtre"
                     }
                  >
                     {isEn ? "before upgrades" : "avant amélioration"}
                  </ExternalLink>
               </span>
               ,{" "}
               <span>
                  {isEn ? "the repo" : "le dépôt "}{" "}
                  <ExternalLink
                     href="https://github.com/khalan1789/La_Chouette_agence_optimised"
                     ariaLabel={
                        isEn
                           ? "See the project after upgrades on github, in a new tab"
                           : "Voir le repo après améliorations sur github, dans une nouvelle fenêtre"
                     }
                  >
                     {isEn ? "after upgrades" : "après amélioration"}
                  </ExternalLink>
               </span>
            </p>
            <h4 className="mt-14  text-lg font-bold lg:mt-18">
               {isEn
                  ? "Front-end & integration · Reservia, OhMyFood, Orinoco"
                  : "Front-end & intégration · Reservia, OhMyFood, Orinoco"}
            </h4>
            <p className="mt-3 lg:mt-5">
               {isEn
                  ? "From static mockup to dynamic interface."
                  : "De la maquette statique à l'interface dynamique."}
            </p>
            <ul className="list-disc classic-li mt-5 lg:text-lg">
               <CustomLi
                  description={
                     <>
                        <ExternalLink
                           href="https://github.com/khalan1789/Project-Reservia"
                           ariaLabel={
                              isEn
                                 ? "link to the github reservia's project, in a new tab"
                                 : "lien vers le repo github du projet reservia, dans un nouvel onglet"
                           }
                        >
                           Reservia
                        </ExternalLink>
                        <span>
                           {isEn
                              ? " : responsive HTML/CSS integration, faithful to the mockup"
                              : " : intégration responsive HTML/CSS fidèle à la maquette"}
                        </span>
                     </>
                  }
                  type="primary"
               />
               <CustomLi
                  description={
                     <>
                        <ExternalLink
                           href="https://github.com/khalan1789/OhMyFood"
                           ariaLabel={
                              isEn
                                 ? "link to the github OhMyFood's project, in a new tab"
                                 : "lien vers le repo github du projet OhMyFood, dans un nouvel onglet"
                           }
                        >
                           OhMyFood
                        </ExternalLink>
                        <span>
                           {isEn
                              ? " : mobile-first approach, CSS animations, Sass"
                              : " : approche mobile-first, animations CSS, Sass"}
                        </span>
                     </>
                  }
                  type="primary"
               />
               <CustomLi
                  description={
                     <>
                        <ExternalLink
                           href="https://github.com/khalan1789/Orinoco-project"
                           ariaLabel={
                              isEn
                                 ? "link to the github Orinoco's project, in a new tab"
                                 : "lien vers le repo github du projet Orinoco, dans un nouvel onglet"
                           }
                        >
                           Orinoco
                        </ExternalLink>
                        <span>
                           {isEn
                              ? " : vanilla JavaScript e-commerce front-end, API consumption, cart and checkout"
                              : " : front e-commerce en JavaScript natif, consommation d'API, panier et commande"}
                        </span>
                     </>
                  }
                  type="primary"
               />
            </ul>
         </section>
      </div>
   );
}
