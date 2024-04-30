import React from "react"
import Notifications from "@/components/base/Notifications"
import { Separator } from "@/components/ui"
import { Button } from "@/components/ui/Buttons"
import { SelectField } from "@/components/ui/Forms"

export default function Activity() {
  const options = [
    { value: "open", label: "Open" },
    { value: "closed", label: "Closed" },
    { value: "limited", label: "Limited" }
  ]

  return (
    <div className="bg-300 m-5 flex flex-col items-end p-5">
      <h1 className="text-800 mb-4 self-start text-xl font-bold">Latest activity</h1>
      <div className="mb-4 flex flex-col space-y-4">
        {/* TODO: Create Activity Component */}
      </div>
      <Button variant="secondary">View Comissions</Button>
    </div>
  )
}
