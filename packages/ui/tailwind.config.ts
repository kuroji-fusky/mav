import type { Config } from "tailwindcss"
import twShared from "@myartverse/config/tailwind.config"

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [twShared]
} satisfies Config
