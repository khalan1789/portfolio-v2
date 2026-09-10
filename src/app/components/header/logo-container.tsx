import React from "react";
import Logo from "../logo/logo";
import { grandHotel } from "@/app/styles/styles";

export default function LogoContainer() {
   return (
      <div className="flex content-center ml-[3vw] ">
         <Logo width={40} height={40} />
         <p
            className={`${grandHotel.className} text-3xl flex items-center ml-[10px]`}
         >
            Benjamin Ducau
         </p>
      </div>
   );
}
