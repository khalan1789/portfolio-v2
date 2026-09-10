"use client";
import { LocaleContext, ThemeContext } from "@/context/Context";
import React, { useMemo, useState } from "react";
import { Locale, Theme } from "@/types/types";

type Props = {
   children: React.ReactNode;
};

export default function AppProvider({ children }: Props) {
   const [theme, setTheme] = useState<Theme>("light");
   const [locale, setLocale] = useState<Locale>("fr");

   const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);
   const localeValue = useMemo(() => ({ locale, setLocale }), [locale]);
   return (
      <ThemeContext value={themeValue}>
         <LocaleContext value={localeValue}>{children}</LocaleContext>
      </ThemeContext>
   );
}
