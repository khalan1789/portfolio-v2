"use client";
import { useLocale } from "@/context/useLocale";
import CustomLi from "../components/text/custom-li";
import CustomLink from "../components/button/custom-link";
import PageTitle from "../components/text/page-title";
import Methodology from "../components/methodology/methodology";

export default function About() {
   const locale = useLocale();
   return (
      <>
         <main className="p-2 mdPlus:pl-5 mdPlus:pr-5 lg:pl-[5%] lg:pr-[5%] xl:pl-[15%] xl:pr-[15%]">
            <div className="max-w-4xl mx-auto">
               <PageTitle
                  baseTextEn="About "
                  coloredTextEn="me"
                  baseTextFr="À propos "
                  coloredTextFr="de moi"
                  onStart
               />
               {/* <h1 className="text-3xl mt-10 text-center font-bold mdPlus:text-start md:text-[2.5rem]">
               {locale?.locale === "en" ? "About " : "À propos "}
               <CustomSpan
                  label={locale?.locale === "en" ? "me " : " de moi "}
               />
            </h1> */}
               <p className="mt-8 text-2xl mdPlus:mt-4">
                  {locale?.locale === "en"
                     ? "My journey as a developer and what drives me "
                     : "Mon parcours, en bref"}
               </p>
               <div className="flex flex-col text-lg mdPlus:flex-row">
                  <div className="mdPlus:pr-[2rem]">
                     <h2 className="text-xl text-primary mt-10 mdPlus:text-2xl">
                        {locale?.locale === "en"
                           ? "My story"
                           : "D'un métier de contact..."}
                     </h2>
                     <p className="mt-5">
                        {locale?.locale === "en"
                           ? " "
                           : "Avant de coder ma première ligne, j’ai passé plus de treize ans dans la téléphonie mobile, et sans le savoir, j’y ai fait à la fois du front et du back. "}
                     </p>
                     <p className="mt-5">
                        {locale?.locale === "en"
                           ? " "
                           : "Côté front, j’étais conseiller : c’était moi que le client voyait, celui qui lui présentait les produits et traduisait ses envies en solution. Puis, du jour au lendemain, la réparation m’a fait passer de l’autre côté, sous le capot, pour comprendre comment ces appareils étaient conçus. Dans les deux rôles, il fallait aussi servir les objectifs de l’enseigne, le business restant toujours en toile de fond."}
                     </p>
                     <h2 className="text-xl text-primary mt-10 mdPlus:text-2xl">
                        {locale?.locale === "en"
                           ? " "
                           : "À celui de développeur"}
                     </h2>
                     <p className="mt-5">
                        {locale?.locale === "en"
                           ? " "
                           : "C’est peut-être un clin d’œil du destin. Aujourd’hui, en développement, je retrouve ce même double regard, mais de façon volontaire : l’interface que l’utilisateur voit, et le code qui la fait tourner. Ma curiosité, déjà là à l’époque, m’a toujours poussé à comprendre avant de construire."}
                     </p>
                     <h2 className="text-xl text-primary mt-10 mdPlus:text-2xl">
                        {locale?.locale === "en"
                           ? " "
                           : "Ce qui compte pour moi"}
                     </h2>
                     <ul>
                        <CustomLi
                           type="primary"
                           description="Lorem ipsum dolor sit."
                        />
                        <CustomLi
                           type="primary"
                           description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  "
                        />
                        <CustomLi
                           type="primary"
                           description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  "
                        />
                        <CustomLi
                           type="primary"
                           description="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Excepturi praeuta"
                        />
                     </ul>
                  </div>
                  <aside className=" mt-10 sm:flex sm:justify-around mdPlus:flex-col mdPlus:min-w-[270px] mdPlus:justify-start lg:w-[390px]">
                     <div className="rounded bg-card border border-primary p-5 text-center sm:w-[45%] mdPlus:w-full mdPlus:text-start">
                        <h3 className="mt-5">Spécialisation</h3>
                        <p className="mt-1 font-bold">Web full-stack</p>
                        <h3 className="mt-5">Sensibilité</h3>
                        <p className="mt-1 font-bold">Produit & utilisateurs</p>
                        <h3 className="mt-5">Mode de travail</h3>
                        <p className="mt-1 font-bold">
                           Full remote - Ouvert à de l&apos;hybride
                        </p>
                        <h3 className="mt-5">Localisation</h3>
                        <p className="mt-1 font-bold">Dax / Landes</p>
                     </div>
                     <div className="bg-hero rounded border border-primary mt-10 min-h-50 p-5 flex flex-col justify-around items-center sm:w-[45%] sm:mt-0 mdPlus:mt-5 mdPlus:w-full lg:mt-10">
                        <h3 className="text-xl text-primary font-bold sm:text-xl mdPlus:self-start mdPlus:text-xl">
                           {locale?.locale === "en"
                              ? "Let's connect"
                              : "Entrons en contact"}{" "}
                        </h3>
                        <p className="w-full mt-2 mb-5 mdPlus:text-start mdPlus:mt-5 mdPlus:mb-10 lg:mt-8 lg:mb-14">
                           {locale?.locale === "en"
                              ? "Interested in working together or just want to chat? I'd love to hear from you."
                              : "Intéressé pour collaborer ensemble, ou simple envie d'en discuter ? Je serais râvi d'échanger."}
                        </p>
                        <CustomLink
                           type="base"
                           label={
                              locale?.locale === "en"
                                 ? "Contact me"
                                 : "Me contacter"
                           }
                           url={"/skills"}
                        />
                     </div>
                  </aside>
               </div>
            </div>
         </main>
         <Methodology />
      </>
   );
}
