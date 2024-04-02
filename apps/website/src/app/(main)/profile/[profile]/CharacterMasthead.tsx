"use client"

import { useRouter } from "next/navigation"
import { Avatar, Button } from "@/components/ui/Buttons"
import { Masthead } from "@/components/ui/Masthead"
import { displayPronouns, displaySpecies } from "@/utils/displayer"
import {
  LuArrowLeft as ArrowLeft,
  LuBookMarked as BookMarked,
  LuPencil as EditIcon,
  LuHeart as HeartIcon,
  LuHistory as HistoryIcon,
  LuHome as HomeIcon,
  LuImage
} from "react-icons/lu"
import type { Character } from "@/types/characters"
import type { UserType } from "@/types/users"

export default function CharacterMasthead({
  data,
  owner
}: {
  owner: UserType
  data: Partial<Character>
}) {
  const router = useRouter()
  return (
    <Masthead>
      <Masthead.Wrapper>
        <Button
          href={`/@${owner.handle}`}
          prefixIcon={<ArrowLeft className="mr-3" />}
          className="bg-300 hover:bg-400 my-3 flex flex-row items-center rounded-lg px-4 py-2 transition-all duration-200 ease-in-out"
        >
          Back to <span className="font-bold">@{owner.handle}'s</span> profile
        </Button>
      </Masthead.Wrapper>
      <Masthead.Wrapper>
        <Masthead.Avatar src={data.avatarUrl} />
        <Masthead.Details>
          <Masthead.Layer spaceBetween>
            <h2 className="not-prose font-inter flex items-center gap-x-2.5 text-3xl font-bold">
              <span>
                {data.name} ({data.nickname ? data.nickname : ""})
              </span>
              <span aria-hidden></span>
            </h2>
            <div className="relative z-[6] flex items-start gap-x-2.5">
              <Button
                prefixIcon={<EditIcon size={20} />}
                aria-label="Edit Character"
                onClick={() => router.push(`/dashboard/characters/edit/${data.name}`)}
              >
                Edit Character
              </Button>
              <Button
                prefixIcon={<HeartIcon size={20} />}
                aria-label="Favorite"
                count={3}
              >
                Favorite
              </Button>
            </div>
          </Masthead.Layer>
          <Masthead.Layer>
            <div className="flex flex-row items-center space-x-4 text-lg">
              <span className="text-700 font-semibold ">
                {displaySpecies(data.species)}
              </span>
              <span className="text-700">
                {displayPronouns(data.attributes.pronouns)}
              </span>
            </div>
          </Masthead.Layer>
          <Masthead.Layer>
            <div className="flex flex-row space-x-2">
              <span className="text-700 flex flex-row items-center text-lg">
                Created by
              </span>
              <Avatar src={owner.avatarUrl} />
              <span className="text-700 flex flex-row items-center text-lg">
                @{owner.handle}
              </span>
            </div>
          </Masthead.Layer>
        </Masthead.Details>
      </Masthead.Wrapper>
      <Masthead.Tabs
        baseURL={`/@${owner.handle}/character/${data.name}`}
        items={[
          {
            icon: HomeIcon,
            text: "Overview",
            link: `/`
          },
          {
            icon: LuImage,
            text: "Gallery",
            link: `/gallery`
          },
          {
            icon: BookMarked,
            text: "Biography",
            link: `/biography`
          },
          {
            icon: HistoryIcon,
            text: "Activity",
            link: `/activity`
          }
        ]}
      />
    </Masthead>
  )
}
