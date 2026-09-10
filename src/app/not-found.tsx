import Link from "next/link";
import React from "react";

export default function NotFound() {
   return (
      <div className="bg-blue">
         <h1>Erreur, cette page n'hesite pas</h1>
         <Link className="border border-xl rounded bg-red" href={"/"}>
            Revenir à l'accueil
         </Link>
      </div>
   );
}
