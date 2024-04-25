import Image from "next/image"
import { redirect } from "next/navigation"
import { MFImage } from "@/components/ui"
import { fetchUserData, getArtwork } from "@/utils/api"
import ArtEditForm from "./EditForm"

export default async function ArtPage({ params }) {
  const { profile, character, art } = params
  const artwork = await getArtwork(art)
  const user = await fetchUserData().catch(() => null)

  if (artwork.owner.id !== user.id)
    return redirect(`/profile/${profile}/character/${character}/art/${art}`)

  return (
    // Create edit page for artwork
    <div className="flex w-full flex-row justify-between space-x-5 px-12 py-5">
      <MFImage
        src={artwork.artworkUrl}
        alt={artwork.altText}
        width="80%"
        objectFit="contain"
        strategy="important"
        sizes="2400px (max-width: 1400px)"
        quality={80}
      />
      <ArtEditForm artwork={artwork} />
    </div>
  )
}
