import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "sonner";

export const ChangeEmail = ({
  email,
  isEdit,
}: {
  email: string | undefined;
  isEdit: boolean;
}) => {
  const [newEmail, setNewEmail] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await authClient.changeEmail(
      {
        newEmail: newEmail,
        callbackURL: "/account/general",
      },
      {
        onSuccess: () => {
          toast.success("Email updated successfully");
        },
        onError: (error) => {
          toast.error("Failed to update email");
          console.error("onError callback:", error);
        },
      }
    );
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <div className="flex items-center gap-2">
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setNewEmail(e.target.value)}
            disabled={!isEdit}
          />
          <Button type="submit" disabled={!isEdit}>
            Update my email
          </Button>
        </div>
      </div>
    </form>
  );
};
