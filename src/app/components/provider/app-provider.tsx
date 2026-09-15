"use client";
import { LocaleContext, ThemeContext } from "@/context/Context";
import React, { useEffect, useMemo, useState } from "react";
import { Locale, Theme } from "@/types/types";

type Props = {
   children: React.ReactNode;
};

export default function AppProvider({ children }: Props) {
   const [theme, setTheme] = useState<Theme>("light");
   const [locale, setLocale] = useState<Locale>("fr");
   const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);
   const localeValue = useMemo(() => ({ locale, setLocale }), [locale]);
   useEffect(() => {
      const themeStored = localStorage.getItem("theme" as Theme);
      const localeStored = localStorage.getItem("locale" as Locale);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (themeStored) setTheme(themeStored as Theme);
      if (localeStored) setLocale(localeStored as Locale);
   }, []);
   useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
   }, [theme]);

   return (
      <ThemeContext value={themeValue}>
         <LocaleContext value={localeValue}>{children}</LocaleContext>
      </ThemeContext>
   );
}
