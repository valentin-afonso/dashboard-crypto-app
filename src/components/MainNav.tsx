import { Link } from "@tanstack/react-router";
import { IconHome } from "./svg/icon-home";
import { IconAbout } from "./svg/icon-about";
import { IconCalc } from "./svg/icon-calc";
import { NavUser } from "./nav-user";
import { IconSettings } from "./svg/icon-settings";
export function MainNav() {
  return (
    <div className="row-2 flex flex-col justify-between p-2">
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-black/60 text-xs font-normal mb-2">MAIN MENU</p>
          <nav className="flex gap-2 text-black text-xs">
            <ul className="w-full flex flex-col gap-0.5">
              <li>
                <Link
                  to="/"
                  className="[&.active]:bg-[#0c0a12] [&.active]:text-white rounded-sm px-2.5 py-2 hover:bg-white/50 w-full flex items-center gap-2"
                >
                  <IconHome />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="[&.active]:bg-[#0c0a12] [&.active]:text-white rounded-sm px-2.5 py-2 hover:bg-white/50 w-full flex items-center gap-2"
                >
                  <IconAbout />
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/calc"
                  className="[&.active]:bg-[#0c0a12] [&.active]:text-white rounded-sm px-2.5 py-2 hover:bg-white/50 w-full flex items-center gap-2"
                >
                  <IconCalc />
                  Exchange
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p className="text-black/60 text-xs font-normal mb-2">OTHER MENU</p>
          <nav className="flex gap-2 text-black text-xs">
            <ul className="w-full flex flex-col gap-0.5">
              <li>
                <Link
                  to="/settings"
                  className="[&.active]:bg-[#0c0a12] [&.active]:text-white rounded-sm px-2.5 py-2 hover:bg-white/50 w-full flex items-center gap-2"
                >
                  <IconSettings />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p className="text-black/60 text-xs font-normal mb-2">FAVORITES</p>
          <div className="flex flex-col items-center justify-center gap-8 p-2 rounded-md bg-black/10">
            <p className="text-xs text-black/60">Log in for full access</p>
            <Link
              to="/signin"
              className="text-xs w-full text-center text-white bg-black rounded-md px-2.5 py-2 hover:bg-black/80"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <NavUser />
    </div>
  );
}
