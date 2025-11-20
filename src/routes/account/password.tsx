import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/account/password")({
  component: RouteComponent,
});

function RouteComponent() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-[27rem]"
      >
        <div>
          <p>Current Password</p>
          <Input type="password" id="currentPassword" name="currentPassword" />
        </div>
        <div>
          <p>New Password</p>
          <Input type="password" id="newPassword" name="newPassword" />
        </div>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
}
