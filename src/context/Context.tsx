import { createContext } from "react";
import {
   ThemeContextValue,
   LocaleContextValue,
   FontContextValue,
} from "@/types/types";

export const ThemeContext = createContext<ThemeContextValue | undefined>(
   undefined,
);
export const LocaleContext = createContext<LocaleContextValue | undefined>(
   undefined,
);

export const FontContext = createContext<FontContextValue | undefined>(
   undefined,
);
