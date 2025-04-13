import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { inter } from "@/app/ui/fonts";
import "./globals.css";
import MainNav from "./ui/nav_bar/mainNav";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | LinkHub",
    default: "LinkHub",
  },
  description: "LinkHub - Turn ideas into teams. Instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} width-[80%] antialiased`}
      >
        <MainNav />
        <div className="w-full h-full fixed top-0 left-0 z-[-1] opacity-[0.75]">
          <BackgroundGradientAnimation />
        </div>
        {children}
      </body>
    </html>
  );
}
