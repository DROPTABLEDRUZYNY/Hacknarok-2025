import Link from "next/link";
import NavLinks from "@/app/ui/nav_bar/navLinks";
import SomeLogo from "@/app/ui/someLogo";
import { PowerIcon } from "@heroicons/react/24/outline";
import LogoutButton from "../LogoutButton";
import NavButton from "./navButton";
import { HomeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function MainNav() {
  return (
    <nav className="w-full backdrop-blur fixed top-0 left-0 right-0 z-10 justify-around py-4 flex items-start">
      <div className="width-[80%] border-black border p-1 rounded-md">
        <Image src="/logo.svg" alt="logo" width={160} height={160} />
      </div>

      <div className="flex items-center">
        <NavButton text="projects" icon={<HomeIcon className="w-4 h-4 text-black" />} link="/" />
        <NavButton text="network" icon={<HomeIcon className="w-4 h-4 text-black" />} link="/" />
        <NavButton text="jobs" icon={<HomeIcon className="w-4 h-4 text-black" />} link="/" />
      </div>

      <div className="flex items-start">
        <span className="text-black font-medium border-black border p-1 rounded-md">
          Yehor Kharchenko
        </span>
        <div className="border-black border p-1 rounded-md">
          <div className="rounded-full bg-black w-10 h-10 ">
            ,
          </div>
        </div>
        
      </div>
    </nav>
  );
}
