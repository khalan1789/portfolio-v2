"use client";
import { useState } from "react";
import NavLink from "./navLink";
import { Url } from "@/types/types";
import { useLocale } from "@/context/useLocale";

export default function Navbar() {
   const [urlPageInfo, setUrlPageInfo] = useState<Url>("/");
   const locale = useLocale();

   const changeUrlPageInfo = (url: Url) => {
      return setUrlPageInfo(url);
   };

   return (
      <div className="flex w-full justify-around items-center h-full">
         <NavLink
            href={"/"}
            label={locale?.locale === "en" ? "Home" : "Accueil"}
            onClickAction={changeUrlPageInfo}
            selectedUrl={urlPageInfo}
         />
         <NavLink
            href={"/about"}
            label={locale?.locale === "en" ? "About" : "À propos"}
            onClickAction={changeUrlPageInfo}
            selectedUrl={urlPageInfo}
         />
         <NavLink
            href={"/experience"}
            label={locale?.locale === "en" ? "Experience" : "Expériences"}
            onClickAction={changeUrlPageInfo}
            selectedUrl={urlPageInfo}
         />
         <NavLink
            href={"/skills"}
            label={locale?.locale === "en" ? "Skills" : "Compétences"}
            onClickAction={changeUrlPageInfo}
            selectedUrl={urlPageInfo}
         />
      </div>
   );
}
