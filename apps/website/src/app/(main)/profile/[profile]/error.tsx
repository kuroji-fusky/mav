"use client"

// Error components must be Client Components
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { MarginClamp } from "@/components/ui"
import { Button } from "@/components/ui/Buttons"

export default function Error({
  error
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  return (
    <MarginClamp>
      <div className="my-20 flex flex-col items-center justify-center space-y-4 text-center">
        {error.message && (
          <p className="text-3xl">
            {error.message.includes("404")
              ? "Profile/Character not found"
              : "Something went wrong"}
          </p>
        )}
        <Button onClick={() => router.push("/")}>Go Back Home</Button>
      </div>
    </MarginClamp>
  )
}
