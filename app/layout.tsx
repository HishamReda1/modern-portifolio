import type { Metadata } from "next";
<<<<<<< HEAD
import {
  Inter,
  Cairo,
  Plus_Jakarta_Sans,
  Oxanium,
  JetBrains_Mono,
} from "next/font/google";
=======
import { Inter, Cairo } from "next/font/google";
>>>>>>> 1da11da113bbae3c09615f9d2f025dfd4c32b4ff

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic", "latin"] });
<<<<<<< HEAD
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});
const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-oxanium",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});
=======
>>>>>>> 1da11da113bbae3c09615f9d2f025dfd4c32b4ff

export const metadata: Metadata = {
  title: "Hisham's Portfolio",
  description: "Modern & Minimal JS  Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
<<<<<<< HEAD
      <body
        className={`${inter.className} ${cairo.className} ${plusJakartaSans.variable} ${oxanium.variable} ${jetbrainsMono.variable}`}
      >
=======
      <body className={`${inter.className} ${cairo.className}`}>
>>>>>>> 1da11da113bbae3c09615f9d2f025dfd4c32b4ff
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
