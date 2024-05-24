"use client"

import Link from "next/link"
import { MyArtverseIcon } from "@mav/ui/icons"

export function Navbar() {
  return (
    <nav className="font-inter bg-100 relative flex select-none items-center justify-between px-5 py-3 text-sm font-medium">
      <Link href="/" aria-label="Home" draggable={false}>
        <MyArtverseIcon size={0.69} />
      </Link>
      {/* TODO handle login cookie stuff */}
      <div></div>
    </nav>
  )
}
