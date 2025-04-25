import { CoinTeaser } from "@/components/blocs/coin_teaser/coin-teaser";
import { CoinsMarket } from "@/components/blocs/coins_market/coins-market";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col gap-2 p-2">
      <div className="grid grid-cols-3 gap-2">
        <CoinTeaser />
      </div>
      <CoinsMarket />
    </div>
  );
}
