import type { PropsWithChildren } from "react"
import Navbar from "./Navbar"

export function StudioLayout(props: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <aside className="flex-shrink-0"></aside>
        <main className="flex-1" id="skip-to-content">
          <div>{props.children}</div>
        </main>
      </div>
    </>
  )
}
