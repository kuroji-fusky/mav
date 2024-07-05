"use client"

import type { FC, PropsWithChildren } from "react"
import { Internal_GenericWrapper } from "../../_GenericWrapper"
import { useValidateChildrenComponents } from "../useValidateChildrenComponents"
import { MastheadBanner } from "./Banner"
import { MastheadTabs } from "./Tabs"
import { MastheadWrapper } from "./Wrapper"

interface MastheadRootProps {
  hasEditAccess?: boolean
}

type MakePropsOptional<P> = FC<Partial<P>>

/**
 * @internal Used for the main `<Masthead>` namespaced component
 */
export function MastheadRoot(props: PropsWithChildren<MastheadRootProps>) {
  const validMastheadChildrens = useValidateChildrenComponents(props.children, [
    MastheadBanner,
    MastheadTabs as MakePropsOptional<typeof MastheadTabs>,
    MastheadWrapper
  ])

  return (
    <div data-mh-root="" className="contents">
      {validMastheadChildrens}
    </div>
  )
}
