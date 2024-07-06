"use client";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Divider, Input } from "@nextui-org/react";
import { TbLogin } from "react-icons/tb";
import { CiShoppingCart } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { Tooltip, Button } from "@nextui-org/react";
import Link from "next/link";
import { menuItems } from "@/constants";
import { FaMobileScreen, FaComputer, FaAngleLeft } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { AiOutlineRollback } from "react-icons/ai";
import { IoIosCart, IoMdMenu, IoIosArrowDown } from "react-icons/io";

const categories = [
  {
    id: "content1",
    name: "لوازم موبایل",
    icon: <FaMobileScreen />,
    subcategories: [
      { id: "sub1", title: "قاب و کاور موبایل" },
      { id: "sub2", title: "شارژر و کابل" },
      { id: "sub3", title: "محافظ صفحه نمایش" },
    ],
  },
  {
    id: "content2",
    name: "لپ تاپ و آی پد",
    icon: <FaLaptop />,
    subcategories: [
      { id: "sub1", title: "کیف و کوله لپ تاپ" },
      { id: "sub2", title: "باتری و شارژر" },
      { id: "sub3", title: "لوازم جانبی آی پد" },
    ],
  },
  {
    id: "content3",
    name: "لوازم کامپیوتر",
    icon: <FaComputer />,
    subcategories: [
      { id: "sub1", title: "کیبورد و موس" },
      { id: "sub2", title: "مانیتور" },
      { id: "sub3", title: "هارد و حافظه جانبی" },
    ],
  },
];

const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
};

const framerSidebarPanel = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "100%" },
  transition: { duration: 0.3 },
};

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeContent, setActiveContent] = useState("content1");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  useEffect(() => {
    const updateIsScrolled = (latest: number) => {
      setIsScrolled(latest > 50); // Change 50 to the scroll position where you want the animation to start
    };

    const unsubscribe = scrollY.on("change", updateIsScrolled);

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  const toggleSidebar = () => setIsMenuOpen((prev) => !prev);
  const ref = useRef(null);
  const toggleMenu = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <header className="w-full fixed z-50">
      <nav className="p-2 pt-4 z-100 relative bg-white z-[100]">
        <ul className="flex justify-between items-center">
          <li
            className="md:hidden flex items-center justify-between
          w-full"
          >
            <div onClick={toggleSidebar}>
              <CiMenuFries className="text-black text-3xl" />
            </div>
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen && (
                <>
                  <motion.div
                    {...framerSidebarBackground}
                    aria-hidden="true"
                    className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"
                  ></motion.div>
                  <motion.div
                    className="fixed top-0 bottom-0 right-0 z-50 w-full h-screen max-w-xs border-r-2 border-gray-300 bg-white"
                    ref={ref}
                    aria-label="Sidebar"
                    {...framerSidebarPanel}
                  >
                    <div className="flex items-center justify-between p-5 border-b-2 border-gray-300">
                      <Link href="/" className="flex items-center gap-[2px]">
                        <Image
                          src="/assets/main-logo.png"
                          width={200}
                          height={50}
                          alt="main logo"
                        />
                      </Link>
                      <button
                        onClick={toggleSidebar}
                        className="p-3 border-2 border-gray-300 rounded-xl"
                        aria-label="close sidebar"
                      >
                        <AiOutlineRollback />
                      </button>
                    </div>
                    {categories.map((item, idx) => (
                      <>
                        <div
                          className="flex items-center justify-between w-full p-2"
                          key={idx}
                          onClick={() => toggleMenu(idx)}
                        >
                          <p>{item.name}</p>
                          {openIndexes.includes(idx) ? (
                            <IoIosArrowDown className="text-gray-500 text-sm" />
                          ) : (
                            <FaAngleLeft className="text-gray-500 text-sm" />
                          )}
                        </div>
                        {openIndexes.includes(idx) &&
                          item.subcategories.map((item, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-start w-full p-1 bg-gray-100 px-4"
                            >
                              <p className="text-md">{item.title}</p>
                            </div>
                          ))}
                      </>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
            <Link href={"/"}>
              <Image
                src="/assets/main-logo.png"
                width={200}
                height={50}
                alt="main logo"
              />
            </Link>

            <div>
              <CiShoppingCart className="text-5xl px-1  border-r-1 border-gray-400" />
            </div>
          </li>
          <li className="flex items-center gap-3 w-[70%]  max-md:hidden">
            <Link href={"/"}>
              <Image
                src="/assets/main-logo.png"
                width={200}
                height={50}
                alt="main logo"
              />
            </Link>
            <Input
              classNames={{
                base: "max-w-full h-10 ",
                mainWrapper: "h-full",
                input: "text-small",
                inputWrapper:
                  "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
              }}
              placeholder="...دنبال چه لوازمی هستید"
              size="sm"
              startContent={
                <IoSearch
                  size={20}
                  className="hover:text-black hover:pointer-courser"
                />
              }
              type="search"
            />
          </li>
          <li className="flex items-center gap-2 max-md:hidden">
            <div className="flex items-center gap-2 text-black border-1 p-2 rounded-md border-gray-500 text-sm ">
              <TbLogin className="text-2xl" />
              ورود
              <span className="px-1 border-r-2 border-black">ثبت نام</span>
            </div>
            <div className="border-r-2 border-gray-400 h-[30px]"></div>
            <Button isIconOnly variant="light">
              <CiShoppingCart className="text-5xl px-1" />
            </Button>
          </li>
        </ul>
      </nav>
      <motion.nav
        className={`shadow-md w-full absolute ${isScrolled ? "z-40" : "z-10"}
        flex items-center justify-start gap-4 p-2 bg-white`}
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? -100 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative group max-md:hidden">
          <Button className="bg-blue-600 text-white flex items-center justify-between gap-4 py-3">
            <CiMenuFries className="text-white text-5xl" />
            دسته بندی محصولات
          </Button>

          <div
            className="absolute right-0 top-0 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform rounded-md
          max-md:hidden"
          >
            <div className=" top-0  bg-white rounded-xl shadow-xl w-full">
              <div className="mt-10 flex items-start justify-start  rounded-md">
                {/* بخش لیست دسته‌بندی‌ها */}
                <div className="w-1/4 border-l border-gray-200">
                  <ul className="list-none">
                    {categories.map((category) => (
                      <li
                        key={category.id}
                        className="p-2 hover:text-blue-300 cursor-pointer
                      text-sm flex items-center justify-start gap-2
                      text-gray-400 mb-2"
                        onMouseEnter={() => setActiveContent(category.id)}
                      >
                        {category.icon}
                        <p>{category.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* بخش محتوای دسته‌بندی‌ها */}
                <div className="w-2/3 p-4 flex ">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      id={category.id}
                      className={`category-content flex flex-col items-start justify-start gap-2 text-gray-400 mb-2 p-2 
                    ${activeContent === category.id ? "block" : "hidden"}`}
                    >
                      {category.subcategories.map((item) => (
                        <p
                          className="hover:text-blue-300 text-sm
                    "
                          key={item.id}
                        >
                          {item.title}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-start gap-3 max-md:hidden">
          {menuItems.map((item) => (
            <Link href={item.route} key={item.label}>
              <p>{item.label}</p>
            </Link>
          ))}
        </div>
        <div className="w-full md:hidden p-1">
          <Input
            classNames={{
              base: "max-w-full h-10 ",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="...دنبال چه لوازمی هستید"
            size="sm"
            startContent={
              <IoSearch
                size={20}
                className="hover:text-black hover:pointer-courser"
              />
            }
            type="search"
          />
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;
