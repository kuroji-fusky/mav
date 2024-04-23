"use client"

import { usePathname, useRouter } from "next/navigation"
import React from "react"
import { MFImage, Separator } from "@/components/ui"
import { Button } from "@/components/ui/Buttons"
import type { Artwork } from "@/types/characters"
import type { UserType } from "@/types/users"
import CharacterTag from "./CharacterTag"

export default function SideInfo({
  artwork,
  user
}: {
  artwork: Artwork
  user: UserType
}) {
  const path = usePathname()
  const router = useRouter()
  return (
    <aside className="relative w-96 flex-shrink-0 px-6 py-4 ">
      <div className="bg-200 fixed w-80 p-4">
        {artwork.owner.id == user.id && (
          <Button href={`${path}/edit`} className="float-right">
            Edit
          </Button>
        )}
        <h3 className="text-xl">Tools</h3>
        <div className="flex flex-col py-3">
          <span className="text-gray-300">Programs Used</span>
          <span className="text-700">
            {artwork.programUsed ? artwork.programUsed : "Unknown"}
          </span>
        </div>
        <Separator dir="horizontal" />
        {artwork.charactersFeatured && (
          <div className="flex flex-col py-3">
            <h3 className="text-xl">Characters</h3>
            <div className="mt-2">
              {artwork.charactersFeatured.map((character, index) => (
                <CharacterTag
                  key={index}
                  characterName={character.name}
                  characterAvatarUrl={character.avatarUrl}
                  characterId={character.id}
                  readonly
                  onClick={() =>
                    router.push(`/@${character.owner.handle}/character/${character.name}`)
                  }
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}
