"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useLocale } from "@/context/useLocale";
import ToggleButton from "../button/toggle-button";
import { useTheme } from "@/context/useTheme";
import { Theme } from "@/types/types";
import CloseButton from "../button/close-button";
import useFont from "@/context/useFont";
import settingBlackAndWhite from "../../../../public/icons/accessibility-monoDark.svg";
import settingBase from "../../../../public/icons/accessibilite_base.png";
import settingYellow from "../../../../public/icons/accessibility-yellowBlue.svg";
import settingDarkMode from "../../../../public/icons/accessibility-darkmode.svg";
import settingWhiteAndBlack from "../../../../public/icons/accessibility-monoWhite.svg";

export default function AccessibilityModal() {
   const locale = useLocale();
   const theme = useTheme();
   const font = useFont();
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const toggleOpening = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsOpen(!isOpen);
   };

   const ariaRoleOpenAccessibilityButtonDescription =
      locale?.locale === "en"
         ? "accessibility button opening"
         : "bouton d'ouverture pour l'accessibilité";

   const ariaLabelOpenAccessibilityButton =
      locale?.locale === "en"
         ? "accessibility button"
         : "bouton pour l'accessibilité";

   const ariaRoleBlackAndWhite =
      locale?.locale === "en"
         ? "button to activate black and white mode"
         : "bouton pour activer le mode noir et blanc";
   const ariaRoleWhiteAndBlack =
      locale?.locale === "en"
         ? "button to activate white and black mode"
         : "bouton pour activer le mode blanc et noir ";
   const ariaRoleColorblindness =
      locale?.locale === "en"
         ? "button to activate colorblindness mode"
         : "bouton pour activer le mode daltonien";
   const ariaRoleColorDark =
      locale?.locale === "en"
         ? "button to activate dark mode"
         : "bouton pour activer le mode sombre";

   const ariaRoleFont =
      locale?.locale === "en"
         ? "button to activate dyslexic font"
         : "bouton switch pour activer la police dyslexique";

   const defaultTheme: Theme = "light";

   const toggleTheme = (newTheme: Theme) => {
      return theme?.theme === newTheme
         ? (theme!.setTheme(defaultTheme),
           localStorage.setItem("theme", defaultTheme))
         : (theme!.setTheme(newTheme), localStorage.setItem("theme", newTheme));
   };

   const toggleFont = () => {
      return font!.font === "dyslexic"
         ? (font?.setFont("default"), localStorage.setItem("font", "default"))
         : (font?.setFont("dyslexic"),
           localStorage.setItem("font", "dyslexic"));
   };

   const setAccessibilityIcon = (): StaticImageData | undefined => {
      if (theme?.theme === "whiteAndBlack") return settingBlackAndWhite;
      if (theme?.theme === "blackAndWhite") return settingWhiteAndBlack;
      if (theme?.theme === "dark") return settingDarkMode;
      if (theme?.theme === "yellowOnBlue") return settingYellow;
      return settingBase;
   };

   const resetSettings = (e: React.MouseEvent) => {
      e.preventDefault();
      theme?.setTheme(defaultTheme);
      localStorage.setItem("theme", defaultTheme);
      font?.setFont("default");
      localStorage.setItem("font", "default");
   };

   return (
      <>
         <button
            onClick={(e) => toggleOpening(e)}
            aria-roledescription={ariaRoleOpenAccessibilityButtonDescription}
            aria-label={ariaLabelOpenAccessibilityButton}
            className="cursor-pointer"
            type="button"
         >
            <Image
               src={setAccessibilityIcon() ?? settingBase}
               width={40}
               height={40}
               alt={
                  locale?.locale === "en"
                     ? "accessibilty settings button"
                     : "bouton de réglage pour les paramètres d'accessibilité"
               }
            />
         </button>
         {isOpen && (
            <div className="fixed top-[90px] right-0 w-[380px] p-4 border bg-card z-10">
               <div className="flex justify-end  w-full mb-2">
                  <CloseButton
                     onClickAction={() => setIsOpen(!isOpen)}
                     ariaRoleDescription={
                        locale?.locale === "en"
                           ? "close accessibility modal button"
                           : "bouton pour fermer la fenêtre d'accessibilité"
                     }
                     ariaLabel={
                        locale?.locale === "en"
                           ? "closing button"
                           : "bouton de fermeture"
                     }
                  />
               </div>
               <h3 className="text-center text-lg mb-5">
                  {locale?.locale === "en"
                     ? "Accessibility settings"
                     : "Paramètres d'accessibilité"}
               </h3>
               <p className="mb-3 text-center">
                  {locale?.locale === "en"
                     ? "Contrast and colours "
                     : " Couleurs et contrastes"}
               </p>
               <ToggleButton
                  id={"button-monoDark"}
                  label={
                     locale?.locale === "en"
                        ? "Black and White mode"
                        : "Mode Noir et Blanc"
                  }
                  toggleAction={() => toggleTheme("blackAndWhite")}
                  isChecked={theme?.theme === "blackAndWhite"}
                  ariaRoleDescription={ariaRoleBlackAndWhite}
               />
               <ToggleButton
                  id={"button-monoWhite"}
                  label={
                     locale?.locale === "en"
                        ? "White and Black mode"
                        : "Mode Blanc et Noir"
                  }
                  toggleAction={() => toggleTheme("whiteAndBlack")}
                  isChecked={theme?.theme === "whiteAndBlack"}
                  ariaRoleDescription={ariaRoleWhiteAndBlack}
               />
               <ToggleButton
                  id={"button-yellowblue"}
                  label={
                     locale?.locale === "en"
                        ? "Colorblindness mode"
                        : "Mode daltonisme"
                  }
                  toggleAction={() => toggleTheme("yellowOnBlue")}
                  isChecked={theme?.theme === "yellowOnBlue"}
                  ariaRoleDescription={ariaRoleColorblindness}
               />
               <ToggleButton
                  id={"button-darkMode"}
                  label={locale?.locale === "en" ? "Dark mode" : "Mode sombre"}
                  toggleAction={() => toggleTheme("dark")}
                  isChecked={theme?.theme === "dark"}
                  ariaRoleDescription={ariaRoleColorDark}
               />
               <p className="mt-3 mb-2 text-center">
                  {locale?.locale === "en" ? "Typography" : " Police"}
               </p>
               <ToggleButton
                  id={"button-fontMode"}
                  label={
                     locale?.locale === "en"
                        ? "Dyslexic mode"
                        : "Mode dyslexique"
                  }
                  isChecked={font?.font === "dyslexic"}
                  toggleAction={() => toggleFont()}
                  ariaRoleDescription={ariaRoleFont}
               />
               <button
                  className="mt-7 cursor-pointer underline hover:font-bold block ml-auto mr-auto"
                  onClick={(e) => resetSettings(e)}
                  type="button"
               >
                  {locale?.locale === "en"
                     ? "Reset settings"
                     : "Réinitialiser les réglages"}
               </button>
            </div>
         )}
      </>
   );
}
