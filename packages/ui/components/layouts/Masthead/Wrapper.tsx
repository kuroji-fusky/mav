import type { PropsWithChildren } from "react"

export function MastheadWrapper(props: PropsWithChildren) {
  return (
    <div data-masthead-wrapper="" className="mx-auto flex max-w-screen-2xl gap-x-4 px-9">
      {props.children}
    </div>
  )
}
