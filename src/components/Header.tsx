import { NavUser } from "./nav-user";
import { Button } from "@/components/ui/button";
export function Header() {
  return (
    <header className="col-2 row-1 bg-gray-200 flex justify-between items-center p-4">
      <NavUser />
      <Button>settings</Button>
    </header>
  );
}
