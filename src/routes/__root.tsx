import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SideBar } from "../components/SideBar";

export const Route = createRootRoute({
  component: () => (
    <>
      <SideBar />
      <header>
        <div className="flex justify-between">
          <div>profil</div>
          <div>settings</div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
