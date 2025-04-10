import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { inter } from "@/app/ui/fonts";
import "./globals.css";

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
    template: "%s | LiveActive",
    default: "LiveActive",
  },
  description: "Example site called LiveActive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="wrapper m-0 p-0 absolute z-[-1]">
          <div className="gradient gradient-1"></div>
          <div className="gradient gradient-2"></div>
          <div className="gradient gradient-3"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
