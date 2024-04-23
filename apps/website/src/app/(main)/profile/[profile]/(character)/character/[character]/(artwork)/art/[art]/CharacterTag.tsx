import React from "react"
import { MFImage } from "@/components/ui"
import cn from "@/utils/cn"

export default function CharacterTag({
  characterName,
  characterAvatarUrl,
  characterId,
  readonly,
  onClick
}: {
  characterName: string
  characterAvatarUrl: string
  characterId: string
  readonly?: boolean
  onClick?: (id: string) => void
}) {
  return (
    <div
      onClick={() => onClick && onClick(characterId)}
      className={cn(
        `bg-300 text-700 flex w-fit flex-row items-center px-3 py-1`,
        !readonly && `hover:bg-error`,
        onClick && "hover:cursor-pointer"
      )}
    >
      <MFImage src={characterAvatarUrl} width={30} height={30} />
      <span className="text-700  px-3 py-2">{characterName}</span>
    </div>
  )
}
