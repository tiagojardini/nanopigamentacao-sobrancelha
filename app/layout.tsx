import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://micropigmentacao.alexiasobrancelhas.com.br"),
  title: {
    default: "Nanopigmentação de Sobrancelhas | Alléxia Sobrancelhas",
    template: "%s | Alléxia Sobrancelhas",
  },
  description:
    "Nanopigmentação de sobrancelhas fio a fio, com técnica hiper-realista e naturalidade. Estúdio em Valinhos-SP, atendendo Vinhedo, Campinas, Itatiba e Jundiaí.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
