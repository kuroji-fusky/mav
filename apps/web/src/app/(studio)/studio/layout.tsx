import type { PropsWithChildren } from "react"
import { StudioLayout } from "@/components/layouts/StudioLayout/StudioLayout"

export default function StudioRLayout({ children }: PropsWithChildren) {
  return <StudioLayout>{children}</StudioLayout>
}
