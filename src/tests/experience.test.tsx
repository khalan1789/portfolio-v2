import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";
import { axe } from "vitest-axe";
import "vitest-axe/extend-expect";
import { describe, expect, it } from "vitest";
import Experience from "@/app/experience/page";

describe("about page", () => {
   it("should have no accessibility violations when closed", async () => {
      const { container } = render(<Experience />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
   });
});
