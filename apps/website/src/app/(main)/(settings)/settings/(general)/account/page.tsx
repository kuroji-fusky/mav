import { redirect } from "next/navigation"
import { fetchUserData } from "@/utils/api"
import AccountEdit from "./AcountSettings"

export default async function Page() {
  const user = await fetchUserData().catch(() => {
    redirect("/login")
  })

  return <AccountEdit user={user} />
}
