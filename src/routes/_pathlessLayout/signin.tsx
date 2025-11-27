import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { Title } from "@/components/title";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export const Route = createFileRoute("/_pathlessLayout/signin")({
  beforeLoad: async () => {
    const session = await authClient.getSession();
    if (session.data) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  // const [inputs, setInputs] = useState({});
  // const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!email || !password) {
      toast.error("Please fill in all fields");
      setIsLoading(false);
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
      INVALID_EMAIL_OR_PASSWORD: {
        en: "invalid email or password",
        es: "usuario ya registrada",
      },
    } satisfies ErrorTypes;
    const getErrorMessage = (code: string, lang: "en" | "es") => {
      if (code in errorCodes) {
        return errorCodes[code as keyof typeof errorCodes][lang];
      }
      return "";
    };
    const { error } = await authClient.signIn.email(
      {
        email,
        password,
        rememberMe: rememberMe,
        callbackURL: "/",
      },
      {
        onError: () => {
          toast.error("Failed to sign in");
          setIsLoading(false);
        },
      }
    );
    if (error) {
      if (error.code) {
        const message = getErrorMessage(error.code, "en");
        if (message) {
          toast.error(message);
        }
      } else {
        toast.error(error.message || "An error occurred during signin");
      }
      setIsLoading(false);
      // console.error("onError callback:", error);
    }
  };
  return (
    <>
      <div className="p-8 border-b border-color-border">
        <Title>Sign in</Title>
        <p className="text-black/60">Sign in to your account to continue</p>
      </div>
      <div className="p-8 grow">
        <form
          className="flex flex-col gap-4 p-8  max-w-[27rem] mx-auto"
          onSubmit={handleSubmit}
        >
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
          <div className="flex items-center gap-2">
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              onCheckedChange={() => setRememberMe(!rememberMe)}
              checked={rememberMe}
            />
            <label htmlFor="rememberMe" className="text-black/60 text-sm">
              Remember me
            </label>
          </div>
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Spinner />}
            Sign in
          </Button>
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
    </>
  );
}
