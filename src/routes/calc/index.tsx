import { createFileRoute } from "@tanstack/react-router";
import { CalcForm } from "@/components/blocs/calc/calc-form";
export const Route = createFileRoute("/calc/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="text-black">
      <div className="p-8 border-b border-color-border">
        <h1 className="text-2xl font-bold mb-1">Foreign Exchange Rate</h1>
        <p className="text-black/60 text-sm">
          Calculate the exchange rate between two currencies
        </p>
      </div>
      <CalcForm />
    </div>
  );
}
