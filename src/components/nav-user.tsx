import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sparkles, BadgeCheck, CreditCard, Bell, LogOut } from "lucide-react";
import { IconEllipsis } from "./svg/icon-ellipsis";

import { createAuthClient } from "better-auth/react";
const { useSession } = createAuthClient();

export const NavUser = () => {
  const isMobile = false;
  const {
    data: session,
    isPending, //loading state
    error, //error object
    // refetch, //refetch the session
  } = useSession();
  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!session) return <div>No session</div>;
  // console.log(session);
  return (
    <>
      <div className="flex items-center gap-2 text-black max-w-full">
        <Avatar className="h-6 w-6 rounded-full">
          <AvatarImage src="/avatars/shadcn.jpg" alt="valentin afso" />
          <AvatarFallback className="rounded-lg bg-black text-white text-xs p-1">
            VA
          </AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-4">
          <div className="text-black flex flex-col text-left text-sm leading-tight">
            <span className="truncate text-xs font-semibold">valafso</span>
            <span className="truncate text-xs">hello@valafso.com</span>
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
                  <Sparkles />
                  Upgrade to Pro
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <BadgeCheck />
                  Account
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCard />
                  Billing
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Bell />
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
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
