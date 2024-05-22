import nextMDX from "@next/mdx"
import nextPWA from "next-pwa"

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lodash-es", "gsap"],
  poweredByHeader: false,
  experimental: {
    mdxRs: true
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "9000",
        pathname: "/**"
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: "/@:username",
        destination: "/profile/:username"
      },
      {
        source: "/@:username/:path*",
        destination: "/profile/:username/:path*"
      }
    ]
  },
  async redirects() {
    return [
      { source: "/signup", destination: "/register", permanent: true },
      { source: "/sign-up", destination: "/register", permanent: true },
      { source: "/signin", destination: "/login", permanent: true },
      { source: "/sign-in", destination: "/login", permanent: true },
      {
        source: "/dashboard",
        destination: "/studio/overview",
        permanent: true
      },
      // TODO: change dest. route to /settings/profile soon
      { source: "/settings", destination: "/settings/account", permanent: true }
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*?)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "no-sniff"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          }
        ]
      }
    ]
  }
}

const withMDX = nextMDX({
  options: {
    extension: /\.mdx?$/,
    providerImportSource: "@mdx-js/react"
  }
})

/** @type {import('next-pwa')} */
const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV !== "production"
})

export default withMDX({
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  ...withPWA(nextConfig)
})
