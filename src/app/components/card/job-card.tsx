import Link from "next/link";

type Props = {
   job: string;
   company: string;
   jobDuration: string;
   jobLink: string;
   description: string;
   impacts?: string[];
   isEn?: boolean;
};

export default function JobCard({
   job,
   company,
   jobDuration,
   jobLink,
   description,
   impacts,
   isEn,
}: Props) {
   return (
      <div className="border-l-4 border-primary p-3 mt-10 hover:shadow-sm hover:grow-[2]">
         <h3 className="text-xl font-bold md:text-2xl">{job}</h3>
         <h4 className="mt-2 text-primary text-lg md:text-xl">{company}</h4>
         <span className="mt-1">{jobDuration}</span>
         <p className="mt-4 mb-5">{description}</p>
         {impacts && impacts.length > 0 && (
            <p className="flex flex-wrap mb-8">
               {impacts?.map((element) => {
                  return (
                     <span
                        key={impacts.indexOf(element) + element.slice(0, 8)[0]}
                        className="rounded-2xl bg-card text-primary p-2 mt-2 mr-2 border border-primary lg:mr-3 text-sm font-bold"
                     >
                        {element}
                     </span>
                  );
               })}
            </p>
         )}

         <Link
            aria-label={
               isEn
                  ? `Link to the page ${company}'s experience `
                  : `Lien viens la page expérience ${company}`
            }
            href={jobLink}
            className="text-primary mt-5 hover:font-bold"
         >
            {isEn ? "Show more →" : "Voir le détail →"}
         </Link>
      </div>
   );
}
