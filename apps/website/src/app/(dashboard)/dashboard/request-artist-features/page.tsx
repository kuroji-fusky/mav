"use client"

import React, { useState } from "react"
import { Field } from "@/components/ui"
import { Button } from "@/components/ui/Buttons"
import { InputField } from "@/components/ui/Forms"
import DropZone from "@/components/ui/Forms/DropZone"
import { BACKEND_URL } from "@/utils/env"

const submit = async (name, email, bio, portfolio, imageOne, imageTwo, imageThree) => {
  fetch(`${BACKEND_URL}/v1/profile/apply/artist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify({
      name,
      email,
      bio,
      portfolio,
      imageURLs: [imageOne, imageTwo, imageThree]
    })
  })
}

export default function ArtistApp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [bio, setBio] = useState("")
  const [portfolio, setPortfolio] = useState("")
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
        <InputField inputName="Name" onChange={(e) => setName(e.target.value)} />
        <InputField inputName="Email" onChange={(e) => setEmail(e.target.value)} />
        <InputField
          inputName="Tell us about yourself"
          onChange={(e) => setBio(e.target.value)}
        />
        <InputField
          inputName="Portfolio/Personal Website Link"
          onChange={(e) => setPortfolio(e.target.value)}
        />
        <span className="text-600 flex gap-x-0.5 font-bold uppercase">
          Upload 3 artworks with Layers
        </span>
        <div className="grid grid-cols-3 gap-4">
          <DropZone value={imageOne} setData={setImageOne} />
          <DropZone value={imageTwo} setData={setImageTwo} />
          <DropZone value={imageThree} setData={setImageThree} />
        </div>
      </div>
      <div className="flex flex-col items-end space-y-3">
        <Button
          onClick={() =>
            submit(name, email, bio, portfolio, imageOne, imageTwo, imageThree)
          }
        >
          Submit
        </Button>
        <span>Any fraudulent activities will result in a permanent ban.</span>
      </div>
    </div>
  )
}
