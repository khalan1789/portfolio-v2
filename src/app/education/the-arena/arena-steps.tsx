"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { arenaSteps } from "@/data/education/arena-steps";
import { useLocale } from "@/context/useLocale";
import type { ArenaStep, Locale } from "@/types/types";
import InfoCard from "@/app/components/card/info-card";
import step1 from "../../../../public/images/the_arena/fight00-badge-the-arena-project.png";
import step2 from "../../../../public/images/the_arena/fight01-badge-the-arena-project.png";
import step3 from "../../../../public/images/the_arena/fight02-badge-the-arena-project.png";
import step4 from "../../../../public/images/the_arena/fight03-badge-the-arena-project.png";
import step5 from "../../../../public/images/the_arena/fight04-badge-the-arena-project.png";
import step6 from "../../../../public/images/the_arena/fight05-badge-the-arena-project.png";
import setp7 from "../../../../public/images/the_arena/fight06-badge-equilibriste-the-arena-project.png";
import certificate from "../../../../public/images/the_arena/certificat-theArena-png.png";

type ArenaLabels = {
   step: string;
   seeBadge: string;
   badgeTitle: string;
   badgeAlt: string;
   close: string;
};

// type CertficateLabels = {};

const ARENA_LABELS: Record<Locale, ArenaLabels> = {
   fr: {
      step: "Étape",
      seeBadge: "Voir le badge",
      badgeTitle: "Badge",
      badgeAlt: "Badge Arena 01 : rang",
      close: "Fermer",
   },
   en: {
      step: "Step",
      seeBadge: "See the badge",
      badgeTitle: "Badge",
      badgeAlt: "Arena 01 badge: rank",
      close: "Close",
   },
};

const STEPS_IMAGES: StaticImageData[] = [
   step1,
   step2,
   step3,
   step4,
   step5,
   step6,
   setp7,
   certificate,
];

// const CERTFICATE :

export default function ArenaSteps() {
   const currentLocale: Locale = useLocale()?.locale === "en" ? "en" : "fr";
   const arenaLabels = ARENA_LABELS[currentLocale];

   const badgeDialogRef = useRef<HTMLDialogElement>(null);
   const [selectedStep, setSelectedStep] = useState<ArenaStep | null>(null);

   function openBadge(step: ArenaStep) {
      setSelectedStep(step);
      badgeDialogRef.current?.showModal();
   }

   function closeBadge() {
      badgeDialogRef.current?.close();
   }

   return (
      <>
         <ol className="grid grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-6">
            {arenaSteps.map((step, stepIndex) => (
               <InfoCard
                  key={stepIndex}
                  title={`${arenaLabels.step} ${stepIndex + 1}/${arenaSteps.length}`}
                  bg="card"
                  useAsLi
               >
                  <div className="flex flex-col justify-between md:min-h-[320px] lg:min-h-[360px]">
                     <div className="flex flex-col gap-4">
                        {step.rank && (
                           <h4 className="text-xl font-bold italic">
                              {step.rank[currentLocale]}
                           </h4>
                        )}
                        {step.category && (
                           <p className="font-bold italic">
                              {step.category[currentLocale]}
                           </p>
                        )}
                        {step.skills && (
                           <ul className="list-disc pl-5">
                              {step.skills[currentLocale].map((skill) => (
                                 <li key={skill}>{skill}</li>
                              ))}
                           </ul>
                        )}
                     </div>
                     <button
                        type="button"
                        onClick={() => openBadge(step)}
                        className="underline underline-offset-4 mt-5"
                     >
                        {arenaLabels.seeBadge}
                        <span className="sr-only">
                           {" "}
                           {step.rank[currentLocale]}
                        </span>
                     </button>
                  </div>
               </InfoCard>
            ))}
         </ol>
         <dialog
            ref={badgeDialogRef}
            aria-labelledby="badge-dialog-title"
            className="m-auto w-[min(90vw,32rem)] rounded-xl p-6 bg-hero backdrop:bg-secondary"
         >
            {selectedStep && (
               <div className="flex flex-col gap-4 text-tercary">
                  <h2 id="badge-dialog-title" className="text-lg font-bold">
                     {arenaLabels.badgeTitle} :{" "}
                     {selectedStep.rank[currentLocale]}
                  </h2>
                  <Image
                     src={STEPS_IMAGES[selectedStep.badgeFight]}
                     alt={`${arenaLabels.badgeAlt} ${selectedStep.rank[currentLocale]}`}
                     width={1024}
                     height={1024}
                     className="h-auto w-full"
                  />
                  <button
                     type="button"
                     onClick={closeBadge}
                     className="self-end"
                  >
                     {arenaLabels.close}
                  </button>
               </div>
            )}
         </dialog>
      </>
   );
}
