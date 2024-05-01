import { MarginClamp } from "@/components/ui"
import { FursonaCard } from "@/components/ui/Cards"
import { getFeatured, getNewCharacters } from "@/utils/api"
import {
  LuBrush as Brush,
  LuHeart as Heart,
  LuLayers as Layers,
  LuSparkles as Sparkles
} from "react-icons/lu"
import ArtistCard from "./ArrtistCard"
import ShelfSection from "./ShelfSection"

export default async function loading() {
  return (
    <MarginClamp>
      <div className="mx-auto my-20 flex  flex-col justify-between gap-y-2 md:mt-8 md:flex-col">
        <ShelfSection icon={Heart} title={"Featured Characters"}>
          {Array.from({ length: 6 }).map((_, index) => (
            <FursonaCard loading key={index} />
          ))}
        </ShelfSection>
        <ShelfSection icon={Sparkles} title={"Recently created characters"}>
          {Array.from({ length: 6 }).map((_, index) => (
            <FursonaCard loading key={index} />
          ))}
        </ShelfSection>
        {/* TODO create profile card and collections card */}
        <ShelfSection icon={Brush} title={"Artists Open for Comissions (Coming Soon)"}>
          {Array.from({ length: 6 }).map((_, index) => (
            <ArtistCard loading key={index} />
          ))}
        </ShelfSection>
        <ShelfSection icon={Layers} title={"Curated Collections (Coming Soon)"} />
      </div>
    </MarginClamp>
  )
}
