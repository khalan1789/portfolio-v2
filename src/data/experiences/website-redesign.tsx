import { Experience } from "@/types/types";

export const WebsiteRedesign: Experience = {
   slug: "website-redesign",
   company: {
      en: "Freelance project - Accessibility & UX",
      fr: "Mission freelance - Accessibilité et UX",
   },
   role: {
      fr: "Développeur Full-Stack",
      en: "Full-Stack Developer",
   },
   period: { en: "May - November 2023", fr: "Mai - novembre 2023" },
   context: {
      en: `The client had an aging WordPress site that was hard to evolve. She wanted to modernize it without interrupting her business, and to be able to manage her content on her own. Accessibility was a requirement from the start, not an option added at the end.`,
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
                     en: `Needs analysis and feature prioritization with the client.`,
                     fr: `Analyse des besoins et priorisation des fonctionnalités avec la cliente.`,
                  },
                  {
                     en: `UX thinking and Figma mockups before writing a single line of code.`,
                     fr: `Réflexion UX et maquettes sur Figma avant toute ligne de code.`,
                  },
                  {
                     en: `Technology choices made once the needs were clear: Next.js, Supabase, deployment on Vercel, for maintainability and performance.`,
                     fr: `Choix des technologies une fois le besoin posé : Next.js, Supabase, déploiement sur Vercel, pour la maintenabilité et
                     les performances.`,
                  },
               ],
            },
            {
               title: {
                  en: "Make the site usable by everyone",
                  fr: "Rendre le site utilisable par tous",
               },
               items: [
                  {
                     en: `An accessibility module that adapts the display to each visitor: colorblind and monochrome modes, enhanced contrast, a dyslexia-friendly font, increased line spacing.`,
                     fr: `Un module d'accessibilité pour adapter
                     l'affichage à chaque visiteur : modes daltonien et
                     monochrome, contrastes renforcés, police adaptée à la
                     dyslexie, interlignes augmentés.`,
                  },
                  {
                     en: `Work following WCAG standards: semantic structure for assistive technologies, keyboard navigation, contrast of at least AA.`,
                     fr: `Travail selon les standards WCAG : structure sémantique
                     pour les technologies d'assistance, navigation au
                     clavier, contrastes au moins AA.`,
                  },
                  {
                     en: `Regular checks with WAVE and Lighthouse.`,
                     fr: `Vérifications régulières avec WAVE et Lighthouse.`,
                  },
               ],
            },
            {
               title: {
                  en: "Make the client self-sufficient",
                  fr: `Rendre la cliente autonome`,
               },
               items: [
                  {
                     en: `An admin area to publish and manage her content, including her listings, just like on her old site, without going through a developer.`,
                     fr: `Un espace d'administration pour publier et gérer son
                     contenu, notamment ses annonces, à l'image de ce
                     qu'elle avait sur son ancien site, sans passer par un
                     développeur.`,
                  },
                  {
                     en: `Handover to a colleague for finalization and launch, with remote follow-up.`,
                     fr: `Passage de relais à un collègue pour la finalisation et la
                     mise en ligne, avec un suivi à distance.`,
                  },
               ],
            },
         ],
         results: [
            {
               en: (
                  <>
                     A modernized website, accessible to everyone, that the
                     client runs on her own thanks to her admin area.
                     <br /> The accessibility module designed for this project
                     also serves as the basis for the one in this portfolio.
                  </>
               ),
               fr: (
                  <>
                     Un site modernisé, accessible à tous, et que la cliente
                     fait vivre seule grâce à son espace d&apos;administration.
                     <br /> Le module d&apos;accessibilité conçu pour ce projet
                     sert d&apos;ailleurs de base à celui de ce portfolio.
                  </>
               ),
            },
         ],
      },
   ],
   impacts: [
      {
         en: "WCAG accessibility",
         fr: "Accessibilité WCAG",
      },
      {
         en: "Colorblind & monochrome modes",
         fr: "Modes daltonien & monochromes",
      },
      {
         en: "Adjustable font & line spacing",
         fr: "Police & interlignes adaptables",
      },
   ],
   technos: ["Next.js", "Tailwind Css", "React.js", "Supabase"],
   tools: ["Vercel", "Figma", "Git", "Github"],
};
