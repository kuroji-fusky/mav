import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { fetchSelfCharacter } from "@/utils/api"
import EditCharacterView from "../CharacterEdit"

export async function generateMetadata({
  params
}: {
  params: { name: string }
}): Promise<Metadata> {
  const { name } = params
  return {
    title: `Edit ${name}`
  }
}

export default async function CharacterEditPage({
  params
}: {
  params: { name: string }
}) {
  const { name } = params
  const character = await fetchSelfCharacter(name)
  if (!character) {
    return redirect("/dashboard/characters?error=notFound")
  }

  return <EditCharacterView character={character} />
}
