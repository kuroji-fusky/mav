import type { Config } from "tailwindcss"
import twShared from "@mav/config/tailwind.config"
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  presets: [twShared]
} satisfies Config
