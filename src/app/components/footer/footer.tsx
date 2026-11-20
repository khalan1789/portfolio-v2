"use client";

import { useLocale } from "@/context/useLocale";
import MediaIcon from "../logo/media-icon";
import githubClassic from "../../../../public/icons/github-classic.svg";
import githubWhiteBlack from "../../../../public/icons/github-white-on-black.svg";
import githubBlackWhite from "../../../../public/icons/github-black-on-white.svg";
import githubYellowBlue from "../../../../public/icons/github-yellow-on-blue.svg";
import linkedinClassic from "../../../../public/icons/linkedin-classic.svg";
import linkedinWhiteBlack from "../../../../public/icons/linkedin-white-on-black.svg";
import linkedinBlackWhite from "../../../../public/icons/linkedin-black-on-white.svg";
import linkedinYellowBlue from "../../../../public/icons/linkedin-yellow-on-blue.svg";
import { useTheme } from "@/context/useTheme";

export default function Footer() {
   const locale = useLocale();
   const theme = useTheme();
   const isEn = locale?.locale === "en";
   const returnYear = new Date().getFullYear();

   const linkedinLogo = () => {
      if (theme?.theme === "light") return linkedinClassic;
      if (theme?.theme === "dark") return linkedinWhiteBlack;
      if (theme?.theme === "blackAndWhite") return linkedinWhiteBlack;
      if (theme?.theme === "whiteAndBlack") return linkedinBlackWhite;
      if (theme?.theme === "yellowOnBlue") return linkedinYellowBlue;
      return null;
   };

   const githubLogo = () => {
      if (theme?.theme === "light") return githubClassic;
      if (theme?.theme === "dark") return githubWhiteBlack;
      if (theme?.theme === "blackAndWhite") return githubWhiteBlack;
      if (theme?.theme === "whiteAndBlack") return githubBlackWhite;
      if (theme?.theme === "yellowOnBlue") return githubYellowBlue;
      return null;
   };

   return (
      <footer className="w-full h-20 text-center flex flex-col justify-center items-center gap-5 mt-14">
         <div
            data-animate="reveal-up"
            className="flex w-full justify-around items-center sm:w-70  lg:ml-4 lg:min-w-40"
         >
            <MediaIcon
               href="https://www.linkedin.com/in/benjamin-ducau/"
               icon={linkedinLogo()}
               alt={isEn ? "linkedin logo" : "logo linkedin"}
               ariaLabel={
                  isEn
                     ? "link to the linkedin profile in a new tab"
                     : "lien vers le profil linkedin dans un nouvel onglet"
               }
               height={30}
               width={30}
            />
            <MediaIcon
               href="https://github.com/khalan1789/"
               icon={githubLogo()}
               alt={isEn ? "github logo" : "logo github"}
               ariaLabel={
                  isEn
                     ? "link to the github profile in a new tab"
                     : "lien vers le profil github dans un nouvel onglet"
               }
               height={100}
               width={100}
            />
         </div>
         <p data-animate="reveal-up" className="text-tercary mb-10">
            {isEn ? "Designed and built by" : "Conçu et réalisé par"} Benjamin
            Ducau <span>· {returnYear}</span>
         </p>
      </footer>
   );
}
