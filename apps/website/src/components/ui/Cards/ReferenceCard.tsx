import { MFImage } from "@/components/ui"
import { setRefAsMain } from "@/utils/api"
import cn from "@/utils/cn"
import { BACKEND_URL } from "@/utils/env"
import type { ReferenceSheet } from "@/types/characters"

export default function ReferenceCard({
  data,
  toggleUploadRefSheetModal,
  setEditingData
}: {
  data: ReferenceSheet
  toggleUploadRefSheetModal: () => void
  setEditingData: (data: ReferenceSheet) => void
}) {
  const clickables = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    if (e.shiftKey) {
      fetch(`${BACKEND_URL}/v1/character/assign-ref/${data.id}`, {
        method: "PUT",
        credentials: "include"
      })
        .then((res) => res.json())
        .then((data) => data)
    } else {
      setEditingData(data)
      toggleUploadRefSheetModal()
    }
  }

  return (
    <div
      className={cn(
        "mt-4 flex w-full flex-row space-y-3 rounded-lg",
        data.active && "bg-400"
      )}
      onClick={clickables}
    >
      <MFImage
        src={data.variants.find((v) => v.main)?.url || data.variants[0]?.url || ""}
        alt={data.variants.find((v) => v.main)?.name || data.variants[0]?.name || ""}
        width={250}
        height={150}
        rounded={20}
      />
      <div className="ml-4 flex flex-col justify-center">
        <h2 className="text-xl">{data.refSheetName}</h2>
        <span className="text-sm">{data.artist}</span>
        <span className="text-sm">Contains {data.variants.length} variant(s)</span>
      </div>
    </div>
  )
}
