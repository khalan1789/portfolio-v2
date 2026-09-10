import { Dispatch, SetStateAction } from "react";

export type Theme = "light" | "dark" | "mono" | "yellowblue";

export type Locale = "fr" | "en";

export type ThemeContextValue = {
   theme: Theme;
   setTheme: Dispatch<SetStateAction<Theme>>;
};

export type LocaleContextValue = {
   locale: Locale;
   setLocale: Dispatch<SetStateAction<Locale>>;
};

export type Url = "/" | "/about" | "/experience" | "/skills";
