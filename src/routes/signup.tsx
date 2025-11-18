import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Title } from "@/components/title";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export const Route = createFileRoute("/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    type ErrorTypes = Partial<
      Record<
        keyof typeof authClient.$ERROR_CODES,
        {
          en: string;
          es: string;
        }
      >
    >;
    const errorCodes = {
      USER_ALREADY_EXISTS: {
        en: "user already registered",
        es: "usuario ya registrada",
      },
    } satisfies ErrorTypes;
    const getErrorMessage = (code: string, lang: "en" | "es") => {
      if (code in errorCodes) {
        return errorCodes[code as keyof typeof errorCodes][lang];
      }
      return "";
    };

    try {
      const { data, error } = await authClient.signUp.email(
        { email, password, name },
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
        // Handle specific error cases
        if (error.code) {
          const message = getErrorMessage(error.code, "en");
          if (message) {
            alert(message);
          }
        } else {
          alert(error.message || "An error occurred during signup");
        }
        return;
      }

      if (data) {
        console.log("Signup success:", data);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-2 h-full text-black">
      <div className="flex flex-col border-r border-color-border">
        <div className="p-8 border-b border-color-border">
          <Title>Sign up</Title>
          <p className="text-black/60">Sign up to create an account</p>
        </div>
        <div className="p-8 grow">
          <form className="flex flex-col gap-4 p-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <Input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
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
