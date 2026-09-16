import DesktopHeader from "./desktop-header/desktop-header";
import MobileHeader from "./mobile-header/mobile-header";

export default function Header() {
   return (
      <>
         <MobileHeader />
         <DesktopHeader />
      </>
   );
}
