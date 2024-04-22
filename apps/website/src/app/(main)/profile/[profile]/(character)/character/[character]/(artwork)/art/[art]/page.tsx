import type { Metadata } from "next"
import { MFImage, Separator } from "@/components/ui"
import { Button } from "@/components/ui/Buttons"
import Comments from "@/components/ui/Comments"
import { fetchUserData, getArtwork } from "@/utils/api"
import { BRAND } from "@myfursona-internal/config"
import type { UserType } from "@/types/users"
import ArtworkDetails from "./ArtworkDetails"
import SideInfo from "./SideInfo"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      absolute: `Art title by Artist | ${BRAND}`
    },
    description: `Art description`
  }
}

export default async function ArtPage({ params }) {
  const artwork = await getArtwork(params.art)
  const user = (await fetchUserData().catch(() => null)) as UserType | null
  return (
    <div className="flex">
      {/* Artwork image, details, and comments */}
      <div className="flex w-full flex-col">
        <div className="bg-100 relative h-[75dvh] select-none">
          <div
            className="absolute inset-x-12 inset-y-0 z-10"
            data-trigger-zoom-modal=""
          ></div>
          <div className="relative mx-auto grid h-full place-items-center px-12 py-5">
            <MFImage
              src={artwork.artworkUrl}
              alt={artwork.altText}
              width="100%"
              height="100%"
              objectFit="contain"
              strategy="important"
              sizes="2400px (max-width: 1400px)"
              quality={80}
            />
          </div>
        </div>
        {/* Artwork details, notes/alerts and comments */}
        <div className="mx-auto flex w-full flex-col gap-y-2 px-5 pt-6 min-[1400px]:w-[1024px]">
          {/* <span className="mb-2.5">
            <Note type="info" inline>
              Generic info notice
            </Note>
          </span> */}
          <ArtworkDetails
            artTitle={artwork.title ? artwork.title : "No Title"}
            artist={artwork.artist ? artwork.artist.handle : artwork.artistUrl}
            artistImg={artwork.artist && artwork.artist.avatarUrl}
            description={artwork.description ? artwork.description : "No Description"}
            handle={artwork.artist ? artwork.artist.handle : null}
          />
          {user && (
            <div>
              <Comments>
                <Comments.Field
                  avatar={user.avatarUrl}
                  username={user.handle}
                  handle={user.handle}
                  commentType="art"
                  artworkId={artwork.id}
                />
                {artwork.comments
                  ? artwork.comments.map((comment, index) => (
                      <Comments.Item
                        key={index}
                        avatar={comment.author.avatarUrl}
                        username={comment.author.handle}
                      >
                        {comment.content}
                      </Comments.Item>
                    ))
                  : null}
              </Comments>
            </div>
          )}
        </div>
      </div>
      <SideInfo artwork={artwork} user={user} />
    </div>
  )
}
