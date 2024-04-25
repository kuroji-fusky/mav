import { Container } from "@/components/dashboard"

export default function GalleryLayout({ children }: { children?: React.ReactNode }) {
  return (
    <Container headingTransparent heading="Request Artist Access">
      {children}
    </Container>
  )
}
