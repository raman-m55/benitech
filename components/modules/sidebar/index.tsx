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
      { label: 'نمایش کلی', route: '/dashboard/overview' },
      { label: 'گزارش‌های فروش', route: '/dashboard/sales-reports' },
      { label: 'موجودی', route: '/dashboard/inventory' },
      { label: 'سفارشات اخیر', route: '/dashboard/recent-orders' },
      { label: 'بازدیدها', route: '/dashboard/visits' },
    ],
  },
  {
    id: 1,
    name: ' محصولات',
    href: '/products',
    icon: <FaShoppingCart />,
    subMenu: [
      { label: 'لیست محصولات', route: '/products/list' },
      { label: 'افزودن محصول', route: '/products/add' },
      { label: 'ویرایش محصول', route: '/products/edit' },
      { label: 'حذف محصول', route: '/products/delete' },
      { label: 'دسته‌بندی محصولات', route: '/products/categories' },
      { label: 'مدیریت موجودی', route: '/products/inventory' },
    ],
  },
  {
    id: 2,
    name: ' سفارشات',
    href: '/orders',
    icon: <FaFileAlt />,
    subMenu: [
      { label: 'لیست سفارشات', route: '/orders/list' },
      { label: 'جزئیات سفارش', route: '/orders/details' },
      { label: 'وضعیت سفارش', route: '/orders/status' },
      { label: 'مدیریت بازگشت کالا', route: '/orders/returns' },
    ],
  },
  {
    id: 3,
    name: ' مشتریان',
    href: '/customers',
    icon: <FaUsers />,
    subMenu: [
      { label: 'لیست مشتریان', route: '/customers/list' },
      { label: 'جزئیات مشتری', route: '/customers/details' },
      { label: 'مدیریت حساب مشتریان', route: '/customers/manage' },
    ],
  },
  {
    id: 4,
    name: ' تخفیف‌ها و کوپن‌ها',
    href: '/discounts',
    icon: <FaTag />,
    subMenu: [
      { label: 'لیست تخفیف‌ها و کوپن‌ها', route: '/discounts/list' },
      { label: 'افزودن تخفیف', route: '/discounts/add' },
      { label: 'ویرایش تخفیف', route: '/discounts/edit' },
      { label: 'حذف تخفیف', route: '/discounts/delete' },
    ],
  },
  {
    id: 5,
    name: ' وبلاگ',
    href: '/blog',
    icon: <FaFileAlt />,
    subMenu: [
      { label: 'لیست پست‌ها', route: '/blog/posts' },
      { label: 'افزودن پست', route: '/blog/add' },
      { label: 'ویرایش پست', route: '/blog/edit' },
      { label: 'حذف پست', route: '/blog/delete' },
      { label: 'دسته‌بندی پست‌ها', route: '/blog/categories' },
      { label: 'مدیریت نظرات', route: '/blog/comments' },
    ],
  },
  {
    id: 6,
    name: ' دسته‌بندی‌ها',
    href: '/categories',
    icon: <FaFolder />,
    subMenu: [
      { label: 'دسته‌بندی محصولات', route: '/dashboard/categories/products' },
      { label: 'دسته‌بندی وبلاگ', route: '/dashboard/categories/blog' },
    ],
  },
  {
    id: 7,
    name: 'گزارشات و آنالیزها',
    href: '/reports',
    icon: <FaChartLine />,
    subMenu: [
      { label: 'گزارشات فروش', route: '/reports/sales' },
      { label: 'گزارشات بازدید', route: '/reports/visits' },
      { label: 'گزارشات موجودی', route: '/reports/inventory' },
    ],
  },
  {
    id: 8,
    name: ' کاربران و نقش‌ها',
    href: '/users',
    icon: <FaUserShield />,
    subMenu: [
      { label: 'لیست کاربران ادمین', route: '/users/admins' },
      { label: 'تعیین سطح دسترسی و نقش‌ها', route: '/users/roles' },
      { label: 'ایجاد کاربر', route: '/users/create' },
      { label: 'ویرایش کاربر', route: '/users/edit' },
      { label: 'حذف کاربر', route: '/users/delete' },
    ],
  },
  // {
  //   id: 9,
  //   name: 'تنظیمات فروشگاه',
  //   href: '/settings/store',
  //   icon: <FaCog />,
  //   subMenu: [
  //     { label: 'تنظیمات عمومی', route: '/settings/store/general' },
  //     { label: 'تنظیمات پرداخت', route: '/settings/store/payment' },
  //     { label: 'تنظیمات ارسال و حمل و نقل', route: '/settings/store/shipping' },
  //     { label: 'تنظیمات مالیاتی', route: '/settings/store/tax' },
  //     { label: 'تنظیمات زبان و ارز', route: '/settings/store/language-currency' },
  //   ],
  // },
  // {
  //   id: 10,
  //   name: 'تنظیمات سئو و بهینه‌سازی',
  //   href: '/settings/seo',
  //   icon: <FaSearch />,
  //   subMenu: [
  //     { label: 'تنظیمات سئوی محصولات', route: '/settings/seo/products' },
  //     { label: 'تنظیمات سئوی وبلاگ', route: '/settings/seo/blog' },
  //     { label: 'مدیریت متا تگ‌ها', route: '/settings/seo/meta-tags' },
  //   ],
  // },
  // {
  //   id: 11,
  //   name: ' بنرها و تبلیغات',
  //   href: '/banners',
  //   icon: <FaAd />,
  //   subMenu: [
  //     { label: 'افزودن بنر', route: '/banners/add' },
  //     { label: 'ویرایش بنر', route: '/banners/edit' },
  //     { label: 'حذف بنر', route: '/banners/delete' },
  //   ],
  // },
  // {
  //   id: 12,
  //   name: 'پشتیبانی و تماس با ما',
  //   href: '/support',
  //   icon: <FaEnvelope />,
  //   subMenu: [
  //     { label: 'مدیریت درخواست‌های پشتیبانی', route: '/support/requests' },
  //     { label: 'پاسخگویی به مشتریان', route: '/support/responses' },
  //   ],
  // },
  // {
  //   id: 13,
  //   name: 'تنظیمات ایمیل و اطلاعیه‌ها',
  //   href: '/settings/email',
  //   icon: <FaEnvelope />,
  //   subMenu: [
  //     { label: 'تنظیمات ایمیل‌های ارسالی', route: '/settings/email/sent' },
  //     { label: 'تنظیمات اطلاعیه‌های داخلی', route: '/settings/email/internal' },
  //   ],
  // },
  {
    id: 14,
    name: ' فایل‌ها و رسانه‌ها',
    href: '/media',
    icon: <FaFileUpload />,
    subMenu: [
      { label: 'آپلود فایل‌ها', route: '/media/upload' },
      { label: 'مدیریت فایل‌ها', route: '/media/manage' },
    ],
  },
  // {
  //   id: 15,
  //   name: 'تنظیمات امنیتی',
  //   href: '/settings/security',
  //   icon: <FaLock />,
  //   subMenu: [
  //     { label: 'مدیریت دسترسی‌ها', route: '/settings/security/access' },
  //     { label: 'لاگ فعالیت‌ها', route: '/settings/security/logs' },
  //     { label: 'پشتیبان‌گیری و بازیابی', route: '/settings/security/backup' },
  //   ],
  // },
];


const SideBarPanel = () => {
  const pathName = usePathname();
  return (
    <div className='fixed top-0 right-0 pt-[90px] h-full w- flex flex-col items-start justify-start gap-4  bg-white shadow-lg max-sm:hidden  '>
      {menuItemsDashboard.map((item , index) => (
        <div key={index} className={`flex items-center justify-start gap-3
        w-full hover:bg-gray-200 p-2 px-4 group relative 
        ${pathName === item.href && 'border-l-5 border-blue-700' }`}>
          <span className='text-blue-700 text-xl'>
            {item.icon}
          </span>
          <p  className='text-md max-md:hidden'>{item.name}</p>
          
          <div className='absolute top-0 -left-[185px] transition group-hover:translate-x-3 translate-x-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 w-[170px] transform rounded-md bg-white shadow-md'>
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