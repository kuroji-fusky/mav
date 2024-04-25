"use client"

import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { InputField } from "@/components/ui/Forms"
import cn from "@/utils/cn"
import { BACKEND_URL } from "@/utils/env"
import type { Artwork } from "@/types/characters"
import CharacterTag from "../CharacterTag"

export default function CharactersFeatured({ artwork }: { artwork: Artwork }) {
  const [charactersFeatured, setCharactersFeatured] = useState(artwork.charactersFeatured)
  const [error, setError] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState([])
  const router = useRouter()
  const path = usePathname()

  // const addCharacter = (e) => {
  //     // Fetch character from backend
  //     const char = fetch(`${BACKEND_URL}/v1/character/${e.currentTarget.value}`).then((res) => res.json()).catch((err) => console.error(err))
  //     if (!char) return setError('Character not found')

  const addCharacter = async (id: string) => {
    // Fetch character from backend
    if (charactersFeatured.find((char) => char.id === id))
      return setError("Character already added")
    const char = await fetch(`${BACKEND_URL}/v1/character/id/${id}`)
      .then((res) => res.json())
      .catch((err) => console.error(err))
    if (!char) return setError("Character not found")
    const updatedArtwork = await fetch(`${BACKEND_URL}/v1/art/${artwork.id}/${id}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(char)
    })
      .then((res) => res.json())
      .catch((err) => console.error(err))
    if (!updatedArtwork) return setError("Failed to update artwork")
    setCharactersFeatured([...charactersFeatured, char])
    setSearchQuery("")
    setResults([])
    return updatedArtwork
  }

  const removeCharacter = async (id: string) => {
    // Fetch character from backend
    const char = await fetch(`${BACKEND_URL}/v1/character/id/${id}`)
      .then((res) => res.json())
      .catch((err) => console.error(err))
    if (!char) return setError("Character not found")
    const updatedArtwork = await fetch(
      `${BACKEND_URL}/v1/art/${artwork.id}/${id}/remove`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(char)
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error(err))
    if (!updatedArtwork) return setError("Failed to update artwork")
    setCharactersFeatured(charactersFeatured.filter((char) => char.id !== id))
    return updatedArtwork
  }

  const deleteArtwork = async () => {
    // Delete artwork from backend
    const deletedArtwork = await fetch(`${BACKEND_URL}/v1/art/${artwork.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then((res) => res.json())
      .catch((err) => console.error(err))
    if (!deletedArtwork) return setError("Failed to delete artwork")
    return router.push(path.replace(`/art/${artwork.id}/edit`, `/gallery`))
  }

  const searchCharacters = async (e) => {
    setSearchQuery(e.currentTarget.value)
    if (e.currentTarget.value.length < 3) return
    // Fetch characters from backend
    const characters = await fetch(
      `${BACKEND_URL}/v1/character/search?query=${e.currentTarget.value}`
    )
      .then((res) => res.json())
      .catch((err) => console.error(err))
    if (!characters) return setError("Characters not found")
    setResults(characters)
    return characters
  }

  return (
    <div>
      <InputField
        inputName="Featured Characters"
        value={searchQuery}
        onChange={searchCharacters}
      />
      {results.length > 0 && (
        <div className="space-y-4">
          {results.map((character, index) => (
            <div
              key={index}
              className={cn(
                `bg-400 hover:bg-300 flex flex-row items-center space-x-4 px-2 py-1`,
                charactersFeatured.find((char) => char.id === character.id) && "hidden"
              )}
              onClick={() => addCharacter(character.id)}
            >
              <Image
                src={character.avatarUrl}
                alt={character.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <span>{character.name}</span>
            </div>
          ))}
        </div>
      )}
      <div className="my-4 flex flex-col ">
        <span>Featured Characters</span>
        {charactersFeatured.map((character, index) => (
          <CharacterTag
            key={index}
            characterName={character.name}
            characterAvatarUrl={character.avatarUrl}
            characterId={character.id}
            onClick={removeCharacter}
          />
        ))}
      </div>
    </div>
  )
}
