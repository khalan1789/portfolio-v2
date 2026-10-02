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
import britishDarkMode from "../../public/icons/union-jack-darkmode.svg";
import british from "../../public/icons/british-frame--32.png";
import britishBlackAndWhite from "../../public/icons/union-jack-monoBlack.svg";
import britishWhiteAndBlack from "../../public/icons/union-jack-monoWhite.svg";
import britishYellowBlue from "../../public/icons/union-jack-yellowBlue.svg";
import france from "../../public/icons/france-frame-32.png";
import franceDarkMode from "../../public/icons/france-darkmode.svg";
import franceBlackAndWhite from "../../public/icons/france-monoBlack.svg";
import franceWhiteAndBlack from "../../public/icons/france-monoWhite.svg";
import franceYellowBlue from "../../public/icons/france-yellowBlue.svg";
import { resolveSrc } from "./helpers-test";
import moon from "../../public/icons/lune.png";
import lightDarkMode from "../../public/icons/light-darkmode.svg";
import lightBlackAndWhiteMode from "../../public/icons/light-monoWhite.svg";
import lightWhiteAndBlackMode from "../../public/icons/light-monoDark.svg";
import lightYellow from "../../public/icons/light-yellowBlue.svg";

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

   it("should persist the theme and locales change to localStorage", async () => {
      renderWithProvider("fr", "light");
      const user = userEvent.setup();
      const setItemSpy = vi.spyOn(Storage.prototype, "setItem");

      await user.click(
         screen.getByRole("button", {
            name: "Bouton pour changer de thème",
         }),
      );
      await user.click(
         screen.getByRole("button", {
            name: "Bouton pour changer de langue",
         }),
      );

      expect(setItemSpy).toHaveBeenCalledWith("theme", "dark");
      expect(setItemSpy).toHaveBeenCalledWith("locale", "en");
   });
});

describe("quickSwitchContainer, showned icons by theme", () => {
   it.each([
      ["light", france],
      ["dark", franceDarkMode],
      ["blackAndWhite", franceWhiteAndBlack],
      ["whiteAndBlack", franceBlackAndWhite],
      ["yellowOnBlue", franceYellowBlue],
   ] as const)(
      "should show the correct locale icon when theme is %s and locale french",
      (theme, expectedIcon) => {
         renderWithProvider("fr", theme as Theme);
         const icon = screen.getByRole("img", {
            name: /logo du drapeau de la /i,
         });
         expect(icon).toHaveAttribute("src", resolveSrc(expectedIcon));
      },
   );
   it.each([
      ["light", british],
      ["dark", britishDarkMode],
      ["blackAndWhite", britishWhiteAndBlack],
      ["whiteAndBlack", britishBlackAndWhite],
      ["yellowOnBlue", britishYellowBlue],
   ] as const)(
      "should show the correct locale icon when theme is %s and locale english",
      (theme, expectedIcon) => {
         renderWithProvider("en", theme as Theme);
         const icon = screen.getByRole("img", {
            name: /flag logo/i,
         });
         expect(icon).toHaveAttribute("src", resolveSrc(expectedIcon));
      },
   );
   it.each([
      ["light", moon],
      ["dark", lightDarkMode],
      ["blackAndWhite", lightBlackAndWhiteMode],
      ["whiteAndBlack", lightWhiteAndBlackMode],
      ["yellowOnBlue", lightYellow],
   ] as const)(
      "should show the correct theme icon when theme is %s",
      (theme, expectedIcon) => {
         renderWithProvider("fr", theme as Theme);
         const icon = screen.getByRole("img", {
            name: /symbole de/i,
         });
         expect(icon).toHaveAttribute("src", resolveSrc(expectedIcon));
      },
   );
});
