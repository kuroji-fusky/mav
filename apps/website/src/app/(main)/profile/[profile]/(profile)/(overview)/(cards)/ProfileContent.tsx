import React from "react"
import { Field, Group } from "@/components/ui"
import { Button } from "@/components/ui/Buttons"
import type { UserType } from "@/types/users"

export default function ProfileContent({ userData }: { userData: UserType }) {
  return (
    <Group>
      <Group.Header>
        About {userData.displayName ? userData.displayName : userData.handle}
      </Group.Header>
      <Group.HeaderButtons>
        <Button size="small">Edit</Button>
      </Group.HeaderButtons>
      <Group.Content>
        <Field
          title="Date joined"
          content={new Date(userData.dateRegistered).toDateString()}
        />
        {/* TODO: Custom attributes for Backend */}
        <Field
          title="Birthday"
          content={
            userData.birthday ? new Date(userData.birthday).toDateString() : "Not Set"
          }
        />
        <Field
          title="Pronouns"
          content={userData.pronouns ? userData.pronouns : "Not Set"}
        />
        <Field
          title="Nationality"
          content={userData.nationaility ? userData.nationaility : "Not Set"}
        />
        {/* <Field title="Nationality" content="Murica" /> */}
      </Group.Content>
    </Group>
  )
}
