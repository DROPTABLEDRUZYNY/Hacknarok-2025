import Link from 'next/link'
import React from 'react'

export default function NavButton({text, icon, link}: {text: string, icon: React.ReactNode, link: string}) {
  return (
    <div className="flex items-center gap-2 cursor-pointer bg-black rounded-full px-4">
        <Link href={link} className="flex items-center gap-2">
            {icon}
            <span className="text-white font-medium">{text}</span>
        </Link>
    </div>
  )
}
