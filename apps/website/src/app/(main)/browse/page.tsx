import { MarginClamp } from "@/components/ui"
import { FursonaCard } from "@/components/ui/Cards"
import { getArtistOpenComissions, getFeatured, getNewCharacters } from "@/utils/api"
import {
  LuBrush as Brush,
  LuHeart as Heart,
  LuLayers as Layers,
  LuSparkles as Sparkles
} from "react-icons/lu"
import ArtistCard from "./ArrtistCard"
import ShelfSection from "./ShelfSection"

export default async function Browse() {
  const featuredCharacters = await getFeatured()
  const newCharacters = await getNewCharacters()
  const artists = await getArtistOpenComissions()
  return (
    <MarginClamp>
      <div className="mx-auto my-20 flex  flex-col justify-between gap-y-2 md:mt-8 md:flex-col">
        <ShelfSection icon={Heart} title={"Featured Characters"}>
          {featuredCharacters.map((character, index) => (
            <FursonaCard
              name={character.name}
              img={character.avatarUrl || "/UserProfile.png"}
              species={character.species}
              palette={
                character.refSheets.length > 0 ? character.refSheets[0].colors : []
              }
              href={`/@${character.owner.handle}/character/${character.name}`}
              likes={character.favoritedBy.length}
              key={index}
            />
          ))}
        </ShelfSection>
        <ShelfSection icon={Sparkles} title={"Recently created characters"}>
          {newCharacters.map((character, index) => (
            <FursonaCard
              name={character.name}
              img={character.avatarUrl || "/UserProfile.png"}
              species={character.species}
              palette={
                character.refSheets.length > 0 ? character.refSheets[0].colors : []
              }
              href={`/@${character.owner.handle}/character/${character.name}`}
              likes={character.favoritedBy.length}
              key={index}
            />
          ))}
        </ShelfSection>
        {/* TODO create profile card and collections card */}
        <ShelfSection icon={Brush} title={"Artists Open for Comissions"}>
          {artists.map((artist, index) => (
            <ArtistCard
              artistAvatarURL={artist.avatarUrl}
              artistDisplayName={artist.displayName}
              artistHandle={artist.handle}
              followers={artist.followers.length}
              badges={artist.badges}
              key={index}
            />
          ))}
        </ShelfSection>
        <ShelfSection icon={Layers} title={"Curated Collections (Coming Soon)"} />
      </div>
    </MarginClamp>
  )
}
