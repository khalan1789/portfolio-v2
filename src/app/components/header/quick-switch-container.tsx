"use client";
import React, { useState } from "react";
import Image from "next/image";
import british from "../../../../public/icons/british-frame--32.png";
import france from "../../../../public/icons/france-frame-32.png";
import moon from "../../../../public/icons/lune.png";
import light from "../../../../public/icons/ampoule.png";
import { useLocale } from "@/context/useLocale";
import { useTheme } from "@/context/useTheme";

export default function QuickSwitchContainer() {
   const [isEnglishMode, setIsEnglishMode] = useState<boolean>(false);
   const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
   const locale = useLocale();
   const theme = useTheme();

   const showLocaleIcon = () => {
      return isEnglishMode ? british : france;
   };

   const showDarkModeIcon = () => {
      return isDarkMode ? light : moon;
   };

   const darmModeAltInFrench = `logo du drapeau de la ${isEnglishMode ? "France" : "Grande Bretagne"} `;
   const darmModeAltInEnglish = `${isDarkMode ? "France" : "Great Britain"} flag logo`;

   const returnDarkModeAlt = () => {
      return locale && locale.locale === "en"
         ? darmModeAltInEnglish
         : darmModeAltInFrench;
   };

   const localeAltInFrench = `symbole de ${isDarkMode ? "lumière" : "lune"}`;
   const localeAltInEnglish = `${isDarkMode ? "light" : "moon"} symbol`;
   const returnLocaleAlt = () => {
      return locale && locale.locale === "en"
         ? localeAltInEnglish
         : localeAltInFrench;
   };

   return (
      <div className="flex justify-between items-center w-full p-2">
         <button
            onClick={() => {
               return setIsDarkMode(!isDarkMode);
            }}
            className="cursor-pointer w-[30px] h-[30px]"
         >
            <Image
               src={showDarkModeIcon()}
               width={40}
               height={40}
               alt={returnDarkModeAlt()}
            />
         </button>
         <button
            onClick={() => {
               locale?.setLocale(isEnglishMode ? "fr" : "en");
               return setIsEnglishMode(!isEnglishMode);
            }}
            className="cursor-pointer w-[30px] h-[30px]"
         >
            <Image
               src={showLocaleIcon()}
               width={40}
               height={40}
               alt={returnLocaleAlt()}
            />
         </button>
      </div>
   );
}
