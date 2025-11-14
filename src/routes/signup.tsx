import { createFileRoute, Link } from "@tanstack/react-router";
import { Title } from "@/components/title";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="grid grid-cols-2 h-full text-black">
      <div className="flex flex-col border-r border-color-border">
        <div className="p-8 border-b border-color-border">
          <Title>Sign up</Title>
          <p className="text-black/60">Sign up to create an account</p>
        </div>
        <div className="p-8 grow">
          <form className="flex flex-col gap-4 p-8">
            <div>
              <label htmlFor="email">Email</label>
              <Input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Input type="password" id="password" name="password" />
            </div>
            <Button type="submit">Sign up</Button>
          </form>
        </div>
        <div className="px-8 py-4 border-t border-color-border flex justify-end">
          <p className="text-black/60">
            Already have an account?{" "}
            <Link to="/signin" className="text-black">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <div className="p-4">
        <div className="bg-foreground rounded-md w-full h-full"></div>
      </div>
    </div>
  );
}
