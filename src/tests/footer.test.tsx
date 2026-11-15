import "@testing-library/jest-dom/vitest";
import "vitest-axe/extend-expect";
import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import Footer from "@/app/components/footer/footer";
import { useLocale } from "@/context/useLocale";
import { useTheme } from "@/context/useTheme";

vi.mock("@/context/useLocale", () => ({ useLocale: vi.fn() }));
vi.mock("@/context/useTheme", () => ({ useTheme: vi.fn() }));

type Locale = "fr" | "en";
type Theme =
   "light" | "dark" | "blackAndWhite" | "whiteAndBlack" | "yellowOnBlue";

const LINKEDIN_URL = "https://www.linkedin.com/in/benjamin-ducau/";
const GITHUB_URL = "https://github.com/khalan1789/";

const renderFooter = ({
   locale = "fr",
   theme = "light",
}: { locale?: Locale; theme?: Theme } = {}) => {
   vi.mocked(useLocale).mockReturnValue({ locale } as ReturnType<
      typeof useLocale
   >);
   vi.mocked(useTheme).mockReturnValue({ theme } as ReturnType<
      typeof useTheme
   >);
   return render(<Footer />);
};

const iconsByTheme: {
   theme: Theme;
   linkedinIcon: string;
   githubIcon: string;
}[] = [
   {
      theme: "light",
      linkedinIcon: "linkedin-classic",
      githubIcon: "github-classic",
   },
   {
      theme: "dark",
      linkedinIcon: "linkedin-white-on-black",
      githubIcon: "github-white-on-black",
   },
   {
      theme: "blackAndWhite",
      linkedinIcon: "linkedin-black-on-white",
      githubIcon: "github-black-on-white",
   },
   {
      theme: "whiteAndBlack",
      linkedinIcon: "linkedin-white-on-black",
      githubIcon: "github-white-on-black",
   },
   {
      theme: "yellowOnBlue",
      linkedinIcon: "linkedin-yellow-on-blue",
      githubIcon: "github-yellow-on-blue",
   },
];

describe("Footer", () => {
   afterEach(() => {
      vi.useRealTimers();
   });

   describe("accessibility", () => {
      it.each(iconsByTheme)(
         "should have no accessibility violations with the $theme theme",
         async ({ theme }) => {
            const { container } = renderFooter({ theme });
            const results = await axe(container);
            expect(results).toHaveNoViolations();
         },
      );

      it("should hide the icons from assistive technologies", () => {
         renderFooter();
         expect(screen.queryAllByRole("img")).toHaveLength(0);
      });

      it("should reach the LinkedIn link then the GitHub link with the keyboard", async () => {
         renderFooter();
         const user = userEvent.setup();

         await user.tab();
         expect(screen.getByRole("link", { name: /linkedin/i })).toHaveFocus();

         await user.tab();
         expect(screen.getByRole("link", { name: /github/i })).toHaveFocus();
      });
   });

   describe("social links", () => {
      it("should link to the LinkedIn and GitHub profiles", () => {
         renderFooter();
         expect(
            screen.getByRole("link", { name: /linkedin/i }),
         ).toHaveAttribute("href", LINKEDIN_URL);
         expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
            "href",
            GITHUB_URL,
         );
      });

      it("should have french accessible names when the locale is fr", () => {
         renderFooter({ locale: "fr" });
         expect(
            screen.getByRole("link", {
               name: "lien vers le profil linkedin dans un nouvel onglet",
            }),
         ).toBeInTheDocument();
         expect(
            screen.getByRole("link", {
               name: "lien vers le profil github dans un nouvel onglet",
            }),
         ).toBeInTheDocument();
      });

      it("should have english accessible names when the locale is en", () => {
         renderFooter({ locale: "en" });
         expect(
            screen.getByRole("link", {
               name: "link to the linkedin profile in a new tab",
            }),
         ).toBeInTheDocument();
         expect(
            screen.getByRole("link", {
               name: "link to the github profile in a new tab",
            }),
         ).toBeInTheDocument();
      });

      it("should open the external links in a new tab safely", () => {
         renderFooter();
         for (const externalLink of screen.getAllByRole("link")) {
            expect(externalLink).toHaveAttribute("target", "_blank");
            expect(externalLink).toHaveAttribute(
               "rel",
               expect.stringContaining("noopener"),
            );
         }
      });
   });

   describe("credits", () => {
      it("should display the current year", () => {
         vi.useFakeTimers({ toFake: ["Date"] });
         vi.setSystemTime(new Date("2030-06-15"));
         renderFooter();
         expect(screen.getByRole("contentinfo")).toHaveTextContent("2030");
      });
   });
});
