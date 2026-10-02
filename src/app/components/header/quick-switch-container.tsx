"use client";
import Image from "next/image";
import british from "../../../../public/icons/british-frame--32.png";
import france from "../../../../public/icons/france-frame-32.png";
import moon from "../../../../public/icons/lune.png";
import lightDarkMode from "../../../../public/icons/light-darkmode.svg";
import lightBlackAndWhiteMode from "../../../../public/icons/light-monoWhite.svg";
import lightWhiteAndBlackMode from "../../../../public/icons/light-monoDark.svg";
import lightYellow from "../../../../public/icons/light-yellowBlue.svg";
import { useLocale } from "@/context/useLocale";
import { useTheme } from "@/context/useTheme";
import { Locale, Theme } from "@/types/types";
import britishDarkMode from "../../../../public/icons/union-jack-darkmode.svg";
import britishBlackAndWhite from "../../../../public/icons/union-jack-monoBlack.svg";
import britishWhiteAndBlack from "../../../../public/icons/union-jack-monoWhite.svg";
import britishYellowBlue from "../../../../public/icons/union-jack-yellowBlue.svg";
import franceDarkMode from "../../../../public/icons/france-darkmode.svg";
import franceBlackAndWhite from "../../../../public/icons/france-monoBlack.svg";
import franceWhiteAndBlack from "../../../../public/icons/france-monoWhite.svg";
import franceYellowBlue from "../../../../public/icons/france-yellowBlue.svg";

export default function QuickSwitchContainer() {
   const locale = useLocale();
   const theme = useTheme();
   const isEnglishMode = locale?.locale === "en";
   const isLightMode = theme?.theme === "light";
   const showLocaleIcon = () => {
      if (locale?.locale === "en") {
         if (theme?.theme === "dark") return britishDarkMode;
         if (theme?.theme === "blackAndWhite") return britishWhiteAndBlack;
         if (theme?.theme === "whiteAndBlack") return britishBlackAndWhite;
         if (theme?.theme === "yellowOnBlue") return britishYellowBlue;
         return british;
      } else {
         if (theme?.theme === "dark") return franceDarkMode;
         if (theme?.theme === "blackAndWhite") return franceWhiteAndBlack;
         if (theme?.theme === "whiteAndBlack") return franceBlackAndWhite;
         if (theme?.theme === "yellowOnBlue") return franceYellowBlue;
         return france;
      }
   };

   const showDarkModeIcon = () => {
      if (theme?.theme === "dark") return lightDarkMode;
      if (theme?.theme === "yellowOnBlue") return lightYellow;
      if (theme?.theme === "whiteAndBlack") return lightWhiteAndBlackMode;
      if (theme?.theme === "blackAndWhite") return lightBlackAndWhiteMode;
      return moon;
   };

   const handleTheme = () => {
      if (!isLightMode) {
         theme?.setTheme("light");
         localStorage.setItem("theme", "light" as Theme);
      } else {
         theme?.setTheme("dark");
         localStorage.setItem("theme", "dark" as Theme);
      }
   };

   const handleLocale = () => {
      if (isEnglishMode) {
         locale?.setLocale("fr");
         localStorage.setItem("locale", "fr" as Locale);
      } else {
         locale?.setLocale("en");
         localStorage.setItem("locale", "en" as Locale);
      }
   };

   const darmModeAltInFrench = `symbole de ${isLightMode ? "lune" : "lumière"}`;
   const darmModeAltInEnglish = `${isLightMode ? "moon" : "light"} symbol`;

   const returnDarkModeAlt = () => {
      return locale && locale.locale === "en"
         ? darmModeAltInEnglish
         : darmModeAltInFrench;
   };

   const localeAltInFrench = `logo du drapeau de la ${isEnglishMode ? "France" : "Grande Bretagne"}`;
   const localeAltInEnglish = `${isLightMode ? "France" : "Great Britain"} flag logo`;
   const returnLocaleAlt = () => {
      return locale && locale.locale === "en"
         ? localeAltInEnglish
         : localeAltInFrench;
   };

   return (
      <div className="flex min-w-[160px] justify-around p-2 ml-auto mr-2 sm:mr-4 items-center lg:justify-between lg:w-full lg:ml-0 lg:mr-0 lg:min-w-auto ">
         <button
            onClick={handleTheme}
            className="cursor-pointer w-[30px] h-[30px]"
            type="button"
            aria-label={
               locale?.locale === "en"
                  ? "Change theme button"
                  : "Bouton pour changer de thème"
            }
         >
            <Image
               src={showDarkModeIcon()}
               width={40}
               height={40}
               alt={returnDarkModeAlt()}
            />
         </button>
         <button
            onClick={handleLocale}
            className="cursor-pointer w-[30px] h-[30px]"
            type="button"
            aria-label={
               locale?.locale === "en"
                  ? "Change language button"
                  : "Bouton pour changer de langue"
            }
         >
            <Image
               src={showLocaleIcon()}
               width={40}
               height={40}
               alt={returnLocaleAlt()}
            />
            <span className="italic h-3">
               {locale?.locale === "en" ? "EN" : "FR"}
            </span>
         </button>
      </div>
   );
}
