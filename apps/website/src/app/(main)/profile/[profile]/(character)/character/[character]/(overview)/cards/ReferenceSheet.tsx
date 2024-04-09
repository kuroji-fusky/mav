import Image from "next/image"
import { ColorPalette } from "@/components/ui/Cards"

export default function ReferenceSheet({
  referenceSheet,
  colors
}: {
  referenceSheet?: string
  colors: string[]
}) {
  return (
    <div className="w-11/12">
      <h1 className="mb-4 text-3xl">Reference Sheet</h1>
      <div className="bg-300 p-4">
        <Image src={referenceSheet} alt="Reference Sheet" width={1024} height={1024} />
        <span className="text-600 mb-2 mt-4 flex gap-x-0.5 font-bold uppercase">
          Color Pallete
        </span>
        <ColorPalette palette={colors} height={"30px"} width={"100%"} />
      </div>
    </div>
  )
}
