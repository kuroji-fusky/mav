"use client"

import { Masthead, type MastheadTabItems } from "@mav/ui/components/layouts"
import { LuCat, LuHeart, LuHome } from "react-icons/lu"

export function ProfileMasthead() {
  const profileTabs: MastheadTabItems = [
    {
      icon: LuHome,
      text: "Overview",
      link: ""
    },
    {
      icon: LuCat,
      text: "Characters",
      link: "/characters",
      countIndicator: 5
    },
    {
      icon: LuHeart,
      text: "Favorites",
      link: "/favorites"
    }
  ]

  return (
    <Masthead>
      <Masthead.Banner></Masthead.Banner>
      <Masthead.Wrapper>
        <Masthead.Details>
          <Masthead.Layer spaceBetween></Masthead.Layer>
        </Masthead.Details>
      </Masthead.Wrapper>
      <Masthead.Tabs items={profileTabs} />
    </Masthead>
  )
}
