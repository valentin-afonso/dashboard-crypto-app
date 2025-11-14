import { Logo } from "./Logo";
import { MainNav } from "./MainNav";
export function SideBar() {
  return (
    <aside className="hidden md:grid row-span-full col-1 w-full h-full max-h-screen bg-foreground border-r border-color-border">
      <Logo />
      <MainNav />
    </aside>
  );
}
