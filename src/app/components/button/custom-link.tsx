import Link from "next/link";
import { AppUrl } from "@/types/types";
type Props = {
   label: string;
   size?: string;
   type: "base" | "reverse";
   url: AppUrl;
};

export default function CustomLink({ label, size, type, url }: Props) {
   return type === "base" ? (
      <Link
         className="bg-primary text-light font-bold border border-primary rounded p-1 w-[220px] h-10 cursor-pointer flex justify-center align-center hover:shadow-xl"
         href={url}
      >
         {label}
      </Link>
   ) : (
      <Link
         className="border-primary text-primary rounded p-3 w-[220px] h-10 text-primary"
         href={url}
      >
         {label}
      </Link>
   );
}
