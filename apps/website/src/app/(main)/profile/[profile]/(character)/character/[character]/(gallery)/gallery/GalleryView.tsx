import type { Metadata } from "next"
import Image from "next/image"
import { MarginClamp } from "@/components/ui"
import { getArtworks } from "@/utils/api"
import { BRAND } from "@myfursona-internal/config"

// TODO get user data from Jotai global store
export const metadata: Metadata = {
  title: `User's Gallery`,
  description: `See User's gallery on ${BRAND} by creating an account!`
}

export default async function GalleryView({ character, profile }) {
  const images = await getArtworks(profile, character)
  return (
    <MarginClamp>
      {images && (
        <div className="flex flex-wrap gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-1/4">
              <Image
                src={image.artworkUrl}
                alt={image.title}
                layout="responsive"
                width={100}
                height={100}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      )}
    </MarginClamp>
  )
}
