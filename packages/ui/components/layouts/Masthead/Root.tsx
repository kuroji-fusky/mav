"use client"

import type { PropsWithChildren } from "react"

interface MastheadRootProps {
  hasEditAccess?: boolean
}

/**
 * @internal Used for the main `<Masthead>` namespaced component
 */
export function MastheadRoot(props: PropsWithChildren<MastheadRootProps>) {
  return <div masthead-root="">{props.children}</div>
}
