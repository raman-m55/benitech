"use client";
import { usePathname, useRouter } from "next/navigation";
import { sidebarInterface } from "./model";
import { Button } from "@nextui-org/react";

import { CiCircleList, CiShoppingCart } from "react-icons/ci";
import { FaBoxArchive, FaHouse, FaUser } from "react-icons/fa6";

import { GoGear } from "react-icons/go";
import { IoExitOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

function SideBarPanel() {
  const sidebarItems: sidebarInterface[] = [
    {
      id: 0,
      name: "داشبورد",
      href: "/dashboard",
      icon: <FaHouse />,
    },
    {
      id: 1,
      name: "محصولات",
      href: "/dashboard/products",
      icon: <CiShoppingCart />,
    },
    // {
    //   id: 2,
    //   name: "دسته ها",
    //   href: "/dashboard/types",
    //   icon: <CiCircleList />,
    // },
    {
      id: 3,
      name: "کاربران",
      href: "/dashboard/users",
      icon: <FaUser />,
    },
    // {
    //   id: 4,
    //   name: "فروشگاه",
    //   href: "/dashboard/shop",
    //   icon: <FaBasketShopping />,
    // },
  ];
  const location = usePathname();
  const navigate = useRouter();

  return (
    <aside dir="ltr" className="fixed top-0 right-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full overflow-y-auto pr-3 bg-white flex flex-col justify-between">
        <ul className="space-y-2 font-medium">
          <li className="flex justify-end my-8">
            <Image
              src="/assets/main-logo.png"
              width={200}
              height={50}
              alt="main logo"
            />
          </li>
          {sidebarItems.map((item) => (
            <li
              className={`text-right ${
                location === item.href
                  ? "border-l-4 border-blue-500"
                  : ""
              }`}
              key={item.id}
            >
              <Button
                color={`${
                  location === item.href ? "primary" : "default"
                }`}
                as={Link}
                href={item.href}
                className={`flex items-center justify-end p-2 rounded-lg text-right group`}
                variant="light"
              >
                <span>{item.name}</span>
                <div>{item.icon}</div>
              </Button>
            </li>
          ))}
        </ul>
        <div className="mb-4">
          <Button
            variant="light"
            className="flex items-center justify-end p-2 rounded-lg text-right group w-full"
          >
            <span>تنظیمات</span>
            <div>
              <GoGear />
            </div>
          </Button>
          <Button
            variant="light"
            className="flex items-center justify-end p-2 rounded-lg text-right group w-full"
            color="danger"
            // onClick={() => {
            //   navigate.push("/");
            // }}
          >
            <span>خروج</span>
            <div>
              <IoExitOutline />
            </div>
          </Button>
        </div>
      </div>
    </aside>
  );
}

export default SideBarPanel;
