import type { Metadata } from "next";
import "../globals.css";

import { Toaster } from "react-hot-toast";
import SideBarPanel from "@/components/modules/sidebar";

export const metadata: Metadata = {
  title: "پنل ادمین",
  description: "فروشگاه اینترنتی محصولات الکترونیکی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideBarPanel />
      <div className="sm:mr-60 bg-[#f9f9f9] min-h-[100vh]">
        <div className="">
          {children}
        </div>
      </div>
      <Toaster position="bottom-center" />
    </>
  );
}
