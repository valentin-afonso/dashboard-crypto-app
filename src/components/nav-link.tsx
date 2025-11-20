import { Link } from "@tanstack/react-router";

export const NavLink = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={to}
      className="[&.active]:bg-[#0c0a12] [&.active]:text-white text-xs rounded-sm px-2.5 py-2 hover:bg-white/50 w-full flex items-center gap-2"
    >
      {children}
    </Link>
  );
};
