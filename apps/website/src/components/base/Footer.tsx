"use client"

import Link from "next/link"
import project from "../../../package.json"
import { MyFursonaIcon } from "../icons"

const version = project.version

export default function Footer() {
  const commitHashEnv = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA || ""
  const commitHash = commitHashEnv.slice(0, 7)

  const footerLinks = [
    { text: "Pricing", link: "/plus" },
    { text: "Brand", link: "/branding" },
    { text: "Status", link: "https://stats.uptimerobot.com/rlVXRfwrKz" },
    { text: "Docs", link: "/docs" },
    { text: "Blog", link: "/blog" },
    { text: "Terms", link: "/legal/tos" },
    { text: "Privacy", link: "/legal/privacy-policy" }
  ]

  const copyrightOwner = "Fusky Labs Software Ltd and MyArtverse contributors"

  return (
    <div className="border-t-400 border-t py-8">
      <footer className="font-inter mx-auto max-w-screen-xl px-8">
        <div className="flex items-center gap-x-3.5 pb-6">
          <Link href="/" className="hover:opacity-60">
            <MyFursonaIcon size={0.8} />
          </Link>
          <div className="flex flex-1 items-center justify-evenly">
            {footerLinks.map((item, index) => (
              <Link key={index} href={item.link as any} className="hover:opacity-60">
                {item.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-subtext flex gap-x-4 pt-4">
          <div className="w-full">{`© ${new Date().getFullYear()} ${copyrightOwner}`}</div>
          {!commitHashEnv ? (
            <span>Development</span>
          ) : (
            <Link
              className="text-subtext underline hover:text-blue-400"
              href={`https://github.com/MyArtverse-Project/MyArtverse/commit/${commitHash}`}
            >
              {commitHash}
            </Link>
          )}
          <span className="whitespace-nowrap">{version}</span>
        </div>
      </footer>
    </div>
  )
}
