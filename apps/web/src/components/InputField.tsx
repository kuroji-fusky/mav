"use client"

import { forwardRef } from "react"
import type { ReactHTMLElement } from "@myartverse/shared/types"
import { cn, generateRandomString } from "@myartverse/shared/utils"
import { kebabCase } from "lodash"

type PickedInputProps = Pick<
  ReactHTMLElement<"input">,
  | "type"
  | "placeholder"
  | "required"
  | "onChange"
  | "value"
  | "readOnly"
  | "onKeyDown"
  | "className"
>

interface InputFieldProps extends PickedInputProps {
  inputName?: string
  noLabel?: boolean
  error?: string
}

const InputField = forwardRef(
  (props: InputFieldProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const kebabedInputName = kebabCase(props.inputName)

    const LABEL_TAG = "label" as const
    const DIV_TAG = "div" as const
    const DynamicElement = !props.noLabel ? LABEL_TAG : DIV_TAG

    const rndString = generateRandomString()

    const a11yLabelledBy = `${kebabedInputName}-${rndString}`

    return (
      <div className="w-full">
        <span className="sr-only" id={a11yLabelledBy}>
          {props.inputName}
        </span>
        <DynamicElement
          htmlFor={!props.noLabel ? kebabCase(props.inputName) : undefined}
          className="flex flex-col gap-y-1.5"
          aria-labelledby={a11yLabelledBy}
        >
          {!props.noLabel ? (
            <span
              aria-labelledby={a11yLabelledBy}
              className={cn(
                "text-600 flex gap-x-0.5 font-bold uppercase",
                props.required
                  ? "after:text-error after:ml-1 after:font-bold after:content-['*']"
                  : null
              )}
            >
              {props.inputName}
            </span>
          ) : null}
          <input
            ref={ref}
            aria-labelledby={a11yLabelledBy}
            className={cn(
              "text-700 border-400 bg-100 w-full rounded-md border px-4 py-2",
              props.error ? "border-error" : null,
              props.className
            )}
            id={kebabedInputName}
            name={kebabedInputName}
            type={props.type}
            placeholder={props.placeholder}
            required={props.required}
            autoCapitalize="none"
            autoComplete="off"
            spellCheck={false}
            {...props}
          />
        </DynamicElement>
        <div
          id="field-error-boundary"
          className={cn("text-error mt-2", !props.error ? "hidden" : "")}
        >
          {/* <Note inline type="error">
            {error}
          </Note> */}
        </div>
      </div>
    )
  }
)

InputField.displayName = "InputField"

export default InputField
