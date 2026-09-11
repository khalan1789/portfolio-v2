import Link from "next/link";
import React from "react";

export default function NotFound() {
   return (
      <div className="bg-blue">
         <h1>Erreur, cette page n&apos;existe pas</h1>
         <Link className="border border-xl rounded bg-red" href={"/"}>
            Revenir à l&apos;accueil
         </Link>
      </div>
   );
}
