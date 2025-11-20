import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account/link-account")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="text-black/50 flex justify-center items-center h-full">
      <div className="p-4">
        associate multiple authentication methods with a single account
      </div>
    </div>
  );
}
