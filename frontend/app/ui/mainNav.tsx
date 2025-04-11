import Link from "next/link";
import NavLinks from "@/app/ui/navLinks";
import SomeLogo from "@/app/ui/someLogo";
import { PowerIcon } from "@heroicons/react/24/outline";
import LogoutButton from "./LogoutButton";

export default function MainNav() {
  return (
    <header className="w-full backdrop-blur ">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-center space-x-3 bg-black rounded-[12px]"
        >
          <div className="w-60 p-2 flex items-center justify-center">
            <SomeLogo />
          </div>
        </Link>
        <nav className="hidden flex-1 items-center justify-center space-x-6 text-sm font-medium md:flex">
          <NavLinks />
        </nav>

        <form className="ml-4">
          <LogoutButton className="flex items-center justify-center gap-2 rounded-lg bg-gray-50 py-1 px-2 text-sm font-medium hover:bg-black/50 hover:text-white transition-colors">
            <PowerIcon className="" />
            <span className="block">Sign Out</span>
          </LogoutButton>
        </form>
      </div>
    </header>
  );
}
