import { NavLink } from "./nav-link";
import { IconAccountGeneral } from "./svg/icon-acccount-general";
import { IconAccountLink } from "./svg/icon-account-link";
import { IconAccountPassword } from "./svg/icon-account-password";
export const AccountNav = () => {
  return (
    <div className="min-w-[194px] p-4 bg-foreground border border-color-border h-full">
      <nav>
        <ul>
          <li>
            <NavLink to="/account/general">
              <IconAccountGeneral />
              General
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/link-account">
              <IconAccountLink />
              Link account
            </NavLink>
          </li>
          <li>
            <NavLink to="/account/password">
              <IconAccountPassword />
              Password
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
