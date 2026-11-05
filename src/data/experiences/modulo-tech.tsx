import ExternalLink from "@/app/components/text/external-link";
import { Experience } from "@/types/types";

export const ModuloTech: Experience = {
   slug: "modulo-tech",
   company: { en: "Modulo Tech", fr: "Modulo Tech" },
   role: {
      fr: "Développeur Full Stack",
      en: "Full Stack Developer",
   },
   period: { en: "April - may 2022", fr: "Avril - mai 2022" },
   context: {
      en: "",
      fr: ` Modulo Tech proposait des projets complets pour se confronter à un vrai cycle de développement, du cahier des charges à la livraison. Le sujet : un forum social de questions-réponses, inspiré de Stack Overflow. J'en avais la charge entière, front comme back.`,
   },
   steps: [
      {
         sections: [
            {
               title: {
                  en: "",
                  fr: "Construire le produit de bout en bout",
               },
               items: [
                  {
                     en: "",
                     fr: `Conception et développement de l'API (Node.js,
                     Express, MongoDB) et de l'interface (React, Redux
                     Toolkit, Styled Components).`,
                  },
                  {
                     en: "",
                     fr: `Gestion complète du cycle de vie du contenu : création,
                     modification et suppression des publications et des
                     comptes.`,
                  },
               ],
            },
            {
               title: {
                  en: "",
                  fr: "Sécuriser et respecter les données des utilisateurs",
               },
               items: [
                  {
                     en: "",
                     fr: `API sécurisée en suivant les recommandations OWASP, mots de
                     passe hachés.`,
                  },
                  {
                     en: "",
                     fr: `Parcours de récupération de mot de passe.`,
                  },
                  {
                     en: "",
                     fr: `Conformité RGPD : suppression réelle des données à la
                     demande de l'utilisateur.`,
                  },
                  {
                     en: "",
                     fr: `Protection des routes côté front (composant d'ordre
                     supérieur).`,
                  },
               ],
            },
         ],
         results: [
            {
               en: "",
               fr: `Une application full stack fonctionnelle, livrée seul, avec un
                  code consultable sur{" "}
                  ${(
                     <ExternalLink
                        href={
                           "https://github.com/khalan1789/Stackoverflou-project"
                        }
                     >
                        GitHub
                     </ExternalLink>
                  )}
                  . J’avais déjà construit un forum en formation avec Vue.js et
                  une base SQL. Ce projet m’a permis de le refaire autrement :
                  React et Redux Toolkit côté front, MongoDB côté données, et
                  une sécurité plus poussée (protection des routes, récupération
                  de mot de passe). <br />
                  Comparer les deux approches sur un même produit m’a donné un
                  avis concret sur le choix d’une base relationnelle ou NoSQL
                  selon le projet. Il a aussi renforcé ma curiosité pour le
                  back-end.`,
            },
         ],
      },
   ],
   impacts: [
      {
         en: "",
         fr: "Front + back en solo",
      },
      {
         en: "",
         fr: "API sécurisée (OWASP)",
      },
      {
         en: "",
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
