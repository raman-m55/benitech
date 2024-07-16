'use client'
import { NotificationIcon } from "@/constants/icons.nextUi";
import {
Dropdown,
DropdownTrigger,
DropdownMenu,
DropdownItem,
User,
Badge,} from "@nextui-org/react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";

const AdminPanelNavbar = () => {
  const [isInvisible, setIsInvisible] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white w-full">
      <div>
        test
      </div>
      <div className="flex items-center justify-start gap-4">
        <Badge color="danger" content={5} isInvisible={isInvisible} shape="circle">
          <NotificationIcon className="fill-current text-blue-500" size={30}/>
        </Badge>
        <Dropdown placement="bottom-end">
        
          <DropdownTrigger>
          <div className="flex items-center justify-between gap-3">
          <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              }}
              className="transition-transform"
              description="@tonyreichert"
              name="Tony Reichert"
            />
            <div className="p-1 rounded-full text-md border-1 border-gray-300">
              <IoIosArrowDown />
            </div>
          </div>
            
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">
              My Settings
            </DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">
              Analytics
            </DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">
              Help & Feedback
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      
    </nav>
  )
}

export default AdminPanelNavbar;