import { useLocation, Link } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";

export const DynamicBreadcrumb = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="hover:text-black" asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.length > 0 && <BreadcrumbSeparator />}

        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;
          // Reconstruct the path for this segment
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const formattedSegment = capitalize(decodeURIComponent(segment));

          return (
            <Fragment key={path}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="text-black">
                    {formattedSegment}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink className="hover:text-black" asChild>
                    <Link to={path}>{formattedSegment}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
