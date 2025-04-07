import { Link } from "@tanstack/react-router";

export function MainNav() {
  return (
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
  );
}
