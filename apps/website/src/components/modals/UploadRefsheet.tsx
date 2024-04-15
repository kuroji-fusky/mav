import { type Dispatch, type SetStateAction, useEffect, useState } from "react"
import { ModalRefVariant } from "@/components/modals"
import { MFImage } from "@/components/ui"
import { Button } from "@/components/ui/Buttons"
import { InputField } from "@/components/ui/Forms"
import DropZone from "@/components/ui/Forms/DropZone"
import Modal from "@/components/ui/Modal"
import { uploadImage } from "@/utils/apiNoCookies"
import { BACKEND_URL } from "@/utils/env"
import { FaFolderPlus } from "react-icons/fa6"
import { LuXCircle } from "react-icons/lu"
import type { ReferenceSheet } from "@/types/characters"

export default function UploadRefsheetModal({
  toggleUploadRefSheetModal,
  uploadRefsheetModal,
  setNewRefSheetData,
  editingRefSheet,
  characterID
}: {
  toggleUploadRefSheetModal: () => void
  uploadRefsheetModal: boolean
  // TODO: Figire out the type for newRefSheetData
  setNewRefSheetData: Dispatch<SetStateAction<ReferenceSheet[]>>
  refSheetData: ReferenceSheet[]
  editingRefSheet?: ReferenceSheet | undefined
  characterID: string
  refId: string
}) {
  const [mainRefUrl, setMainRefUrl] = useState("")
  const [saved, setSaved] = useState(true)
  const defaultValue = {
    id: null,
    refSheetName: "",
    artist: "",
    colors: [""],
    variants: []
  }

  const [formData, setFormData] = useState(defaultValue)

  useEffect(() => {
    if (editingRefSheet) {
      setFormData(editingRefSheet)
      if (editingRefSheet.variants && editingRefSheet.variants.length > 0) {
        setMainRefUrl(editingRefSheet.variants.find((v) => v.main)?.url || "")
      }
    }
  }, [editingRefSheet])

  useEffect(() => {
    if (mainRefUrl) {
      const updatedVariants = formData.variants.filter((v) => !v.main)
      updatedVariants.unshift({
        name: "Main Variant",
        url: mainRefUrl,
        nsfw: false,
        active: true,
        main: true
      })
      setFormData((prev) => ({ ...prev, variants: updatedVariants }))
    }
  }, [mainRefUrl])

  useEffect(() => {
    setSaved(false)
  }, [formData])

  const addColor = () => {
    setFormData((prev) => ({
      ...prev,
      colors: [...prev.colors, ""]
    }))
  }

  const handleChange = (key, value, index = -1) => {
    if (index >= 0) {
      const updatedArray = [...formData[key]]
      updatedArray[index] = value
      setFormData((prev) => ({ ...prev, [key]: updatedArray }))
    } else {
      setFormData((prev) => ({ ...prev, [key]: value }))
    }
  }

  const addVariant = async (e) => {
    const uploadedFile = e.target.files[0]
    if (!uploadedFile) return

    const formData = new FormData()
    formData.append("file", uploadedFile)

    try {
      const response = await uploadImage(formData)
      if (!response.ok) throw new Error("Failed to upload image")
      const { url } = await response.json()
      setFormData((prev) => ({
        ...prev,
        variants: [
          ...prev.variants,
          { name: "New Variant", url, nsfw: false, main: false }
        ]
      }))
    } catch (error) {
      throw new Error(error)
    }
  }

  const save = () => {
    setNewRefSheetData((prev) => {
      const updated = [...prev]
      const index = updated.findIndex((r) => r.id === formData.id)
      if (index >= 0) {
        updated[index] = formData
      } else {
        updated.push(formData)
      }

      return updated
    })

    fetch(`${BACKEND_URL}/v1/character/upload-ref`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ refSheet: formData, characterId: characterID })
    })
    setSaved(true)
  }

  const deleteRefSheet = () => {
    fetch(`${BACKEND_URL}/v1/character/delete-ref/${formData.id}`, {
      method: "DELETE",
      credentials: "include"
    })

    setNewRefSheetData((prev) => prev.filter((r) => r.id !== formData.id))
    toggleUploadRefSheetModal()
  }

  const close = () => {
    setFormData(defaultValue)
    toggleUploadRefSheetModal()
  }

  const saveAndClose = () => {
    save()
    close()
  }

  return (
    <Modal
      className="w-3/4"
      toggler={toggleUploadRefSheetModal}
      state={uploadRefsheetModal}
    >
      <Modal.Title>
        <div className="flex w-full items-center justify-between">
          <span className="font-inter flex items-center gap-x-2 text-xl font-bold">
            <FaFolderPlus />
            Upload Ref Sheet
          </span>
          <Button
            size="small"
            variant="tritery"
            icon={<LuXCircle size={18} />}
            onClick={toggleUploadRefSheetModal}
          />
        </div>
      </Modal.Title>
      <section className="flex flex-row justify-around p-4">
        <div className="h-full w-2/5">
          <span className="text-2xl">Main Variant</span>
          <DropZone
            aspectRatio="16/9"
            setData={setMainRefUrl}
            className="my-4 w-full"
            value={formData.variants.length > 0 ? formData.variants[0].url : undefined}
          />
        </div>
        <div>
          <InputField
            inputName="Name"
            required
            value={formData.refSheetName}
            onChange={(e) => handleChange("refSheetName", e.currentTarget.value)}
          />
          <span className="text-600 mb-2 mt-4 flex gap-x-0.5 font-bold uppercase">
            Color Palette (User Selectable)
          </span>
          <div>
            {formData.colors.map((color, index) => (
              <input
                key={index}
                type="color"
                className="border-400 bg-100 mr-2 border border-solid"
                value={color}
                onChange={(e) => handleChange("colors", e.target.value, index)}
                onBlur={addColor}
                // Right click to remove color
                onContextMenu={(e) => {
                  e.preventDefault()
                  const updatedColors = [...formData.colors]
                  updatedColors.splice(index, 1)
                  setFormData((prev) => ({ ...prev, colors: updatedColors }))
                }}
              />
            ))}
          </div>
          <div className="w-full py-5">
            <span className="text-600 mb-2 mt-4 flex gap-x-0.5 font-bold uppercase">
              Additional Variants
            </span>
            <div className="border-400 hover:bg-400 relative flex flex-row justify-between rounded-md border border-solid px-3">
              <input
                type="file"
                onChange={addVariant}
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full opacity-0"
              />
              <div className="my-3 flex flex-row items-center justify-between">
                <MFImage
                  src="/DefaultRefrenceSheet.png"
                  alt="User Banner"
                  width={200}
                  height={100}
                />
                <div className="mx-10 w-3/5">
                  <span className="text-2xl">Upload a new variant</span>
                </div>
              </div>
            </div>
            {formData.variants
              .filter((v) => !v.main)
              .map((variant, index) => (
                <ModalRefVariant
                  name={formData.variants[index].name}
                  nsfw={formData.variants[index].nsfw}
                  url={variant.url}
                  key={index}
                  onChangeCheck={(e) => {
                    const updatedVariants = [...formData.variants]
                    updatedVariants[index].nsfw = e.target.checked
                    setFormData((prev) => ({ ...prev, variants: updatedVariants }))
                  }}
                  onChangeName={(e) => {
                    const updatedVariants = [...formData.variants]
                    updatedVariants[index].name = e.target.value
                    setFormData((prev) => ({ ...prev, variants: updatedVariants }))
                  }}
                  deleteVarient={(e) => {
                    e.preventDefault()
                    if (e.shiftKey) {
                      const updatedVariants = [...formData.variants]
                      updatedVariants.splice(index, 1)
                      setFormData((prev) => ({ ...prev, variants: updatedVariants }))
                    }
                  }}
                />
              ))}
          </div>
        </div>
      </section>
      <div className="flex flex-row items-center justify-end p-4">
        {saved ? null : "You have unsaved changes*"}
        <Button variant="error" className="float-right ml-4" onClick={deleteRefSheet}>
          Delete
        </Button>
        <Button className="float-right mx-4" onClick={save}>
          Save
        </Button>
        <Button className="x-4 float-right" onClick={saveAndClose}>
          Save & Close
        </Button>
      </div>
    </Modal>
  )
}
