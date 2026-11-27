import { getExperience } from "@/data/experiences";
import ExperienceDetail from "../experience-detail";
import { Metadata } from "next";
type Props = {
   params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { slug } = await params;
   const experience = getExperience({ slug });

   return {
      title: experience.metadatas.title,
      description: experience.metadatas.description,
   };
}

export default async function ExperiencePage({ params }: Props) {
   const { slug } = await params;
   const exp = getExperience({ slug });
   return (
      <main className="lg:max-w-5xl lg:mx-auto p-2">
         <ExperienceDetail experience={exp} />
      </main>
   );
}
