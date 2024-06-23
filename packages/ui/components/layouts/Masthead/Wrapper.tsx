import { Children, type PropsWithChildren, isValidElement } from "react"
import { MastheadDetails } from "./Details"

/**
 * @internal Used for the main `<Masthead>` namespaced component
 */
export function MastheadWrapper(props: PropsWithChildren) {
  // * Might extract this to a custom hook if this use case is shared across the codebase
  const mhWrapperChildren = Children.map(props.children, (child) => {
    const isMastheadDetailsOnly =
      Children.count(props.children) === 1 &&
      isValidElement(child) &&
      child.type === MastheadDetails

    if (isMastheadDetailsOnly) return child

    throw new Error(
      "Only one <Masthead.Details> child element should be only be present from <Masthead.Wrapper>."
    )
  })

  return (
    <div className="mx-auto flex max-w-screen-2xl gap-x-4 px-9">{mhWrapperChildren}</div>
  )
}
