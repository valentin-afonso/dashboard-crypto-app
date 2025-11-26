import { IconAdd } from "./svg/icon-add";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { DialogSignin } from "./dialog-signin";
import { DialogFav } from "./dialog-fav";

export const LinkAddToFav = () => {
  const { data: session } = authClient.useSession();
  return (
    <>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="text-xs text-black/60 bg-[#e6e3e3] flex items-center gap-2 px-2.5 py-2 rounded-sm w-full cursor-pointer"
            >
              <IconAdd /> Add to favorites
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] text-black">
            {!session ? <DialogSignin /> : <DialogFav />}
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};
