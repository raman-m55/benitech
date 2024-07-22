"use client";
import React, { useEffect, useState , useRef} from "react";
import { IoIosArrowDown} from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineDashboard } from 'react-icons/ai';
import { CiShoppingCart } from 'react-icons/ci';
import { TbCategoryPlus } from 'react-icons/tb';
import { FaRegUser } from 'react-icons/fa';
import { useClickAway } from 'react-use'

const items = [
  {
    label: 'داشبورد',
    route: '/dashboard',
    icon: <AiOutlineDashboard />,
  },
  {
    label: 'محصولات',
    route: '/dashboard/products',
    icon: <CiShoppingCart />,
  },
  {
    label: 'دسته بندی ها',
    icon: <TbCategoryPlus />,
    subMeno: [
      {
        label: 'محصولات',
        route: '/dashboard/categories/products',
      },
      {
        label: 'وبلاک',
        route: '/dashboard/categories/blogs',
      },
    ],
  },
  {
    label: 'کاربر ها',
    route: '/dashboard/users',
    icon: <FaRegUser />,
  },
];

const MobileSideBarPanel = (
{ isOpen, onClose } : 
{isOpen : boolean, onClose: () => void }) => {
  const [style, setStyle] = useState({
    transform: 'translateX(100%)',
    transition: 'transform 300ms ease-in-out',
  });
  const [openMenus, setOpenMenus] = useState<{
    [key: number]: boolean;
  }>({});  const pathName = usePathname();

  const toggleMenu = (index : number) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const ref = useRef(null)
  useClickAway(ref, () => onClose())
  const toggleSidebar = () => onClose()


  useEffect(() => {
    setStyle({
      transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 300ms ease-in-out',
    });
  }, [isOpen]);

  return (
    <div className={`fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)]
     backdrop-blur-sm ${isOpen ? 'block' : 'hidden'} transition-opacity duration-300`}>
      <div
        className="fixed top-0 right-0 z-50 max-w-xs h-screen bg-white shadow-lg"
        style={style}
      >
        <button onClick={onClose} className="fixed top-2 left-[-25px]">
          <IoClose className="text-2xl text-red-600" />
        </button>
      <div className="flex justify-center items-center w-full mb-4">
        <div className="text-2xl text-black font-bold flex flex-row-reverse items-center justify-center ">
          <h1 className="text-blue-500">Beni</h1>
          <span>tech</span>
        </div>
      </div>
      <div className="w-full p-4 flex flex-col justify-start items-center gap-4">
        {items.map((item, index) =>
          item.subMeno ? (
            <div key={index} className="w-full">
              <div
                onClick={() => toggleMenu(index)}
                className={`w-full p-3 flex items-center justify-between gap-4 hover:bg-gray-200 rounded-md cursor-pointer ${
                  pathName === item.route && 'bg-blue-500 text-white'
                }`}
              >
                <div className="flex items-center justify-start gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-sm">{item.label}</p>
                </div>
                <IoIosArrowDown
                  className={`transition-transform ${
                    openMenus[index] ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openMenus[index] ? 'max-h-screen' : 'max-h-0'
                }`}
              >
                {item.subMeno.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.route}
                    className={`block w-full p-3 pl-6 text-sm text-gray-700
                      hover:bg-gray-100 ${
                      pathName === subItem.route && 'text-blue-500'
                    }`}
                  >
                    <p>{subItem.label}</p>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={index}
              href={item.route}
              className={`w-full p-3 flex items-center justify-start gap-2 hover:bg-gray-200 rounded-md ${
                pathName === item.route && 'bg-blue-500 text-white'
              }`}
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="text-sm">{item.label}</p>
            </Link>
          )
        )}
      </div>
    </div>
    </div>
  );
};

export default MobileSideBarPanel;
