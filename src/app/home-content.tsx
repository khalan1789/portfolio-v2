/* eslint-disable react/no-unescaped-entities */
"use client";
import "./home-page.css";
import { useLocale } from "@/context/useLocale";
import profileImg from "../../public/images/profil_side_croped.png";
import Image from "next/image";
import CustomButtonLink from "./components/button/custom-button-link";
import CustomSpan from "./components/text/custom-span";
import Card from "./components/card/card";
import useFont from "@/context/useFont";
import Methodology from "./components/methodology/methodology";

export default function HomeContent() {
   const locale = useLocale();
   const isEn = locale?.locale === "en";
   const font = useFont();
   const cardSizing = `w-full md:max-w-[30%] md:h-90 ${font?.font === "dyslexic" ? "lg:h-95" : "lg:h-70"}`;
   return (
      <>
         <div className="hero-polygon flex h-[55rem] md:h-[35rem] md:justify-center bg-linear-to-r from-hero to-hero ">
            <div className="flex flex-col h-full w-full relative md:flex-row md:max-w-[1088px] xl:md:max-w-[1288px]">
               <div
                  data-animate="hero-left"
                  className="flex flex-col h-[350px] w-full relative md:h-full md:w-1/2 lg:w-[40%] profile-img-container"
               >
                  <Image
                     src={profileImg}
                     alt={isEn ? "Profile picture" : "Photo de profil"}
                     placeholder="blur"
                     style={{
                        objectFit: "cover",
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        objectPosition: "0% 10%",
                     }}
                  />
                  <div className="profile-bg"></div>
                  <div className="w-[75%] flex flex-col absolute bottom-0 text-secondary p-2 md:bottom-10">
                     <p className="w-full text-bold ml-3 ">Benjamin Ducau</p>
                     <p
                        className={`text-right text-bold text-sm max-w-[230px] ${isEn ? "lg:max-w-[250px]" : "lg:max-w-[270px]"}`}
                     >
                        {isEn
                           ? "FULL-STACK DEVELOPER"
                           : "DÉVELOPPEUR FULL-STACK"}
                     </p>
                  </div>
               </div>
               <div
                  data-animate="hero-right"
                  className="flex flex-col p-5 pt-8 md:w-1/2 md:justify-center lg:w-[60%] "
               >
                  <h1 className="font-bold text-3xl text-tercary lg:text-[2.5rem]">
                     {isEn ? (
                        <>
                           I understand the need{" "}
                           <CustomSpan label="before I write the code." />
                        </>
                     ) : (
                        <>
                           Je comprends le besoin{" "}
                           <CustomSpan label="avant d'écrire le code." />
                        </>
                     )}
                  </h1>
                  <p className="mt-7 mb-10 lg:text-lg">
                     {isEn
                        ? "3 years building SaaS products in production, after 13 years working directly with customers. Before every feature, I ask three questions: what is it for, who is it for, and what does it actually change?"
                        : "3 ans de développement sur des produits SaaS en production, après 13 ans au contact direct des clients. Avant chaque fonctionnalité, trois questions : à quoi elle sert, pour qui, et ce qu'elle change vraiment."}
                  </p>
                  <div className="flex gap-18">
                     <CustomButtonLink
                        label={
                           isEn ? "View my experience" : "Voir mon expérience"
                        }
                        type="base"
                        url="/experience"
                        size="large"
                     />
                     <CustomButtonLink
                        label={isEn ? "Contact me" : "Me contacter"}
                        type="reverse"
                        url="/skills"
                        size="large"
                     />
                  </div>
               </div>
            </div>
         </div>
         <section className="p-5 pt-15 flex flex-col items-center">
            {isEn ? (
               <h2
                  data-animate="reveal-up"
                  className="text-2xl text-tercary font-bold mb-10 text-center md:text-[2rem]"
               >
                  Product-minded <CustomSpan label="Developpeur" />
               </h2>
            ) : (
               <h2
                  data-animate="reveal-up"
                  className="text-2xl text-tercary font-bold mb-10 text-center md:text-[2rem] "
               >
                  Développeur, <CustomSpan label="Orienté Produit" />
               </h2>
            )}
            <p
               data-animate="reveal-up"
               className="xs:p-1 md:text-xl md:text-center md:max-w-[80vw]"
            >
               {isEn
                  ? "Code is a tool. What matters is the difference the product makes for the people who use it and for the business."
                  : "Le code est un outil. Ce qui compte, c'est ce que le produit change pour ceux qui l'utilisent et pour l'entreprise."}
            </p>
            <div className="p-5 pt-12 flex flex-col justify-between items-center h-285 2xs:h-255 xs:h-210 md:flex-row md:w-full md:p-3 md:pt-4 md:h-120 lg:max-w-[1200px] ">
               <Card
                  title={isEn ? "User centric" : "Centré utilisateur"}
                  description={
                     isEn
                        ? "I start from real usage, not assumptions: at Villyz, I also handled level 2 support, dealing directly with users' issues."
                        : "Je pars de l'usage réel, pas d'une supposition : chez Villyz, j'assurais aussi le support de niveau 2, au contact direct des problèmes des utilisateurs."
                  }
                  sizing={cardSizing}
                  url="/experience/villyz"
                  urlLabel={isEn ? "View the experience" : "Voir l'expérience"}
                  ariaLabel={
                     isEn
                        ? "Link to experiences page"
                        : "Lien vers la page expériences"
                  }
                  animate
               />
               <Card
                  data-animate="reveal-up"
                  title={
                     isEn
                        ? "Pragmatic about quality"
                        : "Pragmatique sur la qualité"
                  }
                  description={
                     isEn
                        ? "Clean, maintainable code, delivered on time: I know how to balance the ideal solution with what the product needs right now."
                        : "Du code propre et maintenable, livré à temps : je sais arbitrer entre l'idéal et ce dont le produit a besoin maintenant."
                  }
                  sizing={cardSizing}
                  url="/skills"
                  urlLabel={isEn ? "View my skills" : "Voir mes compétences"}
                  ariaLabel={
                     isEn
                        ? "Link to skills page"
                        : "Lien vers la page compétences"
                  }
                  animate
               />
               <Card
                  data-animate="reveal-up"
                  title={
                     isEn
                        ? "Self-driven and adaptable"
                        : "Autonome et adaptable"
                  }
                  description={
                     isEn
                        ? "Learned C# / .NET on the job, then became the platform’s technical lead after a major production incident."
                        : "C# / .NET appris en poste, puis référent technique de la plateforme après un incident majeur en production."
                  }
                  sizing={cardSizing}
                  url="/experience/villyz"
                  urlLabel={
                     isEn ? "Explore my background" : "Découvrir mon parcours"
                  }
                  ariaLabel={
                     isEn ? "Link to about page" : "Lien vers la page à propos"
                  }
                  animate
               />
            </div>
         </section>
         <Methodology />
      </>
   );
}
