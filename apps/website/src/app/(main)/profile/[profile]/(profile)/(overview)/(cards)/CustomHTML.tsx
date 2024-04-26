import React from "react"
import * as DOMPurify from "isomorphic-dompurify"
import type { UserType } from "@/types/users"

export default function CustomHTML({ html }: { html: string }) {
  const sanitizeHtml = DOMPurify.sanitize(html)

  return <div dangerouslySetInnerHTML={{ __html: sanitizeHtml }} />
}
