import type { PropsWithChildren } from "react"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export default function AppLayout(props: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100dvh-3.75rem)]" id="skip-to-content">
        {props.children}
      </main>
      <Footer />
    </>
  )
}
