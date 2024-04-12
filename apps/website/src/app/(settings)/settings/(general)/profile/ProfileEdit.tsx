"use client"

import React, { useState } from "react"
import { Separator } from "@/components/ui"
import { Button } from "@/components/ui/Buttons"
import { InputField, SelectField } from "@/components/ui/Forms"
import DropZone from "@/components/ui/Forms/DropZone"
import { pronounOptions } from "@/constants"
import { BACKEND_URL } from "@/utils/env"
import { d } from "@tanstack/react-query-devtools/build/legacy/devtools-9h89nHJX"
import type { UserType } from "@/types/users"

export default function ProfileEdit({ user }: { user: UserType }) {
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl)
  const [name, setName] = useState(user.displayName)
  const [handle, setHandle] = useState(user.handle)
  const [pronouns, setPronouns] = useState(user.pronouns)
  const updateProfile = () => {
    fetch(`${BACKEND_URL}/v1/profile/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({
        avatarLink: avatarUrl,
        displayName: name,
        // handle,
        pronouns
      })
    }).then((res) => {
      // TODO: Toast
      if (res.ok) {
        alert("Profile updated")
      } else {
        alert("Error updating profile")
      }
    })
  }

  return (
    <div>
      <h1 className="my-4 text-2xl">Public Profile</h1>
      <Separator dir="horizontal" />
      <div className="mt-4 flex flex-row items-center justify-between space-x-6">
        <div className="h-48 w-2/3 space-y-5">
          <InputField
            inputName="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputField inputName="Handle" value={`@${handle}`} readOnly />
          <SelectField
            inputName="Pronouns"
            value={pronouns}
            options={pronounOptions}
            onChange={(e) => setPronouns(e.target.value)}
          />
          <Button onClick={updateProfile}>Update profile</Button>
        </div>
        <div className="h-48">
          <DropZone setData={setAvatarUrl} aspectRatio="1" value={avatarUrl} />
        </div>
      </div>
    </div>
  )
}
