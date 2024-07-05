"use client"

import { Button } from "@mav/ui/components/buttons"
import { MyArtverseIcon } from "@mav/ui/icons"
import { LuBell, LuHelpCircle, LuPlus } from "react-icons/lu"

export default function Navbar() {
  return (
    <nav className="bg-100 border-b-mute relative z-20 flex select-none items-center justify-between border-b px-5 py-3 text-sm font-medium">
      <div>
        <MyArtverseIcon logoOnly />
      </div>
      <div className="flex items-center gap-x-1.5">
        <Button icon={<LuHelpCircle size={21} />} variant="tritery" />
        <Button icon={<LuBell size={21} />} variant="tritery" />
        <Button variant="secondary" prefix={<LuPlus size={21} />}>
          Create
        </Button>
      </div>
    </nav>
  )
}
