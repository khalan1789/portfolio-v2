/* eslint-disable react/no-unescaped-entities */
"use client";
import "./home-page.css";
import { useLocale } from "@/context/useLocale";
import { useEffect } from "react";
import profileImg from "../../public/images/profil_side_croped.png";
import Image from "next/image";
import CustomButton from "./components/button/custom-button";
import CustomSpan from "./components/text/custom-span";
import Card from "./components/card/card";
import useFont from "@/context/useFont";

export default function Home() {
   const locale = useLocale();
   const font = useFont();
   useEffect(() => {}, [locale?.locale]);
   return (
      <main>
         <div className="hero-polygon flex h-[55rem] md:h-[35rem] md:justify-center bg-linear-to-r from-hero-alt to-hero ">
            <div className="flex flex-col h-full w-full relative md:flex-row md:max-w-[1088px] xl:md:max-w-[1288px]">
               <div className="flex flex-col h-[350px] w-full relative md:h-full md:w-1/2 lg:w-[40%] profile-img-container">
                  <Image
                     src={profileImg}
                     alt={
                        locale?.locale === "en"
                           ? "Profile picture"
                           : "Photo de profil"
                     }
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
                     <p className="w-full text-bold ml-3">Benjamin Ducau</p>
                     <p className="text-right text-bold text-sm max-w-[230px]">
                        {locale?.locale === "en"
                           ? "FULL-STACK DEVELOPER"
                           : "DÉVELOPPEUR FULL-STACK"}
                     </p>
                  </div>
               </div>
               <div className="flex flex-col p-5 pt-8 md:w-1/2 md:justify-center lg:w-[60%]">
                  <h1 className="font-bold text-3xl text-tercary lg:text-[2.5rem]">
                     Je construis des produits qui{" "}
                     <CustomSpan label="comprennent le besoin avant le code." />
                  </h1>
                  <p className="mt-7 mb-10 lg:text-lg">
                     13ans au contact direct des utilisateurs avant de devenir
                     développeur, cela change la façon dont j'aborde chaque
                     fonctionnalité : à quoi elle sert, pour qui, et ce qu'elle
                     change vraiment.
                  </p>
                  <div className="flex justify-center">
                     <CustomButton label="Voir mon expérience" type="base" />
                  </div>
               </div>
            </div>
         </div>
         <div className="p-5 pt-15 flex flex-col items-center">
            {locale?.locale === "en" ? (
               <h2 className="text-2xl text-tercary font-bold mb-10 text-center lg">
                  Product-minded <CustomSpan label="Developpeur" />
               </h2>
            ) : (
               <h2 className="text-2xl text-tercary font-bold mb-10 text-center md:text-[2rem] ">
                  Développeur, <CustomSpan label="Orienté Produit" />
               </h2>
            )}
            <p className="xs:p-1 md:text-xl md:text-center md:max-w-[80vw]">
               {locale?.locale === "en"
                  ? ""
                  : "Je ne me contente pas d'écrire juste du code : je réfléchis au produit. Chaque fonctionnalité que je développe est conçue en gardant l'utilisateur final en tête. J'assure la liaison entre le design, les objectifs business et l'excellence technique, garantissant que le produit final fonctionne parfaitement tout en apportant une réelle valeur aux utilisateurs et aux parties prenantes."}
            </p>
            <div className="p-5 pt-12 flex flex-col justify-between items-center h-180 xs:h-150 md:flex-row md:w-full md:p-3 md:pt-4 md:h-100 lg:max-w-[1200px]">
               <Card
                  title={
                     locale?.locale === "en"
                        ? "User centric"
                        : "Centré utilisateur"
                  }
                  description={
                     locale?.locale === "en"
                        ? "Every interface decision stems from observed real-world usage, not an assumption"
                        : "Chaque décision d'interface part d'un usage réél observé, pas d'une supposition."
                  }
                  sizing=" w-full md:max-w-[30%] md:h-70 mdPlus:max-h-68 lg:max-h-55 xl:max-h-50"
               />
               <Card
                  title={
                     locale?.locale === "en" ? "" : "Qualité, avec lucidité"
                  }
                  description={
                     locale?.locale === "en"
                        ? "I aim for the cleanest code possible, without claiming perfection, and am ready to rework it when it's not quite there yet."
                        : "Je vise le code le plus propre possible, sans prétendre à la perfection et prêt à le retravailler quand ce n'est pas encore ça."
                  }
                  sizing=" w-full md:max-w-[30%] md:h-70 mdPlus:max-h-68 lg:max-h-55 xl:max-h-50"
               />
               <Card
                  title={
                     locale?.locale === "en"
                        ? "Impact driven"
                        : "Impact mesurable"
                  }
                  description={
                     locale?.locale === "en"
                        ? "I deliver what moves a metric, not what fills a backlog."
                        : "Je livre ce qui fait bouger un indicateur, pas ce qui remplit un backlog."
                  }
                  sizing=" w-full md:max-w-[30%] md:h-70 mdPlus:max-h-68 lg:max-h-55 xl:max-h-50"
               />
            </div>
         </div>
      </main>
   );
}
