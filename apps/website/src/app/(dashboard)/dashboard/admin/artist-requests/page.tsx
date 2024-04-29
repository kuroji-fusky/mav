import { Separator } from "@/components/ui"
import { Avatar } from "@/components/ui/Buttons"
import { fetchArtistRequests, fetchSelfCharacter } from "@/utils/api"
import ArtistRequestee from "./ArtistRequestee"

export default async function ArtistReqPage() {
  const artistRequests = await fetchArtistRequests()

  return (
    <div className="bg-200 m-6 flex w-1/2 flex-col rounded-lg p-4">
      <span className="mb-5 text-3xl">Pending Apps</span>
      <Separator dir="horizontal" />
      {artistRequests.map((request) => (
        <ArtistRequestee
          id={request.id}
          key={request.id}
          avatarUrl={request.avatarUrl}
          handle={request.handle}
          date={request.dateRegistered}
          application={request.artistApplication}
        />
      ))}
    </div>
  )
}
