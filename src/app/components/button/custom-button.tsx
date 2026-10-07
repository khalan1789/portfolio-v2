import React from "react";
type Props = {
   label: string;
   size?: string;
   type: "base" | "reverse";
};

export default function CustomButton({ label, size, type }: Props) {
   return type === "base" ? (
      <button className="bg-primary text-light font-bold border border-primary rounded p-1 w-[220px] h-10 cursor-pointer flex justify-center align-center hover:shadow-xl">
         {label}
      </button>
   ) : (
      <button className="border-primary text-primary rounded p-3 w-[220px] h-10 text-primary">
         {label}
      </button>
   );
}
