import { Link } from "@tanstack/react-router";

export function MainNav() {
  return (
    <nav className="row-2 p-2 flex gap-2">
      <ul className="w-full">
        <li>
          <Link
            to="/"
            className="[&.active]:font-bold px-2 py-1 hover:bg-white/50 w-full flex items-center gap-2"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="[&.active]:font-bold px-2 py-1 hover:bg-white/50 w-full flex items-center gap-2"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
