import React from "react"
import { Separator } from "@/components/ui"
import { Button } from "@/components/ui/Buttons"
import { SelectField } from "@/components/ui/Forms"

export default function Statuses({
  commissionStatus,
  artTradeStatus,
  requestStatus
}: {
  commissionStatus: "open" | "closed" | "limited"
  artTradeStatus: "open" | "closed" | "limited"
  requestStatus: "open" | "closed" | "limited"
}) {
  const options = [
    { value: "open", label: "Open" },
    { value: "closed", label: "Closed" },
    { value: "limited", label: "Limited" }
  ]

  return (
    <div className="bg-300 m-5 flex flex-col items-end p-5">
      <h1 className="text-800 mb-4 self-start text-xl font-bold">Commission Status</h1>
      <div className="mb-4 flex flex-col space-y-4">
        <div className="flex flex-row items-center justify-between">
          <span className="text-lg">Commission</span>
          <SelectField
            inputName="Status Type"
            options={options}
            value={commissionStatus}
            noLabel
            className="w-fit"
          />
        </div>
        <div className="flex flex-row items-center justify-between">
          <span className="text-lg">Art Trades</span>
          <SelectField
            inputName="Status Type"
            options={options}
            value={artTradeStatus}
            noLabel
            className="w-fit"
          />
        </div>
        <div className="flex flex-row items-center justify-between">
          <span className="text-lg">Requests</span>
          <SelectField
            inputName="Status Type"
            options={options}
            value={requestStatus}
            noLabel
            className="w-fit"
          />
        </div>
        <Separator dir="horizontal" />
        <span className="">
          You can only change your commission status once every 24 hours. Your followers
          will be notified when you change your commission status.
        </span>
      </div>
      <Button variant="secondary">Save</Button>
    </div>
  )
}
