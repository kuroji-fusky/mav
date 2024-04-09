"use client"

import Link from "next/link"
import { generateCreateItems, generateSiteSettingItems } from "@/utils/generateItems"
import { LuChevronDown, LuLogIn, LuMoreVertical, LuPlus } from "react-icons/lu"
import type { UserType } from "@/types/users"
import { Separator } from "../ui"
import { Avatar, Button } from "../ui/Buttons"
import { Dropdown, DropdownItem } from "../ui/Dropdown"

export default function NavbarUserActions({
  isRegistered,
  user
}: {
  isRegistered?: boolean
  user?: UserType
}) {
  const createNewItems = generateCreateItems()
  const siteSettingsItems = generateSiteSettingItems(
    isRegistered,
    user ? user.handle : null
  )

  if (!isRegistered) {
    return (
      <>
        <Button
          icon={<LuMoreVertical size={20} />}
          variant="secondary"
          aria-label="Site options"
        />
        <Button variant="primary" href="/login" prefixIcon={<LuLogIn size={19} />}>
          Login
        </Button>
      </>
    )
  }

  return (
    <>
      <Dropdown
        button={
          <Button
            icon={<LuPlus size={20} />}
            suffixIcon={<LuChevronDown size={20} />}
            aria-label="Site options"
            variant="tritery"
          />
        }
        items={
          <>
            {createNewItems.map((item, index) =>
              item.name != undefined ? (
                <DropdownItem
                  key={index}
                  link={item.link}
                  prefixIcon={<item.icon size={22} />}
                >
                  {item.name}
                </DropdownItem>
              ) : (
                <div className="my-2" key={index}>
                  <Separator dir="horizontal" />
                </div>
              )
            )}
          </>
        }
      />
      <Dropdown
        button={
          <Link href={`/@${user.handle}` as unknown}>
            <Avatar
              username={user.handle}
              size={32}
              src={user.avatarUrl || "/UserProfile.png"}
            />
          </Link>
        }
        items={
          <>
            <DropdownItem link={`/@${user.handle}`}>
              <div className="flex flex-row items-center space-x-5 pr-24">
                <Avatar
                  username={user.handle}
                  size={74}
                  src={user.avatarUrl || "/UserProfile.png"}
                />
                <div className="flex flex-col">
                  {/* TODO: Display Badges */}
                  <span className="text-xl font-bold">{user.displayName} </span>
                  <span>@{user.handle}</span>
                </div>
              </div>
            </DropdownItem>
            <div className="my-2">
              <Separator dir="horizontal" />
            </div>
            {siteSettingsItems.map((item, index) =>
              item.name != undefined ? (
                <DropdownItem
                  key={index}
                  link={item.link}
                  prefixIcon={<item.icon size={22} />}
                >
                  {item.name}
                </DropdownItem>
              ) : (
                <div className="my-2" key={index}>
                  <Separator dir="horizontal" />
                </div>
              )
            )}
          </>
        }
      />
    </>
  )
}
