"use client"

import { useState } from "react"
import { Separator } from "@/components/ui"
import { Button } from "@/components/ui/Buttons"
import { InputField, SelectField } from "@/components/ui/Forms"
import DropZone from "@/components/ui/Forms/DropZone"
import { pronounOptions } from "@/constants"
import { BACKEND_URL } from "@/utils/env"
import type { UserType } from "@/types/users"
import CustomizeHTML from "./(sections)/CustomizeHTML"
import CustomizeLinks from "./(sections)/CustomizeLinks"

export default function ProfileEdit({ user }: { user: UserType }) {
  const [avatarUrl, setAvatarUrl] = useState(user.avatarUrl)
  const [name, setName] = useState(user.displayName)
  const [handle, setHandle] = useState(user.handle)
  const [tempSocialError, setTempSocialError] = useState("")
  const [tempSocialLinks, setTempSocialLinks] = useState("")
  const [pronouns, setPronouns] = useState(user.pronouns)
  const [socialLinks, setSocialLinks] = useState(user.links || [])

  const addSocialLink = (url) => {
    const urlRegex = new RegExp(
      /(http(s)?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z0-9-]+)(\/[a-zA-Z0-9-]+)?/g
    )

    if (!urlRegex.test(url)) {
      setTempSocialError("Invalid URL")
      return
    }

    setTempSocialError("")
    const label = url.split(".")[0]
    setSocialLinks([...socialLinks, { url, label }])
    setTempSocialLinks("")
  }

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

  // TODO: API Update Connections

  return (
    <div className="flex flex-col">
      <h1 className="my-4 text-2xl">Public Profile</h1>
      <Separator dir="horizontal" />
      <div className="mt-4 flex flex-row items-end justify-between">
        <div className=" flex w-2/3 flex-col items-end space-y-5">
          <InputField
            inputName="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <SelectField
            inputName="Pronouns"
            value={pronouns}
            options={pronounOptions}
            onChange={(e) => setPronouns(e.target.value)}
          />
          <Button onClick={updateProfile}>Update profile</Button>
        </div>
        <div className="h-48">
          <DropZone
            setData={setAvatarUrl}
            aspectRatio="1"
            value={avatarUrl}
            className="mx-auto h-fit w-3/4"
          />
        </div>
      </div>
      <h1 className="mb-4 mt-3 text-2xl">Profile Layout</h1>
      <div className="mb-8 flex flex-row items-center justify-between space-x-6">
        {/* Show/Hide Cards Toggle */}
        <span>Coming Soon</span>
      </div>
      <CustomizeLinks
        tempSocialLinks={tempSocialLinks}
        socialLinks={socialLinks}
        addSocialLink={addSocialLink}
        getSocialLink={(index) => socialLinks[index].url}
        tempSocialError={tempSocialError}
        setTempSocialLinks={setTempSocialLinks}
      />
      <CustomizeHTML />
    </div>
  )
}
