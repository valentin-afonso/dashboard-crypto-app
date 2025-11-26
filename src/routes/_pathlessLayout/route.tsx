import { createFileRoute, Outlet } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

export const Route = createFileRoute("/_pathlessLayout")({
  component: RouteComponent,
});
const LazyDither = lazy(() => import("@/components/lazy-dither"));
function RouteComponent() {
  return (
    <div className="grid grid-cols-2 h-full text-black">
      <div className="flex flex-col border-r border-color-border">
        <Outlet />
      </div>
      <div className="p-4">
        <div className="bg-foreground rounded-md w-full h-full overflow-hidden">
          <Suspense
            fallback={
              <div className="bg-foreground rounded-md w-full h-full"></div>
            }
          >
            <LazyDither />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
