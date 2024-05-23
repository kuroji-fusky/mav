"use client"

import {
  type ElementRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from "react"
import type { ReactHTMLElement } from "@myartverse/shared/types"
import { cn, generateRandomString } from "@myartverse/shared/utils"
import { kebabCase } from "lodash"
import FieldLabel from "./FieldLabel"
import { DIV_TAG, LABEL_TAG } from "./fields.constants"

type PickedInputProps = Pick<
  ReactHTMLElement<"input">,
  | "type"
  | "placeholder"
  | "required"
  | "onChange"
  | "value"
  | "readOnly"
  | "className"
  | "onKeyDown"
  | "onClick"
  | "onBlur"
>

interface InputFieldProps extends PickedInputProps {
  inputName: string
  noLabel: boolean
  error: string
  prefix: string
  suffix: string
}

const rndString = generateRandomString()

const InputField = forwardRef<HTMLInputElement, Partial<InputFieldProps>>(
  (props, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const internalRef = useRef<ElementRef<"input">>(null)

    useImperativeHandle(ref, () => internalRef.current!, [])

    useEffect(() => {
      const inputBox = internalRef.current!

      const focusTrue = () => setIsFocused(true)
      const focusFalse = () => setIsFocused(false)

      inputBox.addEventListener("focus", focusTrue)
      inputBox.addEventListener("blur", focusFalse)

      return () => {
        inputBox.removeEventListener("focus", focusTrue)
        inputBox.removeEventListener("blur", focusFalse)
      }
    }, [internalRef])

    const kebabedInputName = kebabCase(props.inputName)

    const DynamicElement = !props.noLabel ? LABEL_TAG : DIV_TAG
    const a11yLabelledBy = `${kebabedInputName}-${rndString}`

    return (
      <div data-mav-input-field="" className="w-full">
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
          <div
            style={{ borderWidth: 1 }}
            className={cn(
              "flex overflow-hidden rounded-md transition-colors",
              !isFocused ? "border-400" : "border-500"
            )}
          >
            {props.prefix && (
              <div className="bg-300 flex select-none items-center px-3">
                {props.prefix}
              </div>
            )}
            <input
              ref={internalRef}
              aria-labelledby={props.inputName ? a11yLabelledBy : undefined}
              className={cn(
                "text-700 bg-100 w-full border-0 px-3.5 py-2",
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
              // @ts-ignore
              inputName={null}
            />
            {props.suffix && (
              <div className="bg-300 flex select-none items-center px-3">
                {props.suffix}
              </div>
            )}
          </div>
        </DynamicElement>
        {/* Error messages */}
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

export { InputField }
