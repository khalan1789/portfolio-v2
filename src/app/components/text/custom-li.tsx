import { ReactNode } from "react";

type Props = {
   type: "primary" | "secondary";
   description: string | ReactNode;
};

export default function CustomLi({ type, description }: Props) {
   return (
      <li className="flex mt-4">
         <span
            className={`rounded-full h-[9px] w-[9px] mt-2.5 mr-3 shrink-0 ${type === "secondary" ? "bg-checked" : "bg-primary"}`}
         ></span>
         <span>{description}</span>
      </li>
   );
}
