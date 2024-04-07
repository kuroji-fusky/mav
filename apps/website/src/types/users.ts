import type { Artwork, Character } from "./characters"
import type { LinkedString } from "./utils"

type NullableString = string | null
type UserRole = "artist" | "admin" | "contributor" | "early-tester"
type UserRoles = UserRole[]
type OnlineStatus = "offline" | "online"

type Link = {
  url: string
  label: string
}

type Badge = {
  roleName: string
  rewardDate: Date
}

export interface UserType {
  id: number
  handle: string
  displayName: NullableString
  bio: NullableString
  avatarUrl: LinkedString
  bannerUrl: LinkedString
  favoriteCharacters: Character[]
  characters: Character[]
  dateRegistered: Date
  dateUpdated: Date
  roles: UserRoles
  hasBetaAccess: boolean
  links: Link[]
  badges: Badge[]
  comments: Comments[]
  onlineStatus: OnlineStatus
  customStatus: NullableString
  previousAliases: NullableString
  pronouns: NullableString
  nationaility: NullableString
  birthday: Date
}

export interface Comments {
  id: string
  content: string
  author: UserType
  user: UserType
  artwork?: Artwork
  character?: Character
}
