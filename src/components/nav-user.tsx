import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IconEllipsis } from "./svg/icon-ellipsis";
import { authClient } from "@/lib/auth-client";
import { Link, useNavigate } from "@tanstack/react-router";

import { IconAccountGeneral } from "./svg/icon-acccount-general";
import { LogOut } from "lucide-react";

export const NavUser = () => {
  const isMobile = false;
  const { data: session } = authClient.useSession();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({ to: "/signin" });
        },
      },
    });
  };
  return (
    <>
      <div className="flex items-center gap-3 text-black max-w-full">
        <Avatar className="h-9 w-9 rounded-full">
          <AvatarImage src="/avatars/shadcn.jpg" alt="valentin afso" />
          <AvatarFallback className="rounded-lg bg-black text-white text-xs p-1">
            {session?.user?.name?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex items-center justify-between gap-4 grow">
          <div className="text-black flex flex-col text-left text-sm leading-tight">
            <span className="truncate text-xs font-semibold">
              {session && <>{session?.user?.name}</>}
            </span>
            <span className="truncate text-xs">
              {session && <>{session?.user?.email}</>}
            </span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer">
              <IconEllipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
              side={isMobile ? "bottom" : "right"}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link
                    to="/account/general"
                    className="flex items-center gap-2 w-full"
                  >
                    <IconAccountGeneral />
                    My account
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>
                <LogOut />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};
