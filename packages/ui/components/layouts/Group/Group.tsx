import type { PropsWithChildren, ReactElement } from "react"
import { kebabCase } from "lodash"

interface GroupProps {
  title: string
  description?: string | NonNullable<ReactElement>
  /**
   * Adds "Learn more" link at the end of the description
   */
  learnMoreLink?: string
  prefixIcon?: unknown
  potentialActions?: string | NonNullable<ReactElement>
}

export function Group(props: PropsWithChildren<GroupProps>) {
  const rndTitle = crypto.randomUUID()
  const rndDesc = crypto.randomUUID()

  const kebabTitle = kebabCase(props.title)

  const ariaLabelledBy = `gt-${kebabTitle}-${rndTitle}`
  const ariaDescribedBy = `gd-${kebabTitle}-${rndDesc}`

  return (
    <section
      data-mav-group=""
      id={kebabTitle}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={props.description ? ariaDescribedBy : undefined}
      className="flex flex-col gap-y-1.5"
    >
      <div className={!props.description ? "contents" : "flex flex-col gap-y-0.5"}>
        <div className="flex items-center justify-between">
          <h2 id={ariaLabelledBy} className="text-2xl">
            {props.title}
          </h2>
          <div className="empty:hidden">{props.potentialActions}</div>
        </div>
        {props.description ? (
          <span id={ariaDescribedBy} className="my-2 opacity-75">
            {props.description}
          </span>
        ) : null}
      </div>
      {props.children ? <div>{props.children}</div> : null}
    </section>
  )
}
