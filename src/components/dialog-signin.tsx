import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const DialogSignin = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle>You need to be logged in to add to favorites</DialogTitle>
        <DialogDescription>
          Please sign in to your account to add links to your favorites.
        </DialogDescription>
      </DialogHeader>
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
    </>
  );
};
