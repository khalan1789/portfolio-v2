"use client";
import Image from "next/image";
import React from "react";
import logoLight from "../../../../public/images/logo_brandind_ouvert.svg";
import logoDark from "../../../../public/images/logo-darkmode.svg";
import logoMonoDark from "../../../../public/images/logo-mono-noir-sur-blanc.svg";
import logoMonoWhite from "../../../../public/images/logo-mono-blanc-sur-noir.svg";
import logoYellowBlue from "../../../../public/images/logo-yellow-blue.svg";
import { useTheme } from "@/context/useTheme";
type Props = {
   width: number;
   height: number;
};

export default function Logo({ width, height }: Props) {
   const theme = useTheme();
   const returnGoodLogo = () => {
      if (theme?.theme === "light") return logoLight;
      if (theme?.theme === "dark") return logoDark;
      if (theme?.theme === "blackAndWhite") return logoMonoDark;
      if (theme?.theme === "whiteAndBlack") return logoMonoWhite;
      if (theme?.theme === "yellowOnBlue") return logoYellowBlue;
      return null;
   };
   return (
      <>
         <Image
            src={returnGoodLogo()}
            alt="Logo cliquable"
            aria-description="Logo du site, cliquable pour revenir à la pague d'accueil"
            width={width}
            height={height}
            className="color-secondary"
         />
      </>
   );
}
