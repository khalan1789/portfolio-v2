import type { MetadataRoute } from "next";
import { SITE_URL } from "../data/site";
import { experiences } from "../data/experiences";
import { AppUrl } from "@/types/types";

const urls: AppUrl[] = ["/", "/about", "/experience", "/skills", "/education"];

export default function sitemap(): MetadataRoute.Sitemap {
   const staticPages = urls.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
   }));

   const experiencePages = experiences.map((experience) => ({
      url: `${SITE_URL}/experience/${experience.slug}`,
      lastModified: new Date(),
   }));

   const openClassroomsPage = {
      url: `${SITE_URL}${"/openclassrooms"}`,
      lastModified: new Date(),
   };

   const theArenaPage = {
      url: `${SITE_URL}${"/the-arena"}`,
      lastModified: new Date(),
   };

   return [
      ...staticPages,
      ...experiencePages,
      theArenaPage,
      openClassroomsPage,
   ];
}
