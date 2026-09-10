import { createContext } from "react";
import { ThemeContextValue, LocaleContextValue } from "@/types/types";

export const ThemeContext = createContext<ThemeContextValue | undefined>(
   undefined,
);
export const LocaleContext = createContext<LocaleContextValue | undefined>(
   undefined,
);
