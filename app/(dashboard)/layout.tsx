import type { Metadata } from "next";
import "../globals.css";

import { Toaster } from "react-hot-toast";
import SideBarPanel from "@/components/modules/sidebar";
import AdminPanelNavbar from "@/components/modules/adminNavbar";

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
    <body className="sm:mr-60 bg-[#f9f9f9] min-h-[100vh]">
      <AdminPanelNavbar/>
      <SideBarPanel />
        <div className="">
          {children}
        </div>
      <Toaster position="bottom-center" />
      </body>

  );
}
