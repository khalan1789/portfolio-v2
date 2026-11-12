import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import "vitest-axe/extend-expect";
import { describe, expect, it } from "vitest";
import Experience from "@/app/experience/page";
import userEvent from "@testing-library/user-event";

describe("about page", () => {
   const renderExp = () => render(<Experience />);
   it("should have no accessibility violations", async () => {
      const { container } = renderExp();
      const results = await axe(container);
      expect(results).toHaveNoViolations();
   });

   it("should respect html titles order", () => {
      renderExp();
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

   it("Should have forward link without any symbol readed by accessibility tools", () => {
      renderExp();
      const forwardLinks = screen.getAllByRole("link", {
         name: /Lien vers |Link to/i,
      });
      forwardLinks.forEach((forwardLink) => {
         expect(forwardLink).not.toHaveAccessibleName(/→/);
      });
   });

   it("should reach every link with the keyboard in reading order", async () => {
      renderExp();
      const user = userEvent.setup();

      for (const link of screen.queryAllByRole("link")) {
         await user.tab();
         expect(link).toHaveFocus();
      }
   });
});
