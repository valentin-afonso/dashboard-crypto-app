import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/calc/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="text-black p-8">
      <h1>Foreign Exchange Rate</h1>
      <p className="text-black/60 text-sm">
        Calculate the exchange rate between two currencies
      </p>
      <form action="" className="flex flex-col gap-2 mt-4 w-[600px] max-w-full">
        <Input type="text" name="ccy1" placeholder="Currency 1" />
        <Input type="text" name="ccy2" placeholder="Currency 2" />
        <Button type="submit" className="w-max">
          Calculate
        </Button>
      </form>
    </div>
  );
}
