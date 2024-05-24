import { MastheadBanner } from "./Banner"
import { MastheadDetails } from "./Details"
import { MastheadLayer } from "./Layer"
import { MastheadRoot } from "./Root"
import { MastheadWrapper } from "./Wrapper"

const Masthead = Object.assign(MastheadRoot, {
  Banner: MastheadBanner,
  Wrapper: MastheadWrapper,
  Layer: MastheadLayer,
  Details: MastheadDetails
  // Avatar: MastheadAvatar,
  // Tabs: MastheadTabs
})

export { Masthead }
