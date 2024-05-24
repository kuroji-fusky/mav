import { useMemo } from "react"
import { generateRandomString } from "@myartverse/shared/utils"
import { kebabCase } from "lodash"

/**
 * Used for targetting accessibility tools
 */
export const useMemoizeA11yLabel = (propName?: string) => {
  return useMemo(() => {
    const rndString = generateRandomString()

    const kebabedPropName = kebabCase(propName)
    const ariaLabelledBy = `${kebabedPropName}-${rndString}`

    return { ariaLabelledBy, kebabedPropName }
  }, [propName])
}
