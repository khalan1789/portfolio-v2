/* eslint-disable react/no-unescaped-entities */
"use client";
import { useLocale } from "@/context/useLocale";
import { useTheme } from "@/context/useTheme";
import { useEffect } from "react";
import profileImg from "../../public/images/profil_side_croped.png";
import Image from "next/image";
import CustomButton from "./components/button/custom-button";
import CustomSpan from "./components/text/custom-span";
import Card from "./components/card/card";

export default function Home() {
   const locale = useLocale();
   const theme = useTheme();
   useEffect(() => {}, [locale?.locale]);
   return (
      <main className="">
         <div className="flex flex-col">
            <div className="flex flex-col h-[350px] w-full relative sm:h-[350px]">
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
                     objectPosition: "0% 6%",
                  }}
               />
               <div className="profile-bg"></div>
               <div className="w-[75%] flex flex-col absolute bottom-0 text-secondary p-2">
                  <p className="w-full text-bold ml-3">Benjamin Ducau</p>
                  <p className="text-right text-bold text-sm max-w-[230px]">
                     DEVELOPPEUR FULL-STACK
                  </p>
               </div>
            </div>
            <div className="flex flex-col p-5 pt-8">
               <h1 className="font-bold text-2xl text-tercary">
                  Je construis des produits qui{" "}
                  <CustomSpan label="comprennent le besoin avant le code" />
               </h1>
               <p className="mt-7 mb-10">
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
         <div className="p-5 pt-15">
            {locale?.locale === "en" ? (
               <h2 className="text-xl text-tercary font-bold">
                  Product-minded, <CustomSpan label="Developpeur" />
               </h2>
            ) : (
               <h2 className="text-2xl text-tercary font-bold mb-10">
                  Développeur, <CustomSpan label="Orienté Produit" />
               </h2>
            )}
            <p>
               {locale?.locale === "en"
                  ? ""
                  : "Je ne me contente pas d'écrire juste du code : je réfléchis au produit. Chaque fonctionnalité que je développe est conçue en gardant l'utilisateur final en tête. J'assure la liaison entre le design, les objectifs business et l'excellence technique, garantissant que le produit final fonctionne parfaitement tout en apportant une réelle valeur aux utilisateurs et aux parties prenantes."}
            </p>
            <div className="p-5 pt-8 flex flex-col justify-between h-200 md:flex-row md:w-full md:justify-around">
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
               />
            </div>
         </div>
      </main>
   );
}
