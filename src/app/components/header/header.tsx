import Navbar from "../navbar/navbar";
import AccessibilityModal from "../modal/accessibility-modal";
import LogoContainer from "./logo-container";
import QuickSwitchContainer from "./quick-switch-container";

export default function Header() {
   return (
      <div className="flex p-3 content-center h-[90px] border-b border-primary justify-between">
         <LogoContainer />
         <div className="w-3/6 justify-center align-">
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
