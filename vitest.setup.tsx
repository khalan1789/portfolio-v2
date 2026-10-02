// vitest.setup.ts
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";
import "vitest-axe/extend-expect";
import * as matchers from "vitest-axe/matchers";
import type { AxeMatchers } from "vitest-axe/matchers";
import { vi } from "vitest";

expect.extend(matchers);

afterEach(() => {
   cleanup();
});

declare module "vitest" {
   // eslint-disable-next-line @typescript-eslint/no-empty-object-type
   interface Assertion extends AxeMatchers {}
   // eslint-disable-next-line @typescript-eslint/no-empty-object-type
   interface AsymmetricMatchersContaining extends AxeMatchers {}
}

vi.mock("next/image", () => ({
   default: (props: Record<string, unknown>) => {
      const { src, alt, ...rest } = props as {
         src: string | { src: string };
         alt: string;
         [key: string]: unknown;
      };
      const resolvedSrc = typeof src === "string" ? src : src.src;
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={resolvedSrc} alt={alt} {...rest} />;
   },
}));

vi.mock("next/font/local", () => ({
   default: () => ({
      className: "mocked-local-font",
      variable: "--mocked-local-font",
      style: { fontFamily: "mocked-local-font" },
   }),
}));

vi.mock("next/font/google", () => ({
   Lexend: () => ({
      className: "mocked-lexend",
      variable: "--mocked-lexend",
      style: { fontFamily: "mocked-lexend" },
   }),
   Grand_Hotel: () => ({
      className: "mocked-grand-hotel",
      variable: "--mocked-grand-hotel",
      style: { fontFamily: "mocked-grand-hotel" },
   }),
}));
