import Link from "next/link";
import NavLinks from "@/app/ui/nav_bar/navLinks";
import SomeLogo from "@/app/ui/someLogo";
import { PowerIcon } from "@heroicons/react/24/outline";
import LogoutButton from "../LogoutButton";
import NavButton from "./navButton";
import {
  HomeIcon,
  SparklesIcon,
  GlobeAltIcon,
  IdentificationIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function MainNav() {
  return (
    <nav className="w-full backdrop-blur fixed top-0 left-0 right-0 z-20 justify-around py-4 flex items-start">
      <div className=" border-black border p-1 rounded-md">
        <img src="/logo.svg" alt="logo" className="w-[160px]" />
      </div>

      <div className="flex items-center">
        <Link href="/projects">
          <NavButton
            text="projects"
            icon={<SparklesIcon className="w-4 h-4 text-black" />}
            link="/projects"
          />
        </Link>
        <Link href="/network">
          <NavButton
            text="network"
            icon={<GlobeAltIcon className="w-4 h-4 text-black" />}
            link="/network"
          />
        </Link>
        <Link href="/jobs">
          <NavButton
            text="profile"
            icon={<IdentificationIcon className="w-4 h-4 text-black" />}
            link="/profile"
          />
        </Link>
      </div>

      <div className="flex items-start">
        <span className="text-black font-medium border-black border p-1 rounded-md">
          Yehor Kharchenko
        </span>
        <div className="border-black border p-1 rounded-md">
          <div className="rounded-full bg-black w-10 h-10 ">,</div>
        </div>
      </div>
    </nav>
  );
}
