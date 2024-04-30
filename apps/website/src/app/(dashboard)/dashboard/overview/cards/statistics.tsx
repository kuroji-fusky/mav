import React from "react"
import { Separator } from "@/components/ui"
import { Avatar, Button } from "@/components/ui/Buttons"
import { SelectField } from "@/components/ui/Forms"

export default function Statistics({
  profileViews,
  characterViews,
  commissionRevenue
}: {
  profileViews: number
  characterViews: number
  commissionRevenue: number
}) {
  const options = [
    { value: "open", label: "Open" },
    { value: "closed", label: "Closed" },
    { value: "limited", label: "Limited" }
  ]

  return (
    <div className=" bg-300 flex h-fit w-full flex-col p-5">
      <h1 className="text-800 self-start text-xl font-bold">Analytics</h1>
      <span className="mb-4">Last 30 days</span>
      <div className="mb-4 flex flex-col space-y-4">
        <div className="flex flex-row justify-between">
          <span className="text-800">Profile views</span>
          <span className="text-800">{profileViews}</span>
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-800">Character views</span>
          <span className="text-800">{characterViews}</span>
        </div>
        <div className="mb-3 flex flex-row justify-between">
          <span className="text-800">Commission Revenue</span>
          <span className="text-800">${commissionRevenue}</span>
        </div>
      </div>
      <Separator dir="horizontal" />
      <span className="text-700 mt-3 font-bold">Top Character views</span>
      <span className="mb-4">Last 30 days</span>
      <div className="mb-2 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <Avatar src="/UserProfile.png" className="mr-2 rounded-full" />
          <span className="text-800">Character Name</span>
        </div>
        <span>1.34k</span>
      </div>
      <Button variant="secondary">View full analytics</Button>
    </div>
  )
}
