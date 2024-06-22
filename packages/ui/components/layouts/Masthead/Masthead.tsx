"use client"

import { MastheadBanner } from "./Banner"
import { MastheadDetails } from "./Details"
import { MastheadLayer } from "./Layer"
import { MastheadRoot } from "./Root"
import { MastheadTabs } from "./Tabs"
import { MastheadWrapper } from "./Wrapper"

/**
 * A masthead for displaying first-hand info such as profile, characters, events, etc.
 *
 * It contains namespaced components for ease and readability; and should follow a
 * specific order of components to achieve the expected look. Inside the root component,
 * its sub-components: `<Masthead.Details>` and `<Masthead.Tabs>` are required, while
 * `<Masthead.Banner>` is optional or shown via state condition that will be fetched
 * through the API.
 *
 * @example
 * ```jsx
 * <Masthead>
 *  <Masthead.Banner>
 *    <img src="./profile-banner.webp" alt={providedBannerAlt || ""} />
 *  </Masthead.Banner>
 *  <Masthead.Wrapper>
 *    <Masthead.Avatar>
 *      <img src="./profile-banner.webp" alt={providedAlt || ""} />
 *    </Masthead.Avatar>
 *    <Masthead.Details>
 *      <Masthead.Layer>{name}</Masthead.Layer>
 *      <Masthead.Layer>{followerCount} - {followingCount}</Masthead.Layer>
 *      <Masthead.Layer>{profileBio}</Masthead.Layer>
 *    </Masthead.Details>
 *  </Masthead.Wrapper>
 *  <Masthead.Tabs items={tabItems} />
 * </Masthead>
 * ```
 */
const Masthead = Object.assign(MastheadRoot, {
  // Avatar: MastheadAvatar,
  Banner: MastheadBanner,
  /**
   * A flex `<div>` wrapper for encapsulating `<Masthead.Details>` and
   * `<Masthead.Avatar>` to be displayed correctly in the UI
   */
  Wrapper: MastheadWrapper,
  /**
   * A layer for useful information, must be wrapped in `<Masthead.Details>`
   *
   * @example
   * ```tsx
   * <Masthead.Details>
   *  <Masthead.Layer>Layer 1</Masthead.Layer>
   *  <Masthead.Layer>Layer 2</Masthead.Layer>
   *  <Masthead.Layer>Layer 3</Masthead.Layer>
   * </Masthead.Details>
   * ```
   */
  Layer: MastheadLayer,
  Details: MastheadDetails,
  Tabs: MastheadTabs
})

export { Masthead }
