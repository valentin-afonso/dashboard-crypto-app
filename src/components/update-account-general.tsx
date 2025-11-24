import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useState } from "react";

export const UpdateAccountGeneral = ({
  name,
  isEdit,
}: {
  name: string | undefined;
  isEdit: boolean;
}) => {
  const [newName, setNewName] = useState(name || "");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await authClient.updateUser(
      {
        name: newName,
      },
      {
        onSuccess: () => {
          toast.success("Name updated successfully");
        },
        onError: (error) => {
          toast.error("Failed to update name");
          console.error("onError callback:", error);
        },
      }
    );
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
        <div className="flex items-center gap-2">
          <Input
            type="text"
            id="name"
            name="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            disabled={!isEdit}
          />
          <Button type="submit" disabled={!isEdit}>
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};
