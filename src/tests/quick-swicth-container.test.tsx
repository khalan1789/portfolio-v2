import "@testing-library/jest-dom/vitest";
import { cleanup, render, screen } from "@testing-library/react";
import QuickSwitchContainer from "@/app/components/header/quick-switch-container";
import { axe } from "vitest-axe";
import "vitest-axe/extend-expect";
import { describe } from "node:test";
import { expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { LocaleContext, ThemeContext } from "@/context/Context";
import { Locale, Theme } from "@/types/types";

function renderWithLocale(locale: Locale) {
   return render(
      <LocaleContext value={{ locale, setLocale: vi.fn() }}>
         <QuickSwitchContainer />
      </LocaleContext>,
   );
}

function renderWithTheme(theme: Theme) {
   return render(
      <ThemeContext value={{ theme, setTheme: vi.fn() }}>
         <QuickSwitchContainer />
      </ThemeContext>,
   );
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
});
