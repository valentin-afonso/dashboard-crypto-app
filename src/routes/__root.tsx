import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SideBar } from "../components/SideBar";
import { Header } from "../components/Header";
import { NavbarMobile } from "../components/navbar-mobile";
import { Toaster } from "@/components/ui/sonner";
export const Route = createRootRoute({
  component: () => (
    <>
      <NavbarMobile />
      <SideBar />
      <Header />
      <main className="pt-20 pb-20 md:pb-0 md:pt-0 md:col-2 md:row-2 bg-color-background">
        <Outlet />
      </main>
      <Toaster />
      <TanStackRouterDevtools />
    </>
  ),
});
