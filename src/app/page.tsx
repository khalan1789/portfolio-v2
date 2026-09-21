"use client";
import { useLocale } from "@/context/useLocale";
import { useTheme } from "@/context/useTheme";
import { useEffect } from "react";

export default function Home() {
   const locale = useLocale();
   const theme = useTheme();
   useEffect(() => {}, [locale?.locale]);
   return (
      <div className="flex flex-col flex-1 items-center justify-center ">
         <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
            <p>La valeur de locale : {locale?.locale}</p>
            <p>La valeur de theme : {theme?.theme}</p>
         </main>
      </div>
   );
}
