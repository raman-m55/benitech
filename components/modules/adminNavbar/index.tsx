'use client'
import {
  Button, 
  Navbar,
  NavbarBrand, 
  NavbarContent, 
  NavbarItem,
  Dropdown, 
  DropdownTrigger, 
  DropdownMenu, 
  DropdownItem, 
  Badge, 
  Avatar, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/react";
import { CiBellOn } from "react-icons/ci";
import {Avatar} from "@nextui-org/react";

function AdminPanelNavbar() {
  const [user, setUser] = useState({ name: "raman", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d" });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  useEffect(() => {
    // اینجا می‌توانید داده‌ها را از API بگیرید و مقادیر اولیه را به‌روزرسانی کنید
    // setUser({ name: "new name", avatar: "new avatar url" });
  }, []);

  const handleSubMenuToggle = (index: number) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <div
      dir="ltr"
      className="w-full p-4 h-24 bg-white flex justify-between items-center "
    >
     
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
