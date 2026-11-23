"use client";

import { useLocale } from "@/context/useLocale";
import FormContact from "../components/form/form-contact";
import PageTitle from "../components/text/page-title";

export default function ContactContent() {
   const locale = useLocale();
   const isEn = locale?.locale === "en";
   return (
      <div className="mb-15 p-4 md:max-w-xl md:mx-auto lg:max-w-2xl lg:mx-auto">
         <PageTitle
            baseTextEn="Contact "
            coloredTextEn="me"
            baseTextFr="Me "
            coloredTextFr="contacter"
         />
         <p className="my-10">
            {isEn
               ? "Tell me about your need: I'll take the time to read it before getting back to you."
               : "Parlez-moi de votre besoin : je prendrai le temps de le lire avant de vous répondre."}
         </p>
         <FormContact />
      </div>
   );
}
