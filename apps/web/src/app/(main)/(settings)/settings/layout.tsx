import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import { SidebarSettingsList } from "@/components/layouts/AppLayout/Sidebar/SidebarSettingsList"
import { BRAND } from "@mav/shared"

export const metadata: Metadata = {
  title: {
    template: `%s - Settings - ${BRAND}`,
    default: ""
  }
}

export default function SettingsLayout(props: Readonly<PropsWithChildren>) {
  return (
    <div className="mx-auto mb-20 max-w-[1400px] px-4">
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
      <div className="flex gap-x-6">
        {/* Setting items */}
        <SidebarSettingsList />
        <div className="flex-1 px-0.5 pt-1">{props.children}</div>
      </div>
    </div>
  )
}
