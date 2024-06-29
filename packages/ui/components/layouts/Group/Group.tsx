import type { PropsWithChildren, ReactElement } from "react"
import { generateRandomString } from "@mav/shared/utils"
import { kebabCase } from "lodash"

interface GroupProps {
  title: string
  description?: string | NonNullable<ReactElement>
  /**
   * Adds "Learn more" link at the end of the description
   */
  learnMoreLink?: string
  potentialActions?: string | NonNullable<ReactElement>
}

export function Group(props: PropsWithChildren<GroupProps>) {
  const rndTitle = generateRandomString()
  const rndDesc = generateRandomString()
  const kebabTitle = kebabCase(props.title)

  const ariaLabelledBy = `gt-${kebabTitle}-${rndTitle}`
  const ariaDescribedBy = `gd-${kebabTitle}-${rndDesc}`

  return (
    <section
      id={kebabTitle}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={props.description ? ariaDescribedBy : undefined}
      className="flex flex-col gap-y-1.5"
    >
      <div className={!props.description ? "contents" : "flex flex-col gap-y-0.5"}>
        <h2 id={ariaLabelledBy} className="text-2xl">
          {props.title}
        </h2>
        {props.description && (
          <span id={ariaDescribedBy} className="my-2 opacity-75">
            {props.description}
          </span>
        )}
      </div>
      <div>{props.children}</div>
    </section>
  )
}
