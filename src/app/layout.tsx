import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Bahtera Arta Niaga",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <html lang="en" className="dark text-foreground bg-background">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
    </>
  );
}
