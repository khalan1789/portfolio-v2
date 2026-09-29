import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import NavbarMobile from "@/app/components/navbar/navbar-mobile";
import { axe } from "vitest-axe";
import "vitest-axe/extend-expect";
import { describe } from "node:test";
import { expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { LocaleContext } from "@/context/Context";
import { Locale } from "@/types/types";

function renderWithLocale(locale: Locale) {
   return render(
      <LocaleContext value={{ locale, setLocale: vi.fn() }}>
         <NavbarMobile />
      </LocaleContext>,
   );
}

it("should have no accessibility violations", async () => {
   const { container } = render(<NavbarMobile />);
   const results = await axe(container);
   expect(results).toHaveNoViolations();
});

const expLabelInFr: string = "Expériences";
const homeLabelInFr: string = "Accueil";
const skillsLabelInFr: string = "Compétences";
const aboutLabelInFr: string = "À propos";
const expLabelInEn: string = "Experience";
const homeLabelInEn: string = "Home";
const skillsLabelInEn: string = "Skills";
const aboutLabelInEn: string = "About";

describe("NavbarMobile", () => {
   it("should be close by default", () => {
      render(<NavbarMobile />);
      const burgerButton = screen.getByRole("button", {
         name: "Ouvrir le menu",
      });
      expect(burgerButton).toBeInTheDocument();
      expect(burgerButton).not.toHaveRole("navigation");
   });
   it("should open the menu after first click", async () => {
      render(<NavbarMobile />);
      const burgerButton = screen.getByRole("button");
      const user = userEvent.setup();
      expect(burgerButton).toHaveAttribute("aria-label", "Ouvrir le menu");
      await user.click(burgerButton);
      expect(burgerButton).not.toHaveAttribute("aria-label", "Ouvrir le menu");
      expect(burgerButton).toHaveAttribute("aria-label", "Fermer le menu");
      expect(screen.getByRole("navigation")).toBeInTheDocument();
      expect(burgerButton).toHaveAttribute("aria-expanded", "true");
   });
   it("should properly open and close the menu", async () => {
      render(<NavbarMobile />);
      const user = userEvent.setup();
      const burgerButton = screen.getByRole("button");
      expect(burgerButton).toBeInTheDocument();

      await user.click(burgerButton);
      await user.click(burgerButton);
      expect(burgerButton).toBeInTheDocument();
      expect(burgerButton).not.toHaveAttribute("aria-extended", true);
      expect(burgerButton).toHaveAttribute("aria-label", "Ouvrir le menu");
   });
   it("should have good label and the same href regardless of locale", async () => {
      renderWithLocale("fr");
      const burgerButton = screen.getByRole("button");
      const user = userEvent.setup();
      await user.click(burgerButton);

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
      await user.click(screen.getByRole("button"));

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
