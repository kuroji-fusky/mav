import React from "react"
import { Discord } from "@/components/icons"
import { Button } from "@/components/ui/Buttons"
import { InputField } from "@/components/ui/Forms"
import {
  LuFacebook,
  LuGithub,
  LuInstagram,
  LuLink,
  LuTwitch,
  LuTwitter,
  LuX,
  LuYoutube
} from "react-icons/lu"

export default function CustomizeLinks({
  socialLinks,
  getSocialLink,
  tempSocialLinks,
  setTempSocialLinks,
  tempSocialError,
  addSocialLink
}: {
  socialLinks: { url: string; label: string }[]
  getSocialLink: (index: number) => string
  tempSocialLinks: string
  setTempSocialLinks: (value: string) => void
  tempSocialError: string
  addSocialLink: (url: string) => void
}) {
  return (
    <>
      <h1 className="mb-4 text-2xl">Connections</h1>

      <div className="mt-4 flex flex-row items-center justify-between space-x-6">
        <div className="w-2/3 space-y-5 pb-5">
          {socialLinks.map((link, index) => (
            // Attempt to display Icon of Social based on label
            <div key={index} className="flex flex-row items-center justify-around">
              <span className="mr-6 w-fit">
                {icons[link.label] ? icons[link.label] : <LuLink />}
              </span>
              <InputField
                inputName={link.label}
                value={getSocialLink(index)}
                className="w-2/3"
                noLabel
              />
            </div>
          ))}
          <div className="flex flex-col items-end space-y-4">
            <InputField
              placeholder="New Social Media Link"
              error={tempSocialError}
              onChange={(e) => setTempSocialLinks(e.currentTarget.value)}
            />
            <Button onClick={() => addSocialLink(tempSocialLinks)}>Add</Button>
          </div>
        </div>
      </div>
    </>
  )
}

const icons = {
  twitter: <LuTwitter size={25} />,
  x: <LuX size={25} />,
  twitch: <LuTwitch size={25} />,
  instagram: <LuInstagram size={25} />,
  facebook: <LuFacebook size={25} />,
  youtube: <LuYoutube size={25} />,
  discord: <Discord size={25} />,
  github: <LuGithub size={25} />,
  default: <LuLink size={25} />
}
