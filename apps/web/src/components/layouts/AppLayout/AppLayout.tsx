import type { PropsWithChildren } from "react"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export default function AppLayout(props: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100dvh-3.75rem)]">{props.children}</div>
      <Footer />
    </>
  )
}
