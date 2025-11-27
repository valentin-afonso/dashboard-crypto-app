import { Link } from "@tanstack/react-router";
import { IconHome } from "./svg/icon-home";
import { IconAbout } from "./svg/icon-about";
import { IconCalc } from "./svg/icon-calc";
import { NavUser } from "./nav-user";
import { IconSettings } from "./svg/icon-settings";
import { authClient } from "@/lib/auth-client";
import { NavLink } from "./nav-link";
import { IconAccountGeneral } from "./svg/icon-acccount-general";
import { LinkAddToFav } from "./link-addtofav";
export function MainNav() {
  const { data: session } = authClient.useSession();

  return (
    <div className="row-2 flex flex-col justify-between p-2">
      <div className="flex flex-col gap-8">
        <div>
          <p className="text-black/60 text-xs font-normal mb-2">MAIN MENU</p>
          <nav className="flex gap-2 text-black text-xs">
            <ul className="w-full flex flex-col gap-0.5">
              <li>
                <NavLink to="/">
                  <IconHome />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <IconAbout />
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/calc">
                  <IconCalc />
                  Exchange
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p className="text-black/60 text-xs font-normal mb-2">OTHER MENU</p>
          <nav className="flex gap-2 text-black text-xs">
            <ul className="w-full flex flex-col gap-0.5">
              <li>
                <NavLink to="/settings">
                  <IconSettings />
                  Settings
                </NavLink>
              </li>
              {session && (
                <li>
                  <NavLink to="/account">
                    <IconAccountGeneral />
                    My account
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div>
          <p className="text-black/60 text-xs font-normal mb-2">FAVORITES</p>
          <LinkAddToFav />
        </div>
      </div>
      <div>
        {!session && (
          <div className="flex flex-col items-center justify-center gap-8 p-2 rounded-md bg-black/10">
            <p className="text-xs text-black/60">Log in for full access</p>
            <Link
              to="/signin"
              className="text-xs w-full text-center text-white bg-black rounded-md px-2.5 py-2 hover:bg-black/80"
            >
              Sign in
            </Link>
          </div>
        )}
      </div>
      {session && <NavUser />}
    </div>
  );
}
