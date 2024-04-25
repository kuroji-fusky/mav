"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"
import type { Artwork } from "@/types/characters"

export default function Artwork({
  image,
  characterName
}: {
  image: Artwork
  characterName: string
}) {
  const router = useRouter()
  return (
    <div className="relative h-fit w-full cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105">
      <Image
        onClick={() =>
          router.push(
            `/@${image.owner.handle}/character/${image.publishedCharacter.name}/art/${image.id}`
          )
        }
        src={image.artworkUrl}
        alt={image.title || "Artwork"}
        layout="responsive"
        width={100}
        height={100}
        className="rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 truncate bg-black bg-opacity-50 p-2 text-center text-white">
        {image.title}
      </div>
    </div>
  )
}
