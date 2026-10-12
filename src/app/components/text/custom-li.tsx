type Props = {
   type: "primary" | "secondary";
   description: string;
};

export default function CustomLi({ type, description }: Props) {
   return (
      <li className="flex mt-5">
         <span
            className={`rounded-full h-[10px] w-[10px] mt-2 mr-3 shrink-0 ${type === "secondary" ? "bg-checked" : "bg-primary"}`}
         ></span>
         <span>{description}</span>
      </li>
   );
}
