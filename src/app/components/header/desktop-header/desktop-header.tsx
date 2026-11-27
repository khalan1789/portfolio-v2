import LogoContainer from "../logo-container";
import Navbar from "../../navbar/navbar";
import QuickSwitchContainer from "../quick-switch-container";
import AccessibilityModal from "../../modal/accessibility-modal";

export default function DesktopHeader() {
   return (
      <div className="flex p-3 content-center h-[90px] border-b border-primary justify-between hidden lg:flex 2xl:max-w-[1800px] 2xl:mx-auto 2xl:border-b-0">
         <LogoContainer />
         <div className="w-3/6 justify-center">
            <Navbar />
         </div>
         <div className="w-[180px] bg-blue flex justify-between mr-[2vw]">
            <QuickSwitchContainer />

            <div className="bg-blue flex items-center w-1/3  ml-[30px]">
               <AccessibilityModal />
            </div>
         </div>
      </div>
   );
}
