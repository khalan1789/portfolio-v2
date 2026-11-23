"use client";

import { useLocale } from "@/context/useLocale";

export default function FormContact() {
   const locale = useLocale();
   const isEn = locale?.locale === "en";
   return (
      <form className="mt-10 lg:mt-2">
         <div className="flex flex-col sm:flex-row sm:justify-between">
            <div className="flex flex-col mb-6 sm:w-[45%]">
               <label className="mb-1" htmlFor="name">
                  {isEn ? "LastName" : "Nom"}
               </label>
               <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="bg-card border border-tercary rounded h-8 p-1"
               ></input>
            </div>
            <div className="flex flex-col mb-6 sm:w-[45%]">
               <label className="mb-1" htmlFor="firstname">
                  {isEn ? "FirstName" : "Prénom"}
               </label>
               <input
                  id="firstname"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="firstname"
                  className="bg-card border border-tercary rounded h-8 p-1"
               ></input>
            </div>
         </div>

         <div className="flex flex-col mb-6">
            <label className="mb-1" htmlFor="email">
               Email
            </label>
            <input
               id="email"
               name="email"
               type="email"
               required
               autoComplete="email"
               className="bg-card border border-tercary rounded h-8 p-1"
            ></input>
         </div>
         <div className="flex flex-col mb-6">
            <label className="mb-1" htmlFor="subject">
               {isEn ? "Subject" : "Objet du message"}
            </label>
            <input
               id="subject"
               name="subject"
               type="text"
               required
               autoComplete="subject"
               className="bg-card border border-tercary rounded h-8 p-1"
            ></input>
         </div>
         <div className="flex flex-col">
            <label className="mb-1" htmlFor="message">
               Message
            </label>
            <textarea
               id="message"
               name="message"
               required
               className="bg-card border border-tercary rounded h-18 p-1 md:h-22 lg:h-30"
               rows={8}
               cols={8}
            ></textarea>
         </div>
         {/* Honeypot : hors écran et ignoré par les lecteurs d'écran */}
         <div aria-hidden="true" className="absolute -left-[9999px]">
            <label htmlFor="website">Ne pas remplir ce champ</label>
            <input
               id="website"
               name="website"
               type="text"
               tabIndex={-1}
               autoComplete="off"
            />
         </div>

         <button
            type="submit"
            disabled={false}
            className=" p-1 flex justify-center items-center border w-40 h-10 mt-10 border border-primary bg-light text-primary hover:font-bold cursor-pointer"
         >
            {/* {isSubmitting ? 'Envoi en cours…' : 'Envoyer'} */}
            Envoyer
         </button>

         {/* <p role="status">{formState.feedbackMessage}</p>  */}
      </form>
   );
}
