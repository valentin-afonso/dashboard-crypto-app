import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Title } from "@/components/title";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export const Route = createFileRoute("/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          navigate({ to: "/" });
        },
        onError: (error) => {
          console.error("onError callback:", error);
        },
      }
    );
    if (error) {
      console.error("onError callback:", error);
    }
    if (data) {
      console.log("Signin success:", data);
    }
  };
  return (
    <div className="grid grid-cols-2 h-full text-black">
      <div className="flex flex-col border-r border-color-border">
        <div className="p-8 border-b border-color-border">
          <Title>Sign in</Title>
          <p className="text-black/60">Sign in to your account to continue</p>
        </div>
        <div className="p-8 grow">
          <form className="flex flex-col gap-4 p-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit">Sign in</Button>
          </form>
        </div>
        <div className="px-8 py-4 border-t border-color-border flex justify-end">
          <p className="text-black/60">
            Don't have an account?{" "}
            <Link to="/signup" className="text-black">
              Sign up
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
