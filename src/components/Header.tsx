import { DynamicDate } from "./dynamic-date";
import { authClient } from "@/lib/auth-client";
export function Header() {
  const { data: session } = authClient.useSession();
  console.log(session);
  return (
    <header className="max-md:fixed md:flex md:col-2 row-1 flex justify-between items-center p-4 bg-background border-b border-color-border z-[1] w-full">
      <p className="text-black font-normal">
        Hello,{" "}
        <span className="font-bold">
          {session && <div>Hello {session.user.name}</div>}
        </span>
      </p>
      <DynamicDate />
    </header>
  );
}
