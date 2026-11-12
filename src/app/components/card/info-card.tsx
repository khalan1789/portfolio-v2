type Props = React.PropsWithChildren<{
   bg: "card" | "secondary";
   title: string;
   hasBottomMargin?: boolean;
   useAsLi?: boolean;
}>;

export default function InfoCard({
   title,
   children,
   hasBottomMargin,
   bg,
   useAsLi,
}: Props) {
   const returnBg = () => {
      return bg === "card"
         ? "bg-card"
         : bg === "secondary"
           ? "bg-card-secondary"
           : "bg-light";
   };

   const returnBorder = () => {
      return bg === "card"
         ? "border border-primary"
         : bg === "secondary"
           ? "border border-secondary text-tercary"
           : "border border-light";
   };
   return useAsLi ? (
      <li
         className={`rounded  p-5 text-center mdPlus:text-start lg:w-full ${hasBottomMargin && "mb-4 lg:mb-5"} ${returnBg()} ${returnBorder()}`}
      >
         <h3 className="mt-3 font-bold">{title}</h3>
         {children}
      </li>
   ) : (
      <div
         className={`rounded  p-5 text-center mdPlus:text-start lg:w-full ${hasBottomMargin && "mb-4 lg:mb-5"} ${returnBg()} ${returnBorder()}`}
      >
         <h3 className="mt-3 font-bold">{title}</h3>
         {children}
      </div>
   );
}
