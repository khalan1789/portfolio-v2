import Image from "next/image";
import React from "react";
import logoImage from "../../../../public/images/logo_brandind_ouvert.svg";
type Props = {
   width: number;
   height: number;
};

export default function Logo({ width, height }: Props) {
   return (
      <>
         <Image
            src={logoImage}
            alt="Logo cliquable"
            aria-description="Logo du site, cliquable pour revenir à la pague d'accueil"
            width={width}
            height={height}
            className="color-secondary"
         />
      </>
   );
}
