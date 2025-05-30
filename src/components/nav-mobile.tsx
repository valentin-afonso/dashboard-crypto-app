import { Link } from "@tanstack/react-router";
import { IconAbout } from "./svg/icon-about";
import { IconHome } from "./svg/icon-home";

export const NavMobile = () => {
  return (
    <nav className=" text-black">
      <ul className="w-full flex justify-center gap-2">
        <li>
          <Link
            to="/"
            className="[&.active]:font-bold px-2 py-1 hover:bg-white/50 w-full flex items-center gap-2"
          >
            <IconHome />
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="[&.active]:font-bold px-2 py-1 hover:bg-white/50 w-full flex items-center gap-2"
          >
            <IconAbout />
            <span>About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
