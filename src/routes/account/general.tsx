import { authClient } from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";
import { DeleteAccount } from "@/components/delete-account";
import { ChangeEmail } from "@/components/change-email";
import { UpdateAccountGeneral } from "@/components/update-account-general";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export const Route = createFileRoute("/account/general")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isEdit, setIsEdit] = useState(false);
  const { data: session } = authClient.useSession();

  return (
    <div className="h-full flex flex-col">
      <div className="flex flex-col grow p-4">
        <div className="flex items-center space-x-2">
          <Switch
            id="edit-account"
            checked={isEdit}
            onCheckedChange={setIsEdit}
          />
          <label htmlFor="edit-account" className="text-sm">
            Edit
          </label>
        </div>
        <p className="text-right text-black/50 text-xs">
          createdAt: {session?.user?.createdAt?.toString()}
        </p>
        <div className="flex flex-col gap-4 max-w-[27rem] pb-4 flex-1">
          <ChangeEmail email={session?.user?.email} isEdit={isEdit} />
          <UpdateAccountGeneral name={session?.user?.name} isEdit={isEdit} />
        </div>
      </div>
      <DeleteAccount />
    </div>
  );
}
