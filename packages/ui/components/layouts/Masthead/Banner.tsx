import type { PropsWithChildren } from "react"

export function MastheadBanner(props: PropsWithChildren) {
  return (
    <div data-masthead-banner="" className="relative aspect-[15/3] w-full">
      {props.children}
    </div>
  )
}
