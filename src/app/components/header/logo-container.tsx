import Logo from "../logo/logo";
import { grandHotel } from "@/app/styles/styles";

export default function LogoContainer() {
   return (
      <div className="flex content-center ml-[3vw] ">
         <Logo width={40} height={40} />
         <span
            className={`${grandHotel.className} text-lg sm:text-xl lg:text-2xl flex items-center ml-[10px]`}
         >
            Benjamin Ducau
         </span>
      </div>
   );
}
