import DesktopHeader from "./desktop-header/desktop-header";
import MobileHeader from "./mobile-header/mobile-header";

export default function Header() {
   return (
      <header className="sticky top-0 w-full z-50 bg-background mdPlus:shadow-xs">
         <MobileHeader />
         <DesktopHeader />
      </header>
   );
}
