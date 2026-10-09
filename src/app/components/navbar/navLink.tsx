import Link from "next/link";
import React from "react";
import { Url } from "@/types/types";
type Props = {
   href: Url;
   label: string;
   selectedUrl: string;
};

export default function NavLink({ label, href, selectedUrl }: Props) {
   const isCurrentPage = selectedUrl === href;
   return (
      <Link
         href={href}
         className={`text-xl hover:font-bold ${isCurrentPage ? "selected-url" : ""}`}
         aria-current={isCurrentPage ? "page" : undefined}
      >
         {label}
      </Link>
   );
}
