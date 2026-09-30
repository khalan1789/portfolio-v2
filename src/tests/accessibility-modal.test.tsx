import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import AccessibilityModal from "@/app/components/modal/accessibility-modal";
import { axe } from "vitest-axe";
import "vitest-axe/extend-expect";
import { describe, expect, it, vi } from "vitest";
import { FontContext, LocaleContext, ThemeContext } from "@/context/Context";
import { useState } from "react";
import { Font, Locale, Theme } from "@/types/types";
import userEvent from "@testing-library/user-event";

function renderWithProvider(
   initialLocale: Locale,
   initialTheme: Theme,
   initialFont: Font,
) {
   function Wrapper() {
      const [theme, setTheme] = useState<Theme>(initialTheme);
      const [locale, setLocale] = useState<Locale>(initialLocale);
      const [font, setFont] = useState<Font>(initialFont);
      return (
         <FontContext value={{ font, setFont }}>
            <ThemeContext value={{ theme, setTheme }}>
               <LocaleContext value={{ locale, setLocale }}>
                  <AccessibilityModal />
               </LocaleContext>
            </ThemeContext>
         </FontContext>
      );
   }
   return render(<Wrapper />);
}

describe("accessibility modal", () => {
   it("should have no accessibility violations when open", async () => {
      const { container } = render(<AccessibilityModal />);
      const user = userEvent.setup();

      await user.click(
         screen.getByRole("button", {
            name: "bouton pour l'accessibilité",
         }),
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
   });
   it("should be close by default", () => {
      render(<AccessibilityModal />);
      expect(
         screen.queryByRole("heading", { name: "Paramètres d'accessibilité" }),
      ).not.toBeInTheDocument();
   });
   it("should open and close the modal", async () => {
      renderWithProvider("fr", "light", "default");
      const user = userEvent.setup();

      await user.click(
         screen.getByRole("button", {
            name: "bouton pour l'accessibilité",
         }),
      );
      const closeButton = screen.getByRole("button", {
         name: "bouton de fermeture",
      });
      expect(closeButton).toBeInTheDocument();
      expect(
         screen.getByRole("heading", { name: "Paramètres d'accessibilité" }),
      ).toBeInTheDocument();

      await user.click(closeButton);

      expect(
         screen.queryByRole("heading", { name: "Paramètres d'accessibilité" }),
      ).not.toBeInTheDocument();
   });
   it("should activate a theme, deactivate it on a reclick, and switch cleanly between different modes", async () => {
      renderWithProvider("fr", "light", "default");
      const user = userEvent.setup();

      await user.click(
         screen.getByRole("button", {
            name: "bouton pour l'accessibilité",
         }),
      );

      const blackAndWhiteToggle = screen.getByRole("switch", {
         name: "Mode Noir et Blanc",
      });
      const whiteAndBlackToggle = screen.getByRole("switch", {
         name: "Mode Blanc et Noir",
      });

      const colorBlindnessToggle = screen.getByRole("switch", {
         name: "Mode daltonisme",
      });
      const darkModeToggle = screen.getByRole("switch", {
         name: "Mode sombre",
      });

      expect(blackAndWhiteToggle).toHaveAttribute("aria-checked", "false");
      expect(whiteAndBlackToggle).toHaveAttribute("aria-checked", "false");
      expect(colorBlindnessToggle).toHaveAttribute("aria-checked", "false");
      expect(darkModeToggle).toHaveAttribute("aria-checked", "false");

      await user.click(blackAndWhiteToggle);
      expect(blackAndWhiteToggle).toHaveAttribute("aria-checked", "true");

      await user.click(blackAndWhiteToggle);
      expect(blackAndWhiteToggle).toHaveAttribute("aria-checked", "false");

      await user.click(whiteAndBlackToggle);
      expect(blackAndWhiteToggle).toHaveAttribute("aria-checked", "false");
      expect(whiteAndBlackToggle).toHaveAttribute("aria-checked", "true");
      expect(colorBlindnessToggle).toHaveAttribute("aria-checked", "false");
      expect(darkModeToggle).toHaveAttribute("aria-checked", "false");

      await user.click(blackAndWhiteToggle);
      expect(blackAndWhiteToggle).toHaveAttribute("aria-checked", "true");
      expect(whiteAndBlackToggle).toHaveAttribute("aria-checked", "false");
      expect(colorBlindnessToggle).toHaveAttribute("aria-checked", "false");
      expect(darkModeToggle).toHaveAttribute("aria-checked", "false");

      await user.click(darkModeToggle);
      expect(blackAndWhiteToggle).toHaveAttribute("aria-checked", "false");
      expect(whiteAndBlackToggle).toHaveAttribute("aria-checked", "false");
      expect(colorBlindnessToggle).toHaveAttribute("aria-checked", "false");
      expect(darkModeToggle).toHaveAttribute("aria-checked", "true");

      await user.click(colorBlindnessToggle);
      expect(blackAndWhiteToggle).toHaveAttribute("aria-checked", "false");
      expect(whiteAndBlackToggle).toHaveAttribute("aria-checked", "false");
      expect(colorBlindnessToggle).toHaveAttribute("aria-checked", "true");
      expect(darkModeToggle).toHaveAttribute("aria-checked", "false");
   });
   it("should change cleanly the font", async () => {
      renderWithProvider("fr", "light", "default");
      const user = userEvent.setup();

      await user.click(
         screen.getByRole("button", {
            name: "bouton pour l'accessibilité",
         }),
      );

      const fontToggleButton = screen.getByRole("switch", {
         name: "Mode dyslexique",
      });
      await user.click(fontToggleButton);

      expect(fontToggleButton).toHaveAttribute("aria-checked", "true");
      await user.click(fontToggleButton);

      expect(fontToggleButton).toHaveAttribute("aria-checked", "false");
   });
   it("should reset all changes", async () => {
      renderWithProvider("fr", "light", "default");
      const user = userEvent.setup();

      await user.click(
         screen.getByRole("button", {
            name: "bouton pour l'accessibilité",
         }),
      );

      const fontToggleButton = screen.getByRole("switch", {
         name: "Mode dyslexique",
      });
      const colorBlindnessToggle = screen.getByRole("switch", {
         name: "Mode daltonisme",
      });

      await user.click(fontToggleButton);
      await user.click(colorBlindnessToggle);

      expect(fontToggleButton).toHaveAttribute("aria-checked", "true");
      expect(colorBlindnessToggle).toHaveAttribute("aria-checked", "true");

      await user.click(screen.getByRole("button", { name: /réinitialiser/i }));
      expect(fontToggleButton).toHaveAttribute("aria-checked", "false");
      expect(colorBlindnessToggle).toHaveAttribute("aria-checked", "false");
   });
   it("should have good labels in english", async () => {
      renderWithProvider("en", "light", "default");
      const user = userEvent.setup();

      await user.click(
         screen.getByRole("button", {
            name: "accessibility button",
         }),
      );
      const blackAndWhiteToggle = screen.getByRole("switch", {
         name: "Black and White mode",
      });
      const whiteAndBlackToggle = screen.getByRole("switch", {
         name: "White and Black mode",
      });

      const colorBlindnessToggle = screen.getByRole("switch", {
         name: "Colorblindness mode",
      });
      const darkModeToggle = screen.getByRole("switch", {
         name: "Dark mode",
      });
      const fontToggleButton = screen.getByRole("switch", {
         name: "Dyslexic mode",
      });
      expect(blackAndWhiteToggle).toBeInTheDocument();
      expect(whiteAndBlackToggle).toBeInTheDocument();
      expect(colorBlindnessToggle).toBeInTheDocument();
      expect(darkModeToggle).toBeInTheDocument();
      expect(fontToggleButton).toBeInTheDocument();

      expect(
         screen.getByRole("heading", { name: "Accessibility settings" }),
      ).toBeInTheDocument();
   });

   it("should reflect an externally-set theme on open", async () => {
      renderWithProvider("fr", "dark", "default");
      const user = userEvent.setup();

      await user.click(
         screen.getByRole("button", { name: "bouton pour l'accessibilité" }),
      );

      expect(
         screen.getByRole("switch", { name: "Mode sombre" }),
      ).toHaveAttribute("aria-checked", "true");
      expect(
         screen.getByRole("switch", { name: "Mode Noir et Blanc" }),
      ).toHaveAttribute("aria-checked", "false");
   });

   it("should persist the theme change to localStorage", async () => {
      renderWithProvider("fr", "light", "default");
      const user = userEvent.setup();
      const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

      await user.click(
         screen.getByRole("button", { name: "bouton pour l'accessibilité" }),
      );
      await user.click(
         screen.getByRole("switch", { name: "Mode Noir et Blanc" }),
      );

      expect(setItemSpy).toHaveBeenCalledWith("theme", "blackAndWhite");
   });
});
