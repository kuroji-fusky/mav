"use client"

import type { PropsWithChildren } from "react"
import { cn } from "@mav/shared/utils"

type PickedDivProps = Pick<HTMLDivElement, "className">

interface MastheadLayerProps extends PickedDivProps {
  spaceBetween: boolean
}

/**
 * @internal For internal use only on field-related components, do not import directly!
 */
export function MastheadLayer(props: Partial<PropsWithChildren<MastheadLayerProps>>) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center",
        props.spaceBetween && "justify-between"
      )}
    >
      {props.children}
    </div>
  )
}
