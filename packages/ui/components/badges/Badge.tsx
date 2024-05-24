import type { PropsWithChildren } from "react"
import { type VariantProps, cva } from "class-variance-authority"
import type { IconType } from "react-icons"

const badgeVariants = cva(["rounded-full"], {
  variants: {
    variant: {
      primary: "bg-300",
      secondary: "border-2 border-300",
      warning: "bg-warning text-100",
      alert: "bg-alert",
      info: "bg-info",
      success: "bg-success text-100"
    },
    size: {
      small: "px-2.5 py-0.5",
      medium: "px-3 py-1",
      big: "px-3.5 py-1.5 text-base"
    }
  },
  compoundVariants: [{ variant: "primary", size: "medium" }],
  defaultVariants: {
    variant: "primary",
    size: "medium"
  }
})

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  icon: IconType
  avatar: string
}

export function Badge(props: Partial<PropsWithChildren<BadgeProps>>) {
  return (
    <span
      data-mav-inline-badge=""
      className={badgeVariants({ variant: props.variant, size: props.size })}
    >
      {props.children}
    </span>
  )
}
