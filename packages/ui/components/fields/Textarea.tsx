"use client"

import { forwardRef } from "react"
import type { ReactHTMLElement } from "@mav/shared/types"
import { cn } from "@mav/shared/utils"
import FieldLabel from "./FieldLabel"
import { DIV_TAG, LABEL_TAG } from "./fields.constants"
import type { MAVFields } from "./fields.types"
import { useMemoizeA11yLabel } from "./fields.utils"

type PickedTextareaProps = Pick<
  ReactHTMLElement<"textarea">,
  "placeholder" | "required" | "value" | "readOnly" | "onKeyDown" | "onClick" | "onBlur"
>

interface TextAreaProps extends PickedTextareaProps, MAVFields {
  initialHeight: number
  heightLimit: number
  isResizable: boolean
}

const rndString = crypto.randomUUID()

const Textarea = forwardRef<HTMLTextAreaElement, Partial<TextAreaProps>>((props, ref) => {
  const {
    error,
    initialHeight,
    heightLimit,
    inputName,
    noLabel,
    isResizable,
    charLimit,
    placeholder,
    readOnly,
    ...eventHandlers
  } = props

  const uniqueId = useMemoizeA11yLabel(inputName)
  const DynamicElement = !noLabel ? LABEL_TAG : DIV_TAG

  return (
    <div data-mav-textarea="" className="w-full">
      <span className="sr-only" id={uniqueId}>
        {inputName}
      </span>
      <DynamicElement
        className="flex flex-col gap-y-1.5"
        htmlFor={!props.noLabel ? uniqueId : undefined}
        aria-labelledby={inputName ? uniqueId : undefined}
      >
        {!props.noLabel && <FieldLabel label={inputName} isRequired={props.required} />}
        <textarea
          ref={ref}
          aria-labelledby={inputName ? uniqueId : undefined}
          className={cn("text-700 border-500 bg-100 w-full rounded-md px-3.5 py-2")}
          id={uniqueId}
          name={uniqueId}
          placeholder={placeholder}
          readOnly={readOnly}
          title=""
          {...eventHandlers}
        />
      </DynamicElement>
    </div>
  )
})

Textarea.displayName = "Textarea"

export { Textarea }
