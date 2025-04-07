import { Logo } from "./Logo";
import { MainNav } from "./MainNav";

export function SideBar() {
  return (
    <aside className="grid row-span-full col-1 w-full h-full bg-gray-100">
      <Logo />
      <MainNav />
    </aside>
  );
}
