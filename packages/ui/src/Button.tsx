"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link"
import { forwardRef } from "react"
import type { ReactHTMLElement, Variants } from "@myartverse/shared/types"
import { cn } from "@myartverse/shared/utils"
import { cva } from "class-variance-authority"
import type { UrlObject } from "url"

type Positions = "left" | "center" | "right"
type Sizes = "small" | "big"

type ButtonVariants = Exclude<Variants, "success" | "info"> | "error-secondary"

interface ButtonProps {
  children: React.ReactNode
  icon: NonNullable<React.ReactElement>
  disabled: boolean
  type: ReactHTMLElement<"button">["type"]
  variant: ButtonVariants
  position: Positions
  size: Sizes
  prefix: NonNullable<React.ReactElement>
  suffix: React.ReactElement
  href: string | UrlObject
  count: number
  className: string
}

const Button = forwardRef(
  (props: Partial<ButtonProps & Omit<ReactHTMLElement<"button">, "prefix">>, ref) => {
    const buttonVars = cva(
      ["flex items-center gap-x-1.5 rounded-md transition-[border,background-color]"],
      {
        variants: {
          intent: {
            primary: "border-transparent bg-300 hover:bg-400",
            secondary: "!border-[2px] bg-100 border-300 hover:bg-400 hover:border-400",
            tritery: "border-transparent bg-transparent hover:bg-400",
            warning: "bg-transparent",
            error: "bg-error text-active hover:bg-opacity-70 border-transparent",
            "error-secondary": "border-error hover:border-opacity-50"
          },
          size: {
            small: !props.icon ? "px-2.5 py-1.5" : "p-2",
            medium: !props.icon ? "px-3.5 py-2" : "p-2",
            big: !props.icon ? "px-5 py-2.5" : "p-3"
          },
          positions: {
            left: "text-left justify-start",
            center: "text-center justify-center",
            right: "text-right justify-end"
          }
        },
        compoundVariants: [{ intent: "primary", size: "medium" }],
        defaultVariants: {
          intent: "primary",
          size: "medium"
        }
      }
    )

    const DynamicElement: any = !props.href ? "button" : Link

    return (
      <DynamicElement
        ref={ref as any}
        href={props.href ?? undefined}
        type={!props.href ? props.type ?? "button" : undefined}
        aria-disabled={props.disabled ?? undefined}
        className={cn(
          buttonVars({
            positions: props.position,
            intent: props.variant,
            size: props.size
          }),
          props.className
        )}
        {...props}
      >
        {props.prefix}
        {props.icon}
        {props.children ? props.children : null}
        {props.suffix}
      </DynamicElement>
    )
  }
)

Button.displayName = "Button"

export { Button }
