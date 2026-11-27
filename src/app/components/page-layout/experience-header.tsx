import CustomAppNavLink from "../button/custom-app-nav-link";

type Props = {
   job: string;
   company: string;
   period: string;
   isEn: boolean;
};

export default function ExperienceHeader({
   job,
   company,
   period,
   isEn,
}: Props) {
   return (
      <>
         <div className="mt-8 lg:mt-10">
            <CustomAppNavLink
               description={
                  isEn
                     ? "Back to Experiences"
                     : "Retour vers la page Expériences"
               }
               ariaLabel={
                  isEn
                     ? "link to back on experiences' page"
                     : "lien de retour vers la page Expériences"
               }
               href="/experience"
               direction="back"
            />
         </div>
         <h1
            data-animate="reveal-up"
            className="font-bold text-2xl mt-6 lg:mt-8 lg:text-4xl"
         >
            {job}
         </h1>
         <h2
            data-animate="reveal-up"
            className="mt-2 text-primary text-xl lg:text-2xl"
         >
            {company}
         </h2>
         <div data-animate="reveal-up" className="flex mt-2 lg:mt-1">
            <span className="">100 % {isEn ? "Remote" : "Télétravail"}</span>
            <span className="ml-2 mr-2"> • </span>
            <span>{period}</span>
         </div>
      </>
   );
}
