import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";
import { axe } from "vitest-axe";
import "vitest-axe/extend-expect";
import { describe, expect, it } from "vitest";
import About from "@/app/about/page";

describe("about page", () => {
   it("should have no accessibility violations when closed", async () => {
      const { container } = render(<About />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
   });
});
