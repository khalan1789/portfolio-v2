import Link from "next/link";
import { AppUrl } from "@/types/types";

type Size = "normal" | "large" | undefined;
type Props = {
   label: string;
   size?: Size;
   type: "base" | "reverse";
   url: AppUrl;
};

const buttonSizesStyle = { normal: "h-10", large: "h-14 " };

export default function CustomButtonLink({ label, size, type, url }: Props) {
   const returnSize = (el: Size) => {
      return el === "large" ? buttonSizesStyle.large : buttonSizesStyle.normal;
   };
   return type === "base" ? (
      <Link
         className={`bg-primary text-light font-bold border border-primary rounded p-1 w-[220px] ${returnSize(size)} cursor-pointer flex justify-center items-center hover:shadow-xl`}
         href={url}
      >
         {label}
      </Link>
   ) : (
      <Link
         className={`border-primary text-primary rounded p-3 w-[220px] h-10 text-primary ${returnSize(size)}`}
         href={url}
      >
         {label}
      </Link>
   );
}
