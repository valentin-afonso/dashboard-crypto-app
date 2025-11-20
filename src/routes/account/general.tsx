import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account/general")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: session } = authClient.useSession();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="h-full flex flex-col">
      <p className="text-right text-black/50 text-xs">
        createdAt: {session?.user?.createdAt?.toString()}
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-[27rem] pb-4 flex-1"
      >
        <div>
          <p>Email</p>
          <Input
            type="email"
            id="email"
            name="email"
            value={session?.user?.email}
          />
        </div>
        <div>
          <p>Name</p>
          <Input
            type="text"
            id="name"
            name="name"
            value={session?.user?.name}
          />
        </div>
        <Button type="submit">Save</Button>
      </form>
      <div className="border-t border-color-border pt-4 flex justify-between items-center">
        <p>Delete account</p>
        <Button variant="destructive" type="button">
          Delete account
        </Button>
      </div>
    </div>
  );
}
