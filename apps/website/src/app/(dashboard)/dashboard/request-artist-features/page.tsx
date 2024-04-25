"use client"

import React, { useState } from "react"
import { Field } from "@/components/ui"
import { InputField } from "@/components/ui/Forms"
import DropZone from "@/components/ui/Forms/DropZone"

export default function ArtistApp() {
  const [imageOne, setImageOne] = useState(null)
  const [imageTwo, setImageTwo] = useState(null)
  const [imageThree, setImageThree] = useState(null)
  return (
    <div>
      <span className="text-md">
        To maintain the authenticity and quality of our platform, we're inviting genuine
        artists to upgrade to an Artist Account. This specialized access is designed to
        safeguard our community against bots, fraudulent activities, and AI-generated
        artworks, ensuring that your genuine talent gets the visibility and environment it
        deserves. Apply now to unlock exclusive features and join our commitment to real,
        human artistry.
      </span>
      <div className="my-4 space-y-4">
        <InputField inputName="Name (Known Online Name)" />
        <InputField inputName="Email" />
        <InputField inputName="Tell us about yourself" />
        <InputField inputName="Social Media Link #1" />
        <InputField inputName="Social Media Link #2" />
        <InputField inputName="Social Media Link #3" />
        <div className="flex flex-row justify-between">
          <div>
            <DropZone setData={setImageOne} />
          </div>
          <DropZone setData={setImageTwo} />
          <DropZone setData={setImageThree} />
        </div>
      </div>
    </div>
  )
}
