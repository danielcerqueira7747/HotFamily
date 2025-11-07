import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

import SmoothScroll from "./components/SmoothScroll/smoothScroll";

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hot Family | Cachorro-Quente Gourmet e Hambúrguer Artesanal em São Paulo",
  description:
    "A Hot Family é especializada em hot dogs e hambúrgueres artesanais com ingredientes selecionados. Peça agora e descubra o sabor de outro mundo!",
  keywords: [
    "hot dog gourmet",
    "hambúrguer artesanal",
    "food truck São Paulo",
    "lanche artesanal",
    "cachorro-quente gourmet",
    "Hot Family",
  ],
  authors: [{ name: "Hot Family" }],
  openGraph: {
    title: "Hot Family | Cachorro-Quente Gourmet e Hambúrguer Artesanal",
    description:
      "Experimente o sabor de outro mundo com nossos hot dogs e burgers artesanais!",
    url: "https://hotfamily.com.br",
    siteName: "Hot Family",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://hotfamily.com.br/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hot Family - Cachorro-Quente Gourmet e Hambúrguer Artesanal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hot Family | Gourmet e Artesanal",
    description: "Sabor de outro mundo com nossos hot dogs e burgers artesanais.",
    images: ["https://hotfamily.com.br/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://hotfamily.com.br",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${bebas.variable} ${inter.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
