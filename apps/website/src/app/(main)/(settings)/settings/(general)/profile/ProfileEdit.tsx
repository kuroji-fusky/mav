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
  const links = user.links || Array(10).fill({ label: "", url: "" })

  const getSocialLink = (label: string) => {
    return links.find((l) => l.label == label)?.url || ""
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
      <div className="mt-4 flex h-48 flex-row items-center justify-between space-x-6">
        <div className=" w-2/3 space-y-5">
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
          <DropZone setData={setAvatarUrl} aspectRatio="1" value={avatarUrl} />
        </div>
      </div>
      <h1 className="mb-4 mt-32 text-2xl">Connections</h1>
      <Separator dir="horizontal" />
      <div className="mt-4 flex flex-row items-center justify-between space-x-6">
        <div className="h-48 w-2/3 space-y-5 pb-5">
          <InputField
            inputName="X/Twitter Handle"
            value={getSocialLink("x")}
            onChange={(e) => (user.links[0].url = `https://x.com/${e.target.value}`)}
          />
          <InputField
            inputName="Instagram Handle"
            value={getSocialLink("instagram")}
            onChange={(e) =>
              (user.links[1].url = "https://instagram.com/" + e.target.value)
            }
          />
          <InputField
            inputName="Twitch Handle"
            value={getSocialLink("twitch")}
            onChange={(e) => (user.links[2].url = "https://twitch.com/" + e.target.value)}
          />
          <InputField
            inputName="Steam ID"
            value={getSocialLink("steam")}
            onChange={(e) =>
              (user.links[2].url = "https://steamcommunity.com/id/" + e.target.value)
            }
          />
          <InputField
            inputName="YouTube Handle"
            value={getSocialLink("youtube")}
            onChange={(e) =>
              (user.links[3].url = "https://youtube.com/" + e.target.value)
            }
          />
          <InputField
            inputName="TikTok Handle"
            value={getSocialLink("tiktok")}
            onChange={(e) => (user.links[4].url = "https://tiktok.com/" + e.target.value)}
          />
          <InputField
            inputName="GitHub Username"
            value={getSocialLink("tiktok")}
            onChange={(e) => (user.links[5].url = "https://github.com/" + e.target.value)}
          />
          <InputField
            inputName="Facebook Handle"
            value={getSocialLink("facebook")}
            onChange={(e) =>
              (user.links[6].url = "https://facebook.com/" + e.target.value)
            }
          />
          <InputField
            inputName="Reddit Handle"
            value={getSocialLink("reddit")}
            onChange={(e) => (user.links[7].url = "https://reddit.com/" + e.target.value)}
          />
          <InputField
            inputName="Snapchat Handle"
            value={getSocialLink("snapchat")}
            onChange={(e) =>
              (user.links[8].url = "https://snapchat.com/" + e.target.value)
            }
          />
          <InputField
            inputName="Discord User ID"
            value={getSocialLink("discord")}
            onChange={(e) =>
              (user.links[9].url = "https://discord.com/" + e.target.value)
            }
          />
          <Button>Update connections</Button>
        </div>
      </div>
    </div>
  )
}
