import { useState } from "react"
import { LuBell, LuCheck, LuMoreVertical } from "react-icons/lu"
import type { Notification } from "@/types/users"
import { Button } from "../ui/Buttons"
import UserNotification from "./Notification"

const Notifications = ({ notifications }: { notifications: Notification[] }) => {
  const [showNotifications, setShowNotifications] = useState(false)

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications)
  }

  return (
    <div className="relative">
      <Button
        onClick={toggleNotifications}
        icon={<LuBell size={20} />}
        variant="tritery"
        aria-label="Toggle notifications"
      />
      {showNotifications && (
        <div className="bg-300 absolute right-1/4 mt-4 w-[500px] rounded-md px-4">
          <div className="flex flex-col justify-between  p-2">
            <div className="mb-2 flex flex-row items-center justify-between">
              <h1 className="text-xl">Notification</h1>
              <div className="flex flex-row items-center">
                <Button prefixIcon={<LuCheck size={20} />} variant="tritery" />
                <Button prefixIcon={<LuMoreVertical size={20} />} variant="tritery" />
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              {notifications
                ? notifications.map((notification, index) => (
                    <UserNotification notification={notification} key={index} />
                  ))
                : null}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Notifications
