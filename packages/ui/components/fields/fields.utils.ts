import { useMemo } from "react"
import { kebabCase } from "lodash"

/**
 * Used for targetting accessibility tools
 */
export const useMemoizeA11yLabel = (propName?: string) => {
  return useMemo(() => {
    const rndString = crypto.randomUUID()

    const kebabedPropName = kebabCase(propName)
    const ariaLabelledBy = `${kebabedPropName}-${rndString}`

    return { ariaLabelledBy, kebabedPropName }
  }, [propName])
}
