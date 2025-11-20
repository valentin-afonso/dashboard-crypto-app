import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AccountNav } from "@/components/account-nav";
import { Title } from "@/components/title";
import { DynamicBreadcrumb } from "@/components/dynamic-breadcrumb";
export const Route = createFileRoute("/account")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="text-black flex h-full">
      <AccountNav />
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-color-border">
          <Title>My account</Title>
          <DynamicBreadcrumb />
        </div>

        <div className="p-4 grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
