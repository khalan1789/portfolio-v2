import { Dispatch, ReactNode, SetStateAction } from "react";

export type Theme =
   "light" | "dark" | "whiteAndBlack" | "yellowOnBlue" | "blackAndWhite";

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

export type AppUrl = "/" | "/about" | "/experience" | "/skills";

export type FontContextValue = {
   font: Font;
   setFont: Dispatch<SetStateAction<Font>>;
};

export type Localized = Record<Locale, string>;
// Difference is that it could include links, it's not strict text
export type LocalizedContent = Record<Locale, ReactNode>;

export type Experience = {
   slug: string;
   company: Localized;
   role: Localized;
   period: Localized;
   context: LocalizedContent;
   steps: Step[];
   takeaway?: LocalizedContent;
   hook?: LocalizedContent;
   impacts: LocalizedContent[];
   technos: string[];
   tools: string[];
};

export type Section = {
   title?: Localized;
   subTitle?: Localized;
   items: LocalizedContent[];
};

export type Step = {
   title?: Localized;
   period?: Localized;
   context?: LocalizedContent;
   sections?: Section[];
   results?: LocalizedContent[];
};
