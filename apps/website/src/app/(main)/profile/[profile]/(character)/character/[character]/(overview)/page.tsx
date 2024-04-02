import { MarginClamp } from "@/components/ui"
import { fetchCharacter } from "@/utils/api"
import CharacterDetails from "./cards/CharacterDetails"
import ReferenceSheet from "./cards/ReferenceSheet"

export default async function Character({
  params
}: {
  params: { character: string; profile: string }
}) {
  const { character, profile } = params
  const data = await fetchCharacter(profile, character)
  return (
    <MarginClamp>
      <div className="flex w-full flex-row justify-between">
        <section className="w-1/2">
          <ReferenceSheet referenceSheet={data.refSheets[0].variants[0].url} />
        </section>
        <section className="w-1/2">
          <CharacterDetails attributes={data.attributes} />
        </section>
      </div>
    </MarginClamp>
  )
}
