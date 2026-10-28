import Link from "next/link";

type Props = {
   job: string;
   company: string;
   jobDuration: string;
   jobLink: string;
   description: string;
};

export default function JobCard({
   job,
   company,
   jobDuration,
   jobLink,
   description,
}: Props) {
   return (
      <div className="border-l-4 border-primary p-3 mt-10">
         <h3 className="text-xl font-bold md:text-2xl">{job}</h3>
         <h4 className="mt-2 text-primary text-lg md:text-xl">{company}</h4>
         <p className="mt-1">{jobDuration}</p>
         <p className="mt-4 mb-5">{description}</p>
         <Link href={jobLink} className="text-primary mt-5">
            Voir le détail →
         </Link>
      </div>
   );
}
