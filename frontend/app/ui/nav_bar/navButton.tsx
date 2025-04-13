import Link from "next/link";
import React from "react";

export default function NavButton({
  text,
  icon,
  link,
}: {
  text: string;
  icon: React.ReactNode;
  link: string;
}) {
  return (
    <div className="flex items-center gap-2 cursor-pointer bg-opacity-0 hover:bg-white/30 transition-all duration-300 ease-in-out border border-black rounded-md px-4">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-black font-medium">{text}</span>
      </div>
    </div>
  );
}
