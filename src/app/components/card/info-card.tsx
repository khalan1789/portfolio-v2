type Props = React.PropsWithChildren<{
   bg: "card" | "secondary";
   title: string;
   hasBottomMargin?: boolean;
}>;

export default function InfoCard({
   title,
   children,
   hasBottomMargin,
   bg,
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
   return (
      <div
         className={`rounded  p-5 text-center mdPlus:text-start lg:w-full ${hasBottomMargin && "mb-4 lg:mb-5"} ${returnBg()} ${returnBorder()}`}
      >
         <h3 className="mt-3 font-bold">{title}</h3>
         {/* <p className="flex flex-wrap mt-4">
            {infos &&
               infos.length > 0 &&
               infos.map((info) => {
                  return (
                     <BubbleText
                        key={infos.indexOf(info) + info.slice(0, 4)[0]}
                        description={info}
                     />
                  );
               })}
         </p> */}
         {children}
      </div>
   );
}
