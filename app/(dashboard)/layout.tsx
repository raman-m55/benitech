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
    <div className="">
      <AdminPanelNavbar/>
      <SideBarPanel />
        <div className="mr-[240px] max-sm:p-0">
          {children}
        </div>
      </div>

  );
}