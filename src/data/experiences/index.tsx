import { BeSwarm } from "@/data/experiences/beswarm";
import { ModuloTech } from "@/data/experiences/modulo-tech";
import { Repozen } from "@/data/experiences/repozen";
import { Villyz } from "@/data/experiences/villyz";
import { WebsiteRedesign } from "@/data/experiences/website-redesign";
import { Experience } from "@/types/types";
import { notFound } from "next/navigation";

type Props = {
   slug: string;
};

export const experiences: Experience[] = [
   BeSwarm,
   ModuloTech,
   Repozen,
   Villyz,
   WebsiteRedesign,
];

export const getExperience = ({ slug }: Props) => {
   return (
      experiences.find((experience) => experience.slug === slug) ?? notFound()
   );
};
