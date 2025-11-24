import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await authClient.changePassword(
      {
        newPassword: newPassword,
        currentPassword: currentPassword,
        revokeOtherSessions: true,
      },
      {
        onSuccess: () => {
          toast.success("Password updated successfully");
        },
        onError: (error) => {
          toast.error("Failed to update password");
          console.error("onError callback:", error);
        },
      }
    );
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[27rem]">
      <div>
        <p>Current Password</p>
        <Input
          type="password"
          id="currentPassword"
          name="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div>
        <p>New Password</p>
        <Input
          type="password"
          id="newPassword"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <Button type="submit">Save</Button>
    </form>
  );
};
