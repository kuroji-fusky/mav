import type { ChildrenNode } from "@/types"
import "./globals.scss"
import setPageMeta from "@/utils/setPageMeta"

import { Inter, Open_Sans } from "next/font/google"
import { Footer, Navbar, Sidebar } from "@/components/Base"
import { NavbarProvider } from "@/contexts"

const inter = Inter({
  subsets: ["latin", "cyrillic-ext"],
  preload: true,
  variable: "--font-inter"
})

const open_sans = Open_Sans({
  subsets: ["latin", "cyrillic-ext"],
  preload: true,
  variable: "--font-open-sans"
})

export const metadata = setPageMeta({
  title: "Home - MyFursona",
  description:
    "MyFursona is a place to keep track of your fursonas, adopts, and commissions!"
})

export default function RootLayout({ children }: ChildrenNode) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} ${open_sans.variable}`}
    >
      <body className="font-open-sans">
        <div id="__next">
          <NavbarProvider>
            <Navbar />
            <Sidebar />
          </NavbarProvider>
          <main id="skip-navigation">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
