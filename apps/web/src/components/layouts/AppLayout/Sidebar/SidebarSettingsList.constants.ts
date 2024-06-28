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
        icon: LuLock,
        label: "Data & privacy",
        slug: "privacy"
      },
      {
        icon: LuShield,
        label: "Security"
      },
      {
        icon: LuWallet,
        label: "Billing & subscriptions",
        slug: "billing"
      },
      {
        icon: LuPersonStanding,
        label: "Accessibility"
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
        label: "API keys",
        slug: "developers/api-keys"
      },
      {
        icon: LuScroll,
        label: "Activity logs",
        slug: "developers/activity-logs"
      }
    ]
  }
]

export default settingRoutes
