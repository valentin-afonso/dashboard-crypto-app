import { Link } from "@tanstack/react-router";

export function SideBar() {
  return (
    <aside className="w-full h-full bg-gray-100">
      <div className="row-1">Logo</div>
      <nav className="row-2 p-2 flex gap-2">
        <ul>
          <li>
            <Link to="/" className="[&.active]:font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="[&.active]:font-bold">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
