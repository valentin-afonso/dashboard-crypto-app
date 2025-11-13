import { createFileRoute } from "@tanstack/react-router";
import { CalcForm } from "@/components/blocs/calc/calc-form";
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
      <CalcForm />
    </div>
  );
}
