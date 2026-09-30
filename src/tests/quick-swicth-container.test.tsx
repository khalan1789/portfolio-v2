import "@testing-library/jest-dom/vitest";
import { render, screen, within } from "@testing-library/react";
import QuickSwitchContainer from "@/app/components/header/quick-switch-container";
import { axe } from "vitest-axe";
import "vitest-axe/extend-expect";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { LocaleContext, ThemeContext } from "@/context/Context";
import { Locale, Theme } from "@/types/types";
import { useState } from "react";

function renderWithProvider(initialLocale: Locale, initialTheme: Theme) {
   function Wrapper() {
      const [theme, setTheme] = useState<Theme>(initialTheme);
      const [locale, setLocale] = useState<Locale>(initialLocale);
      return (
         <ThemeContext value={{ theme, setTheme }}>
            <LocaleContext value={{ locale, setLocale }}>
               <QuickSwitchContainer />
            </LocaleContext>
         </ThemeContext>
      );
   }
   return render(<Wrapper />);
}

it("should have no accessibility violations", async () => {
   const { container } = render(<QuickSwitchContainer />);
   const results = await axe(container);
   expect(results).toHaveNoViolations();
});

describe("quickSwitchContainer", () => {
   it("should have french and light values by default", () => {
      render(<QuickSwitchContainer />);
      const themeButton = screen.getByRole("button", {
         name: "Bouton pour changer de thème",
      });
      const localeButton = screen.getByRole("button", {
         name: "Bouton pour changer de langue",
      });
      expect(themeButton).toBeInTheDocument();
      expect(localeButton).toBeInTheDocument();
   });

   it("should change theme", async () => {
      renderWithProvider("fr", "light");
      const user = userEvent.setup();
      const themeButton = screen.getByRole("button", {
         name: "Bouton pour changer de thème",
      });

      expect(themeButton).toBeInTheDocument();
      const whenItsLightImg = screen.getByRole("img", {
         name: "symbole de lune",
      });
      expect(whenItsLightImg).toBeInTheDocument();

      await user.click(themeButton);
      expect(screen.getByAltText("symbole de lumière")).toBeInTheDocument();
      expect(screen.queryByAltText("symbole de lune")).not.toBeInTheDocument();
   });

   it("should change langage", async () => {
      renderWithProvider("fr", "light");
      const user = userEvent.setup();
      const localeButton = screen.getByRole("button", {
         name: "Bouton pour changer de langue",
      });
      const themeButtonInFrench = screen.getByRole("button", {
         name: "Bouton pour changer de thème",
      });

      expect(localeButton).toBeInTheDocument();
      expect(themeButtonInFrench).toBeInTheDocument();
      expect(within(localeButton).getByText("FR")).toBeInTheDocument();
      await user.click(localeButton);

      const localeButtonInFrench = screen.queryByRole("button", {
         name: "Bouton pour changer de langue",
      });
      expect(localeButtonInFrench).not.toBeInTheDocument();

      expect(
         screen.queryByRole("button", {
            name: "Bouton pour changer de thème",
         }),
      ).not.toBeInTheDocument();
      expect(
         screen.getByRole("button", { name: "Change language button" }),
      ).toBeInTheDocument();
      expect(
         screen.getByRole("button", { name: "Change theme button" }),
      ).toBeInTheDocument();
      expect(within(localeButton).getByText("EN")).toBeInTheDocument();
      expect(within(localeButton).queryByText("FR")).not.toBeInTheDocument();
   });
});
