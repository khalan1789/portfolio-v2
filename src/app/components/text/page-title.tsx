"use client";

import { useLocale } from "@/context/useLocale";
import CustomSpan from "./custom-span";

type Props = {
   baseTextFr: string;
   coloredTextFr: string;
   baseTextEn: string;
   coloredTextEn: string;
   onStart?: boolean;
};

export default function PageTitle({
   baseTextEn,
   coloredTextEn,
   baseTextFr,
   coloredTextFr,
   onStart,
}: Props) {
   const locale = useLocale();
   return locale?.locale === "en" ? (
      <h1
         className={`text-3xl mt-10 text-center font-bold ${onStart && "mdPlus:text-start"} md:text-[2.5rem]`}
      >
         {baseTextEn}
         <CustomSpan label={coloredTextEn} />
      </h1>
   ) : (
      <h1
         className={`text-3xl mt-10 text-center font-bold ${onStart && "mdPlus:text-start"} md:text-[2.5rem]`}
      >
         {baseTextFr}
         <CustomSpan label={coloredTextFr} />
      </h1>
   );
}
