import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { axe } from "vitest-axe";
import "vitest-axe/extend-expect";
import { describe, expect, it } from "vitest";
import Skills from "@/app/skills/page";

describe("about page", () => {
   it("should have no accessibility violations", async () => {
      const { container } = render(<Skills />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
   });

   const renderPage = () => render(<Skills />);
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
});
