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
      {images &&
        images.map((image) => (
          <div key={image.id} className="w-1/3">
            <Image src={image.artworkUrl} alt={image.title} width={300} height={300} />
          </div>
        ))}
    </MarginClamp>
  )
}
