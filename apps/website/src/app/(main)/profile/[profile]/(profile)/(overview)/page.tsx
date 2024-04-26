import type { Metadata } from "next"
import { MarginClamp } from "@/components/ui"
import { fetchUser } from "@/utils/api"
import type { SlugRouteProps } from "@/types/utils"
import CommentSection from "./(cards)/CommentSection"
import CustomHTML from "./(cards)/CustomHTML"
import ProfileContent from "./(cards)/ProfileContent"

export async function generateMetadata({ params }: SlugRouteProps): Promise<Metadata> {
  const decodeUserHandle = params.profile

  return {
    title: `User`,
    description: `Follow ${decodeUserHandle} on MyFursona by creating an account!`
  }
}

export default async function Page({ params }) {
  const userData = await fetchUser(params.profile)
  if (!userData) return null
  // TODO: Redirect to 404 instead of login when api route for user by handler is implemented
  return (
    <MarginClamp>
      <div className="flex w-full gap-3">
        <div className="w-1/2 flex-shrink-0">
          {/* TODO: Favorite Character */}
          <CustomHTML html={userData.customHTMLCard} />
        </div>
        <div className="w-1/2 flex-shrink-0">
          <ProfileContent userData={userData} />
          <CommentSection userData={userData} comments={userData.comments} />
        </div>
      </div>
    </MarginClamp>
  )
}
