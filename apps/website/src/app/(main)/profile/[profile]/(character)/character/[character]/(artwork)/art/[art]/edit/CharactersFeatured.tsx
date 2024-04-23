"use client"

import Image from "next/image"
import { redirect, usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { MFImage } from "@/components/ui"
import { Button } from "@/components/ui/Buttons"
import { InputField } from "@/components/ui/Forms"
import { BACKEND_URL } from "@/utils/env"
import type { Artwork, Character } from "@/types/characters"
import CharacterTag from "../CharacterTag"

export default function CharactersFeatured({ artwork }: { artwork: Artwork }) {
  const [charactersFeatured, setCharactersFeatured] = useState(artwork.charactersFeatured)
  const [error, setError] = useState("")
  const [results, setResults] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const path = usePathname()
  const router = useRouter()

  const handleChange = async (e) => {
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

  const saveArtwork = async () => {
    // Save artwork to backend
    const updatedArtwork = await fetch(`${BACKEND_URL}/v1/art/${artwork.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ charactersFeatured })
    })
      .then((res) => res.json())
      .catch((err) => console.error(err))
    if (!updatedArtwork) return setError("Failed to update artwork")
    router.back()
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

  return (
    <div>
      <InputField
        inputName="Featured Characters"
        value={searchQuery}
        onChange={handleChange}
        error={error}
      />
      {results.length > 0 && (
        <div className="bg-400 flex w-full flex-col rounded-lg">
          {results.map((character) => (
            <div
              key={character.id}
              className="border-300 hover:bg-300 flex flex-row items-center border px-3 py-2 transition-all ease-in-out"
              onClick={() => addCharacter(character.id)}
            >
              <MFImage
                src={character.avatarUrl}
                alt={character.name}
                width={50}
                height={50}
                rounded={100}
              />
              <span className="mx-4 text-xl">{character.name}</span>
            </div>
          ))}
        </div>
      )}
      <div className="my-4 flex flex-row gap-x-4">
        {charactersFeatured.map((character) => (
          <CharacterTag
            key={character.id}
            characterName={character.name}
            characterId={character.id}
            characterAvatarUrl={character.avatarUrl}
            onClick={removeCharacter}
          />
        ))}
      </div>
      <div className="flex flex-row justify-end space-x-4">
        <Button variant="error" onClick={deleteArtwork}>
          Delete
        </Button>
        <Button onClick={saveArtwork}>Save</Button>
      </div>
    </div>
  )
}
