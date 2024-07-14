'use client'
import { MenuItemDashboard } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {  FaShoppingCart, FaUsers, FaTag, FaFileAlt, FaFolder, FaChartLine, FaUserShield, FaCog, FaSearch, FaAd, FaEnvelope, FaFileUpload, FaLock } from 'react-icons/fa';
import { FaHouseChimney } from "react-icons/fa6";

export const menuItemsDashboard: MenuItemDashboard[] = [
  {
    id: 0,
    name: 'داشبورد',
    href: '/dashboard',
    icon: <FaHouseChimney />,
    subMenu: [
      { label: 'نمایش کلی', route: '/dashboard/' },
      { label: 'گزارش‌های فروش', route: 'dashboard/orders/sales-reports' },
      { label: 'موجودی', route: '/dashboard/products/inventory' },
      { label: 'بازدیدها', route: '/dashboard/reports/visits' },
    ],
  },
  {
    id: 1,
    name: ' محصولات',
    href: '/dashboard/products',
    icon: <FaShoppingCart />,
    subMenu: [
      { label: 'لیست محصولات', route: '/dashboard/products' },
      { label: 'افزودن محصول', route: '/dashboard/products/create' },
      { label: 'دسته‌بندی محصولات', route: '/dashboard/products/categories' },
      { label: 'مدیریت موجودی', route: '/dashboard/products/inventory' },
    ],
  },
  {
    id: 2,
    name: ' سفارشات',
    href: '/dashboard/orders',
    icon: <FaFileAlt />,
    subMenu: [
      { label: 'لیست سفارشات', route: '/dashboard/orders/' },
      { label: 'گزارش فروش', route: '/dashboard/orders/sales-reports' },
    ],
  },
  {
    id: 3,
    name: ' مشتریان',
    href: '/dashboard/customers',
    icon: <FaUsers />,
    subMenu: [
      { label: 'لیست مشتریان', route: '/dashboard/customers' },
      { label: 'مدیریت حساب مشتریان', route: '/dashboard/customers/manage' },
    ],
  },
  {
    id: 4,
    name: ' تخفیف‌ها و کوپن‌ها',
    href: '/dashboard/discounts',
    icon: <FaTag />,
    subMenu: [
      { label: 'لیست تخفیف‌ها و کوپن‌ها', route: '/dashboard/discounts' },
      { label: 'افزودن تخفیف', route: '/dashboard/discounts/add' },
    ],
  },
  {
    id: 5,
    name: ' وبلاگ',
    href: '/dashboard/blog',
    icon: <FaFileAlt />,
    subMenu: [
      { label: 'لیست پست‌ها', route: '/dashboard/blog' },
      { label: 'افزودن پست', route: '/dashboard/blog/create' },
      { label: 'دسته‌بندی پست‌ها', route: '/dashboard/blog/categories' },
      { label: 'مدیریت نظرات', route: '/dashboard/blog/comments' },
    ],
  },
  {
    id: 6,
    name: ' دسته‌بندی‌ها',
    href: '/dashboard/categories',
    icon: <FaFolder />,
    subMenu: [
      { label: 'دسته‌بندی محصولات', route: '/dashboard/products/categories' },
      { label: 'دسته‌بندی وبلاگ', route: '/dashboard/blog/categories' },
    ],
  },
  {
    id: 7,
    name: 'گزارشات و آنالیزها',
    href: '/dashboard/reports',
    icon: <FaChartLine />,
    subMenu: [
      { label: 'گزارشات فروش', route: '/dashboard/orders/sales-reports' },
      { label: 'گزارشات بازدید', route: '/dashboard/reports/visits' },
      { label: 'گزارشات موجودی', route: '/dashboard/products/inventory' },
    ],
  },
  {
    id: 8,
    name: ' کاربران و نقش‌ها',
    href: '/dashboard/users',
    icon: <FaUserShield />,
    subMenu: [
      { label: 'ایجاد کاربر', route: '/dashboard/users/create' },
    ],
  },
  {
    id: 14,
    name: ' فایل‌ها و رسانه‌ها',
    href: '/dashboard/media',
    icon: <FaFileUpload />,
    subMenu: [
      { label: 'آپلود فایل‌ها', route: '/dashboard/media/upload' },
      { label: 'مدیریت فایل‌ها', route: '/dashboard/media' },
    ],
  },

];


const SideBarPanel = () => {
  const pathName = usePathname();
  return (
    <div className='fixed z-[100] top-0 right-0 pt-[90px] h-full w- flex flex-col items-start justify-start gap-4  bg-white shadow-lg max-sm:hidden  '>
      {menuItemsDashboard.map((item , index) => (
        <div key={index} className={`flex items-center justify-start gap-3
        w-full hover:bg-gray-200 p-2 px-4 group relative 
        ${pathName === item.href && 'border-l-5 border-blue-700' }`}>
          <span className='text-blue-700 text-xl'>
            {item.icon}
          </span>
          <Link href={item.href} className='text-md max-md:hidden w-full'>{item.name}</Link>
          
          <div className='absolute z-[1000] top-0 -left-[182px] transition group-hover:translate-x-3 translate-x-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform w-[170px] transform rounded-md bg-white shadow-md'>
            {item.subMenu?.map((item , index) => (
              <Link href={item.route} key={index} className={`flex items-center justify-start gap-3 w-full hover:bg-gray-200 p-2 px-3 group relative 
                ${pathName === item.route && 'border-l-5 border-blue-700' }`}>
                  
                  <p  className='text-md text-sm '>{item.label}</p>
              </Link>

            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SideBarPanel