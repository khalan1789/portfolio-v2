import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import AppProvider from "./components/provider/app-provider";
import { luciole, lexend, openDyslexic } from "./styles/styles";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ScrollReveal from "./components/scroll/scroll-reveal";
import { SITE_NAME, SITE_URL } from "@/data/site";

export const metadata: Metadata = {
   metadataBase: new URL(SITE_URL),
   title: {
      default: `${SITE_NAME} - Développeur Full Stack`,
      template: `%s | ${SITE_NAME}`,
   },
   description:
      "Benjamin Ducau, développeur full stack React et .NET orienté produit. Découvrez mon parcours, mes expériences et ma façon de construire des produits utiles.",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html
         lang="fr"
         className={`${luciole.variable} ${lexend.variable} ${openDyslexic.variable} h-full antialiased`}
         suppressHydrationWarning
      >
         {/* <body className="min-h-full flex flex-col"> */}
         <body className="min-h-full ">
            <Script id="thematic" strategy="beforeInteractive">
               {`
            try {
              var themeInfo = localStorage.getItem('theme');
              if (themeInfo) document.documentElement.setAttribute('data-theme', themeInfo);
              var localeInfo = localStorage.getItem('locale');
              if (localeInfo) document.documentElement.lang = localeInfo;
              var fontInfo = localStorage.getItem('font');
              if (fontInfo) document.documentElement.setAttribute('data-font', fontInfo);
            } catch (e) {
             console.log(e)}   
          `}
            </Script>
            <AppProvider>
               <Header />
               {children}
               <Footer />
            </AppProvider>
            <ScrollReveal />
         </body>
      </html>
   );
}
