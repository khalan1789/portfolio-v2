import { AppUrl, Directions } from "@/types/types";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
   ariaLabel: string;
   href: AppUrl | string;
   description: string | ReactNode;
   direction?: Directions;
};

const comeBack: Directions = "back";
const goForward: Directions = "forward";

export default function CustomAppNavLink({
   ariaLabel,
   href,
   description,
   direction,
}: Props) {
   {
      return direction === comeBack ? (
         <Link
            aria-label={ariaLabel}
            href={href}
            className="text-primary mt-5 hover:font-bold"
         >
            <span aria-hidden="true">← </span>
            {description}
         </Link>
      ) : direction === goForward ? (
         <Link
            aria-label={ariaLabel}
            href={href}
            className="text-primary mt-5 hover:font-bold"
         >
            {description}
            <span aria-hidden="true"> →</span>
         </Link>
      ) : (
         <Link
            aria-label={ariaLabel}
            href={href}
            className="text-primary mt-5 hover:font-bold"
         >
            {description}
         </Link>
      );
   }
}
