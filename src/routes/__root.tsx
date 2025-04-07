import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SideBar } from "../components/SideBar";
import { Header } from "../components/Header";

export const Route = createRootRoute({
  component: () => (
    <>
      <SideBar />
      <Header />
      <main className="col-2 row-2">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
