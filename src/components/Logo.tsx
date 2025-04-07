import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link
      to="/"
      className="row-1 flex justify-center items-center border-b-1 border-b-gray-300"
    >
      Logo
    </Link>
  );
}
