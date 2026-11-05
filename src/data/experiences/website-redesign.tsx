import { Experience } from "@/types/types";

export const WebsiteRedesign: Experience = {
   slug: "website-redesign",
   company: {
      en: "Freelancing mission - Accessibility and UX",
      fr: "Mission freelance - Accessibilité et UX",
   },
   role: {
      fr: "Développeur full stack",
      en: "Full Stack Developer",
   },
   period: { en: "May - november 2023", fr: "Mai - novembre 2023" },
   context: {
      en: "",
      fr: `La cliente avait un site wordpress vieillissant et difficile à faire évoluer. Elle voulait le moderniser sans interrompre son activité, et pouvoir gérer son contenu seule. L'accessibilité était une exigence de départ, pas une option ajoutée à la fin.`,
   },
   steps: [
      {
         sections: [
            {
               title: {
                  en: "Understand before building",
                  fr: "Comprendre avant de construire",
               },
               items: [
                  {
                     en: "",
                     fr: `Analyse des besoins et priorisation des fonctionnalités avec la cliente.`,
                  },
                  {
                     en: "",
                     fr: `Réflexion UX et maquettes sur Figma avant toute ligne de code.`,
                  },
                  {
                     en: "",
                     fr: `Choix des technologies une fois le besoin posé : Next.js, Supabase, déploiement sur Vercel, pour la maintenabilité et
                     les performances.`,
                  },
               ],
            },
            {
               title: {
                  en: "",
                  fr: "Rendre le site utilisable par tous",
               },
               items: [
                  {
                     en: "",
                     fr: `Un module d'accessibilité pour adapter
                     l'affichage à chaque visiteur : modes daltonien et
                     monochrome, contrastes renforcés, police adaptée à la
                     dyslexie, interlignes augmentés.`,
                  },
                  {
                     en: "",
                     fr: `Travail selon les standards WCAG : structure sémantique
                     pour les technologies d'assistance, navigation au
                     clavier, contrastes au moins AA.`,
                  },
                  {
                     en: "",
                     fr: `Vérifications régulières avec WAVE et Lighthouse.`,
                  },
               ],
            },
            {
               title: {
                  en: "",
                  fr: `Rendre la cliente autonome`,
               },
               items: [
                  {
                     en: "",
                     fr: `Un espace d'administration pour publier et gérer son
                     contenu, notamment ses annonces, à l'image de ce
                     qu'elle avait sur son ancien site, sans passer par un
                     développeur.`,
                  },
                  {
                     en: "",
                     fr: `Passage de relais à un collègue pour la finalisation et la
                     mise en ligne, avec un suivi à distance.`,
                  },
               ],
            },
         ],
         results: [
            {
               en: "",
               fr: `Un site modernisé, accessible à tous, et que la cliente fait
                  vivre seule grâce à son espace d'administration. <br />{" "}
                  Le module d'accessibilité conçu pour ce projet sert
                  d'ailleurs de base à celui de ce portfolio.`,
            },
         ],
      },
   ],
   impacts: [
      {
         en: "",
         fr: "Accessibilité WCAG",
      },
      {
         en: "",
         fr: "Modes daltonien & monochromes",
      },
      {
         en: "",
         fr: "Police & interlignes adaptables",
      },
   ],
   technos: ["Next.js", "Tailwind Css", "React.js", "Supabase"],
   tools: ["Vercel", "Figma", "Git", "Github"],
};
