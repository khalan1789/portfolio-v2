import { Experience } from "@/types/types";

export const BeSwarm: Experience = {
   slug: "beswarm",
   company: { en: "BeSwarm", fr: "BeSwarm" },
   role: {
      fr: "Développeur Front-End",
      en: "Front-End Developer",
   },
   period: { en: "May - November 2022", fr: "Mai - novembre 2022" },
   context: {
      en: `BeSwarm ran a challenge bringing together around a hundred developers, split into teams working on real projects, to add new features to their app catalog. With three other developers, we had to build the front end of a bank account management app for one of the platform's users. All decisions were made collectively.`,
      fr: `BeSwarm organisait un challenge réunissant une centaine de développeurs, répartis en équipes sur des projets réels, afin d'ajouter de nouvelles fonctionnalités à leur catalogue d'applications. Avec trois autres développeurs, nous devions concevoir la partie front-end d'une application de gestion de comptes bancaires pour un utilisateur de la plateforme. Toutes les décisions se prenaient en collectif.`,
   },
   steps: [
      {
         sections: [
            {
               title: {
                  en: "Scoping before coding",
                  fr: "Cadrer avant de coder",
               },
               items: [
                  {
                     en: `Wrote the specifications for the team.`,
                     fr: `Rédaction du cahier des charges pour l'équipe.`,
                  },
                  {
                     en: `Designed the screen mockups in Figma.`,
                     fr: `Maquettage des écrans sur Figma.`,
                  },
               ],
            },
            {
               title: {
                  en: "Delivering a reliable front end",
                  fr: "Livrer un front fiable",
               },
               items: [
                  {
                     en: `Built the interface with React and Tailwind CSS, using an API documented with Swagger.`,
                     fr: ` Développement de l'interface en React et Tailwind CSS, en s'appuyant sur une API documentée sous Swagger.`,
                  },
                  {
                     en: `Secure authentication with OAuth2.`,
                     fr: `Authentification sécurisée avec OAuth2.`,
                  },
                  {
                     en: `Set up automated tests with Jest and React Testing Library.`,
                     fr: `Mise en place des tests automatisés avec Jest et React
                     Testing Library.`,
                  },
               ],
            },
            {
               title: {
                  en: "Pair programming and mob programming every day.",
                  fr: `Pair programming et mob programming au quotidien.`,
               },
               items: [
                  {
                     en: `My first mentoring experience, which I took seriously and enjoyed.`,
                     fr: `Première expérience de mentorat, que j'ai prise au
                     sérieux et appréciée.`,
                  },
               ],
            },
         ],
         results: [
            {
               en: `A working application delivered as a team, tested and secure. I learned that making good decisions as a group requires explaining your choices, a habit I've kept.`,
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
         en: "Automated testing",
         fr: "Tests automatisés",
      },
      {
         en: "API consumption with OAuth2 authentication",
         fr: "Consommation d'API avec Authentification OAuth2",
      },
      {
         en: "Pair & mob programming",
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
