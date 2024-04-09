import React from "react"
import { MFImage } from "@/components/ui"
import { Checkbox, InputField } from "@/components/ui/Forms"
import cn from "@/utils/cn"
import type { Variant } from "@/types/characters"

export default function ModalRefVariant({
  name,
  nsfw,
  url,
  onChangeName,
  onChangeCheck,
  deleteVarient
}: Variant) {
  return (
    <div
      onClick={deleteVarient}
      className={cn("my-4 flex flex-row justify-between rounded-md p-3")}
    >
      <MFImage src={url} alt="Ref Sheet" width={200} height={100} />
      <div className="mx-10 w-3/5">
        <InputField
          noLabel
          placeholder="Variant Name"
          required
          className="my-3"
          value={name}
          onChange={onChangeName}
        />
        <Checkbox
          label="Mark ref as NSFW"
          checked={nsfw}
          inputName="NSFW"
          onChange={onChangeCheck}
        />
      </div>
    </div>
  )
}
