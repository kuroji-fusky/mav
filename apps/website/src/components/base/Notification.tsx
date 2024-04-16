import Image from "next/image"
import React from "react"
import { LuCheck, LuMoreVertical } from "react-icons/lu"
import type { Notification } from "@/types/users"
import { Avatar, Button } from "../ui/Buttons"

export default function UserNotification({
  notification
}: {
  notification: Notification
}) {
  console.log(notification)
  return (
    <div className="bg-200 flex flex-row items-center p-4">
      <div>
        {notification.user && notification.sender && (
          // Overlap User/Sender avatar
          <div className="relative mr-4 h-16 w-16">
            <Image
              src={notification.user.avatarUrl}
              alt={notification.user.handle}
              width={50}
              height={50}
              className="absolute left-0 h-14 w-14 rounded-full"
            />
            <Image
              src={notification.sender.avatarUrl}
              alt={notification.sender.handle}
              width={45}
              height={45}
              className="border-200 absolute bottom-0 right-0 h-10 w-10 rounded-full border-4"
            />
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-4">
        {notification.content}
        {notification.comment && (
          <div className="bg-300 mt-4 rounded-md p-2">{notification.comment.content}</div>
        )}
        <div className="text-sm text-gray-500">
          {new Date(notification.createdAt).toLocaleString()}
        </div>
      </div>

      <div className="flex flex-row">
        <Button prefixIcon={<LuCheck size={20} />} variant="tritery" />
        <Button prefixIcon={<LuMoreVertical size={20} />} variant="tritery" />
      </div>
    </div>
  )
}
