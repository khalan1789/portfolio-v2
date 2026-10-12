type Props = React.PropsWithChildren<{
   bg: "card" | "secondary";
}>;

export default function SkillCard({ bg, children }: Props) {
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
           ? "border border-secondary"
           : "border border-light";
   };
   return (
      <div
         className={`rounded rounded-xl ${returnBg()} ${returnBorder()} p-2 mt-7 flex flex-col sm:p-3 sm:min-w-70 sm:p-3 mdPlus:p-5 mdPlus:mr-2 lg:p-8 lg:mr-0 lg:w-74`}
      >
         {children}
      </div>
   );
}
