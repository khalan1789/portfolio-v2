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
         <div className="mt-18 mb-10">
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

         <h1 className="mt-1 font-bold text-4xl">{job}</h1>
         <h2 className="mt-4 text-primary text-2xl">{company}</h2>
         <div className="flex mt-3 lg:mt-4">
            <span className="">100 % {isEn ? "Remote" : "Télétravail"}</span>
            <span className="ml-2 mr-2"> • </span>
            <span>{period}</span>
         </div>
      </>
   );
}
