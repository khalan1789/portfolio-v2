import ExternalLink from "@/app/components/text/external-link";
import StrongText from "@/app/components/text/strong-text";
import { Experience } from "@/types/types";

export const Villyz: Experience = {
   slug: "villyz",
   company: { en: "Villyz", fr: "Villyz" },
   role: {
      fr: "Développeur Full Stack, puis Référent Technique Produit",
      en: "Full Stack Developer, then Product Technical Lead",
   },
   period: {
      en: "December 2023 - April 2026",
      fr: "Décembre 2023 - avril 2026",
   },
   context: {
      en: (
         <>
            <ExternalLink
               ariaLabel="link to Villyz in new tab"
               href="https://www.villyz.fr/"
            >
               Villyz
            </ExternalLink>{" "}
            is a fintech startup. Its flagship product, also called Villyz, is a
            crowdfunding platform regulated by the AMF (the French financial
            markets authority). Individuals invest in projects led mainly by
            local and regional authorities, but also by hospitals, which then
            repay them in installments. Payments go through a payment service
            provider (Mangopay), which imposes its own security and compliance
            requirements. Every change therefore involves real money, strict
            business rules and a regulated framework. The team had 5 to 8
            people, fully remote, in an agile environment.
         </>
      ),
      fr: (
         <>
            <ExternalLink
               ariaLabel="lien vers Villyz dans dans un nouvel onglet"
               href="https://www.villyz.fr/"
            >
               Villyz
            </ExternalLink>{" "}
            est une startup de la fintech. Son produit phare, qui porte le même
            nom, est une plateforme de financement participatif encadrée par
            l&apos;AMF. Des particuliers y investissent dans des projets portés
            surtout par des collectivités locales et territoriales, mais aussi
            par des hôpitaux, qui les remboursent ensuite par échéances. Les
            paiements passent par un prestataire de paiement (Mangopay), qui
            impose ses propres exigences de sécurité et de conformité. Chaque
            évolution touche donc à de l&apos;argent réel, à des règles métier
            strictes et à un cadre réglementé. L&apos;équipe comptait 5 à 8
            personnes, entièrement à distance et dans un environnement agile.
         </>
      ),
   },
   steps: [
      {
         title: {
            en: "Step 1 - Full Stack Developer",
            fr: "Étape 1 - Développeur Full Stack",
         },
         situation: {
            en: `I was hired as a full stack developer with a stronger front-end profile. The goal: take the front-end load off the CTO by bringing experience on the interface side. The back end was in C# and .NET, which I didn't know yet.`,
            fr: `Je suis recruté comme développeur full stack, avec un profil plus poussé sur le front-end. L'objectif : soulager le CTO sur cette partie en apportant de l'expérience côté interface. Le back-end est en C# et .NET, que je ne connais pas encore.`,
         },
         period: {
            en: "December 2023 - September 2025",
            fr: "Décembre 2023 - septembre 2025",
         },
         sections: [
            {
               title: {
                  en: "Taking over the front end",
                  fr: "Prendre en main le front",
               },
               items: [
                  {
                     en: `Mockups and redesign of several pages of the site.`,
                     fr: `Maquettes et refonte de plusieurs pages du site.`,
                  },
                  {
                     en: `Added a new date field solution to fix an issue that kept coming up in support and was slowing down onboarding, especially in the sign-up flow.`,
                     fr: `Ajout d'une nouvelle solution pour le champ de date afin de régler une difficulté qui revenait souvent au support et freinait l'onboarding, notamment dans le parcours d'inscription.`,
                  },
                  {
                     en: `Performance and accessibility audit carried out on my own initiative: oversized images, layout issues, non-compliant areas fixed as quick wins (notably more suitable fonts).`,
                     fr: `Audit de performance et d'accessibilité mené de ma propre initiative : images trop lourdes, problèmes de mise en page, zones non conformes corrigées en quick wins (polices adaptées, notamment).`,
                  },
               ],
            },
            {
               title: {
                  en: "Designing features end to end",
                  fr: "Concevoir des fonctionnalités de bout en bout",
               },
               subTitle: {
                  en: "I quickly became operational in C# / .NET, learned on the job. I was then entrusted with complete topics, from design to deployment, to build up my design skills.",
                  fr: "Je deviens vite opérationnel en C# / .NET, appris en poste. On me confie ensuite des sujets complets, de la conception au déploiement, pour me faire monter en compétence sur la conception.",
               },
               items: [
                  {
                     en: (
                        <>
                           <StrongText text="Bank transfer payments." /> With
                           the previous solution, only about 30% of initiated
                           payments went through. I designed and built a new
                           bank transfer solution, which also allows higher
                           limits than card payments.
                        </>
                     ),
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
                     en: (
                        <>
                           <StrongText text="Reinvestment." /> The stakes were
                           business-driven: encouraging investors to reinvest
                           the money already repaid by their previous projects,
                           to build their loyalty. I proposed the solution, then
                           implemented it while respecting the existing business
                           rules.
                        </>
                     ),
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
                     en: (
                        <>
                           <StrongText text="Donations." /> In fall 2024, the
                           platform started hosting projects combining donations
                           and crowdfunding. I put forward proposals on how to
                           integrate them: new project types, a donor journey,
                           an adapted investor journey.
                        </>
                     ),
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
                     en: (
                        <>
                           <StrongText text="Strong Customer Authentication (SCA)." />{" "}
                           In 2025, I implemented about 90% of the SCA flow for
                           individual investors. The flow is imposed by the
                           payment provider: I designed ours and adapted our
                           business rules around theirs. Their test environments
                           were unstable, and their production still was when
                           they forced us to switch to it. With the CTO, we
                           broke the project down, anticipated several scenarios
                           and left room for changes. When the payment provider
                           enabled SCA on our environment in July 2025, the
                           platform didn&apos;t break.
                        </>
                     ),
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
                     en: (
                        <>
                           <StrongText text="Deploying and presenting." /> Over
                           time, I deployed my changes to the staging and test
                           environments on my own, and presented them to the
                           teams in demos during dailies.
                        </>
                     ),
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
                     en: (
                        <>
                           <StrongText text="Fighting fraud." /> Facing numerous
                           fraud attempts, the payment provider raised its level
                           of vigilance and blocked users, notifying us via
                           webhooks. But a blocked user can no longer move
                           money, and all our flows go through the payment
                           provider. I retrieved this information and aligned
                           our business rules with the provider&apos;s.
                        </>
                     ),
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
                     en: (
                        <>
                           <StrongText text="Ongoing work." /> Continuous
                           improvements to onboarding and user dashboards.
                           Changes to the admin area so that non-technical teams
                           could handle actions that previously required a
                           developer, such as blocking bank transfers at the end
                           of a fundraising campaign to accept only card
                           payments, and closing the campaign. AA-level checks
                           on every feature and documentation of business rules
                           in Confluence.
                        </>
                     ),
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
                  en: "Watching over production",
                  fr: `Veiller sur la production`,
               },
               items: [
                  {
                     en: `I regularly checked automated jobs (batches) to spot the ones that had failed.`,
                     fr: `Régulièrement, je contrôle les traitements automatiques (batchs) pour repérer ceux qui ont planté.`,
                  },
                  {
                     en: `I tracked down incidents in the logs, diagnosed them and fixed them.`,
                     fr: `Je vais chercher les incidents dans les logs, je les diagnostique et je les corrige.`,
                  },
                  {
                     en: `I also monitored repayment schedules during the CTO's absences.`,
                     fr: `Je suis aussi les échéances de remboursement pendant les absences du CTO.`,
                  },
               ],
            },
            {
               title: {
                  en: "Staying close to users",
                  fr: `Être au contact des utilisateurs`,
               },
               items: [
                  {
                     en: `In May–June 2025, after a restructuring, I took over customer support. I was in direct contact with users.`,
                     fr: `En mai-juin 2025, après une restructuration, je prends la responsabilité du SAV. Je suis en contact direct avec les utilisateurs.`,
                  },
                  {
                     en: `I structured it: procedures, ticketing, response templates for recurring requests, level 2 support.`,
                     fr: `Je le structure : procédures, ticketing, modèles de réponse pour les demandes récurrentes, support de niveau 2.`,
                  },
                  {
                     en: `I raised friction points directly with the relevant teams during dailies, to address the cause and not just the symptom.`,
                     fr: `Je fais remonter les points de friction directement aux équipes concernées lors des dailies, pour traiter la cause et pas seulement le symptôme.`,
                  },
               ],
            },
         ],
         results: [
            {
               en: `With the new bank transfer solution, the rate of successful payments rose from about 30% to 70–80% for this payment method. With higher limits than card payments, bank transfers also helped increase the amounts raised and attract new investors.`,
               fr: `Avec la nouvelle solution de virement, le taux de paiements aboutis passe d'environ 30 % à 70-80 % pour ce moyen de paiement. Moins plafonné que la carte bancaire, le virement permet aussi d'augmenter les volumes collectés ainsi que d'attirer de nouveaux investisseurs.`,
            },
            {
               en: `The platform opened up to donation projects: a new offering for the company.`,
               fr: `La plateforme s'ouvre aux projets de don : une nouvelle offre pour l'entreprise.`,
            },
            {
               en: `With the new bank transfer solution, the rate of successful payments rose from about 30% to 70–80%. With higher limits than card payments, bank transfers also helped increase the amounts raised.`,
               fr: `Avec la nouvelle solution de virement, le taux de paiements aboutis passe d'environ 30 % à 70-80 %. Moins plafonné que la carte bancaire, le virement permet aussi d'augmenter les volumes collectés.`,
            },
            {
               en: `The provider's regulatory requirements were integrated. SCA for individual investors went live in July 2025 without any breakage, even though the provider's environment was still unstable and could change overnight.`,
               fr: `Les exigences réglementaires du prestataire sont intégrées. La SCA des investisseurs particuliers passe en production en juillet 2025 sans aucune casse, alors que l'environnement du prestataire était encore instable et pouvait changer du jour au lendemain.`,
            },
            {
               en: `The Lighthouse score gained at least 30 points, and accessibility improved.`,
               fr: `Le score Lighthouse gagne au moins 30 points, et l'accessibilité progresse.`,
            },
            {
               en: `A recurring support issue was resolved, and fewer users dropped off during onboarding.`,
               fr: `Une difficulté récurrente au support est résolue, et l'onboarding perd moins d'utilisateurs en route.`,
            },
            {
               en: `Ticket volume went down while the number of investors grew fourfold.`,
               fr: `Le volume de tickets baisse alors que le nombre d'investisseurs est multiplié par 4.`,
            },
            {
               en: `Reinvestment became a lever for investor loyalty.`,
               fr: `Le réinvestissement devient un levier de fidélisation des investisseurs.`,
            },
            {
               en: `Hired for my initially stronger front-end skills, I quickly became an autonomous full stack developer, trusted with designing key features, financial flows and staging deployments.`,
               fr: `Recruté pour mes compétences initialement plus poussées sur le front, je deviens vite un développeur full stack autonome, à qui l'on confie la conception de fonctionnalités clés, les flux financiers et les déploiements en recette.`,
            },
            {
               en: `Non-technical teams became more autonomous: several actions on the platform no longer require a developer.`,
               fr: `Les équipes non techniques gagnent en autonomie : plusieurs actions sur la plateforme ne demandent plus de développeur.`,
            },
         ],
      },
      {
         title: {
            en: "Step 2 - Product Technical Lead",
            fr: "Étape 2 - Référent Technique Produit",
         },
         situation: {
            en: `I was meant to split my time between the Villyz product and the launch of a new product, which I was in charge of scoping and leading. A major production incident, stabilized within a few days with the CTO, followed by the CTO's extended absence, changed everything. At the same time, the company was going through a critical period, and the payment provider imposed new requirements almost at the last minute, with very little time and few resources to deliver them. Overnight, I dedicated myself fully to the Villyz product and took over sole technical and product responsibility for it. The role, temporary at first, was then made permanent.`,
            fr: `Je devais partager mon temps entre le produit Villyz et le lancement d'un nouveau produit, que j'étais chargé de cadrer et de piloter. Un incident majeur en production, stabilisé en quelques jours avec le CTO, puis l'absence prolongée de ce dernier changent tout. Au même moment, l'entreprise traverse une période critique, et le prestataire de paiement impose de nouvelles exigences presque au dernier moment, avec très peu de temps et de moyens pour les livrer. Du jour au lendemain, je me consacre entièrement au produit Villyz, dont je reprends seul la responsabilité technique et produit. Le rôle, provisoire au départ, est confirmé de façon définitive.`,
         },
         period: {
            en: "October 2025 - January 2026",
            fr: "Octobre 2025 - janvier 2026",
         },
         sections: [
            {
               items: [
                  {
                     en: (
                        <>
                           <StrongText text="Owning production." /> Daily
                           monitoring, batch checks and log analysis, production
                           deployments on OVH, incident management. Checking
                           payments, repayments and installments, including on
                           closed projects whose repayments are still ongoing.
                        </>
                     ),
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
                     en: (
                        <>
                           <StrongText text="Meeting the provider's requirements." />{" "}
                           SCA was extended to legal entities: project owners
                           and donors. Then consent requirements applied to both
                           donors and individual investors. These flows are
                           imposed by the payment provider: each time, I
                           designed ours and adapted a large part of the
                           business rules to integrate them, on my own, with a
                           heavy workload and very tight deadlines. As with SCA,
                           their test environments were unstable, and we had to
                           go live on a version that still was.
                        </>
                     ),
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
                     en: (
                        <>
                           <StrongText text="Fixing incidents at the root." />{" "}
                           Debits were being taken from inactive accounts: I set
                           up their deletion.
                        </>
                     ),
                     fr: (
                        <>
                           <StrongText text="Traiter les incidents à la racine." />{" "}
                           Des prélèvements touchent des comptes inactifs : je
                           mets en place leur suppression.
                        </>
                     ),
                  },
                  {
                     en: (
                        <>
                           <StrongText text="Leading the product." /> Sprint
                           planning, prioritization, trade-offs between
                           business, regulatory and technical concerns. Bridging
                           business teams and technical changes.
                        </>
                     ),
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
                     en: (
                        <>
                           <StrongText text="Continuing to develop" />, while
                           still handling level 2 support.
                        </>
                     ),
                     fr: (
                        <>
                           <StrongText text="Continuer à développer" />, tout en
                           gardant le SAV de niveau 2.
                        </>
                     ),
                  },
                  {
                     en: (
                        <>
                           <StrongText text="Meeting data needs." /> I provided
                           my colleagues with the data extracts they needed,
                           then automated the most frequent ones in the admin
                           area.
                        </>
                     ),
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
                     en: (
                        <>
                           <StrongText text="Automating and empowering the team." />{" "}
                           Building on the previous step, I took the admin area
                           further to automate tasks that shouldn&apos;t require
                           a developer. For example, blocking users: the
                           information arrives via webhooks, but also by email
                           to certain colleagues, who can now act on it
                           themselves.
                        </>
                     ),
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
               en: `Several hundred thousand euros in flows, between investments and repayments, came under my sole technical responsibility.`,
               fr: `Plusieurs centaines de milliers d'euros de flux, entre investissements et remboursements, passent sous ma seule responsabilité technique.`,
            },
            {
               en: `The platform kept running without a CTO, with its financial flows maintained.`,
               fr: `La plateforme continue de fonctionner sans CTO, avec ses flux financiers maintenus.`,
            },

            {
               en: `The payment provider's new requirements were delivered on time.`,
               fr: `Les nouvelles exigences du prestataire de paiement sont livrées dans les délais.`,
            },
            {
               en: `I went from executing to owning the product: I made the decisions, handled the trade-offs and was solely accountable for production, on an AMF-regulated business.`,
               fr: `Je passe d'exécutant à garant du produit : je décide, j'arbitre et je réponds seul de la production, sur une activité encadrée par l'AMF.`,
            },
            {
               en: `I learned to make the call and to say no, with objective arguments my colleagues could understand.`,
               fr: `J'apprends à trancher et à dire non, en argumentant de façon objective et compréhensible pour mes collègues.`,
            },
            {
               en: `Consent was delivered on a still-unstable provider environment, with no interruption to the flows.`,
               fr: `Le consentement est livré sur un environnement prestataire encore instable, sans interruption des flux.`,
            },

            {
               en: `I learned to think and act fast under pressure, a frequent situation during this period: assess the risk and impact, then reprioritize in the platform's best interest.`,
               fr: `J'apprends à raisonner et à agir vite dans l'urgence, situation fréquente sur cette période : évaluer le risque et l'impact, puis réorienter les priorités dans l'intérêt de la plateforme.`,
            },
         ],
      },
      {
         title: {
            en: "Step 3 - Handover",
            fr: "Étape 3 - Passation",
         },
         situation: {
            en: `After my position ended in late January 2026, Villyz asked me to stay on for two months as a freelancer. The platform was migrating to a new, more modern version on a different stack. During the switchover, the old one had to keep running, and the business rules could not get lost along the way.`,
            fr: `Après la fin de mon poste, fin janvier 2026, Villyz me sollicite pour rester deux mois en freelance. La plateforme migre vers une nouvelle version, plus moderne et sur une autre stack. Pendant cette bascule, l'ancienne doit continuer à tourner, et les règles métier ne doivent pas se perdre en route.`,
         },
         period: {
            en: "February - April 2026",
            fr: "Février - avril 2026",
         },
         sections: [
            {
               items: [
                  {
                     en: (
                        <>
                           <StrongText text="Passing on the critical business rules" />{" "}
                           that only I knew, so they would survive the
                           migration.
                        </>
                     ),
                     fr: (
                        <>
                           <StrongText text="Transmettre les règles métier critiques" />{" "}
                           que j&apos;étais seul à maîtriser, pour qu&apos;elles
                           survivent à la migration.
                        </>
                     ),
                  },
                  {
                     en: (
                        <>
                           <StrongText text="Making monitoring accessible to non-technical staff." />{" "}
                           As the technical lead, I analyzed the state of the
                           platform every day: payments, repayments,
                           installments. I turned these checks into Metabase
                           dashboards the team can read on its own.
                        </>
                     ),
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
                     en: (
                        <>
                           <StrongText text="Keeping the old platform under watch" />{" "}
                           while it was still running, alongside the migration.
                        </>
                     ),
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
               en: `The team can check for itself that payments, repayments and installments run smoothly.`,
               fr: `L'équipe vérifie par elle-même que les paiements, remboursements et échéances se passent bien.`,
            },
            {
               en: `The migration relies on documented business rules, rather than on one person's head.`,
               fr: `La migration se fait avec des règles métier documentées, et non plus dans la tête d'une seule personne.`,
            },
         ],
         metrics: {
            title: {
               en: `The platform for my period`,
               fr: `La plateforme sur ma période`,
            },
            description: {
               en: `The platform scaled up while I was developing it. This growth is due to the number of projects launched and improvements made to the onboarding and payment journeys.`,
               fr: `La plateforme a changé d'échelle pendant que je la développais. Cette croissance tient au nombre de projets lancés et à l'amélioration des parcours d'onboarding et de paiement.`,
            },
            info: {
               en: `Source : rapports d'activité publics de Villyz.`,
               fr: `Source: Villyz's public activity reports.`,
            },
            table: {
               headings: [
                  {
                     en: `Indicator`,
                     fr: `Indicateur`,
                  },
                  {
                     en: `Before my arrival`,
                     fr: `Avant mon arrivée`,
                  },
                  {
                     en: `2024 - 2025`,
                     fr: `2024 - 2025`,
                  },
               ],
               rows: [
                  [
                     {
                        en: `Citizen-funded projects`,
                        fr: `Projets de financement citoyen`,
                     },
                     {
                        en: `4`,
                        fr: `4`,
                     },
                     {
                        en: `12`,
                        fr: `12`,
                     },
                  ],
                  [
                     {
                        en: `Amount collected`,
                        fr: `Montant collecté`,
                     },
                     {
                        en: `a little over €200,000`,
                        fr: `un peu plus de 200 000 €`,
                     },
                     {
                        en: `approximately €2.6 million`,
                        fr: `environ 2,6 M€`,
                     },
                  ],
                  [
                     {
                        en: `Investors (cumulative)`,
                        fr: `Investisseurs (cumul)`,
                     },
                     {
                        en: `268 at the end of 2023`,
                        fr: `268 fin 2023`,
                     },
                     {
                        en: `1,142 by the end of 2025 (x4)`,
                        fr: `1 142 fin 2025 (x4)`,
                     },
                  ],
                  [
                     {
                        en: `Subscriptions (cumulative)`,
                        fr: `Souscriptions (cumul)`,
                     },
                     {
                        en: `366 at the end of 2023`,
                        fr: `366 fin 2023`,
                     },
                     {
                        en: `1,843 by the end of 2025 (x5)`,
                        fr: `1 843 fin 2025 (x5)`,
                     },
                  ],
               ],
            },
            tableSource: {
               en: (
                  <>
                     Sources : Villyz&apos;s{" "}
                     <ExternalLink
                        ariaLabel="link to statistics page of Villyz in a new tab"
                        href="https://www.villyz.fr/statistiques"
                     >
                        public activity reports
                     </ExternalLink>{" "}
                     and{" "}
                     <ExternalLink
                        ariaLabel="link to performance indicators page of Villyz in a new tab"
                        href="https://www.villyz.fr/indicateurs-de-performance"
                     >
                        performance indicators.
                     </ExternalLink>{" "}
                  </>
               ),
               fr: (
                  <>
                     Sources :{" "}
                     <ExternalLink
                        ariaLabel="lien vers la page statistique de Villyz dans un nouvel onglet"
                        href="https://www.villyz.fr/statistiques"
                     >
                        rapports d&apos;activité publics
                     </ExternalLink>{" "}
                     et{" "}
                     <ExternalLink
                        ariaLabel="lien vers la page indicateurs de performance de Villyz dans un nouvel onglet"
                        href="https://www.villyz.fr/indicateurs-de-performance"
                     >
                        indicateurs de performance
                     </ExternalLink>{" "}
                     de Villyz.
                  </>
               ),
            },

            citation: {
               en: (
                  <>
                     <figure className="border-l-4 border-primary pl-5">
                        <blockquote cite="https://lnkd.in/p/e3JVBPfX">
                           <p className="italic">
                              « Benjamin Ducau did a tremendous job at Villyz as
                              a developer, then as technical lead and product
                              owner. There are many skilled developers, but
                              (too) few with this level of maturity, proactivity
                              and collaboration with business teams! »
                           </p>
                        </blockquote>
                        <figcaption className="mt-3">
                           Arthur Moraglia, CEO of Villyz (translated from
                           French) -{" "}
                           <ExternalLink
                              ariaLabel="link to the original post from linkedin in a new tab"
                              href="https://lnkd.in/p/e3JVBPfX"
                           >
                              see the post on LinkedIn
                           </ExternalLink>
                        </figcaption>
                     </figure>
                  </>
               ),
               fr: (
                  <>
                     <figure className="border-l-4 border-primary pl-5">
                        <blockquote cite="https://lnkd.in/p/e3JVBPfX">
                           <p className="italic">
                              « Benjamin Ducau a fait un formidable travail au
                              sein de Villyz en tant que développeur, puis
                              référent technique et garant du produit. Il existe
                              beaucoup de développeurs qualifiés, mais (trop)
                              peu qui possèdent ce niveau de maturité, de
                              proactivité et de coopération avec les équipes
                              métiers ! »
                           </p>
                        </blockquote>
                        <figcaption className="mt-3">
                           Arthur Moraglia, président de Villyz -{" "}
                           <ExternalLink
                              ariaLabel="lien vers le post original sur linkedin dans un nouvel onglet"
                              href="https://lnkd.in/p/e3JVBPfX"
                           >
                              voir le post sur LinkedIn
                           </ExternalLink>
                        </figcaption>
                     </figure>
                  </>
               ),
            },
         },
      },
   ],
   impacts: [
      {
         en: "~€2.6M raised during my time there",
         fr: "~2,6 M€ collectés sur ma période",
      },
      {
         en: "x4 investors (268 → 1,142)",
         fr: "x4 investisseurs (268 → 1 142)",
      },
      {
         en: "x5 investments",
         fr: "x5 souscriptions",
      },
      {
         en: "Successful transfers: 30% → 70-80%",
         fr: "Virements aboutis : 30 % → 70-80 %",
      },
      {
         en: "Fewer support tickets despite x4 investors",
         fr: "Moins de tickets SAV malgré x4 investisseurs",
      },
      {
         en: "Highly regulated market (AMF), demanding provider",
         fr: "Marché très régulé (AMF), prestataire exigeant",
      },
      {
         en: "Lighthouse score: +30 points",
         fr: "Score Lighthouse : +30 points",
      },
      {
         en: (
            <>
               <StrongText text="Sole technical and product lead" />
            </>
         ),
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
      "C#",
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
