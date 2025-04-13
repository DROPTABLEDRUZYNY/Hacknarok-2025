import type { Metadata } from "next";
import "@/app/globals.css";
import { inter } from "@/app/ui/fonts";

import localFont from "next/font/local";
import MainNav from "@/app/ui/nav_bar/mainNav";

export const metadata: Metadata = {
  title: {
    template: "%s | LinkHub",
    default: "LinkHub",
  },
  description: "LinkHub - Turn ideas into teams. Instantly.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <span lang="en" suppressHydrationWarning>
      <div className="">{children}</div>
    </span>
  );
}
