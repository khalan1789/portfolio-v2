"use client";
import React, { useState } from "react";
import Image from "next/image";
import access1 from "../../../../public/icons/accessibilite(4).png";
import { useLocale } from "@/context/useLocale";
import ToggleButton from "../button/toggle-button";
import { useTheme } from "@/context/useTheme";
import { Theme } from "@/types/types";
import CloseButton from "../button/close-button";
import useFont from "@/context/useFont";

export default function AccessibilityModal() {
   const locale = useLocale();
   const theme = useTheme();
   const font = useFont();
   const [isOpen, setIsOpen] = useState<boolean>(true);

   const toggleOpening = (e: React.MouseEvent) => {
      e.preventDefault();
      setIsOpen(!isOpen);
   };

   const ariaOpenAccessibilityButtonDescription =
      locale?.locale === "en"
         ? "accessibility button opening"
         : "bouton d'ouverture pour l'accessibilité";

   const ariaBlackAndWhite =
      locale?.locale === "en"
         ? "button to activate black and white mode"
         : "bouton pour activer le mode noir et blanc";
   const ariaWhiteAndBlack =
      locale?.locale === "en"
         ? "button to activate white and black mode"
         : "bouton pour activer le mode blanc et noir ";
   const ariaColorblindness =
      locale?.locale === "en"
         ? "button to activate colorblindness mode"
         : "bouton pour activer le mode daltonien";

   const defaultTheme: Theme = "light";

   const toggleTheme = (newTheme: Theme) => {
      return theme?.theme === newTheme
         ? theme!.setTheme(defaultTheme)
         : theme!.setTheme(newTheme);
   };

   const toggleFont = () => {
      return font!.font === "dyslexic"
         ? font?.setFont("default")
         : font?.setFont("dyslexic");
   };

   return (
      <>
         <button
            onClick={(e) => toggleOpening(e)}
            aria-roledescription={ariaOpenAccessibilityButtonDescription}
         >
            <Image
               src={access1}
               width={40}
               height={40}
               alt="bouton de réglage pour les paramètres d'accessibilité"
            />
         </button>
         {isOpen && (
            <div className="fixed top-[90px] right-0 w-[380px] p-4 border bg-card">
               <div className="flex justify-end  w-full mb-2">
                  <CloseButton
                     onClickAction={() => setIsOpen(!isOpen)}
                     ariaRoleDescription={
                        locale?.locale === "en"
                           ? "close accessibility modal button"
                           : "bouton pour fermer la fenêtre d'accessibilité"
                     }
                  />
               </div>
               <h3 className="text-center text-lg mb-5">
                  {locale?.locale === "en"
                     ? "Accessibility settings "
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
                        ? "Black and white mode"
                        : "Mode Noir et Blanc"
                  }
                  toggleAction={() => toggleTheme("monoWhite")}
                  isChecked={theme?.theme === "monoWhite"}
                  ariaRoleDescription={ariaWhiteAndBlack}
               />
               <ToggleButton
                  id={"button-monoWhite"}
                  label={
                     locale?.locale === "en"
                        ? "White and Black mode"
                        : "Mode Blanc et Noir"
                  }
                  toggleAction={() => toggleTheme("monoDark")}
                  isChecked={theme?.theme === "monoDark"}
                  ariaRoleDescription={ariaBlackAndWhite}
               />
               <ToggleButton
                  id={"button-yellowblue"}
                  label={
                     locale?.locale === "en"
                        ? "Colorblindness mode"
                        : "Mode daltonisme"
                  }
                  toggleAction={() => toggleTheme("yellowblue")}
                  isChecked={theme?.theme === "yellowblue"}
                  aria-roledescription={ariaColorblindness}
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
               />
            </div>
         )}
      </>
   );
}
