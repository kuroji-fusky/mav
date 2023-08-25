import Link from "next/link"
import type { LucideIcon } from "lucide-react"

export default function Tabs({
  tabs
}: {
  tabs: Array<{
    text: string
    link?: string
    icon?: LucideIcon
    countIndicator?: number
  }>
}) {
  return (
    <div data-bui-tab-list="" className="flex items-center gap-x-0.5">
      {tabs.map(({ text, link, icon, countIndicator }, i) => {
        const Icon = icon

        return (
          <Link
            data-bui-tab=""
            href={link as any}
            key={i}
            tabIndex={0}
            className="flex items-center px-4 py-2 transition-colors rounded-md gap-x-2 hover:bg-300 focus:bg-300 group hover:bg-opacity-60 focus:bg-opacity-60"
            aria-label={
              !countIndicator ? text : `${text}, ${countIndicator} items`
            }
          >
            {icon && <Icon size={20} aria-hidden />}
            <span>{text}</span>
            {countIndicator && (
              <span
                aria-hidden
                className="text-xs px-2 py-0.5 group-hover:bg-opacity-100 bg-300 rounded-2xl"
              >
                {countIndicator}
              </span>
            )}
          </Link>
        )
      })}
    </div>
  )
}
