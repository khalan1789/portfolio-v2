import ExternalLink from "@/app/components/text/external-link";
import { Experience } from "@/types/types";

export const Repozen: Experience = {
   slug: "repozen",
   company: { en: "Repozen", fr: "Repozen" },
   role: {
      fr: "Développeur Front End, puis Développeur Full Stack",
      en: "Front End Developper, then Full Stack Developer",
   },
   period: {
      en: "May - september 2023 • Volunteering",
      fr: "Mai - septembre 2023 • Bénévolat",
   },
   context: {
      en: "",
      fr: `Repozen veut que chacun puisse prendre soin de sa santé
                  mentale sereinement. Sa plateforme met en relation le grand
                  public et les associations du secteur social.
                  L'association fonctionnait comme une entreprise :
                  développeurs front, back et full stack, équipe UX/UI, équipe
                  SEO, deux DevOps, équipe communication, le tout piloté par un
                  CTO. C'était ma première expérience dans une équipe
                  pluridisciplinaire de cette taille. Je l'ai rejointe
                  d'abord en tant que développeur front end, avant de
                  passer full stack.`,
   },
   steps: [
      {
         sections: [
            {
               title: {
                  en: "",
                  fr: "Faire évoluer le portail partenaires",
               },
               items: [
                  {
                     en: "",
                     fr: `  Nouvelles fonctionnalités pour l'espace des
                     associations partenaires (TypeScript, Next.js, React Query,
                     Material UI).`,
                  },
                  {
                     en: "",
                     fr: `  Débogage et refactoring de l'existant, en lisant le
                     code back (Node.js) pour comprendre ce que le front
                     consommait.`,
                  },
                  {
                     en: "",
                     fr: `Prise d'initiative sur le backlog : dès que
                     j'avais de la marge, je prenais des tickets
                     supplémentaires, corrections de bugs ou quick wins.`,
                  },
               ],
            },
            {
               title: {
                  en: "",
                  fr: "Construire un nouveau produit en équipe",
               },
               items: [
                  {
                     en: "",
                     fr: `Passage en full stack pour participer à la création du blog
                     de l'association, en Next.js et TypeScript, selon
                     l'architecture définie par l'équipe.`,
                  },
               ],
            },
            {
               title: {
                  en: "",
                  fr: `S'intégrer dans un cadre structuré`,
               },
               items: [
                  {
                     en: "",
                     fr: `Sprints de 3 semaines, daily tech hebdomadaires, revues de
                     code.`,
                  },
                  {
                     en: "",
                     fr: `Une vraie chaîne CI/CD : le code devait compiler en local
                     (hooks Husky) avant tout push, puis chaque branche était
                     revérifiée par la pipeline avant fusion.`,
                  },
                  {
                     en: "",
                     fr: `Communication majoritairement asynchrone, tickets gérés
                     dans ClickUp, organisé comme un Jira.`,
                  },
                  {
                     en: "",
                     fr: `Travail en lien avec l'UX/UI, le SEO et les DevOps.`,
                  },
               ],
            },
         ],
         results: [
            {
               en: "",
               fr: (
                  <>
                     Le site{" "}
                     <ExternalLink href="https://repozen.fr/">
                        repozen
                     </ExternalLink>{" "}
                     tourne en production depuis. Mon périmètre s&apos;est
                     élargi du front au full stack en quelques mois. Surtout,
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
         en: "",
         fr: "Du front au full stack",
      },
      {
         en: "",
         fr: "Équipe pluridisciplinaire",
      },
      {
         en: "",
         fr: "Plateforme en production",
      },
   ],
   technos: [
      "TypeScript",
      "React",
      "React Query",
      "Next.Js",
      "Material UI",
      "PostgreSQL",
   ],
   tools: ["GitLab", "GitLab CI/CD", "Husky", "Figma", "ClickUp"],
};
