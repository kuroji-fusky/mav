"use client"

import { Button } from "@/components/ui/Buttons"
import { Dropdown, DropdownItem } from "@/components/ui/Dropdown"
import { Masthead } from "@/components/ui/Masthead"
import { BACKEND_URL } from "@/utils/env"
import type { IconType } from "react-icons"
import {
  LuBrush as BrushIcon,
  LuCat as CatIcon,
  LuHeart as HeartIcon,
  LuHome as HomeIcon,
  LuShieldCheck,
  LuMoreVertical as MoreVerticalIcon,
  LuUserPlus as UserPlusIcon
} from "react-icons/lu"
import type { UserRoles, UserType } from "@/types/users"

const followUser = (userId: string) => {
  fetch(`${BACKEND_URL}/v1/relationship/follow/${userId}`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => {
    if (res.ok) {
      console.log("Followed user")
    }
  })
}

// TODO: Remove all props to be retrieved directly from Jotai or react-query
export default function ProfileMasthead({
  profileData,
  self
}: {
  username?: string
  profileData: UserType
  badges?: UserRoles
  /** Only for logged in users that should be set to `true` */
  self?: UserType
  /** If the user has explicitly set profile to "NSFW" */
  isNsfw?: boolean
  followsYou?: boolean
  followerCount?: number
  followingCount?: number
  socials?: {
    link: string
    icon: IconType
  }[]
}) {
  const name = profileData.displayName ? profileData.displayName : profileData.handle

  const profileTabs = [
    {
      icon: HomeIcon,
      text: "Overview",
      link: ""
    },
    {
      icon: CatIcon,
      text: "Characters",
      link: "/characters",
      countIndicator: profileData.characters ? profileData.characters.length : 0
    },
    {
      icon: HeartIcon,
      text: "Favorites",
      link: "/favorites",
      countIndicator: profileData.favoriteCharacters
        ? profileData.favoriteCharacters.length
        : 0
    }
  ]

  return (
    <Masthead hasEditAccess={true}>
      <Masthead.Banner src={profileData.bannerUrl || null} />
      <Masthead.Wrapper>
        <Masthead.Avatar profileOnly src={profileData.avatarUrl || null} />
        <Masthead.Details>
          <Masthead.Layer spaceBetween>
            <div
              className="not-prose font-inter items-left mt-4 flex flex-col gap-x-1.5 text-3xl font-bold"
              translate="no"
            >
              <div className="flex flex-row">
                <span>{name}</span>
                {profileData.role == "admin" ||
                  (profileData.role == "moderator" && (
                    <div
                      aria-hidden
                      className={
                        "border-500 text-500 ml-3 flex flex-row items-center space-x-1 rounded-full border-2 px-5 py-0.5 text-sm"
                      }
                    >
                      <LuShieldCheck size={20} />
                      <span className="text-[14px] font-bold">STAFF</span>
                    </div>
                  ))}
              </div>
              <div className="text-700 mt-1.5 flex flex-row space-x-4 font-medium">
                <span className="text-sm">@{profileData.handle}</span>
                <span className="text-sm">{profileData.followers.length} Followers</span>
                <span className="text-sm">{profileData.following.length} Following</span>
              </div>
            </div>
            {/* {self.id == profileData.id && ( */}
            <div className="relative z-[6] mt-4 flex items-start gap-x-2.5">
              <Button
                prefixIcon={<BrushIcon size={20} />}
                aria-label={`View ${name}'s Commissions`}
                variant="secondary"
              >
                View Commission ToS
              </Button>

              <Button
                prefixIcon={<UserPlusIcon size={20} />}
                aria-label={`Follow ${name}`}
                onClick={() => followUser(profileData.id)}
              >
                Follow
              </Button>
              <Dropdown
                button={
                  <Button icon={<MoreVerticalIcon size={20} />} aria-label="More" />
                }
                items={
                  <>
                    <DropdownItem link="/">Share</DropdownItem>
                    <DropdownItem link="/">Manage trades</DropdownItem>
                    <DropdownItem link="/">
                      Report <span translate="no">{name}</span>
                    </DropdownItem>
                    <DropdownItem link="/">
                      Block <span translate="no">{name}</span>
                    </DropdownItem>
                  </>
                }
              />
            </div>
          </Masthead.Layer>
        </Masthead.Details>
      </Masthead.Wrapper>
      <Masthead.Tabs baseURL={`/@${profileData.handle}`} items={profileTabs} />
    </Masthead>
  )
}
