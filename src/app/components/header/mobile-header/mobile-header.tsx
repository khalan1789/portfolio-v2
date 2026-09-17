import React from "react";
import LogoContainer from "../logo-container";
import NavbarMobile from "../../navbar/navbar-mobile";
import QuickSwitchContainer from "../quick-switch-container";

export default function MobileHeader() {
   return (
      <div className="flex justify-between p-2 relative lg:hidden static">
         <LogoContainer />
         <QuickSwitchContainer />
         <NavbarMobile />
      </div>
   );
}
