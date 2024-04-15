"use client"

import React, { useState } from "react"
import { Separator } from "@/components/ui"
import { Button } from "@/components/ui/Buttons"
import { InputField, SelectField } from "@/components/ui/Forms"
import DropZone from "@/components/ui/Forms/DropZone"
import { pronounOptions } from "@/constants"
import { BACKEND_URL } from "@/utils/env"
import { d } from "@tanstack/react-query-devtools/build/legacy/devtools-9h89nHJX"
import type { UserType } from "@/types/users"

export default function AccountEdit({ user }: { user: UserType }) {
  const [handle, setHandle] = useState(user.handle)
  const [password, setPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  // TODO: API Update Auth

  return (
    <div className="space-y-12">
      <div>
        <h1 className="my-4 text-2xl">Account Information</h1>
        <Separator dir="horizontal" />
        <div className="mt-4 flex flex-row items-center justify-between space-x-6">
          <div className=" w-2/3 space-y-5">
            <InputField inputName="Handle" value={`@${handle}`} />
            <Button>Save</Button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="my-4 text-2xl">Change Password</h1>
        <Separator dir="horizontal" />
        <div className="mt-4 flex flex-row items-center justify-between space-x-6">
          <div className=" w-2/3 space-y-5">
            <InputField
              inputName="Current Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputField
              inputName="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <InputField
              inputName="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button>Save</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
