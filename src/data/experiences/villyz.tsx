import ExternalLink from "@/app/components/text/external-link";
import StrongText from "@/app/components/text/strong-text";
import { Experience } from "@/types/types";

// const strongText = (text: string) => {
//    return <strong>{text}</strong>;
// };

export const Villyz: Experience = {
   slug: "villyz",
   company: { en: "Villyz", fr: "Villyz" },
   role: {
      fr: "Développeur Full Stack, puis Référent Technique Produit",
      en: "Full Stack Developer, then Product Technical Lead",
   },
   period: {
      en: "December 2023 - april 2026",
      fr: "Décembre 2023 - avril 2026",
   },
   context: {
      en: "",
      fr: `Villyz est une plateforme de financement participatif encadrée par l'AMF. Des particuliers y investissent dans des projets portés surtout par des collectivités locales et territoriales, mais aussi par des hôpitaux, qui les remboursent ensuite par échéances. Les paiements passent par un prestataire, Mangopay, qui impose ses propres exigences de sécurité et de conformité. Chaque évolution touche donc à de l'argent réel, à des règles métier strictes et à un cadre réglementé. L'équipe comptait 5 à 8 personnes, entièrement à distance et dans un environnement agile.`,
   },
   steps: [
      {
         title: {
            en: "Step 1- Full Stack Developer",
            fr: "Étape 1 — Développeur Full Stack",
         },
         context: {
            en: "",
            fr: `Je suis recruté comme développeur full stack, avec un profil plus poussé sur le front-end. L'objectif : soulager le CTO sur cette partie en apportant de l'expérience côté interface. Le back-end est en C# et .NET, que je ne connais pas encore.`,
         },
         period: {
            en: "December 2023 - september 2025",
            fr: "Décembre 2023 - septembre 2025",
         },
         sections: [
            {
               title: {
                  en: "",
                  fr: "Prendre en main le front",
               },
               items: [
                  {
                     en: "",
                     fr: `Maquettes et refonte de plusieurs pages du site.`,
                  },
                  {
                     en: "",
                     fr: `Ajout d'une nouvelle solution pour le champ de date afin de régler une difficulté qui revenait souvent au support et freinait l'onboarding, notamment dans le parcours d'inscription.`,
                  },
                  {
                     en: "",
                     fr: `Audit de performance et d'accessibilité mené de ma propre initiative : images trop lourdes, problèmes de mise en page, zones non conformes corrigées en quick wins (polices adaptées, notamment).`,
                  },
               ],
            },
            {
               title: {
                  en: "",
                  fr: "Concevoir des fonctionnalités de bout en bout",
               },
               subTitle: {
                  en: "",
                  fr: "Je deviens vite opérationnel en C# / .NET, appris en poste. On me confie ensuite des sujets complets, de la conception au déploiement, pour me faire monter en compétence sur la conception.",
               },
               items: [
                  {
                     en: "",
                     fr: (
                        <>
                           <StrongText text="Paiement par virement bancaire." />{" "}
                           Avec l&apos;ancienne solution, environ 30 % seulement
                           des paiements initiés aboutissaient. Je conçois et
                           développe une nouvelle solution de virement, qui
                           autorise aussi des plafonds plus élevés qu&apos;en
                           carte bancaire.
                        </>
                     ),
                  },
                  {
                     en: "",
                     fr: (
                        <>
                           <StrongText text="Réinvestissement." /> L&apos;enjeu
                           est business : inciter les investisseurs à réinvestir
                           l&apos;argent déjà remboursé par leurs projets
                           précédents, pour les fidéliser. Je propose la
                           solution, puis je l&apos;implémente en respectant les
                           règles métier en place.
                        </>
                     ),
                  },
                  {
                     en: "",
                     fr: (
                        <>
                           <StrongText text="Don." /> À l&apos;automne 2024, la
                           plateforme accueille des projets mêlant don et
                           financement participatif. Je suis force de
                           proposition sur la façon de l&apos;intégrer :
                           nouveaux types de projets, parcours donateur,
                           adaptation du parcours investisseur.
                        </>
                     ),
                  },
                  {
                     en: "",
                     fr: (
                        <>
                           <StrongText text="Authentification forte (SCA)." />{" "}
                           En 2025, j&apos;implémente environ 90 % du parcours
                           SCA des investisseurs particuliers. Le parcours est
                           imposé par le prestataire de paiement : je conçois le
                           nôtre et adapte nos règles métier autour du leur.
                           Leurs environnements de test sont instables, et leur
                           production l&apos;est encore quand ils nous obligent
                           à basculer dessus. Avec le CTO, nous découpons le
                           chantier, anticipons plusieurs scénarios et laissons
                           de la place aux évolutions. Quand le prestataire de
                           paiement active la SCA sur notre environnement en
                           juillet 2025, la plateforme ne casse pas.
                        </>
                     ),
                  },
                  {
                     en: "",
                     fr: (
                        <>
                           {" "}
                           <StrongText text="Déployer et présenter." /> Avec le
                           temps, je déploie seul mes évolutions sur les
                           environnements de recette et de test, et je les
                           présente aux équipes lors de démos en daily.
                        </>
                     ),
                  },
                  {
                     en: "",
                     fr: (
                        <>
                           {" "}
                           <StrongText text="Lutte contre la fraude." /> Face à
                           de nombreuses tentatives de fraude, le prestataire de
                           paiement relève son niveau de vigilance et bloque des
                           utilisateurs, en nous prévenant par webhooks. Or un
                           utilisateur bloqué ne peut plus faire transiter
                           d&apos;argent, et tous nos flux passent par le
                           prestataire de paiement. Je récupère ces informations
                           et j&apos;adapte nos règles métier à celles du
                           prestataire.
                        </>
                     ),
                  },
                  {
                     en: "",
                     fr: (
                        <>
                           <StrongText text="Au fil de l'eau." /> Améliorations
                           continues de l&apos;onboarding et des tableaux de
                           bord utilisateurs. Évolutions de l&apos;espace
                           d&apos;administration pour rendre les équipes non
                           techniques autonomes sur des actions qui demandaient
                           jusque-là un développeur, comme bloquer les virements
                           en fin de collecte pour n&apos;accepter que la carte
                           bancaire et clôturer la collecte. Vérification du
                           niveau AA sur chaque fonctionnalité et documentation
                           des règles métier sur Confluence.
                        </>
                     ),
                  },
               ],
            },
            {
               title: {
                  en: "",
                  fr: `Veiller sur la production`,
               },
               items: [
                  {
                     en: "",
                     fr: `Régulièremennt, je contrôle les traitements automatiques (batchs) pour repérer ceux qui ont planté.`,
                  },
                  {
                     en: "",
                     fr: `Je vais chercher les incidents dans les logs, je les diagnostique et je les corrige.`,
                  },
                  {
                     en: "",
                     fr: `Je suis aussi les échéances de remboursement pendant les absences du CTO.`,
                  },
               ],
            },
            {
               title: {
                  en: "",
                  fr: `Être au contact des utilisateurs`,
               },
               items: [
                  {
                     en: "",
                     fr: `En mai-juin 2025, après une restructuration, je prends la responsabilité du SAV. Je suis en contact direct avec les utilisateurs.`,
                  },
                  {
                     en: "",
                     fr: `Je le structure : procédures, ticketing, modèles de réponse pour les demandes récurrentes, support de niveau 2.`,
                  },
                  {
                     en: "",
                     fr: `Je fais remonter les points de friction directement aux équipes concernées lors des dailies, pour traiter la cause et pas seulement le symptôme.`,
                  },
               ],
            },
         ],
         results: [
            {
               en: "",
               fr: `Avec la nouvelle solution de virement, le taux de paiements aboutis passe d'environ 30 % à 70-80 % pour ce moyen de paiement. Moins plafonné que la carte bancaire, le virement permet aussi d'augmenter les volumes collectés ainsi que d'attirer de nouveau investisseurs.`,
            },
            {
               en: "",
               fr: `La plateforme s'ouvre aux projets de don : une nouvelle offre pour l'entreprise.`,
            },
            {
               en: "",
               fr: `Avec la nouvelle solution de virement, le taux de paiements aboutis passe d'environ 30 % à 70-80 %. Moins plafonné que la carte bancaire, le virement permet aussi d'augmenter les volumes collectés.`,
            },
            {
               en: "",
               fr: `Les exigences réglementaires du prestataire sont intégrées. La SCA des investisseurs particuliers passe en production en juillet 2025 sans aucune casse, alors que l'environnement du prestataire était encore instable et pouvait changer du jour au lendemain.`,
            },
            {
               en: "",
               fr: `Le score Lighthouse gagne au moins 30 points, et l'accessibilité progresse.`,
            },
            {
               en: "",
               fr: `Une difficulté récurrente au support est résolue, et l'onboarding perd moins d'utilisateurs en route.`,
            },
            {
               en: "",
               fr: `Le volume de tickets baisse alors que le nombre d'investisseurs est multiplié par 4.`,
            },
            {
               en: "",
               fr: `Le réinvestissement devient un levier de fidélisation des investisseurs.`,
            },
            {
               en: "",
               fr: `Recruté pour mes compétences initialement plus poussées sur le front, je deviens vite un développeur full stack autonome, à qui l'on confie la conception de fonctionnalités clés, les flux financiers et les déploiements en recette.`,
            },
            {
               en: "",
               fr: `Les équipes non techniques gagnent en autonomie : plusieurs actions sur la plateforme ne demandent plus de développeur.`,
            },
         ],
      },
      {
         title: {
            en: "Step 2- Product Technical Lead",
            fr: "Étape 2 - Référent Technique Produit",
         },
         context: {
            en: "",
            fr: `Je devais cadrer et piloter le lancement d'un nouveau produit. Un incident majeur en production, stabilisé en quelques jours avec le CTO, puis l'absence prolongée de ce dernier changent tout. Au même moment, l'entreprise traverse une période critique, et le prestataire de paiement impose de nouvelles exigences presque au dernier moment, avec très peu de temps et de moyens pour les livrer. Du jour au lendemain, je reprends seul la responsabilité technique et produit de Villyz. Le rôle, provisoire au départ, est confirmé de façon définitive.`,
         },
         period: {
            en: "October 2025 - january 2026",
            fr: "Octobre 2025 - janvier 2026",
         },
         sections: [
            {
               items: [
                  {
                     en: "",
                     fr: (
                        <>
                           <StrongText text="Assumer la production." /> Suivi
                           quotidien, contrôle des batchs et analyse des logs,
                           déploiements en production sur OVH, gestion des
                           incidents. Contrôle des paiements, des remboursements
                           et des échéances, y compris sur les projets clôturés
                           dont les remboursements courent encore.
                        </>
                     ),
                  },
                  {
                     en: "",
                     fr: (
                        <>
                           <StrongText text="Tenir les exigences du prestataire." />{" "}
                           La SCA s&apos;étend aux personnes morales : porteurs
                           de projets et donateurs. Puis le consentement touche
                           à la fois les donateurs et les investisseurs
                           particuliers. Les parcours sont imposés par le
                           prestataire de paiement : à chaque fois, je conçois
                           les nôtres et j&apos;adapte une bonne partie des
                           règles métier pour les intégrer, seul, avec une
                           charge de travail conséquente et des délais très
                           serrés. Comme pour la SCA, leurs environnements de
                           test sont instables, et nous devons passer en
                           production sur une version qui l&apos;est encore.
                        </>
                     ),
                  },
                  {
                     en: "",
                     fr: (
                        <>
                           <StrongText text="Traiter les incidents à la racine." />{" "}
                           Des prélèvements touchent des comptes inactifs : je
                           mets en place leur suppression.
                        </>
                     ),
                  },
                  {
                     en: "",
                     fr: (
                        <>
                           <StrongText text="Piloter le produit." />{" "}
                           Organisation des sprints, priorisation, arbitrages
                           entre enjeux business, réglementaires et techniques.
                           Lien entre les équipes métier et les évolutions
                           techniques.
                        </>
                     ),
                  },
                  {
                     en: "",
                     fr: (
                        <>
                           <StrongText text="Continuer à développer" />, tout en
                           gardant le SAV de niveau 2.
                        </>
                     ),
                  },
                  {
                     en: "",
                     fr: (
                        <>
                           <StrongText text="Répondre aux besoins de données." />{" "}
                           Je fournis à mes collègues les extractions dont ils
                           ont besoin, puis j&apos;automatise les plus
                           fréquentes dans l&apos;espace d&apos;administration.
                        </>
                     ),
                  },
                  {
                     en: "",
                     fr: (
                        <>
                           <StrongText text="Automatiser et rendre l'équipe autonome." />{" "}
                           Dans la continuité de l&apos;étape précédente, je
                           pousse plus loin l&apos;espace d&apos;administration
                           pour automatiser des tâches qui n&apos;ont pas à
                           mobiliser un développeur. Par exemple, le blocage des
                           utilisateurs : l&apos;information arrive par
                           webhooks, mais aussi par mail à certains collègues,
                           qui peuvent désormais agir eux-mêmes.
                        </>
                     ),
                  },
               ],
            },
         ],
         results: [
            {
               en: "",
               fr: `Plusieurs centaines de milliers d'euros de flux, entre investissements et remboursements, passent sous ma seule responsabilité technique.`,
            },
            {
               en: "",
               fr: `La plateforme continue de fonctionner sans CTO, avec ses flux financiers maintenus.`,
            },

            {
               en: "",
               fr: `Les nouvelles exigences du prestataire de paiement sont livrées dans les délais.`,
            },
            {
               en: "",
               fr: `Je passe d'exécutant à garant du produit : je décide, j'arbitre et je réponds seul de la production, sur une activité encadrée par l'AMF.`,
            },
            {
               en: "",
               fr: `J'apprends à trancher et à dire non, en argumentant de façon objective et compréhensible pour mes collègues.`,
            },
            {
               en: "",
               fr: `Le consentement est livré sur un environnement prestataire encore instable, sans interruption des flux.`,
            },

            {
               en: "",
               fr: `J'apprends à raisonner et à agir vite dans l'urgence, situation fréquente sur cette période : évaluer le risque et l'impact, puis réorienter les priorités dans l'intérêt de la plateforme.`,
            },
         ],
      },
      {
         title: {
            en: "Step 3 - Handover",
            fr: "Étape 3 - Passation",
         },
         context: {
            en: "",
            fr: `Après la fin de mon poste, fin janvier 2026, Villyz me sollicite pour rester deux mois en freelance. La plateforme migre vers une nouvelle version, plus moderne et sur une autre stack. Pendant cette bascule, l'ancienne doit continuer à tourner, et les règles métier ne doivent pas se perdre en route.`,
         },
         period: {
            en: "February - april 2026",
            fr: "Février - avril 2026",
         },
         sections: [
            {
               items: [
                  {
                     en: "",
                     fr: (
                        <>
                           <StrongText text="Transmettre les règles métier critiques" />{" "}
                           que j&apos;étais seul à maîtriser, pour qu&apos;elles
                           survivent à la migration.
                        </>
                     ),
                  },
                  {
                     en: "",
                     fr: (
                        <>
                           <StrongText text="Rendre la surveillance accessible à des non-techniciens." />{" "}
                           En tant que référent, j&apos;analysais chaque jour
                           l&apos;état de la plateforme : paiements,
                           remboursements, échéances. Je traduis ces contrôles
                           en tableaux de bord Metabase que l&apos;équipe peut
                           lire seule.
                        </>
                     ),
                  },
                  {
                     en: "",
                     fr: (
                        <>
                           <StrongText text="Garder l'ancienne plateforme sous surveillance" />{" "}
                           tant qu&apos;elle tourne, en parallèle de la
                           migration.
                        </>
                     ),
                  },
               ],
            },
         ],
         results: [
            {
               en: "",
               fr: `L'équipe vérifie par elle-même que les paiements, remboursements et échéances se passent bien.`,
            },
            {
               en: "",
               fr: `La migration se fait avec des règles métier documentées, et non plus dans la tête d'une seule personne.`,
            },
         ],
      },
   ],
   impacts: [
      {
         en: "",
         fr: "~2,6 M€ collectés sur ma période",
      },
      {
         en: "",
         fr: "x4 investisseurs (268 → 1 142)",
      },
      {
         en: "",
         fr: "x5 souscriptions",
      },
      {
         en: "",
         fr: "Virements aboutis : 30 % → 70-80 %",
      },
      {
         en: "",
         fr: "Moins de tickets SAV malgré x4 investisseurs",
      },
      {
         en: "",
         fr: "Marché très régulé (AMF), prestataire exigeant",
      },
      {
         en: "",
         fr: "Score Lighthouse : +30 points",
      },
      {
         en: "",
         fr: (
            <>
               <StrongText text="Seul référent technique et produit" />
            </>
         ),
      },
   ],
   technos: [
      "TypeScript",
      "React",
      "JavaScript",
      " C#",
      ".NET Framework",
      "Entity Framework",
      "PostgreSQL",
      "Semantic UI",
      "CSS-in-JS",
      "API REST",
   ],
   tools: [
      "Jira",
      "Confluence",
      "SQL Server",
      "OVH",
      "Git",
      "Postman",
      "Filezilla",
      "Metabase",
      "Mangopay",
   ],
};
