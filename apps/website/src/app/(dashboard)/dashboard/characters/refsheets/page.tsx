import type { Metadata } from "next"
import Image from "next/image"
import { fetchUser, fetchUserData, getRefSheets } from "@/utils/api"

export const metadata: Metadata = {
  title: "Ref sheets"
}

export default async function RefSheetsPage() {
  const user = await fetchUserData()
  const refSheets = await getRefSheets(user.handle)
  return (
    <div>
      {refSheets.map((refSheet) => (
        <div
          key={refSheet.id}
          className="hover:bg-300 flex cursor-pointer flex-row items-center space-x-4 transition-all ease-in-out"
        >
          <Image
            src={refSheet.variants.find((v) => v.main).url}
            width={200}
            height={200}
            alt={refSheet.refSheetName}
          />
          <div className="flex flex-col">
            <h2 className="text-xl">{refSheet.refSheetName}</h2>
            <span className="text-lg">{refSheet.artist}</span>
            <span className="text-lg">{refSheet.character.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
