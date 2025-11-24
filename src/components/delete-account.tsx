import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { useState } from "react";
import { toast } from "sonner";

export const DeleteAccount = () => {
  const [password, setPassword] = useState("");
  const handleDelete = async () => {
    await authClient.deleteUser(
      {
        password: password,
        callbackURL: "/dashboard",
      },
      {
        onSuccess: () => {
          toast.success("Account deleted successfully");
        },
        onError: (error) => {
          toast.error("Failed to delete account");
          console.error("onError callback:", error);
        },
      }
    );
  };
  return (
    <div className="border-t border-color-border p-4 flex justify-between items-center">
      <p>Delete account</p>
      <Dialog>
        <form onSubmit={handleDelete}>
          <DialogTrigger asChild>
            <Button variant="destructive">Delete account</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] text-black">
            <DialogHeader>
              <DialogTitle>Delete account</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete your account? This action cannot
                be undone.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <label htmlFor="password">Password</label>
                <Input
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  type="password"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Delete account</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};
