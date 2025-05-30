import { NavMobile } from "./nav-mobile";
export const NavbarMobile = () => {
  return (
    <div className="fixed md:hidden bottom-0 w-full z-10 bg-background py-2 border-t border-color-border">
      <NavMobile />
    </div>
  );
};
