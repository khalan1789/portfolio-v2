import { AppUrl } from "@/types/types";
import Link from "next/link";

type Props = {
   ariaLabel: string;
   href: AppUrl | string;
   description: string;
};

export default function CustomLink({ ariaLabel, href, description }: Props) {
   return (
      <Link
         aria-label={ariaLabel}
         href={href}
         className="text-primary mt-5 hover:font-bold"
      >
         {description}
      </Link>
   );
}
