import "@testing-library/jest-dom/vitest";
import { render } from "@testing-library/react";
import { axe } from "vitest-axe";
import "vitest-axe/extend-expect";
import { describe, expect, it } from "vitest";
import Methodology from "@/app/components/methodology/methodology";

describe("about page", () => {
   it("should have no accessibility violations", async () => {
      const { container } = render(<Methodology />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
   });
});
