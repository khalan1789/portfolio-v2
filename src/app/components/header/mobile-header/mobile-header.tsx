import React from "react";
import LogoContainer from "../logo-container";
import NavbarMobile from "../../navbar/navbar-mobile";

export default function MobileHeader() {
   return (
      <div className="flex justify-between pt-1 relative lg:hidden static">
         <LogoContainer />
         <NavbarMobile />
      </div>
   );
}
