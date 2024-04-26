import Link from "next/link"
import React from "react"
import { RichTextField } from "@/components/ui/Forms"

export default function CustomizeHTML() {
  return (
    <div className="h-64">
      <h1 className="mb-4 text-2xl">Custom HTML</h1>
      <span>
        Add custom HTML to your profile to display custom content. Create with{" "}
        <Link className="text-500" href="https://play.tailwindcss.com/">
          Tailwind Playground
        </Link>{" "}
        and paste the HTML here.
      </span>
      <RichTextField inputName="" code={true} />
    </div>
  )
}
