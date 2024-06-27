import Link from "next/link"
import type { PropsWithChildren } from "react"
import { generateRandomString } from "@mav/shared/utils"
import { Button } from "@mav/ui/components/buttons"
import { kebabCase } from "lodash"
import settingRoutes from "./setting-routes"

export default function SettingsLayout(props: Readonly<PropsWithChildren>) {
  return (
    <div className="mx-auto max-w-screen-2xl px-4">
      {/* User info */}
      <div className="bg-200 my-3 flex items-center gap-x-3 rounded-md px-3.5 py-3">
        <div className="bg-300 size-11 rounded-full" />
        <div className="flex flex-col">
          <div className="text-lg font-bold">Logged in as USER</div>
          <div className="inline-flex gap-x-1 text-xs">
            <span className="text-subtext">{"Not you? "}</span>
            <span className="text-hyperlink hover:underline">Switch accounts</span>
          </div>
        </div>
      </div>
      <div className="flex gap-x-3">
        {/* Setting items */}
        <nav
          aria-label="User settings"
          className="min-h-[calc(100dvh-4.5rem)] w-64 flex-shrink-0"
        >
          <ul className="flex flex-col gap-y-2">
            {settingRoutes.map((section) => {
              const rnd = generateRandomString()
              const ariaHeading = `heading-title-${rnd}`

              return (
                <li key={section.heading}>
                  <h2 id={ariaHeading} className="mx-3.5 mb-1.5 text-base">
                    {section.heading}
                  </h2>
                  <ul className="flex flex-col gap-y-0.5" aria-labelledby={ariaHeading}>
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <Button
                          href={`/settings/${item.slug || kebabCase(item.label)}`}
                          variant="tritery"
                          className="gap-x-2.5 border-none"
                          prefix={<item.icon size={20} />}
                        >
                          {item.label}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="flex-1">{props.children}</div>
      </div>
    </div>
  )
}
