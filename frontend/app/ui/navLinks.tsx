"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
const links = [
  { name: "Aktywność", href: "/aktywnosc", icon: HomeIcon },
  { name: "Zdrowie", href: "/zdrowie", icon: HomeIcon },
  { name: "Activity", href: "/activity", icon: HomeIcon },
  {
    name: "Stats",
    href: "/stats",
    icon: DocumentDuplicateIcon,
  },
  { name: "Contact", href: "/contact", icon: UserGroupIcon },
  { name: "Login", href: "/login", icon: UserIcon },
  { name: "Register", href: "/register", icon: UserIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "rounded-xl flex h-[48px] grow items-center transition justify-center gap-2 p-3 text-sm font-medium hover:bg-black/50 hover:text-white md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-black  text-white": pathname === link.href,
                "bg-gray-50": pathname !== link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
