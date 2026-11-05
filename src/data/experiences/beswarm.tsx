import { Experience } from "@/types/types";

export const BeSwarm: Experience = {
   slug: "beswarm",
   company: { en: "BeSwarm", fr: "BeSwarm" },
   role: {
      fr: "Développeur Front End",
      en: "Front End Developper",
   },
   period: { en: "May - november 2022", fr: "Mai - novembre 2022" },
   context: {
      en: "May - september 2023",
      fr: `BeSwarm organisait un challenge réunissant une centaine de développeurs, répartis en équipes sur des projets réels, afin d'ajouter de nouvelles fonctionnalités à leur catalogue d'applications. Avec trois autres développeurs, nous devions concevoir la partie front-end d'une application de gestion de comptes bancaires pour un utilisateur de la plateforme. Toutes les décisions se prenaient en collectif.`,
   },
   steps: [
      {
         sections: [
            {
               title: {
                  en: "",
                  fr: "Cadrer avant de coder",
               },
               items: [
                  {
                     en: "",
                     fr: `Rédaction du cahier des charges pour l'équipe.`,
                  },
                  {
                     en: "",
                     fr: `Maquettage des écrans sur Figma.`,
                  },
               ],
            },
            {
               title: {
                  en: "",
                  fr: "Livrer un front fiable",
               },
               items: [
                  {
                     en: "",
                     fr: ` Développement de l'interface en React et Tailwind CSS, en s'appuyant sur une API documentée sous Swagger.`,
                  },
                  {
                     en: "",
                     fr: `Authentification sécurisée avec OAuth2.`,
                  },
                  {
                     en: "",
                     fr: `Mise en place des tests automatisés avec Jest et React
                     Testing Library.`,
                  },
               ],
            },
            {
               title: {
                  en: "",
                  fr: `Pair programming et mob programming au quotidien.`,
               },
               items: [
                  {
                     en: "",
                     fr: `Première expérience de mentorat, que j'ai prise au
                     sérieux et appréciée.`,
                  },
               ],
            },
         ],
         results: [
            {
               en: "",
               fr: `Une application fonctionnelle livrée en équipe, testée et
                  sécurisée. J'y ai appris que bien décider à plusieurs
                  demande d'expliquer ses choix, une habitude que j'ai
                  gardée.`,
            },
         ],
      },
   ],
   impacts: [
      {
         en: "",
         fr: "Tests automatisés",
      },
      {
         en: "",
         fr: "Consommation d'API avec Authenfitication OAuth2",
      },
      {
         en: "",
         fr: "Pair & mob programming",
      },
   ],
   technos: [
      "React",
      "Tailwind CSS",
      "Jest",
      "React Testing Library",
      "OAuth2",
   ],
   tools: ["GitLab", "Swagger", "Postman", "Figma", "Prettier", "ESLint"],
};
