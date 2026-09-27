import "@testing-library/jest-dom/vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NavbarFr from "../app/components/navbar/navbar";

describe("Navbar", () => {
   it("should have links", () => {
      render(<NavbarFr />);
      expect(
         screen.getByRole("link", { name: "À propos" }),
      ).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Accueil" })).toBeInTheDocument();
      expect(
         screen.getByRole("link", { name: "Expériences" }),
      ).toBeInTheDocument();
      expect(
         screen.getByRole("link", { name: "Compétences" }),
      ).toBeInTheDocument();
   });
   it("should redirect on skills", () => {
      render(<NavbarFr />);
      const skillsLink = screen.getAllByText("Compétences");
      expect(skillsLink[0]).toHaveAttribute("href", "/skills");
   });
   it("should redirect on about", () => {
      render(<NavbarFr />);
      const aboutLink = screen.getAllByText("À propos");
      expect(aboutLink[0]).toHaveAttribute("href", "/about");
   });
   it("should redirect on Expériences", () => {
      render(<NavbarFr />);
      const expLink = screen.getAllByText("Expériences");
      expect(expLink[0]).toHaveAttribute("href", "/experience");
   });
});
