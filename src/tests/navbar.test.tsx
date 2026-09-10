import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import NavbarFr from "../app/components/navbar/navbar";

describe("Navbar", () => {
   it("should have links", () => {
      render(<NavbarFr />);
      expect(
         screen.getByRole("link", { name: "A propos" }),
      ).toBeInTheDocument();
   });
});
