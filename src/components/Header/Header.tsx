import { Menu } from "lucide-react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full p-5 bg-slate-300">
      <div>Brad Hodge</div>
      <Button variant="ghost" size="icon">
        <Menu />
      </Button>
    </header>
  );
};

export default Header;
