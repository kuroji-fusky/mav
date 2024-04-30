import type { Metadata } from "next"
import { Container } from "@/components/dashboard"
import { Button } from "@/components/ui/Buttons"
import { fetchUserData } from "@/utils/api"
import Activity from "./cards/activity"
import Statistics from "./cards/statistics"
import Statuses from "./cards/statuses"

export const metadata: Metadata = {
  title: "Overview"
}

export default async function DashboardPage() {
  const userData = await fetchUserData()
  return (
    <div className="bg-200">
      <Container
        heading="Overview"
        actions={
          <>
            <Button variant="secondary">Manage blacklists</Button>
          </>
        }
      >
        {/* Center */}
        <div className="grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2">
          <Statuses commissionStatus="open" artTradeStatus="open" requestStatus="open" />
          <Statistics profileViews={0} characterViews={0} commissionRevenue={0} />
          <Activity />
        </div>
      </Container>
    </div>
  )
}
