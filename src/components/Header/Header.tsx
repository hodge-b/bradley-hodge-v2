import MenuPopup from "../MenuPopup";
import { HeaderProps } from "./Header.types";

const Header = (props: HeaderProps) => {
  const { menuItems } = props;

  return (
    <header className="flex justify-center w-full p-5 bg-slate-300">
      <div className="container flex justify-between items-center">
        <div>Brad Hodge</div>
        <MenuPopup menuItems={menuItems} />
      </div>
    </header>
  );
};

export default Header;
