import React from 'react';
import { BiUser } from 'react-icons/bi';
import { FaPoll } from 'react-icons/fa';
import { FaTruckRampBox } from 'react-icons/fa6';
import { TbTimeDurationOff } from 'react-icons/tb';
import ChartSection from './chartSection';
import { IoTrendingDownOutline, IoTrendingUpOutline } from 'react-icons/io5';
import RecentSection from './recentSection';

function  DashboardTemplate() {
  return (
    <div className="py-4 px-10">
      <div className="flex flex-col gap-4">
        <span className="font-bold text-xl">داشبورد</span>
        <div className="w-full flex items-center justify-around">
          <div className="w-72 h-40 rounded-lg py-3 px-3 bg-white flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-3">
                <p>مجموع کاربران</p>
                <p className="font-bold text-2xl">25,325</p>
              </div>
              <div className="bg-red-100 text-red-600 text-2xl rounded-lg p-3">
                <BiUser />
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <IoTrendingUpOutline className="text-green-400 text-xl" />

              <span className="text-green-400">47.3%</span>
              <span>رشد نسبت به دیروز</span>
            </div>
          </div>
          <div className="w-72 h-40 rounded-lg py-3 px-3 bg-white flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-3">
                <p>مجموع فروش</p>
                <p className="font-bold text-2xl">25,325</p>
              </div>
              <div className="bg-green-100 text-green-600 text-2xl rounded-lg p-3">
                <FaPoll />
              </div>
            </div>
            <div className="flex gap-3 items-center">
            <IoTrendingDownOutline className="text-red-400 text-xl"/>
              <span className="text-red-400">47.3%</span>
              <span>کاهش نسبت به دیروز</span>
            </div>
          </div>
          <div className="w-72 h-40 rounded-lg py-3 px-3 bg-white flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-3">
                <p>مجموع سفارش</p>
                <p className="font-bold text-2xl">25,325</p>
              </div>
              <div className="bg-blue-100 text-blue-600 text-2xl rounded-lg p-3">
                <FaTruckRampBox />
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <IoTrendingUpOutline className="text-green-400 text-xl" />
              <span className="text-green-400">47.3%</span>
              <span>رشد نسبت به دیروز</span>
            </div>
          </div>
          <div className="w-72 h-40 rounded-lg py-3 px-3 bg-white flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-3">
                <p>مجموع کنسلی ها</p>
                <p className="font-bold text-2xl">25,325</p>
              </div>
              <div className="bg-yellow-100 text-yellow-600 text-2xl rounded-lg p-3">
                <TbTimeDurationOff />
              </div>
            </div>
            <div className="flex gap-3 items-center">
            <IoTrendingDownOutline className="text-red-400 text-xl"/>
              <span className="text-red-400">47.3%</span>
              <span>کاهش نسبت به دیروز</span>
            </div>
          </div>
        </div>
        <div className=" w-[98%] mx-auto bg-white rounded p-4">
          <p className="font-bold text-xl text-right mb-4">مجموع فروش</p>
          <div className=" w-[80%] mx-auto">
            <ChartSection />
          </div>
        </div>
        <div className=" w-[98%] mx-auto bg-white rounded p-4">
          <p className="font-bold text-xl text-right mb-4">سفارشات اخیر</p>
          <div className="w-full">
            <RecentSection/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardTemplate;
