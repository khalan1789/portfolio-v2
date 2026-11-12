import ExternalLink from "@/app/components/text/external-link";
import { Experience } from "@/types/types";

export const ModuloTech: Experience = {
   slug: "modulo-tech",
   company: { en: "Modulo Tech", fr: "Modulo Tech" },
   role: {
      fr: "Développeur Full-Stack",
      en: "Full-Stack Developer",
   },
   period: { en: "April - May 2022", fr: "Avril - mai 2022" },
   context: {
      en: `Modulo Tech offered complete projects to experience a real development cycle, from specifications to delivery. The brief: a social Q&A forum inspired by Stack Overflow. I owned it entirely, front end and back end.`,
      fr: ` Modulo Tech proposait des projets complets pour se confronter à un vrai cycle de développement, du cahier des charges à la livraison. Le sujet : un forum social de questions-réponses, inspiré de Stack Overflow. J'en avais la charge entière, front comme back.`,
   },
   steps: [
      {
         sections: [
            {
               title: {
                  en: "Building the product end to end",
                  fr: "Construire le produit de bout en bout",
               },
               items: [
                  {
                     en: `Designed and built the API (Node.js, Express, MongoDB) and the interface (React, Redux Toolkit, Styled Components).`,
                     fr: `Conception et développement de l'API (Node.js,
                     Express, MongoDB) et de l'interface (React, Redux
                     Toolkit, Styled Components).`,
                  },
                  {
                     en: `Full content lifecycle management: creating, editing and deleting posts and accounts.`,
                     fr: `Gestion complète du cycle de vie du contenu : création,
                     modification et suppression des publications et des
                     comptes.`,
                  },
               ],
            },
            {
               title: {
                  en: "Securing and respecting user data",
                  fr: "Sécuriser et respecter les données des utilisateurs",
               },
               items: [
                  {
                     en: `API secured following OWASP recommendations, with hashed passwords.`,
                     fr: `API sécurisée en suivant les recommandations OWASP, mots de
                     passe hachés.`,
                  },
                  {
                     en: `Password recovery flow.`,
                     fr: `Parcours de récupération de mot de passe.`,
                  },
                  {
                     en: `GDPR compliance: actual deletion of data at the user's request.`,
                     fr: `Conformité RGPD : suppression réelle des données à la
                     demande de l'utilisateur.`,
                  },
                  {
                     en: `Front-end route protection (higher-order component).`,
                     fr: `Protection des routes côté front (composant d'ordre
                     supérieur).`,
                  },
               ],
            },
         ],
         results: [
            {
               en: (
                  <>
                     A working full-stack application, delivered solo, with the
                     code available on{" "}
                     <ExternalLink
                        href="https://github.com/khalan1789/Stackoverflou-project"
                        ariaLabel="link to github in new tab"
                     >
                        GitHub
                     </ExternalLink>
                     . I had already built a forum during my training with
                     Vue.js and a SQL database. This project let me rebuild it
                     differently: React and Redux Toolkit on the front end,
                     MongoDB for data, and stronger security (route protection,
                     password recovery).
                     <br />
                     Comparing both approaches on the same product gave me a
                     concrete view on choosing a relational or NoSQL database
                     depending on the project. It also strengthened my interest
                     in back-end development.
                  </>
               ),
               fr: (
                  <>
                     Une application full-stack fonctionnelle, livrée seul, avec
                     un code consultable sur{" "}
                     <ExternalLink
                        href="https://github.com/khalan1789/Stackoverflou-project"
                        ariaLabel="lien vers github dans dans un nouvel onglet"
                     >
                        GitHub
                     </ExternalLink>
                     . J’avais déjà construit un forum en formation avec Vue.js
                     et une base SQL. Ce projet m’a permis de le refaire
                     autrement : React et Redux Toolkit côté front, MongoDB côté
                     données, et une sécurité plus poussée (protection des
                     routes, récupération de mot de passe).
                     <br />
                     Comparer les deux approches sur un même produit m’a donné
                     un avis concret sur le choix d’une base relationnelle ou
                     NoSQL selon le projet. Il a aussi renforcé ma curiosité
                     pour le back-end.
                  </>
               ),
            },
         ],
      },
   ],
   impacts: [
      {
         en: "Solo front-end + back-end",
         fr: "Front + back en solo",
      },
      {
         en: "Secured API (OWASP)",
         fr: "API sécurisée (OWASP)",
      },
      {
         en: "GDPR compliant",
         fr: "Conforme RGPD",
      },
   ],
   technos: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Styled Components",
   ],
   tools: ["Git", "Github"],
};
