'use client';
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Badge,
  Avatar,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
import { CiBellOn } from 'react-icons/ci';
import { MdManageAccounts, MdOutlineWbSunny } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { LuLogOut, LuMoonStar } from 'react-icons/lu';
import Link from 'next/link';
import Image from 'next/image';
import { menuItemsDashboard } from '../sidebar';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BiChevronDown, BiKey } from 'react-icons/bi';

const items = [
  {
    icon: <MdOutlineWbSunny />,
    label: 'روشن',
    key: '1',
  },
  {
    icon: <LuMoonStar />,
    label: 'تاریک',
    key: '2',
  },
];

function AdminPanelNavbar() {
  const [user, setUser] = useState({
    name: 'raman',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const handleSubMenuToggle = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <Navbar maxWidth="2xl" className="z-[1000]">
      <NavbarBrand>
        <Link href="/" className="flex items-center gap-[2px]">
          <Image src="/assets/main-logo.png" width={200} height={50} alt="main logo" />
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end" className="w-[250px]">
        <Badge content="5" size="sm" color="danger" className="border-1 border-gray-200">
          <Button isIconOnly color="primary" variant="bordered" size="sm">
            <CiBellOn className="text-2xl" />
          </Button>
        </Badge>

        <Dropdown className=" w-auto min-w-0 ">
          <DropdownTrigger>
            <Button isIconOnly color="primary" size="sm">
              <MdOutlineWbSunny className="text-xl" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Dynamic Actions" items={items} className="w-[100px]">
            {(item) => (
              <DropdownItem key={item.key} color="default">
                <div className="flex w-full justify-between gap-2 p-2">
                  <p>{item.label}</p>
                  <span className="text-xl max-md:text-md max-sm:text-sm text-gray-500">
                    {item.icon}
                  </span>
                </div>
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="light"
              startContent={<Avatar size="sm" src={user.avatar} />}
              endContent={<BiChevronDown />}
            >
              {user.name}
            </Button>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>
              <div className="flex items-center gap-4">
                <MdManageAccounts className='text-2xl text-blue-400'/>
                <span>مدیریت حساب</span>
              </div>
            </DropdownItem>
            <DropdownItem>
              <div className="flex items-center gap-4">
                <BiKey className='text-2xl text-violet-400'/>
                <span>تغییر رمز عبور</span>
              </div>
            </DropdownItem>
            <DropdownItem>
              <div className="flex items-center gap-4">
                <LuLogOut className='text-2xl text-red-400'/>
                <span>خروج از حساب</span>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      <NavbarMenu>
        {menuItemsDashboard.map((item, index) => (
          <div key={index}>
            <NavbarMenuItem>
              <div
                className="flex items-center justify-between w-full"
                onClick={() => handleSubMenuToggle(index)}
              >
                <Link href="#" className="flex items-center gap-2 w-full">
                  <span className="text-blue-700 text-xl">{item.icon}</span>
                  <span className="p-2">{item.name}</span>
                </Link>
                {item.subMenu && (
                  <span>
                    {openSubMenu === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                )}
              </div>
            </NavbarMenuItem>
            {item.subMenu && (
              <div
                className={`overflow-hidden ${
                  openSubMenu === index
                    ? 'transition-max-height duration-500 ease-in-out max-h-96'
                    : 'max-h-0'
                }`}
              >
                {item.subMenu.map((subItem, subIndex) => (
                  <NavbarMenuItem key={subIndex} className="mr-7">
                    <Link href={subItem.route}>
                      <p className="text-gray-700 text-sm my-2">{subItem.label}</p>
                    </Link>
                  </NavbarMenuItem>
                ))}
              </div>
            )}
          </div>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default AdminPanelNavbar;
