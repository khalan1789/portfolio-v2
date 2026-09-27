import { Dispatch, SetStateAction } from "react";

export type Theme =
   | "light"
   | "dark"
   | "whiteAndBlack"
   | "yellowOnBlue"
   | "blackAndWhite";

export type Locale = "fr" | "en";

export type Font = "default" | "dyslexic";

export type ThemeContextValue = {
   theme: Theme;
   setTheme: Dispatch<SetStateAction<Theme>>;
};

export type LocaleContextValue = {
   locale: Locale;
   setLocale: Dispatch<SetStateAction<Locale>>;
};

export type Url = "/" | "/about" | "/experience" | "/skills";

export type FontContextValue = {
   font: Font;
   setFont: Dispatch<SetStateAction<Font>>;
};
