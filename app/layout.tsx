import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/modules/providers";
import { Toaster } from "react-hot-toast";

const Vazir = Vazirmatn({ subsets: ["latin"] });

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
    <html lang="fa">
      <body className={`${Vazir.className} bg-[#FAFAFA] min-h-screen`}>
        <Providers>{children}</Providers>
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
