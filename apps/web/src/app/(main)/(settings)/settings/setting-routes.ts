import type { IconType } from "react-icons"
import {
  LuBell,
  LuCode2,
  LuLock,
  LuPalette,
  LuPersonStanding,
  LuScroll,
  LuShield,
  LuShuffle,
  LuUser,
  LuWallet
} from "react-icons/lu"

interface SettingRoutes {
  heading?: string
  items: Array<{
    icon: IconType
    label: string
    slug?: string
  }>
}

const settingRoutes: SettingRoutes[] = [
  {
    heading: "Account",
    items: [
      {
        icon: LuUser,
        label: "Profile"
      },
      {
        icon: LuPalette,
        label: "Appearance"
      },
      {
        icon: LuPersonStanding,
        label: "Accessibility"
      },
      {
        icon: LuLock,
        label: "Data & privacy",
        slug: "data-and-privacy"
      },
      {
        icon: LuShield,
        label: "Security"
      },
      {
        icon: LuWallet,
        label: "Billing & subscriptions",
        slug: "billing-and-subscriptions"
      }
    ]
  },
  {
    heading: "Activity",
    items: [
      {
        icon: LuBell,
        label: "Notifications"
      },

      {
        icon: LuShuffle,
        label: "Trade history"
      }
    ]
  },
  {
    heading: "Developers",
    items: [
      {
        icon: LuCode2,
        label: "API keys"
      },
      {
        icon: LuScroll,
        label: "Activity logs"
      }
    ]
  }
]

export default settingRoutes
