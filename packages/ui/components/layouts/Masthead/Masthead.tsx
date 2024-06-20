"use client"

import { MastheadBanner } from "./Banner"
import { MastheadDetails } from "./Details"
import { MastheadLayer } from "./Layer"
import { MastheadRoot } from "./Root"
import { MastheadTabs } from "./Tabs"
import { MastheadWrapper } from "./Wrapper"

const Masthead = Object.assign(MastheadRoot, {
  // Avatar: MastheadAvatar,
  Banner: MastheadBanner,
  Wrapper: MastheadWrapper,
  Layer: MastheadLayer,
  Details: MastheadDetails,
  Tabs: MastheadTabs
})

export { Masthead }
