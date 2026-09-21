import { useContext } from "react";
import { FontContext } from "./Context";

export default function useFont() {
   const font = useContext(FontContext);

   return font;
}
