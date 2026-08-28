import type { Metadata } from "next";
import { Geist, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-script-vibes",
  subsets: ["latin"],
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
      className={`${geistSans.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#020509] font-sans text-white">
        {children}
      </body>
    </html>
  );
}
