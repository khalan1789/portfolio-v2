import ExternalLink from "@/app/components/text/external-link";
import { Experience } from "@/types/types";

export const Repozen: Experience = {
   slug: "repozen",
   company: { en: "Repozen", fr: "Repozen" },
   role: {
      fr: "Développeur Front-End, puis Développeur Full-Stack",
      en: "Front-End Developer, then Full-Stack Developer",
   },
   period: {
      en: "May - September 2023 • Volunteer work",
      fr: "Mai - septembre 2023 • Bénévolat",
   },
   context: {
      en: `Repozen wants everyone to be able to take care of their mental health with peace of mind. Its platform connects the general public with organizations in the social sector. The nonprofit ran like a company: front-end, back-end and full-stack developers, a UX/UI team, an SEO team, two DevOps engineers, a communications team, all led by a CTO. It was my first experience in a multidisciplinary team of this size. I joined first as a front-end developer, before moving to full stack.`,
      fr: `Repozen veut que chacun puisse prendre soin de sa santé
                  mentale sereinement. Sa plateforme met en relation le grand
                  public et les associations du secteur social.
                  L'association fonctionnait comme une entreprise :
                  développeurs front, back et full-stack, équipe UX/UI, équipe
                  SEO, deux DevOps, équipe communication, le tout piloté par un
                  CTO. C'était ma première expérience dans une équipe
                  pluridisciplinaire de cette taille. Je l'ai rejointe
                  d'abord en tant que développeur front end, avant de
                  passer full-stack.`,
   },
   steps: [
      {
         sections: [
            {
               title: {
                  en: "Evolving the partner portal",
                  fr: "Faire évoluer le portail partenaires",
               },
               items: [
                  {
                     en: `New features for the partner organizations' area (TypeScript, Next.js, React Query, Material UI).`,
                     fr: `  Nouvelles fonctionnalités pour l'espace des
                     associations partenaires (TypeScript, Next.js, React Query,
                     Material UI).`,
                  },
                  {
                     en: `Debugging and refactoring of existing code, reading the back-end code (Node.js) to understand what the front end was consuming.`,
                     fr: `  Débogage et refactoring de l'existant, en lisant le
                     code back (Node.js) pour comprendre ce que le front
                     consommait.`,
                  },
                  {
                     en: `Taking initiative on the backlog: whenever I had spare capacity, I picked up extra tickets, bug fixes or quick wins.`,
                     fr: `Prise d'initiative sur le backlog : dès que
                     j'avais de la marge, je prenais des tickets
                     supplémentaires, corrections de bugs ou quick wins.`,
                  },
               ],
            },
            {
               title: {
                  en: "Building a new product as a team",
                  fr: "Construire un nouveau produit en équipe",
               },
               items: [
                  {
                     en: `Moved to full stack to help build the organization's blog, in Next.js and TypeScript, following the architecture defined by the team.`,
                     fr: `Passage en full-stack pour participer à la création du blog
                     de l'association, en Next.js et TypeScript, selon
                     l'architecture définie par l'équipe.`,
                  },
               ],
            },
            {
               title: {
                  en: "Working within a structured framework",
                  fr: `S'intégrer dans un cadre structuré`,
               },
               items: [
                  {
                     en: `3-week sprints, weekly tech meetings, code reviews.`,
                     fr: `Sprints de 3 semaines, daily tech hebdomadaires, revues de
                     code.`,
                  },
                  {
                     en: `A real CI/CD pipeline: code had to compile locally (Husky hooks) before any push, then each branch was checked again by the pipeline before merging.`,
                     fr: `Une vraie chaîne CI/CD : le code devait compiler en local
                     (hooks Husky) avant tout push, puis chaque branche était
                     revérifiée par la pipeline avant fusion.`,
                  },
                  {
                     en: `Mostly asynchronous communication, with tickets managed in ClickUp, set up like Jira.`,
                     fr: `Communication majoritairement asynchrone, tickets gérés
                     dans ClickUp, organisé comme un Jira.`,
                  },
                  {
                     en: `Working closely with UX/UI, SEO and DevOps.`,
                     fr: `Travail en lien avec l'UX/UI, le SEO et les DevOps.`,
                  },
               ],
            },
         ],
         results: [
            {
               en: (
                  <>
                     The{" "}
                     <ExternalLink
                        href="https://repozen.fr/"
                        ariaLabel="link to repozen in new tab"
                     >
                        repozen
                     </ExternalLink>{" "}
                     website has been running in production ever since. My scope
                     grew from front end to full stack in just a few months.
                     Above all, I learned to work with professions other than my
                     own, which would serve me later on, especially when I
                     joined Villyz.
                  </>
               ),
               fr: (
                  <>
                     Le site{" "}
                     <ExternalLink
                        href="https://repozen.fr/"
                        ariaLabel="lien vers repozen dans un nouvel onglet"
                     >
                        repozen
                     </ExternalLink>{" "}
                     tourne en production depuis. Mon périmètre s&apos;est
                     élargi du front au full-stack en quelques mois. Surtout,
                     j&apos;ai appris à travailler avec des métiers qui ne sont
                     pas le mien, ce qui me servira par la suite, notamment dès
                     mon arrivée chez Villyz.
                  </>
               ),
            },
         ],
      },
   ],
   impacts: [
      {
         en: "From front end to full stack",
         fr: "Du front au full-stack",
      },
      {
         en: "Multidisciplinary team",
         fr: "Équipe pluridisciplinaire",
      },
      {
         en: "Platform in production",
         fr: "Plateforme en production",
      },
   ],
   technos: [
      "TypeScript",
      "React",
      "React Query",
      "Next.js",
      "Material UI",
      "PostgreSQL",
   ],
   tools: ["GitLab", "GitLab CI/CD", "Husky", "Figma", "ClickUp"],
};
