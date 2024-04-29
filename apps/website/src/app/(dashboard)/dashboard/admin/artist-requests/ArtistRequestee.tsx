"use client"

import Image from "next/image"
import React from "react"
import { Separator } from "@/components/ui"
import { Avatar, Button } from "@/components/ui/Buttons"
import { Checkbox } from "@/components/ui/Forms"

export default function ArtistRequestee({
  id,
  avatarUrl,
  handle,
  date,
  application
}: {
  id: string
  avatarUrl: string
  handle: string
  date: Date
  application: {
    name: string
    email: string
    bio: string
    portfolio: string
    images: string[]
  }
}) {
  const [viewDetails, setViewDetails] = React.useState(false)
  const [checked, setChecked] = React.useState(false)

  return (
    <div>
      <div className="flex flex-row justify-between py-4">
        <div className="flex w-full flex-row justify-between space-x-4">
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            inputName=""
            label=""
          />
          <div className="flex w-full flex-row items-center justify-between space-x-4">
            <div className="flex flex-row items-center space-x-4">
              <Avatar src={avatarUrl} className="h-16 w-16 rounded-full" />
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">{handle}</h2>
                <span>{new Date(date).toDateString()}</span>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <Button onClick={() => setViewDetails(!viewDetails)}>View</Button>
              <Button onClick={() => setViewDetails(!viewDetails)}>Approve</Button>
            </div>
          </div>
        </div>
      </div>
      {viewDetails && (
        <div className="bg-100 mt-4 w-full rounded-lg p-4 shadow-inner">
          <div className="flex flex-col space-y-2">
            <span className="font-semibold">Name: {application.name}</span>
            <span className="font-semibold">Email: {application.email}</span>
            <span className="font-semibold">Bio: {application.bio}</span>
            <span className="font-semibold">
              Portfolio:{" "}
              <a href={application.portfolio} className="text-500 hover:underline">
                Visit
              </a>
            </span>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {application.images.map((image, index) => (
                <Image
                  width={200}
                  height={200}
                  src={image}
                  alt="Application Images"
                  key={index}
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
