import { NavUser } from "./nav-user";

export function Header() {
  return (
    <header className="col-2 row-1 bg-gray-200 flex justify-between items-center p-4">
      <NavUser />
      <div>settings</div>
    </header>
  );
}
