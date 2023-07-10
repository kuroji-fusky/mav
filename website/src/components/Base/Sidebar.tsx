"use client"

import { useContext } from "react"
import { Button, MenuContainer, MenuItem, Overlay, Separator } from "../ui"
import { NavbarContext } from "@/contexts"
import {
  CatIcon,
  HomeIcon,
  SparklesIcon,
  XIcon,
  BrushIcon,
  SettingsIcon,
  HelpCircleIcon,
  MessageSquarePlusIcon,
  AlertTriangleIcon
} from "lucide-react"

export default function Sidebar() {
  const SIDEBAR_WIDTH = 340
  const SIDEBAR_ITEMS = [
    {
      heading: "Explore",
      items: [
        { name: "Available Adoptables", icon: SparklesIcon },
        { name: "Open for Commissions", icon: BrushIcon }
      ]
    },
    {
      heading: "",
      items: [
        { name: "Settings", icon: SettingsIcon },
        { name: "Help", icon: HelpCircleIcon },
        { name: "Feedback", icon: MessageSquarePlusIcon },
        { name: "Report Issue", icon: AlertTriangleIcon }
      ]
    }
  ]

  const { isSidebarOpen, setSidebarState } = useContext(NavbarContext)
  const toggleSidebar = () => setSidebarState(!isSidebarOpen)

  return (
    <Overlay state={isSidebarOpen} toggler={toggleSidebar}>
      <aside
        className="font-semibold flex flex-col fixed inset-0 right-[unset] bg-white transition-transform duration-[250ms]"
        style={{
          transform: isSidebarOpen
            ? "translate3d(0,0,0)"
            : "translate3d(-100%,0,0)",
          width: SIDEBAR_WIDTH
        }}
      >
        <div className="w-full px-4 py-3 flex items-center gap-x-1.5">
          <Button variant="secondary" iconOnly onClick={toggleSidebar}>
            <XIcon size={20} />
          </Button>
          <span>MyFursona</span>
        </div>
        <div className="p-2.5 pt-0">
          {SIDEBAR_ITEMS.map((root, index) => {
            return (
              <>
                <MenuContainer key={index} heading={root.heading ?? undefined}>
                  {root.items.map((item) => {
                    return <MenuItem name={item.name} />
                  })}
                </MenuContainer>
                <Separator dir="horizontal" padding="0.525rem" />
              </>
            )
          })}
          <div className="px-4 text-sm">
            Copyright 2023 The MyFursona Project
          </div>
        </div>
      </aside>
    </Overlay>
  )
}
