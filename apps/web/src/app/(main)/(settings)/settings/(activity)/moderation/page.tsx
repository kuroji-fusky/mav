import Link from "next/link"
import { Button } from "@mav/ui/components/buttons"
import { Group, GroupContainer } from "@mav/ui/components/layouts"

export const metadata = {
  title: "Moderation"
}

export default function SettingsModerationPage() {
  return (
    <GroupContainer>
      <Group title="Explicit content" description="Blocklol"></Group>
      <Group
        title="Profanity"
        description="Manage how you handle strong language and euphemisms"
      ></Group>
      <Group title="Restrict messages">
        <div>"hi" messages</div>
      </Group>
    </GroupContainer>
  )
}
