import localFont from "next/font/local";
import { Lexend, Grand_Hotel } from "next/font/google";

export const luciole = localFont({
   src: [
      { path: "./fonts/Luciole-Regular.ttf", style: "normal", weight: "400" },
      { path: "./fonts/Luciole-Bold.ttf", style: "normal", weight: "700" },
      {
         path: "./fonts/Luciole-Regular-Italic.ttf",
         style: "italic",
         weight: "400",
      },
      {
         path: "./fonts/Luciole-Bold-Italic.ttf",
         style: "italic",
         weight: "700",
      },
   ],
   variable: "--font-luciole",
   display: "swap",
});

export const lexend = Lexend({
   subsets: ["latin"],
   variable: "--font-lexend",
   preload: false,
   display: "swap",
});

export const grandHotel = Grand_Hotel({
   subsets: ["latin"],
   variable: "--font-grandHotel",
   weight: "400",
});

export const openDyslexic = localFont({
   src: [
      {
         path: "./fonts/OpenDyslexic-Regular.otf",
         style: "normal",
         weight: "400",
      },
      {
         path: "./fonts/OpenDyslexic-Italic.otf",
         style: "italic",
         weight: "400",
      },
      { path: "./fonts/OpenDyslexic-Bold.otf", style: "normal", weight: "700" },
      {
         path: "./fonts/OpenDyslexic-BoldItalic.otf",
         style: "italic",
         weight: "700",
      },
   ],
   variable: "--font-openDyslexic",
   display: "swap",
});
