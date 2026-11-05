import { getExperience } from "@/data/experiences";
import ExperienceDetail from "../experience-detail";
type Props = {
   params: Promise<{ slug: string }>;
};

export default async function ExperiencePage({ params }: Props) {
   const { slug } = await params;
   const exp = getExperience({ slug });
   return (
      <main className="lg:max-w-5xl lg:mx-auto p-2">
         <ExperienceDetail experience={exp} />
      </main>
   );
}
