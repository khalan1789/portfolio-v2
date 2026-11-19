import Link from "next/link";
import CustomAppNavLink from "../button/custom-app-nav-link";
import { Directions } from "@/types/types";

type Props = {
   title?: string;
   description: string;
   sizing?: string;
   url?: string;
   urlLabel?: string;
   ariaLabel?: string;
   animate?: boolean;
};

export default function Card({
   title,
   description,
   sizing,
   url,
   urlLabel,
   ariaLabel,
   animate,
}: Props) {
   return animate ? (
      <div
         data-animate="reveal-up"
         className={`border rounded-xl p-6 bg-card md:p-4 md:relative ${sizing} `}
      >
         {title && (
            <h3 className="text-primary  text-center text-xl font-bold mb-5 lg:mb-0 xl:text-2xl">
               {title}
            </h3>
         )}
         <p className="text-typography text-md mt-5">{description}</p>

         {url && urlLabel && ariaLabel && (
            <div className="mt-6 text-center md:text-start md:absolute  md:bottom-6">
               <CustomAppNavLink
                  description={urlLabel}
                  href={url}
                  direction="forward"
                  ariaLabel={ariaLabel}
               />
            </div>
         )}
      </div>
   ) : (
      <div
         className={`border rounded-xl p-6 bg-card md:p-4 md:relative ${sizing} `}
      >
         {title && (
            <h3 className="text-primary  text-center text-xl font-bold mb-5 lg:mb-0 xl:text-2xl">
               {title}
            </h3>
         )}
         <p className="text-typography text-md mt-5">{description}</p>

         {url && urlLabel && ariaLabel && (
            <div className="mt-6 text-center md:text-start md:absolute  md:bottom-6">
               <CustomAppNavLink
                  description={urlLabel}
                  href={url}
                  direction="forward"
                  ariaLabel={ariaLabel}
               />
            </div>
         )}
      </div>
   );
}
