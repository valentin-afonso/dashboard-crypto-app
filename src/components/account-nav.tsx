import { NavLink } from "./nav-link";
export const AccountNav = () => {
  return (
    <div className="min-w-[194px] p-4 bg-foreground border border-color-border h-full">
      <nav>
        <ul>
          <li>
            <NavLink to="/account/general">General</NavLink>
          </li>
          <li>
            <NavLink to="/account/link-account">Link account</NavLink>
          </li>
          <li>
            <NavLink to="/account/password">Password</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
