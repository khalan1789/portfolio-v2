import "@testing-library/jest-dom/vitest";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import Navbar from "../app/components/navbar/navbar";
import { Locale } from "@/types/types";
import { LocaleContext } from "@/context/Context";
import { axe } from "vitest-axe";
import "vitest-axe/extend-expect";
import userEvent from "@testing-library/user-event";
import { usePathname } from "next/navigation";

function renderWithLocale(locale: Locale) {
   return render(
      <LocaleContext value={{ locale, setLocale: vi.fn() }}>
         <Navbar />
      </LocaleContext>,
   );
}

vi.mock("next/navigation", async (importOriginal) => {
   const actual = await importOriginal<typeof import("next/navigation")>();
   return {
      ...actual,
      usePathname: vi.fn(),
   };
});

const mockedUsePathname = vi.mocked(usePathname);

const expLabelInFr: string = "Expériences";
const homeLabelInFr: string = "Accueil";
const skillsLabelInFr: string = "Compétences";
const aboutLabelInFr: string = "À propos";
const expLabelInEn: string = "Experience";
const homeLabelInEn: string = "Home";
const skillsLabelInEn: string = "Skills";
const aboutLabelInEn: string = "About";

describe("Navbar", () => {
   it("should have links", () => {
      render(<Navbar />);
      expect(screen.getAllByRole("link")).length(4);
   });
   it("should redirect on skills", () => {
      render(<Navbar />);
      const skillsLink = screen.getAllByText(skillsLabelInFr);
      expect(skillsLink[0]).toHaveAttribute("href", "/skills");
   });
   it("should redirect on about", () => {
      render(<Navbar />);
      const aboutLink = screen.getAllByText(aboutLabelInFr);
      expect(aboutLink[0]).toHaveAttribute("href", "/about");
   });
   it("should redirect on Expériences", () => {
      render(<Navbar />);
      const expLink = screen.getAllByText(expLabelInFr);
      expect(expLink[0]).toHaveAttribute("href", "/experience");
   });
   it("should redirect on Home", () => {
      render(<Navbar />);
      const expLink = screen.getAllByText(homeLabelInFr);
      expect(expLink[0]).toHaveAttribute("href", "/");
   });
});

it("should have no accessibility violations", async () => {
   const { container } = render(<Navbar />);
   const results = await axe(container);
   expect(results).toHaveNoViolations();
});

// Keyboard navigation

describe("Navbar - keyboard navigation", () => {
   it("should be reachable by keyboard in order", async () => {
      const user = userEvent.setup();
      render(<Navbar />);
      await user.tab();
      expect(screen.getByRole("link", { name: homeLabelInFr })).toHaveFocus();

      await user.tab();
      expect(screen.getByRole("link", { name: aboutLabelInFr })).toHaveFocus();

      await user.tab();
      expect(screen.getByRole("link", { name: expLabelInFr })).toHaveFocus();

      await user.tab();
      expect(screen.getByRole("link", { name: skillsLabelInFr })).toHaveFocus();
   });
});

describe("Navbar - accessibility", () => {
   beforeEach(() => mockedUsePathname.mockReset());

   it("should mark the current page link with good aria-current value", () => {
      mockedUsePathname.mockReturnValue("/skills");
      render(<Navbar />);

      const skillsLink = screen.getByRole("link", { name: skillsLabelInFr });
      expect(skillsLink).toHaveAttribute("aria-current", "page");
   });

   it("should not mark the current page link if it's not actual", () => {
      mockedUsePathname.mockReturnValue("/skills");
      render(<Navbar />);

      const homeLink = screen.getByRole("link", { name: homeLabelInFr });
      expect(homeLink).not.toHaveAttribute("aria-current", "page");
   });

   it("should have good label and the same href regardless of locale", () => {
      renderWithLocale("fr");
      const skillsInFr = screen.getByRole("link", { name: skillsLabelInFr });
      expect(skillsInFr).toBeInTheDocument();
      const homeInFr = screen.getByRole("link", { name: homeLabelInFr });
      expect(homeInFr).toBeInTheDocument();
      const aboutInFr = screen.getByRole("link", { name: aboutLabelInFr });
      expect(aboutInFr).toBeInTheDocument();
      const expInFr = screen.getByRole("link", { name: expLabelInFr });
      expect(expInFr).toBeInTheDocument();

      cleanup();
      renderWithLocale("en");
      const skillsInEn = screen.getByRole("link", { name: skillsLabelInEn });
      expect(skillsInEn).toBeInTheDocument();
      expect(skillsInFr).not.toBeInTheDocument();
      expect(skillsInFr.getAttribute("href")).toBe(
         skillsInEn.getAttribute("href"),
      );

      const homeInEn = screen.getByRole("link", { name: homeLabelInEn });
      expect(homeInEn).toBeInTheDocument();
      expect(homeInFr).not.toBeInTheDocument();
      expect(homeInFr.getAttribute("href")).toBe(homeInEn.getAttribute("href"));

      const aboutInEn = screen.getByRole("link", { name: aboutLabelInEn });
      expect(aboutInEn).toBeInTheDocument();
      expect(aboutInFr).not.toBeInTheDocument();
      expect(aboutInFr.getAttribute("href")).toBe(
         aboutInEn.getAttribute("href"),
      );

      const expInEn = screen.getByRole("link", { name: expLabelInEn });
      expect(expInEn).toBeInTheDocument();
      expect(expInFr).not.toBeInTheDocument();
      expect(expInFr.getAttribute("href")).toBe(expInEn.getAttribute("href"));
   });
});
