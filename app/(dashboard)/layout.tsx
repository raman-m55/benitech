import type { Metadata } from "next";
import "../globals.css";

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
    <div className="bg-[#F5F6FA]">
      <AdminPanelNavbar/> 
      <SideBarPanel />
        <div className="md:mr-[240px] max-sm:p-0 h-screen">
          {children}
        </div>
      </div>

  );
}