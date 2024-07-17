'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineDashboard } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { TbCategoryPlus } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

export const items = [
  {
    label: 'داشبورد',
    route: '/dashboard',
    icon: <AiOutlineDashboard />
  },
  {
    label: 'محصولات',
    route: '/dashboard/products',
    icon: <CiShoppingCart />
  },
  {
    label: 'دسته بندی ها',
    icon: <TbCategoryPlus />,
    subMeno: [
      {
        label: 'محصولات',
        route: '/dashboard/products/categories'
      },
      {
        label: 'وبلاک',
        route: '/dashboards/blog/categories'
      }
    ]
  },
  {
    label: 'کاربر ها',
    route: '/dashboard/users',
    icon: <FaRegUser />
  }
];

const SideBarPanel = () => {
  const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});
  const pathName = usePathname();

  const toggleMenu = (index: number) => {
    setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className='fixed top-0 right-0 h-screen w-[240px] flex flex-col
     items-center justify-start p-5 bg-white shadow-sm max-sm:hidden'>
      <div className='text-2xl text-black font-bold flex flex-row-reverse
       items-center justify-center'>
        <h1 className='text-blue-500'>Beni</h1><span>tech</span>
      </div>
      <div className='w-full p-4 flex flex-col justify-start items-center gap-4'>
        {items.map((item, index) => (
          item.subMeno ? (
            <div key={index} className='w-full'>
              <div
                onClick={() => toggleMenu(index)}
                className={`w-full p-3 flex items-center justify-between gap-4 hover:bg-gray-200 rounded-md cursor-pointer ${pathName === item.route && 'bg-blue-500 text-white'}`}
              >
                <div className='flex items-center justify-start gap-2'>
                  <span className='text-2xl'>{item.icon}</span>
                  <p className='text-sm'>{item.label}</p>
                </div>
                <IoIosArrowDown className={`transition-transform ${openMenus[index] ? 'rotate-180' : ''}`} />
              </div>
              <div className={`transition-all duration-300 overflow-hidden ${openMenus[index] ? 'max-h-screen' : 'max-h-0'}`}>
                {item.subMeno.map((subItem, subIndex) => (
                  <Link
                    key={subIndex}
                    href={subItem.route}
                    className={`block w-full p-3 pl-6 text-sm text-gray-700
                    hover:bg-gray-100 ${pathName === subItem.route && 'text-blue-500'}`}
                  >
                    <p className='max-md:hidden'>{subItem.label}</p>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={index}
              href={item.route}
              className={`w-full p-3 flex items-center justify-start gap-2 hover:bg-gray-200 rounded-md ${pathName === item.route && 'bg-blue-500 text-white'}`}
            >
              <span className='text-2xl'>{item.icon}</span>
              <p className='text-sm'>{item.label}</p>
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default SideBarPanel;
