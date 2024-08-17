/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ForwardRefExoticComponent, PropsWithChildren } from "react"
import { cn } from "@mav/shared/utils"
import { AiFillPushpin } from "react-icons/ai"
import { HiMiniEllipsisVertical as EllipsisIcon } from "react-icons/hi2"
import { LuThumbsUp } from "react-icons/lu"
import { Button } from "../buttons"

interface CommentProps {
  avatar: string
  handle: string
  isOP?: true
  userRole?: string
  isPinned?: true
  imgTag?: ForwardRefExoticComponent<any>
}

export function UserComment(props: PropsWithChildren<CommentProps>) {
  const ImageTag = props.imgTag ?? ("img" as const)

  return (
    <div
      data-mav-comment-node=""
      className={cn(
        "flex items-start gap-x-4 rounded-md bg-opacity-70 px-2.5 py-2",
        props.isPinned ? "bg-200" : null
      )}
    >
      <ImageTag
        src={props.avatar}
        alt=""
        width="40"
        height="40"
        className="aspect-square flex-shrink-0 rounded-full object-cover"
      />
      <div className="flex flex-1 -translate-y-0.5 flex-col gap-y-0.5">
        <div className="flex items-center justify-between">
          {/* details */}
          <div className="flex h-6 items-center gap-x-1.5">
            <span className="font-semibold">{`@${props.handle}`}</span>
            {props.isOP && <span className="text-500 font-bold">OP</span>}
            {props.isPinned && (
              <span className="text-500 inline-flex items-center gap-x-1.5">
                <AiFillPushpin />
                <span className="bg-opacity-100">Pinned</span>
              </span>
            )}

            <span className="text-subtext bg-opacity-100 text-xs">3 days ago</span>
          </div>
        </div>
        {/* Comment contents */}
        <div data-mav-comment-contents="">{props.children}</div>
        {/* Comment actions */}
        <div className="mt-0.5 flex -translate-x-1.5 items-center gap-x-1">
          <span className="inline-flex items-center pr-1.5">
            <Button
              size="small"
              className="rounded-full transition-none"
              variant="tritery"
              icon={<LuThumbsUp size={16} />}
            />
            <span className="text-xs">1.9k</span>
          </span>

          <Button size="small" className="transition-none" variant="tritery">
            Reply
          </Button>

          <Button
            size="small"
            className="rounded-full transition-none"
            variant="tritery"
            icon={<EllipsisIcon size={16} />}
          />
        </div>
      </div>
    </div>
  )
}
