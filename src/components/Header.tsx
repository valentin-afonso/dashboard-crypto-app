import { NavUser } from "./nav-user";
import { Button } from "@/components/ui/button";
export function Header() {
  return (
    <header className="max-md:fixed md:flex md:col-2 row-1 flex justify-between items-center p-4 bg-background border-b border-color-border z-[1] w-full">
      <NavUser />
      <Button>settings</Button>
    </header>
  );
}
