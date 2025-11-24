import { IconAdd } from "./svg/icon-add";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
export const LinkAddToFav = () => {
  return (
    <div>
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
            <DialogHeader>
              <DialogTitle>
                You need to be logged in to add to favorites
              </DialogTitle>
              <DialogDescription>
                Please sign in to your account to add links to your favorites.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4"></div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button asChild>
                  <Link to="/signin">Sign in</Link>
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};
