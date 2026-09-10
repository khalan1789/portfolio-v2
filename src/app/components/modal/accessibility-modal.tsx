import React from "react";
import Image from "next/image";
import access1 from "../../../../public/icons/accessibilite(4).png";

export default function AccessibilityModal() {
   return (
      <button>
         <Image
            src={access1}
            width={40}
            height={40}
            alt="bouton de réglage pour les paramètres d'accessibilité"
         />
      </button>
   );
}
