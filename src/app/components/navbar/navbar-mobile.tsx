"use client";
import "./navbar-mobile.css";
import React, { useState } from "react";
import { useLocale } from "@/context/useLocale";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarMobile() {
   const locale = useLocale();
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const pathName = usePathname();

   const toggleMenu = () => {
      return setIsOpen((wasOpen) => !wasOpen);
   };

   const closeMenu = () => setIsOpen(false);
   const isEn = locale?.locale === "en";

   return (
      <div
         className={` flex ${isOpen ? "absolute top-0 z-40 bg-background w-full border-bottom shadow-xl/20 shadow-primary pb-16" : "mr-[10px]  items-center flex-col pt-3"}`}
      >
         {isOpen && (
            <nav className="flex flex-col justify-center items-center mt-[1vw] w-full">
               <Link
                  href={"/"}
                  className="mt-8"
                  aria-current={pathName === "/" ? "page" : undefined}
                  onClick={closeMenu}
               >
                  {isEn ? "Home" : "Accueil"}
               </Link>
               <Link
                  href={"/about"}
                  className="mt-8"
                  aria-current={pathName === "/about" ? "page" : undefined}
                  onClick={closeMenu}
               >
                  {isEn ? "About" : "À propos"}
               </Link>
               <Link
                  href={"/experience"}
                  className="mt-8"
                  aria-current={pathName === "/experience" ? "page" : undefined}
                  onClick={closeMenu}
               >
                  {isEn ? "Experience" : "Expériences"}
               </Link>
               <Link
                  href={"/skills"}
                  className="mt-8"
                  aria-current={pathName === "/skills" ? "page" : undefined}
                  onClick={closeMenu}
               >
                  {isEn ? "Skills" : "Compétences"}
               </Link>
               <Link
                  href={"/contact"}
                  className="mt-8"
                  aria-current={pathName === "/contact" ? "page" : undefined}
                  onClick={closeMenu}
               >
                  Contact
               </Link>
            </nav>
         )}
         <button
            onClick={toggleMenu}
            className={`flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${isOpen && "w-[40px] mt-3 mr-2"}`}
            type="button"
            aria-label={
               isOpen
                  ? isEn
                     ? "Close menu"
                     : "Fermer le menu"
                  : isEn
                    ? "Open menu"
                    : "Ouvrir le menu"
            }
            aria-expanded={isOpen}
         >
            <span
               className={`block w-6 h-0.5 bg-primary transition-all duration-200 ${isOpen && "rotate-45 translate-y-2 w-7"}`}
            ></span>
            <span
               className={`block w-6 h-0.5 bg-primary transition-all duration-200 ${isOpen && "opacity-0"}`}
            ></span>
            <span
               className={`block w-6 h-0.5 bg-primary transition-all duration-200 ${isOpen && "-rotate-45 -translate-y-2 w-7"}`}
            ></span>
         </button>
      </div>
   );
}
