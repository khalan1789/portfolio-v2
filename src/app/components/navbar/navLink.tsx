import Link from "next/link";
import React from "react";
import { Url } from "@/types/types";
type Props = {
   href: Url;
   label: string;
   selectedUrl: Url;
   onClickAction: (url: Url) => void;
};

export default function NavLink({
   label,
   href,
   selectedUrl,
   onClickAction,
}: Props) {
   return (
      <Link
         href={href}
         className={`navLink ${selectedUrl && selectedUrl === href ? "selected-url" : ""}`}
         onClick={() => onClickAction(href)}
      >
         {label}
      </Link>
   );
}
