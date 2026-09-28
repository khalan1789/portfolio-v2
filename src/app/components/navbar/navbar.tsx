"use client";
import NavLink from "./navLink";
import { useLocale } from "@/context/useLocale";
import { usePathname } from "next/navigation";

export default function Navbar() {
   const locale = useLocale();
   const pathName = usePathname();

   return (
      <div className="flex w-full justify-around items-center h-full">
         <NavLink
            href={"/"}
            label={locale?.locale === "en" ? "Home" : "Accueil"}
            selectedUrl={pathName}
         />
         <NavLink
            href={"/about"}
            label={locale?.locale === "en" ? "About" : "À propos"}
            selectedUrl={pathName}
         />
         <NavLink
            href={"/experience"}
            label={locale?.locale === "en" ? "Experience" : "Expériences"}
            selectedUrl={pathName}
         />
         <NavLink
            href={"/skills"}
            label={locale?.locale === "en" ? "Skills" : "Compétences"}
            selectedUrl={pathName}
         />
      </div>
   );
}
