import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Geometr415 Blk BT is a single Black face whose file reports weight 400.
// Registering it as 900 keeps `font-bold` headings from getting a synthetic
// bold smeared on top of the already-black glyphs.
const geometric = localFont({
  src: "../public/ufonts.com_geometr415-blk-bt-black.ttf",
  weight: "900",
  variable: "--font-geometric",
});

export const metadata: Metadata = {
  title: "DeehZigner — Design Gráfico",
  description:
    "Transformando sua ideia em sucesso! Identidade visual, logotipos, social media e comunicação visual por Anderson Nogueira Silva.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geometric.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020509] font-sans text-white">
        {children}
      </body>
    </html>
  );
}
