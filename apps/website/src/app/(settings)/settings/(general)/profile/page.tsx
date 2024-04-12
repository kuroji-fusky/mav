import { redirect } from "next/navigation"
import { useState } from "react"
import DropZone from "@/components/ui/Forms/DropZone"
import { fetchUserData } from "@/utils/api"
import ProfileEdit from "./ProfileEdit"

export default async function Page() {
  const user = await fetchUserData().catch(() => {
    redirect("/login")
  })

  return <ProfileEdit user={user} />
}
