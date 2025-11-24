import { createFileRoute } from "@tanstack/react-router";
import { ChangePassword } from "@/components/change-password";

export const Route = createFileRoute("/account/password")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="p-4">
      <ChangePassword />
    </div>
  );
}
