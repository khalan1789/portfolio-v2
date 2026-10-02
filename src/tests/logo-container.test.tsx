import "@testing-library/jest-dom/vitest";
import LogoContainer from "@/app/components/header/logo-container";
import { describe, it, expect, vi } from "vitest";
import { ThemeContext } from "@/context/Context";
import { Theme } from "@/types/types";
import { resolveSrc } from "./helpers-test";
import { render, screen } from "@testing-library/react";
import logoLight from "../../public/images/logo_brandind_ouvert.svg";
import logoDark from "../../public/images/logo-darkmode.svg";
import logoMonoDark from "../../public/images/logo-mono-noir-sur-blanc.svg";
import logoMonoWhite from "../../public/images/logo-mono-blanc-sur-noir.svg";
import logoYellowBlue from "../../public/images/logo-yellow-blue.svg";

function renderWithTheme(theme: Theme) {
   return render(
      <ThemeContext value={{ theme, setTheme: vi.fn() }}>
         <LogoContainer />
      </ThemeContext>,
   );
}

describe("logo-container", () => {
   it.each([
      ["light", logoLight],
      ["dark", logoDark],
      ["blackAndWhite", logoMonoDark],
      ["whiteAndBlack", logoMonoWhite],
      ["yellowOnBlue", logoYellowBlue],
   ] as const)(
      "should show render the good logo when theme is %s",
      (theme, expectedLogo) => {
         renderWithTheme(theme as Theme);
         const logo = screen.getByRole("img", { name: /logo du/i });
         expect(logo).toHaveAttribute("src", resolveSrc(expectedLogo));
      },
   );
});
