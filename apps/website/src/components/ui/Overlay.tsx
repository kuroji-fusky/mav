"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"

const Portal = dynamic(() => import("./Portal"), { ssr: false })

export default function Overlay({
  children,
  state,
  toggler
}: {
  children?: React.ReactNode
  state?: unknown
  toggler?: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const overlayState = state ? "opacity-100" : "opacity-0 pointer-events-none"

  useEffect(() => {
    const bodyStyle = document.body.style

    state ? (bodyStyle.overflowY = "hidden") : (bodyStyle.overflowY = "auto")
  }, [state])

  return (
    <Portal>
      <div
        onClick={toggler as () => any}
        className={`duration-[350ms] fixed z-[19] transition-all bg-black/60 inset-0 ${overlayState}`}
      />
      <div id="overlay-wrapper" className="fixed z-[20]">
        {children}
      </div>
    </Portal>
  )
}
