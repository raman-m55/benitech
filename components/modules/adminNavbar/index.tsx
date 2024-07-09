import { Button } from "@nextui-org/react";
import { CiBellOn } from "react-icons/ci";

function AdminPanelNavbar() {
  return (
    <div
      dir="ltr"
      className="w-full h-24 bg-white flex flex-row-reverse items-center justify-between"
    >
      <div className="flex flex-col">
        <span className="font-bold text-right">داشبورد</span>
        <span>اطلاعات کلی درباره تغییرات اخیر پنل</span>
      </div>
      <div className="flex gap-6 ml-6">
        <Button isIconOnly variant="bordered" className="text-2xl">
          <CiBellOn />
        </Button>

        <Button variant="bordered">ادمین بنینک</Button>
      </div>
    </div>
  );
}

export default AdminPanelNavbar;
