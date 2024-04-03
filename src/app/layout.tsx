"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import CalculatorContextContainer from "./context/CalculatorContext/CalculatorContextContainer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <CalculatorContextContainer>{children}</CalculatorContextContainer>
      </body>
    </html>
  );
}
