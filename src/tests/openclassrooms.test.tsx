import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import "vitest-axe/extend-expect";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { Locale } from "@/types/types";
import Openclassrooms from "@/app/education/openclassrooms/page";

const mockedLocale = vi.hoisted(() => ({ current: "fr" as Locale }));

vi.mock("@/context/useLocale", () => ({
   useLocale: () => ({ locale: mockedLocale.current }),
}));

const LOCALES: Locale[] = ["fr", "en"];

describe.each(LOCALES)("Openclassrooms detailed page [%s]", (locale) => {
   beforeEach(() => {
      mockedLocale.current = locale;
   });
   const renderPage = () => render(<Openclassrooms />);
   it("should have no accessibility violations", async () => {
      const { container } = renderPage();
      const results = await axe(container);
      expect(results).toHaveNoViolations();
   });

   it("Should have only one H1", () => {
      renderPage();
      expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
      expect(
         screen.getByRole("heading", {
            level: 1,
         }),
      ).toBeInTheDocument();
   });

   it("should respect html titles order", () => {
      renderPage();
      const headingLevels = screen
         .getAllByRole("heading")
         .map((heading) =>
            Number(
               heading.getAttribute("aria-level") ?? heading.tagName.slice(1),
            ),
         );

      expect(headingLevels[0]).toBe(1);
      headingLevels.slice(1).forEach((level, index) => {
         const previousLevel = headingLevels[index];
         expect(level - previousLevel).toBeLessThanOrEqual(1);
      });
   });

   it("Should have backlink without any symbol readed by accessibility tools", () => {
      renderPage();
      const backLink = screen.getByRole("link", { name: /retour|back/i });
      expect(backLink).not.toHaveAccessibleName(/←/);
   });

   it("should reach every link with the keyboard in reading order", async () => {
      const user = userEvent.setup();
      renderPage();

      for (const link of screen.queryAllByRole("link")) {
         await user.tab();
         expect(link).toHaveFocus();
      }
   });
});
