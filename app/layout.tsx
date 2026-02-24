import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Ready — Készülj fel az AI-korszakra | Expert Flow",
  description:
    "10 hetes online kurzus szolgáltatás-alapú egyéni vállalkozóknak. Nem programozást tanulsz — hanem azt, hogyan dolgozzon az AI helyetted.",
  keywords:
    "AI kurzus, mesterséges intelligencia, egyéni vállalkozó, automatizáció, ChatGPT, online kurzus, Expert Flow",
  openGraph: {
    title: "AI Ready — Készülj fel az AI-korszakra",
    description:
      "10 hetes online kurzus egyéni vállalkozóknak. Működő AI-rendszereket építesz a saját vállalkozásodba.",
    type: "website",
    locale: "hu_HU",
    siteName: "Expert Flow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" suppressHydrationWarning className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased bg-bg-base text-text-primary">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="skip-to-content">
            Ugrás a tartalomhoz
          </a>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
