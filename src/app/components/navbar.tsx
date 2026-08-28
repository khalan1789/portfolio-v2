import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <Link href={"/"}>Accueil</Link>
      <Link href={"/"}>A propos</Link>
      <Link href={"/"}>Expériences</Link>
      <Link href={"/"}>Compétences</Link>
    </div>
  );
}
