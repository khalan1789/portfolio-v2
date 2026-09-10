import { useContext } from "react";
import { LocaleContext } from "./Context";

export const useLocale = () => {
   const theme = useContext(LocaleContext);

   return theme;
};
