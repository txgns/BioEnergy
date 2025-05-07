import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BioEnergy - Plataforma Informativa",
  description: "Conectando produtores de biomassa e ONGs para um futuro mais sustentável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-100`}>
        <Header />
        <main className="container mx-auto py-8 px-4 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

