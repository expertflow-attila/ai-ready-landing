import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
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
    "10 hetes online kurzus szolgáltatás-alapú egyéni vállalkozóknak. Nem programozást tanulsz — hanem azt, hogyan dolgozzon az AI helyetted. Rendszereket kapsz, nem elméleteket.",
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
    <html lang="hu" className={`${playfairDisplay.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-to-content">
          Ugrás a tartalomhoz
        </a>
        {children}
      </body>
    </html>
  );
}
