"use client";
import React, { useState } from "react";
import Image from "next/image";
import access1 from "../../../../public/icons/accessibilite(4).png";
import { useLocale } from "@/context/useLocale";

export default function AccessibilityModal() {
   const [isOpen, setIsOpen] = useState<boolean>(true);
   const locale = useLocale();

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

   return isOpen ? (
      <div className="fixed top-0 right-0 w-200[px]">
         <div>
            <span>
               {locale?.locale === "en"
                  ? "White and black mode"
                  : "Mode Blanc et Noir"}
            </span>
            <button aria-roledescription={ariaBlackAndWhite}>
               ici toggle button blanc noir
            </button>
         </div>
         <div>
            <span>
               {locale?.locale === "en"
                  ? "Black and white mode"
                  : "Mode Blanc et Noir"}
            </span>
            <button aria-roledescription={ariaWhiteAndBlack}>
               ici toggle button
            </button>
         </div>
         <div>
            <span>
               {locale?.locale === "en"
                  ? "White and black mode"
                  : "Colorblindness mode"}
            </span>
            <button aria-roledescription={ariaColorblindness}>
               ici toggle button
            </button>
         </div>
         <div></div>
      </div>
   ) : (
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
   );
}
