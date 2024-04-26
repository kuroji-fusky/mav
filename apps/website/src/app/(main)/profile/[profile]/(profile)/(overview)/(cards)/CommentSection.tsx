import React from "react"
import { Button } from "@/components/ui/Buttons"
import Comments from "@/components/ui/Comments"
import { LuFilter } from "react-icons/lu"

export default function CommentSection({ userData, comments }) {
  return (
    <Comments className="my-6">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-4">
          <span className="text-2xl font-bold">Comments</span>
          <span className="border-400 rounded-full border border-solid px-4 py-1">
            {comments.length > 0 ? comments.length : 0}
          </span>
        </div>
        <Button prefixIcon={<LuFilter size={16} />}>Sort</Button>
      </div>
      <div className="bg-200 flex flex-col gap-y-5 rounded px-6 py-4">
        {/* TODO: Change color */}
        <Comments.Field
          username={userData.handle}
          avatar={userData.avatarUrl}
          commentType="profile"
        />
        {userData.comments.map((comment, index) => (
          <Comments.Item
            username={`@${comment.author.handle}`}
            avatar={comment.author.avatarUrl}
            handle={comment.author.handle}
            key={index}
          >
            {comment.content}
          </Comments.Item>
        ))}
      </div>
    </Comments>
  )
}
