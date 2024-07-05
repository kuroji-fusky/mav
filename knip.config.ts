import { type KnipConfig } from "knip"

export default {
  eslint: {
    config: [".eslintrc.cjs"]
  },
  entry: ["apps/**/src/**/*.{ts,tsx}!", "packages/**/*.{js,ts,tsx}!"],
  project: ["**/*.{ts,tsx}!"],
  rules: {
    files: "warn",
    exports: "warn",
    types: "warn",
    dependencies: "off",
    unlisted: "off",
    devDependencies: "off",
    binaries: "off"
  }
} satisfies KnipConfig
