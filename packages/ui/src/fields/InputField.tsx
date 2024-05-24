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
import { cn } from "@myartverse/shared/utils"
import FieldLabel from "./FieldLabel"
import { DIV_TAG, LABEL_TAG } from "./fields.constants"
import type { MAVFields } from "./fields.types"
import { useMemoizeA11yLabel } from "./fields.utils"

type PickedInputProps = Pick<
  ReactHTMLElement<"input">,
  | "type"
  | "placeholder"
  | "required"
  | "onChange"
  | "value"
  | "readOnly"
  | "onKeyDown"
  | "onClick"
  | "onBlur"
>

interface InputFieldProps extends PickedInputProps, MAVFields {
  prefix: string
  suffix: string
  regex: RegExp
}

interface _InnerFieldLabelProps {
  label: string
}

const InnerFieldLabel = (props: _InnerFieldLabelProps) => {
  return <div className="bg-300 flex select-none items-center px-3">{props.label}</div>
}

const InputField = forwardRef<HTMLInputElement, Partial<InputFieldProps>>(
  (props, ref) => {
    const {
      inputName,
      error,
      noLabel,
      placeholder,
      prefix,
      required,
      suffix,
      type,
      readOnly,
      ...eventHandlers
    } = props

    const a11yMemo = useMemoizeA11yLabel(inputName)

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

    const DynamicElement = !noLabel ? LABEL_TAG : DIV_TAG

    return (
      <div data-mav-input-field="" className="w-full">
        <span className="sr-only" id={a11yMemo.ariaLabelledBy}>
          {inputName}
        </span>
        <DynamicElement
          className="flex flex-col gap-y-1.5"
          htmlFor={!noLabel ? a11yMemo.kebabedPropName : undefined}
          aria-labelledby={inputName ? a11yMemo.ariaLabelledBy : undefined}
        >
          {!noLabel && <FieldLabel label={inputName} isRequired={required} />}
          <div
            style={{ borderWidth: 1 }}
            className={cn(
              "flex overflow-hidden rounded-md transition-colors",
              !isFocused ? "border-400" : "border-500 bg-200"
            )}
          >
            {prefix && <InnerFieldLabel label={prefix} />}
            <input
              ref={internalRef}
              aria-labelledby={inputName ? a11yMemo.ariaLabelledBy : undefined}
              className={cn(
                "text-700 w-full border-0 bg-transparent px-3.5 py-2 focus:ring-0",
                error ? "border-error" : null
              )}
              id={a11yMemo.kebabedPropName}
              name={a11yMemo.kebabedPropName ?? undefined}
              type={type}
              readOnly={readOnly}
              placeholder={placeholder}
              required={required}
              autoCapitalize="none"
              autoComplete="off"
              spellCheck={false}
              title=""
              {...eventHandlers}
            />
            {suffix && <InnerFieldLabel label={suffix} />}
          </div>
        </DynamicElement>
        {/* Error messages */}
        <div
          id="field-error-boundary"
          className={cn("text-error mt-2", !error ? "hidden" : "")}
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
