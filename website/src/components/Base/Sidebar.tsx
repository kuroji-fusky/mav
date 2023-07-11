"use client"

import React, { useCallback, useContext, useEffect } from "react"
import Link from "next/link"

import { Button, Menu, MenuItem, Overlay, Separator } from "../ui"
import { NavbarContext } from "@/contexts"
import {
  HomeIcon,
  SparklesIcon,
  XIcon,
  BrushIcon,
  SettingsIcon,
  HelpCircleIcon,
  MessageSquarePlusIcon,
  AlertTriangleIcon,
  BoxIcon
} from "lucide-react"
import Logo from "../Logo"

export default function Sidebar() {
  const SIDEBAR_WIDTH = 320
  const SIDEBAR_ITEMS = [
    {
      heading: "",
      items: [{ name: "Home", icon: HomeIcon }]
    },
    {
      heading: "Explore",
      items: [
        { name: "Available Adoptables", icon: SparklesIcon },
        { name: "Open for Commissions", icon: BrushIcon },
        { name: "3D Models", icon: BoxIcon }
      ]
    },
    {
      heading: "",
      items: [
        { name: "Settings", icon: SettingsIcon },
        { name: "Help", icon: HelpCircleIcon },
        { name: "Send feedback", icon: MessageSquarePlusIcon },
        { name: "Report Issue", icon: AlertTriangleIcon }
      ]
    }
  ]

  const { isSidebarOpen, setSidebarState } = useContext(NavbarContext)

  const toggleSidebar = useCallback(() => {
    setSidebarState(!isSidebarOpen)
  }, [setSidebarState, isSidebarOpen])

  useEffect(() => {
    const handleKeyDown = ({ key }: globalThis.KeyboardEvent) => {
      if (isSidebarOpen && key === "Escape") {
        toggleSidebar()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [toggleSidebar, isSidebarOpen])

  return (
    <Overlay state={isSidebarOpen} toggler={toggleSidebar}>
      <aside
        className="flex flex-col fixed inset-0 right-[unset] bg-white transition-transform duration-[250ms]"
        style={{
          transform: isSidebarOpen
            ? "translate3d(0,0,0)"
            : "translate3d(-100%,0,0)",
          width: SIDEBAR_WIDTH
        }}
      >
        <div className="w-full px-5 py-4 flex items-center gap-x-2.5">
          <Button variant="secondary" iconOnly onClick={toggleSidebar}>
            <XIcon size={20} />
          </Button>
          <Link href="/" aria-label="Home" title="Home">
            <Logo />
          </Link>
        </div>
        <div className="px-2.5" role="menu">
          {SIDEBAR_ITEMS.map(({ heading, items }, index) => {
            return (
              <React.Fragment key={index}>
                <Menu heading={heading ?? undefined}>
                  {items.map((item, index) => {
                    return (
                      <MenuItem
                        key={index}
                        name={item.name}
                        prefix={<item.icon size={20} />}
                        href="/"
                      />
                    )
                  })}
                </Menu>
                <Separator dir="horizontal" padding="0.525rem" />
              </React.Fragment>
            )
          })}
        </div>
      </aside>
    </Overlay>
  )
}
