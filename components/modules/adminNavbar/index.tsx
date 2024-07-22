'use client';
import { NotificationIcon } from '@/constants/icons.nextUi';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
  Badge,
} from '@nextui-org/react';
import { useState } from 'react';
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io';
import MobileSideBarPanel from '../mobileDashboardSidbar';

const AdminPanelNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isInvisible, setIsInvisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };


  return (
      <nav className="flex items-center justify-between p-4 bg-white w-full">
        <div
          className="text-2xl cursor-pointer"
          onClick={toggleSidebar}
        >
          <IoIosMenu />
    
        </div>
          <MobileSideBarPanel
            isOpen={isSidebarOpen}
            onClose={toggleSidebar}
              />
        <div className="flex items-center justify-start gap-4">
          <Badge
            color="danger"
            content={5}
            isInvisible={isInvisible}
            shape="circle"
          >
            <NotificationIcon
              className="fill-current text-blue-500"
              size={30}
            />
          </Badge>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <div className="flex items-center justify-between gap-3">
                <User
                  as="button"
                  avatarProps={{
                    isBordered: true,
                    src: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
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
            <DropdownMenu
              aria-label="Profile Actions"
              variant="flat"
            >
              <DropdownItem
                key="profile"
                className="h-14 gap-2"
              >
                <p className="font-semibold">
                  Signed in as
                </p>
                <p className="font-semibold">
                  zoey@example.com
                </p>
              </DropdownItem>
              <DropdownItem key="settings">
                My Settings
              </DropdownItem>
              <DropdownItem key="team_settings">
                Team Settings
              </DropdownItem>
              <DropdownItem key="analytics">
                Analytics
              </DropdownItem>
              <DropdownItem key="system">
                System
              </DropdownItem>
              <DropdownItem key="configurations">
                Configurations
              </DropdownItem>
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

  );
};

export default AdminPanelNavbar;
