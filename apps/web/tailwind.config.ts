import type { Config } from "tailwindcss"
import twShared from "@myartverse/config/tailwind.config"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  presets: [twShared]
} satisfies Config
