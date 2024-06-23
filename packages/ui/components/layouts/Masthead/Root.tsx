"use client"

import { Children, type PropsWithChildren, isValidElement } from "react"
import { MastheadBanner } from "./Banner"
import { MastheadTabs } from "./Tabs"
import { MastheadWrapper } from "./Wrapper"

interface MastheadRootProps {
  hasEditAccess?: boolean
}

/**
 * @internal Used for the main `<Masthead>` namespaced component
 */
export function MastheadRoot(props: PropsWithChildren<MastheadRootProps>) {
  const validMastheadChildrens = Children.map(props.children, (child) => {
    const allowedChildTypes =
      isValidElement(child) &&
      (child.type === MastheadBanner ||
        child.type === MastheadTabs ||
        child.type === MastheadWrapper)

    if (!allowedChildTypes) {
      throw new Error(
        "Detected an invalid child element. Required child elements for `<Masthead>` are `<Masthead.Banner>` (optional), `<Masthead.Wrapper>`, and `<Masthead.Tabs>`."
      )
    }

    return child
  })

  return (
    <div data-mh-root="" className="contents">
      {validMastheadChildrens}
    </div>
  )
}
