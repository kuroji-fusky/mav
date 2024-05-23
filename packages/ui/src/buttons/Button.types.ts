import type { ReactElement } from "react"
import type { ReactHTMLElement, Variants } from "@myartverse/shared/types"
import type { UrlObject } from "url"

type ButtonVariants = Exclude<Variants, "success" | "info"> | "error-secondary"
type Positions = "left" | "center" | "right"
type Sizes = "small" | "big"

export interface ButtonProps {
  children: React.ReactNode
  icon: NonNullable<ReactElement>
  disabled: boolean
  type: ReactHTMLElement<"button">["type"]
  variant: ButtonVariants
  position: Positions
  size: Sizes
  prefix: NonNullable<ReactElement>
  suffix: ReactElement
  href: string | UrlObject
  count: number
  className: string
}
