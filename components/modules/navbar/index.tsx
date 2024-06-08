'use client';
import { motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { Divider, Input } from "@nextui-org/react";
import { TbLogin } from "react-icons/tb";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import {Tooltip, Button} from "@nextui-org/react";
import Link from 'next/link';
import { menuItems } from '@/constants';
const categories: { [key: string]: string[] } = {
  'لوازم جانبی موبایل': ['باطری موبایل', 'قاب گوشی', 'کیف گوشی'],
  'لوازم جانبی لپ‌تاپ': ['کیبورد', 'ماوس', 'پایه خنک‌کننده'],
};





const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const updateIsScrolled = (latest: number) => {
      setIsScrolled(latest > 50); // Change 50 to the scroll position where you want the animation to start
    };

    const unsubscribe = scrollY.on("change", updateIsScrolled);

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  return (
    <header className="w-full fixed z-50">
      <nav className="p-2 pt-4 z-100 relative bg-white z-[100]">
        <ul className="flex justify-between items-center">
          <li className="flex items-center gap-3 w-[70%]">
            <Image
              src='/assets/main-logo.png'
              width={200}
              height={50}
              alt='main logo'
            />
            <Input
              classNames={{
                base: "max-w-full h-10",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="...دنبال چه لوازمی هستید"
              size="sm"
              startContent={<IoSearch size={20} className="hover:text-black hover:pointer-courser" />}
              type="search"
            />
          </li>
          <li className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-black border-1 p-2 rounded-md border-gray-500 text-sm">
              <TbLogin />
              ورود 
              <span className="px-1 border-r-2 border-black">
                ثبت نام
              </span>
            </div>
            <div className='border-r-2 border-gray-400 h-[30px]'></div>
            <Button isIconOnly variant='light'>
              <CiShoppingCart className="text-5xl px-1" />
            </Button>
          </li>
        </ul>
      </nav>
      <motion.nav
        className={`shadow-md w-full absolute ${isScrolled ? 'z-40' : 'z-10'}
        flex items-center justify-start gap-4 p-2 bg-white`}
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? -100 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='relative group :'>
          <Button className='bg-blue-600 text-white flex items-center
          justify-between gap-4 py-3 :'>
                  <CiMenuFries className='text-white text-5xl'/>
                  دسته بندی محصولات
          </Button>

          <div className='absolute top-0 right-0 transition
          group-hover:translate-y-5 tr'>

          </div>
        </div>
        

        {menuItems.map((item) => (
            <Link href={item.route} key={item.label}>
                <p>{item.label}</p>
            </Link>
        ))}
      </motion.nav>
    </header>
  );
};

export default Navbar;


