"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import CreateFolderModal from "@/components/modals/CreateFolder"
import { FolderView, GridResponsive } from "@/components/ui"
import { Button } from "@/components/ui/Buttons"
import { FursonaCard, PinnedCharacter } from "@/components/ui/Cards"
import SearchBox from "@/components/ui/Forms/SearchBox"
import { folderColors } from "@/constants"
import { LuFilter as FilterIcon, LuCog, LuPlus } from "react-icons/lu"
import type { CharacterResponse } from "@/types/characters"

export default function CharacterView({
  handle,
  characters
}: {
  handle: string
  characters: CharacterResponse
}) {
  const router = useRouter()
  const [createFolderModal, setFolderModalState] = useState(false)

  const toggleCreateFolderModal = () => setFolderModalState(!createFolderModal)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const refSheets = characters.mainCharacter?.refSheets[0].variants[0].url

  return (
    <FolderView>
      <FolderView.Shelf defaultName="All characters">
        {/* TODO implement drag and drop onto this thing */}
        <FolderView.Item name="Personal" />
        <FolderView.Item name="Adopts">
          <FolderView.Item name="For sale" nestedItem />
          <FolderView.Item name="Adopted" nestedItem />
          {/* TODO only show "new folder" item when user is logged in */}
          <FolderView.Item newItem nestedItem onClick={toggleCreateFolderModal} />
        </FolderView.Item>
        <FolderView.Item name="From trades" />
        <FolderView.Item newItem onClick={toggleCreateFolderModal} />
      </FolderView.Shelf>
      <FolderView.Contents>
        <div className="mb-4 flex w-full gap-x-2.5">
          <SearchBox placeholder="Search for characters" />
          <Button prefixIcon={<FilterIcon size={20} />}>Filter</Button>
          {/* TODO: Display if logged in */}
          <Button
            onClick={() => router.push("/dashboard/characters")}
            prefixIcon={<LuCog size={20} />}
          >
            Manage Character
          </Button>
          <Button
            onClick={() => router.push("/dashboard/characters?createModal=true")}
            prefixIcon={<LuPlus size={20} />}
          >
            Create Character
          </Button>
        </div>
        {characters.mainCharacter && (
          <PinnedCharacter
            artist={"Unknown artist"}
            colors={characters.mainCharacter.refSheets[0].colors}
            avatar={characters.mainCharacter.avatarUrl || "/UserProfile.png"}
            name={characters.mainCharacter.name}
            species={characters.mainCharacter.species}
            refSheetImg={refSheets || "/GenericBG.png"}
          />
        )}

        <GridResponsive breakpoint={250} className="gap-1.5" role="listbox">
          {characters.characters.map((character, index) => (
            <FursonaCard
              key={index}
              img={character.avatarUrl || "/UserProfile.png"}
              name={character.name}
              species={character.species}
              palette={characters.mainCharacter.refSheets[0].colors}
              status="owned"
              href={`/profile/${handle}/character/${character.name}`}
            />
          ))}
        </GridResponsive>
      </FolderView.Contents>
      <CreateFolderModal
        createFolderModal={createFolderModal}
        toggleCreateFolderModal={toggleCreateFolderModal}
        colors={folderColors}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </FolderView>
  )
}
