// vitest.setup.ts
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, expect } from "vitest";
import "vitest-axe/extend-expect";
import * as matchers from "vitest-axe/matchers";
import type { AxeMatchers } from "vitest-axe/matchers";

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
