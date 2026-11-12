import "@testing-library/jest-dom/vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import "vitest-axe/extend-expect";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Locale } from "@/types/types";
import ExperienceDetail from "@/app/experience/experience-detail";
import { SECTION_LABELS } from "../helper/helper";
import { experiences } from "@/data/experiences"; // Record<slug, Experience>

const mockedLocale = vi.hoisted(() => ({ current: "fr" as Locale }));

vi.mock("@/context/useLocale", () => ({
   useLocale: () => ({ locale: mockedLocale.current }),
}));

const LOCALES: Locale[] = ["fr", "en"];
const experienceEntries = Object.entries(experiences);

describe.each(LOCALES)("Exprience detailed page [%s]", (locale) => {
   const sectionLabels = SECTION_LABELS[locale];

   beforeEach(() => {
      mockedLocale.current = locale;
   });

   describe.each(experienceEntries)("slug « %s »", (_slug, experience) => {
      const renderExperience = () =>
         render(<ExperienceDetail experience={experience} />);

      it("should have no accessibility violations", async () => {
         const { container } = renderExperience();
         const results = await axe(container);
         expect(results).toHaveNoViolations();
      });

      it("Should have only one H1, according to the job", () => {
         renderExperience();
         expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
         expect(
            screen.getByRole("heading", {
               level: 1,
               name: experience.role[locale],
            }),
         ).toBeInTheDocument();
      });

      it("should respect html titles order", () => {
         renderExperience();
         const headingLevels = screen
            .getAllByRole("heading")
            .map((heading) =>
               Number(
                  heading.getAttribute("aria-level") ??
                     heading.tagName.slice(1),
               ),
            );

         expect(headingLevels[0]).toBe(1);
         headingLevels.slice(1).forEach((level, index) => {
            const previousLevel = headingLevels[index];
            expect(level - previousLevel).toBeLessThanOrEqual(1);
         });
      });

      it("should show underlined titles are not links", () => {
         renderExperience();
         const sectionTitles = [
            sectionLabels.context,
            sectionLabels.whatIDid,
            sectionLabels.results,
         ];

         sectionTitles.forEach((title) => {
            expect(
               screen.getAllByRole("heading", { name: title }).length,
            ).toBeGreaterThan(0);
            expect(screen.queryAllByRole("link", { name: title })).toHaveLength(
               0,
            );
         });
      });

      it("Should have backlink without any symbol readed by accessibility tools", () => {
         renderExperience();
         const backLink = screen.getByRole("link", { name: /retour|back/i });
         expect(backLink).not.toHaveAccessibleName(/←/);
      });

      it("should render translated headings in the aside", () => {
         renderExperience();
         const aside = screen.getByRole("complementary");
         const asideTitles = [
            sectionLabels.keyImpacts,
            sectionLabels.technologies,
            sectionLabels.tools,
         ];

         asideTitles.forEach((title) => {
            expect(
               within(aside).getByRole("heading", { name: title }),
            ).toBeInTheDocument();
         });
      });

      it("should expose aside only key impact contents as lists", () => {
         renderExperience();
         const aside = screen.getByRole("complementary");
         expect(within(aside).getAllByRole("list")).toHaveLength(1);
      });

      it("should have named links, and secure, announced external links", () => {
         renderExperience();

         screen.queryAllByRole("link").forEach((link) => {
            expect(link).toHaveAccessibleName();

            if (link.getAttribute("target") === "_blank") {
               expect(link).toHaveAttribute(
                  "rel",
                  expect.stringContaining("noopener"),
               );
               expect(link).toHaveAccessibleName(/nouvel onglet|new tab/i);
            }
         });
      });

      it("should reach every link with the keyboard in reading order", async () => {
         const user = userEvent.setup();
         renderExperience();

         for (const link of screen.queryAllByRole("link")) {
            await user.tab();
            expect(link).toHaveFocus();
         }
      });
   });
});
