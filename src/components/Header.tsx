import { DynamicDate } from "./dynamic-date";
export function Header() {
  return (
    <header className="max-md:fixed md:flex md:col-2 row-1 flex justify-between items-center p-4 bg-background border-b border-color-border z-[1] w-full">
      <p className="text-black font-normal">
        Hello, <span className="font-bold">valafso !</span>
      </p>
      <DynamicDate />
    </header>
  );
}
