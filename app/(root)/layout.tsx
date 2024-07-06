import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/modules/navbar";
import Footer from "@/components/modules/footer";

const vazir = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "بنیتک",
  description: "فروشگاه آنلاین محصولات الکترونیک",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}
