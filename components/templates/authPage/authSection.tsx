"use client";

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";
import LoginTemplate from "./login";
import Image from "next/image";

function AuthSection() {
  return (
    <Card className="w-[400px] p-5">
      <CardHeader className="flex flex-col w-full">
        <Image
          src="/assets/main-logo.png"
          width={200}
          height={50}
          alt="main logo"
        />
      </CardHeader>
      <CardBody >
        <p className="text-black font-bold text-right text-xl">ورود | ثبت نام</p>
        <span className="text-right text-gray-400 text-sm mt-4">سلام!</span>
        <span className="text-right text-gray-400 text-sm mb-4">لطفا ایمیل خود را وارد کنید</span>
        <LoginTemplate />
      </CardBody>
    </Card>
  );
}

export default AuthSection;
