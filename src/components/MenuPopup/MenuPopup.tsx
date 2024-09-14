"use client";

import { type ReactNode, MouseEvent } from "react";
import { Menu } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent as MenuContent,
  DropdownMenuItem as MenuItem,
  DropdownMenuLabel as MenuLabel,
  DropdownMenuSeparator as MenuDivider,
  DropdownMenuTrigger as MenuTrigger,
} from "~/components/ui/dropdown-menu";
import { MenuPopupProps } from "./MenuPopup.types";
import { useRouter } from "next/navigation";

const MenuPopup = (props: MenuPopupProps) => {
  const { push } = useRouter();
  const { menuItems } = props;

  const handleClick = (e: MouseEvent<HTMLDivElement>, link: string) => {
    e.preventDefault();
    push(link);
  };

  const menuItemElements: ReactNode[] = menuItems.map((item) => (
    <MenuItem
      key={item.id}
      id={item.id}
      onClick={(e) => handleClick(e, item.link)}
    >
      <MenuLabel>{item.label}</MenuLabel>
      <MenuDivider />
    </MenuItem>
  ));

  return (
    <DropdownMenu>
      <MenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </MenuTrigger>
      <MenuContent className="w-56">{menuItemElements}</MenuContent>
    </DropdownMenu>
  );
};

export default MenuPopup;
