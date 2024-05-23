"use client"

import { forwardRef } from "react"
import type { ReactHTMLElement } from "@myartverse/shared/types"
import { cn, generateRandomString } from "@myartverse/shared/utils"
import { kebabCase } from "lodash"
import FieldLabel from "./FieldLabel"
import { DIV_TAG, LABEL_TAG } from "./fields.constants"

type PickedTextareaProps = Pick<
  ReactHTMLElement<"textarea">,
  | "placeholder"
  | "className"
  | "required"
  | "value"
  | "readOnly"
  | "onKeyDown"
  | "onClick"
  | "onBlur"
>

interface TextAreaProps extends PickedTextareaProps {
  inputName: string
  noLabel: boolean
  error: string
  height: number
  heightLimit: number
  isResizable: boolean
}

const rndString = generateRandomString()

const Textarea = forwardRef<HTMLTextAreaElement, Partial<TextAreaProps>>((props, ref) => {
  const kebabedInputName = kebabCase(props.inputName)
  const DynamicElement = !props.noLabel ? LABEL_TAG : DIV_TAG

  const a11yLabelledBy = `${kebabedInputName}-${rndString}`

  return (
    <div data-mav-textarea="" className="w-full">
      <span className="sr-only" id={a11yLabelledBy}>
        {props.inputName}
      </span>
      <DynamicElement
        className="flex flex-col gap-y-1.5"
        htmlFor={!props.noLabel ? kebabedInputName : undefined}
        aria-labelledby={props.inputName ? a11yLabelledBy : undefined}
      >
        {!props.noLabel && (
          <FieldLabel label={props.inputName} isRequired={props.required} />
        )}
        <textarea
          ref={ref}
          className={cn("text-700 border-500 bg-100 w-full rounded-md px-3.5 py-2")}
          id={kebabedInputName}
          name={kebabedInputName}
          {...props}
          // @ts-ignore
          inputName={null}
        />
      </DynamicElement>
    </div>
  )
})

Textarea.displayName = "Textarea"

export { Textarea }
