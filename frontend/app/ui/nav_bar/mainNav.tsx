import Link from "next/link";
import NavLinks from "@/app/ui/nav_bar/navLinks";
import SomeLogo from "@/app/ui/someLogo";
import { PowerIcon } from "@heroicons/react/24/outline";
import LogoutButton from "../LogoutButton";
import NavButton from "./navButton";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function MainNav() {
  return (
    <nav className="w-full backdrop-blur fixed top-0 left-0 right-0 z-10 justify-around py-4 flex items-center">
      <div className="width-[80%]">
        <span className="text-black font-extrabold text-2xl">Linked Out</span>
      </div>

      <div className="flex items-center gap-4">
        <NavButton text="projects" icon={<HomeIcon className="w-4 h-4 text-white" />} link="/" />
        <NavButton text="network" icon={<HomeIcon className="w-4 h-4 text-white" />} link="/" />
        <NavButton text="jobs" icon={<HomeIcon className="w-4 h-4 text-white" />} link="/" />
      </div>

      <div className="flex items-center gap-4">
        <NavButton text="profile" icon={<HomeIcon className="w-4 h-4 text-white" />} link="/" />
        <div className="rounded-full bg-black w-10 h-10">
          ,
        </div>
      </div>
    </nav>
  );
}
