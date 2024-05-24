"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link"
import { forwardRef } from "react"
import type { ReactHTMLElement } from "@myartverse/shared/types"
import { cn } from "@myartverse/shared/utils"
import { cva } from "class-variance-authority"
import type { ButtonProps } from "./Button.types"

const Button = forwardRef<
  HTMLButtonElement,
  Partial<ButtonProps & Omit<ReactHTMLElement<"button">, "prefix">>
>((props, ref) => {
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
      href={props.href ?? null}
      type={!props.href ? props.type ?? "button" : null}
      aria-disabled={props.disabled ?? null}
      className={cn(
        buttonVars({
          positions: props.position,
          intent: props.variant,
          size: props.size
        }),
        props.className
      )}
      {...props}
      // This is to prevent conflicts from custom "prefix" and "suffix" props
      prefix={null}
      suffix={null}
    >
      {props.prefix}
      <div className="contents">
        {props.icon}
        {props.children}
      </div>
      {props.suffix}
    </DynamicElement>
  )
})

Button.displayName = "Button"

export { Button }
