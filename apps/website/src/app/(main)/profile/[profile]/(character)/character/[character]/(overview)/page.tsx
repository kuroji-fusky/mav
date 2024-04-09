import { MarginClamp } from "@/components/ui"
import { fetchCharacter, fetchUserData } from "@/utils/api"
import CharacterDetails from "./cards/CharacterDetails"
import Comment from "./cards/Comment"
import ReferenceSheet from "./cards/ReferenceSheet"

export default async function Character({
  params
}: {
  params: { character: string; profile: string }
}) {
  const { character, profile } = params
  const data = await fetchCharacter(profile, character)
  const user = await fetchUserData().catch(() => null)

  return (
    <MarginClamp>
      <div className="flex w-full flex-row justify-between">
        <section className="w-1/2">
          {data.refSheets.length > 0 && (
            <ReferenceSheet
              referenceSheet={
                data.refSheets.find((r) => r.active).variants.find((v) => v.main).url
              }
              colors={data.refSheets.find((r) => r.active).colors}
            />
          )}
        </section>
        <section className="w-1/2">
          {data.attributes && <CharacterDetails attributes={data.attributes} />}
          <Comment user={user && user} character={data} />
        </section>
      </div>
    </MarginClamp>
  )
}
