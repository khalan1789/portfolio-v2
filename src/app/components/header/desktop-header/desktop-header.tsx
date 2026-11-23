import LogoContainer from "../logo-container";
import Navbar from "../../navbar/navbar";
import QuickSwitchContainer from "../quick-switch-container";
import AccessibilityModal from "../../modal/accessibility-modal";

export default function DesktopHeader() {
   return (
      <div className="flex p-3 content-center h-[90px] border-b border-primary lg:justify-between hidden lg:flex">
         <LogoContainer />
         <div className="w-[650px] xl:w-[50%]">
            <Navbar />
         </div>
         <div className="w-[160px] bg-blue flex justify-between xl:mr-[2vw] xl:w-[180px]">
            <QuickSwitchContainer />

            <div className="bg-blue flex items-center w-1/3  ml-[30px]">
               <AccessibilityModal />
            </div>
         </div>
      </div>
   );
}
