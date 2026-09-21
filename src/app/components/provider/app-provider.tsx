"use client";
import { LocaleContext, ThemeContext, FontContext } from "@/context/Context";
import React, { useEffect, useMemo, useState } from "react";
import { Font, Locale, Theme } from "@/types/types";

type Props = {
   children: React.ReactNode;
};

export default function AppProvider({ children }: Props) {
   const [theme, setTheme] = useState<Theme>("light");
   const [locale, setLocale] = useState<Locale>("fr");
   const [font, setFont] = useState<Font>("default");
   const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);
   const localeValue = useMemo(() => ({ locale, setLocale }), [locale]);
   const fontValue = useMemo(() => ({ font, setFont }), [font]);

   useEffect(() => {
      const themeStored = localStorage.getItem("theme" as Theme);
      const localeStored = localStorage.getItem("locale" as Locale);
      const fontStored = localStorage.getItem("font" as Font);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (themeStored) setTheme(themeStored as Theme);
      if (localeStored) setLocale(localeStored as Locale);
      if (fontStored) setFont(fontStored as Font);
   }, []);
   useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
   }, [theme]);
   useEffect(() => {
      document.documentElement.setAttribute("data-font", font);
   }, [font]);

   return (
      <FontContext value={fontValue}>
         <ThemeContext value={themeValue}>
            <LocaleContext value={localeValue}>{children}</LocaleContext>
         </ThemeContext>
      </FontContext>
   );
}
