"use client";
import Image from "next/image";
import funnyGif from "../../public/images/gifs/velo_fail.gif";
import { useLocale } from "@/context/useLocale";
import CustomButtonLink from "./components/button/custom-button-link";

export default function NotFound() {
   const locale = useLocale();
   const isEn = locale?.locale === "en";
   return (
      <main className="mb-15 lg:max-w-5xl lg:mx-auto">
         <div className="flex flex-col justify-center items-center w-full px-2 py-6">
            <Image
               src={funnyGif}
               unoptimized
               alt={
                  isEn
                     ? "fun nnimated gif of a dead end"
                     : "GIF animé fun d'une voie sans issue"
               }
               className="h-auto w-[min(90vw,45dvh)] lg:w-[min(55dvh,600px)]"
            />
            <h1 className="mt-5 font-bold text-xl text-primary mb-5">
               {" "}
               {isEn
                  ? "Oops... It looks like this page does'nt exist !"
                  : "Oups... On dirait que cette page n'existe pas !"}
            </h1>
            <CustomButtonLink
               url={"/"}
               type="base"
               label={isEn ? "Back to home" : "Revenir à l'accueil"}
               size="large"
            />
         </div>
      </main>
   );
}
