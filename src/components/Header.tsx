import { NavUser } from "./nav-user";
import { Button } from "@/components/ui/button";
export function Header() {
  return (
    <header className="col-2 row-1 flex justify-between items-center p-4 bg-background border-b border-color-border">
      <NavUser />
      <Button>settings</Button>
    </header>
  );
}
