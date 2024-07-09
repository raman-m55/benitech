import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/modules/navbar";
import Footer from "@/components/modules/footer";


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
