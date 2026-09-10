"use client";
import { useLocale } from "@/context/useLocale";
import { ReactNode, useEffect } from "react";

type Props = {
   Children: ReactNode;
};

export default function Home({ Children }: Props) {
   const locale = useLocale();
   useEffect(() => {}, [locale?.locale]);
   return (
      <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
         <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
            <p>La valeur de locale : {locale?.locale}</p>
         </main>
      </div>
   );
}
