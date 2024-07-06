"use client";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { CiBookmarkCheck } from "react-icons/ci";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { RiSecurePaymentFill } from "react-icons/ri";
import Image from "next/image";
import { Button, Divider } from "@nextui-org/react";
import { BiChevronUp } from "react-icons/bi";
import {
  BsHouse,
  BsInstagram,
  BsTelegram,
  BsTwitter,
  BsTwitterX,
} from "react-icons/bs";
import { LiaLinkedin, LiaLinkedinIn } from "react-icons/lia";
import Link from "next/link";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full border-t py-10">
      <div className="w-[95%] mx-auto flex flex-col gap-10">
        <div className="flex justify-between items-center ">
          <div className="flex flex-col gap-4">
            <div>
              <Link href={"/"}>
                <Image
                  src="/assets/main-logo.png"
                  width={200}
                  height={50}
                  alt="main logo"
                />
              </Link>
            </div>
            <div className="flex gap-6">
              <span>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</span>
              <div className="border-r border-black"></div>
              <span>۰۲۱-۹۱۰۰۰۱۰۰</span>
              <div className="border-r border-black"></div>

              <span>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</span>
            </div>
          </div>
          <div>
            <Button
              onClick={scrollTop}
              variant="bordered"
              color="primary"
              startContent={<BiChevronUp />}
            >
              بازگشت به بالا
            </Button>
          </div>
        </div>
        <div className="h-[160px] flex w-full justify-around">
          <div className="flex flex-col gap-2 h-full   border-[#d9d9d9] justify-center items-center w-full">
            <div className="flex items-center justify-center text-4xl">
              <CiBookmarkCheck />
            </div>
            <p className="text-center">ضمانت اصل بودن کالا</p>
            <p className="text-center text-gray-500 text-[12px]">
              تضمین اصالت و گارانتی
            </p>
          </div>
          <div className="flex flex-col gap-2   border-[#d9d9d9] justify-center items-center w-full">
            <div className="flex items-center justify-center text-4xl">
              <HiOutlineReceiptRefund />
            </div>
            <div className="text-center">ضمانت بازگشت</div>
            <div className="text-center text-gray-500 text-[12px]">
              بازگرداندن کالا در ۷ روز
            </div>
          </div>
          <div className="flex flex-col gap-2   border-[#d9d9d9] justify-center items-center w-full">
            <div className="flex items-center justify-center text-4xl">
              <TbTruckDelivery />
            </div>
            <div className="text-center">تحویل اکسپرس</div>
            <div className="text-center text-gray-500 text-[12px]">
              ۲۴ ساعته در تهران
            </div>
          </div>
          <div className="flex flex-col gap-2   border-[#d9d9d9] justify-center items-center w-full  ">
            <div className="flex items-center justify-center text-4xl">
              <RiSecurePaymentFill />
            </div>
            <div className="text-center">پرداخت امن</div>
            <div className="text-center text-gray-500 text-[12px]">
              درگاه پرداخت مطمئن
            </div>
          </div>
          <div className="flex flex-col gap-2   border-[#d9d9d9] justify-center items-center w-full  ">
            <div className="flex items-center justify-center text-4xl">
              <BsHouse />
            </div>
            <div className="text-center">پرداخت در محل</div>
            <div className="text-center text-gray-500 text-[12px]">
              هزینه را درب منزل پرداخت کنید
            </div>
          </div>
        </div>
        <div className="flex justify-between items-start">
          <div className="">
            <h3 className="font-bold text-xl mb-3">با بنیتک</h3>
            <ul className="list-none flex flex-col gap-3 text-slate-600">
              <li>اتاق خبر بنیتک</li>
              <li>فروش در بنیتک</li>
              <li>فرصت های شغلی</li>
              <li>گزارش تخلف در بنیتک</li>
              <li>تماس با بنیتک</li>
              <li>درباره بنیتک</li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold text-xl mb-3">خدمات مشتریان</h3>
            <ul className="list-none flex flex-col gap-3 text-slate-600">
              <li>پاسخ به پرسش های متداول</li>
              <li>رویه های بازگرداندن کالا</li>
              <li>شرایط استفاده</li>
              <li>حریم خصوصی</li>
              <li>گزارش باگ</li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold text-xl mb-3">راهنمای بنیتک</h3>
            <ul className="list-none flex flex-col gap-3 text-slate-600">
              <li>نحوه ثبت سفارش</li>
              <li>رویه ارسال سفارش</li>
              <li>شیوه های پرداخت</li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold text-xl mb-3">همراه ما باشید!</h3>
            <nav className="list-none flex flex-col gap-3 text-slate-600">
              <div className="flex gap-11 text-4xl">
                <Button
                  color="danger"
                  isIconOnly
                  variant="bordered"
                  className="text-4xl text-red-600"
                  size="lg"
                >
                  <BsInstagram />
                </Button>
                <Button
                  color="primary"
                  isIconOnly
                  variant="bordered"
                  className="text-4xl text-blue-600"
                  size="lg"
                >
                  <BsTelegram />
                </Button>
                <Button
                  color="default"
                  isIconOnly
                  variant="bordered"
                  className="text-4xl text-black"
                  size="lg"
                >
                  <BsTwitterX />
                </Button>
                <Button
                  color="primary"
                  isIconOnly
                  variant="bordered"
                  className="text-4xl text-blue-600"
                  size="lg"
                >
                  <LiaLinkedinIn />
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="w-full border-t text-center text-sm text-gray-400 mt-10 pt-10">
        برای استفاده از مطالب بنیتک، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست.
        تمام حقوق اين وب‌سايت نیز برای شرکت بنیتک میباشد
      </div>
    </footer>
  );
}

export default Footer;
