"use client"

import { usePathname } from "next/navigation"
import { cn, generateRandomString } from "@mav/shared/utils"
import { Button } from "@mav/ui/components/buttons"
import { kebabCase } from "lodash"
import settingRoutes from "./SidebarSettingsList.constants"

const rnd = generateRandomString()
const ariaHeading = `heading-title-${rnd}`

export function SidebarSettingsList() {
  const currentPath = usePathname()

  return (
    <nav
      aria-label="User settings"
      className="min-h-[calc(100dvh-4.5rem)] w-64 flex-shrink-0"
    >
      <ul className="flex flex-col gap-y-2">
        {settingRoutes.map((section, i) => (
          <li key={section.heading}>
            <h2
              id={ariaHeading}
              className={cn(
                "relative mx-3.5 text-base",
                i > 0
                  ? "before:border-separator relative mb-2 mt-4 before:absolute before:-inset-x-2 before:-translate-y-2.5 before:border-t-[1px]"
                  : "my-2"
              )}
            >
              {section.heading}
            </h2>
            <ul className="flex flex-col gap-y-0.5" aria-labelledby={ariaHeading}>
              {section.items.map((item, i) => {
                const itemPath = `/settings/${item.slug || kebabCase(item.label)}`
                const isCurrentPath = currentPath === itemPath

                return (
                  <li key={i}>
                    <Button
                      href={itemPath}
                      variant="tritery"
                      aria-current={isCurrentPath ? "page" : undefined}
                      className={cn("gap-x-2.5 border-none", isCurrentPath && "!bg-500")}
                      prefix={<item.icon size={20} />}
                    >
                      {item.label}
                    </Button>
                  </li>
                )
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
