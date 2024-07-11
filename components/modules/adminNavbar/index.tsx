import { Button } from "@nextui-org/react";
import { CiBellOn } from "react-icons/ci";
import { Avatar } from "@nextui-org/react";

function AdminPanelNavbar() {
  return (
    <div
      dir="ltr"
      className="w-full p-4 h-24 bg-white flex flex-row-reverse justify-between items-center "
    >
      <div className="flex flex-col items-end">
        <p className="font-bold text-xl">پنل ادمین</p>
        <span className="text-gray-500">آخرین تغییرات در پنل ادمین فروشگاه</span>
      </div>
      <div className="flex justify-between gap-3 items-center">
        <Button isIconOnly variant="bordered" className="text-2xl">
          <CiBellOn />
        </Button>
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      </div>
    </div>
  );
}

export default AdminPanelNavbar;
