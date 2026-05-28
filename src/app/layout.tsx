import type { Metadata } from "next";
import "./globals.css";
import { Oxanium } from "next/font/google";
import { cn } from "@/src/lib/utils";
import MainLayout from "../components/main-layout";

const oxanium = Oxanium({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Criseral — Software Development Agency",
  description:
    "We transform ideas into powerful software experiences. Web, mobile, and cloud solutions tailored to your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" className={cn("font-sans", oxanium.variable)}
    >
      <body className="min-h-full flex flex-col">
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
