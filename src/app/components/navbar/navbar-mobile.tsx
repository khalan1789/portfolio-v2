"use client";
import "./navbar-mobile.css";
import React, { useState } from "react";
import { useLocale } from "@/context/useLocale";
import Link from "next/link";

export default function NavbarMobile() {
   const locale = useLocale();
   const [isOpen, setIsOpen] = useState<boolean>(false);

   const toggleMenu = (e: React.MouseEvent) => {
      e.preventDefault();
      return setIsOpen(!isOpen);
   };

   return (
      <div
         className={` flex ${isOpen ? "absolute top-0 z-40 bg-background w-full border-bottom shadow-xl/20 shadow-primary pb-16" : "mr-[10px]  items-center flex-col pt-3"}`}
      >
         {isOpen && (
            <nav className="flex flex-col justify-center items-center mt-[1vw] w-full">
               <Link href={"/"} className="mt-8">
                  {locale?.locale === "en" ? "Home" : "Accueil"}
               </Link>
               <Link href={"/about"} className="mt-8">
                  {locale?.locale === "en" ? "About" : "À propos"}
               </Link>
               <Link href={"/experience"} className="mt-8">
                  {locale?.locale === "en" ? "Experience" : "Expériences"}
               </Link>
               <Link href={"/skills"} className="mt-8">
                  {locale?.locale === "en" ? "Skills" : "Compétences"}
               </Link>
            </nav>
         )}
         <button
            onClick={(e) => toggleMenu(e)}
            className={`flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none ${isOpen && "w-[40px] mt-3 mr-2"}`}
         >
            <span
               className={`block w-6 h-0.5 bg-foreground transition-all duration-200 ${isOpen && "rotate-45 translate-y-2 w-7"}`}
            ></span>
            <span
               className={`block w-6 h-0.5 bg-foreground transition-all duration-200 ${isOpen && "opacity-0"}`}
            ></span>
            <span
               className={`block w-6 h-0.5 bg-foreground transition-all duration-200 ${isOpen && "-rotate-45 -translate-y-2 w-7"}`}
            ></span>
         </button>
      </div>
   );
}
