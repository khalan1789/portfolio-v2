"use client";
import { useLocale } from "@/context/useLocale";
import CustomLi from "../components/text/custom-li";
import CustomButtonLink from "../components/button/custom-button-link";
import PageTitle from "../components/text/page-title";

export default function AboutContent() {
   const locale = useLocale();
   return (
      <div className="mb-15 lg:max-w-5xl lg:mx-auto">
         <PageTitle
            baseTextEn="About "
            coloredTextEn="me"
            baseTextFr="À propos "
            coloredTextFr="de moi"
            onStart
         />
         <h2 className="mt-5 text-xl text-bold italic mdPlus:mt-4">
            {locale?.locale === "en"
               ? "Understand before building"
               : "Comprendre avant de construire"}
         </h2>
         <div className="flex flex-col text-lg mt-8 mdPlus:flex-row lg:mt-10">
            <div className="mdPlus:pr-[2rem]">
               <h3 className="text-xl text-primary mt-10 mdPlus:text-2xl">
                  {locale?.locale === "en"
                     ? "Customer needs first"
                     : "Le besoin client d'abord"}
               </h3>
               <p className="mt-5">
                  {locale?.locale === "en"
                     ? "I spent over 13 years in the mobile phone industry before writing my first line of code. I started as a sales advisor in a single-carrier store, where the rule was simple: the brand's targets came first, and the customer had to fit in. When I moved to The Phone House, a multi-carrier retailer, I discovered the opposite. We started from the customer's real need, and that need led us to the offer that also worked for the business. That way of working felt much more like me, and it taught me early on that business and customer satisfaction aren't at odds."
                     : "J'ai passé plus de 13 ans dans la téléphonie avant d'écrire ma première ligne de code. J'ai commencé comme conseiller vendeur en boutique mono-opérateur, où la règle était claire : les objectifs de l'enseigne d'abord, et le client devait s'y retrouver. En passant chez The Phone House, en multi-opérateur, j'ai découvert l'inverse. On partait du besoin réel du client, et c'est lui qui guidait vers l'offre qui servait aussi l'entreprise. Cette façon de travailler me ressemblait bien plus, et elle m'a appris très tôt que business et satisfaction client ne s'opposent pas."}
               </p>
               <p className="mt-5">
                  {locale?.locale === "en"
                     ? "Then I switched, quite abruptly, to repairs at Point Service Mobile. A whole new job, with less than ten days of training: the rest I learned on my own, teaching myself. A habit I've kept ever since. The concept was demanding: repairing devices while handling customers in store, on the phone and by email. I also ran the store itself: inventory, margins, sourcing suppliers, disputes. Solving the customer's problem was the baseline, but the shop also had to keep running. Whatever the situation, I adapted to find a solution for both."
                     : "Puis j'ai basculé, assez brutalement, du côté réparation, chez Point Service Mobile. Un tout autre métier, avec moins de dix jours de formation : le reste, je l'ai appris seul, en me formant par moi-même. Une habitude que je n’ai jamais perdue depuis. Le concept était exigeant : réparer tout en assurant l'accueil, en boutique comme au téléphone ou par mail. J'y ai aussi géré le point de vente : les stocks, les marges, la recherche de fournisseurs, les litiges. Résoudre le problème du client restait la base, mais il fallait aussi que la boutique tourne. Quelle que soit la situation, je me suis adapté pour trouver une solution aux deux."}
               </p>
               <p className="mt-5">
                  {locale?.locale === "en"
                     ? "Looking back, I find the parallel amusing. In sales, I was the front end of the business: I put the product in the customer's hands and helped them use it. In repairs, I was the back end: I dug into how it was built to keep everything working. I was full stack long before I knew what it meant."
                     : "Avec le recul, je trouve le parallèle amusant. En vente, j'étais en quelque sorte le front-end du métier : je remettais le produit entre les mains du client et je l'aidais à s'en servir. En réparation, j'en étais le back-end : je plongeais dans sa conception pour que tout continue de fonctionner. J'étais full stack bien avant de savoir ce que ça voulait dire."}
               </p>
               <h3 className="text-xl text-primary mt-10 mdPlus:text-2xl lg:mt-15">
                  {locale?.locale === "en"
                     ? "Development by choice"
                     : "Le choix du développement"}
               </h3>
               <p className="mt-5">
                  {locale?.locale === "en"
                     ? "Software development was a deliberate choice. What has always driven me is understanding: understanding the customer, and understanding how things work. Code brought both together, with the added ability to build. Understand before you build: that became the way I work."
                     : "Le développement, je l'ai choisi. Ce qui m'a toujours animé, c'est de comprendre : le client, comme le fonctionnement des choses. Le code réunissait les deux, avec en plus la possibilité de construire. Comprendre avant de construire, c'est devenu ma façon de travailler."}
               </p>
               <p className="mt-5">
                  {locale?.locale === "en"
                     ? "My web development training opened up the whole craft to me. I started out with a stronger pull toward the front end, but I quickly felt at home on the back end too. To me, being a developer isn't about being only front end or back end: it's about understanding how a product works end to end, and being able to contribute across all of it."
                     : "Ma formation de développeur web m'a ouvert tout le métier. J'avais au départ une affinité plus marquée pour le front, mais je me suis très vite senti à l'aise côté back-end. Pour moi, être développeur, ce n'est pas être uniquement front ou back : c'est comprendre comment un produit fonctionne de bout en bout, et pouvoir intervenir sur l'ensemble."}
               </p>
               <p className="mt-5">
                  {locale?.locale === "en"
                     ? "A developer is part of a whole, and technology is only one part of the equation. That conviction has grown stronger with every role, especially at Villyz."
                     : "Le développeur fait partie d'un tout, et la technique n'est qu'une partie de l'équation. Cette conviction s'est renforcée au fil de mes expériences, en particulier chez Villyz."}
               </p>
               <h3 className="text-xl text-primary mt-10 mdPlus:text-2xl lg:mt-15">
                  {locale?.locale === "en"
                     ? "What I bring to your team"
                     : "Ce que je vous apporte"}
               </h3>
               <p className="mt-5">
                  {locale?.locale === "en"
                     ? "Here’s what I can concretely bring to your team : "
                     : "Concrètement, voici ce que je peux apporter à votre équipe :"}
               </p>
               <ul className="classic-li">
                  <CustomLi
                     type="primary"
                     description={
                        locale?.locale === "en" ? (
                           <>
                              <strong>
                                 A dual perspective: product and business.
                              </strong>{" "}
                              Face à une nouvelle fonctionnalité, je pense
                              autant à la personne qui va l’utiliser qu’à son
                              impact pour l’entreprise, aujourd’hui comme sur le
                              long terme. Je pose la bonne question avant de
                              foncer, et je propose une solution plus simple
                              quand elle répond aussi bien au besoin.
                           </>
                        ) : (
                           <>
                              <strong>
                                 Une double lecture, produit et business.
                              </strong>{" "}
                              Face à une nouvelle fonctionnalité, je pense
                              autant à la personne qui va l’utiliser qu’à son
                              impact pour l’entreprise, aujourd’hui comme sur le
                              long terme. Je pose la bonne question avant de
                              foncer, et je propose une solution plus simple
                              quand elle répond aussi bien au besoin.
                           </>
                        )
                     }
                  />
                  <CustomLi
                     type="primary"
                     description={
                        locale?.locale === "en" ? (
                           <>
                              <strong>A bridge between teams.</strong> Working
                              with support, business teams or leadership comes
                              naturally to me. I turn business needs into
                              technical solutions, and technical constraints
                              into plain language.
                           </>
                        ) : (
                           <>
                              <strong>Un lien entre les équipes.</strong>{" "}
                              Échanger avec le support, les équipes métier ou la
                              direction fait naturellement partie de mon
                              travail. Je traduis un besoin métier en solution
                              technique, et une contrainte technique en langage
                              clair.
                           </>
                        )
                     }
                  />
                  <CustomLi
                     type="primary"
                     description={
                        locale?.locale === "en" ? (
                           <>
                              <strong>Genuine adaptability.</strong> When things
                              don’t go as planned, I adapt: to business
                              constraints, to a vendor’s requirements, to the
                              company’s situation, or to a production incident.
                              Fixing things with whatever is at hand, stepping
                              up to take on responsibilities at short notice
                              without losing sight of business stakes: that’s
                              who I am.
                           </>
                        ) : (
                           <>
                              <strong>
                                 Une vraie capacité d&apos;adaptation.
                              </strong>{" "}
                              Quand les choses ne se passent pas comme prévu, je
                              m&apos;adapte : aux contraintes métier, aux
                              exigences d&apos;un prestataire, à la situation de
                              l&apos;entreprise, ou à un incident en production.
                              Réparer avec les moyens du bord, reprendre des
                              responsabilités au pied levé sans perdre de vue
                              les enjeux business, ça fait partie de moi.
                           </>
                        )
                     }
                  />
                  <CustomLi
                     type="primary"
                     description={
                        locale?.locale === "en" ? (
                           <>
                              <strong>Learning by doing.</strong> I learned C#
                              on the job, on a live product, just as I had
                              learned repairs: in the field. Getting up to speed
                              fast is second nature.
                           </>
                        ) : (
                           <>
                              <strong>Apprendre en faisant.</strong> J&apos;ai
                              appris le C# / .NET directement en poste, sur un
                              produit en production, comme j&apos;avais appris
                              la réparation : sur le terrain. Monter en
                              compétence vite, c&apos;est un réflexe.
                           </>
                        )
                     }
                  />
               </ul>
               <p className="mt-5 lg:mt-8">
                  {locale?.locale === "en"
                     ? "What matters to me is that the product moves forward, and the team moves forward with it."
                     : "Ce qui compte pour moi, c'est que le produit avance, et que l'équipe avance avec."}
               </p>
            </div>
            <aside className=" mt-10 sm:flex sm:justify-around mdPlus:flex-col mdPlus:min-w-[270px] mdPlus:justify-start lg:w-[390px]">
               <div className="rounded bg-card border border-primary p-5 text-center sm:w-[45%] mdPlus:w-full mdPlus:text-start">
                  <h4 className="mt-5 font-light">
                     {locale?.locale === "en"
                        ? "Specialization"
                        : "Spécialisation"}
                  </h4>
                  <p className="mt-1 font-bold">
                     {locale?.locale === "en"
                        ? "Full-stack · Front-end & back-end"
                        : "Full-stack · Front-end & back-end"}
                  </p>
                  <h4 className="mt-5 font-light">
                     {locale?.locale === "en" ? "Approach" : "Approche"}
                  </h4>
                  <p className="mt-1 font-bold">
                     {locale?.locale === "en"
                        ? "Product, users & business"
                        : "Produit, utilisateurs & business"}
                  </p>
                  <h4 className="mt-5 font-light">
                     {locale?.locale === "en" ? "Work mode" : "Mode de travail"}
                  </h4>
                  <p className="mt-1 font-bold">
                     {locale?.locale === "en"
                        ? "Fully remote · Open to hybrid"
                        : "Full remote · Ouvert à l'hybride"}
                  </p>
                  <h4 className="mt-5 font-light">
                     {locale?.locale === "en" ? "Location" : "Localisation"}
                  </h4>
                  <p className="mt-1 font-bold">
                     {locale?.locale === "en"
                        ? "Dax (Landes, France)"
                        : "Dax (Landes)"}
                  </p>
                  <h3 className="mt-5 font-light">
                     {locale?.locale === "en" ? "Open to" : "Ouvert à"}
                  </h3>
                  <p className="mt-1 font-bold">
                     {locale?.locale === "en"
                        ? "Permanent · Fixed-term · Freelance"
                        : "CDI · CDD · Freelance"}
                  </p>
               </div>
               <div className="bg-hero rounded border border-primary mt-10 min-h-50 p-5 flex flex-col justify-around items-center sm:w-[45%] sm:mt-0 mdPlus:mt-5 mdPlus:w-full lg:mt-10">
                  <h4 className="text-xl text-primary font-bold mdPlus:self-start ">
                     {locale?.locale === "en"
                        ? "Let's get in touch"
                        : "Entrons en contact"}
                  </h4>
                  <p className="w-full mt-2 mb-5 mdPlus:text-start mdPlus:mt-5 mdPlus:mb-10 lg:mt-8 lg:mb-14">
                     {locale?.locale === "en"
                        ? "A role to fill, a project to launch, or just want to chat? I'd be glad to talk."
                        : "Un poste à pourvoir, un projet à lancer, ou simplement envie d'échanger ? Je serai ravi d'en discuter."}
                  </p>
                  <CustomButtonLink
                     type="base"
                     label={
                        locale?.locale === "en" ? "Contact me" : "Me contacter"
                     }
                     url={"/skills"}
                  />
               </div>
            </aside>
         </div>
      </div>
   );
}
