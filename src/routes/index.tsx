import { CoinTeaser } from "@/components/blocs/coin_teaser/coin-teaser";
import { CoinsMarket } from "@/components/blocs/coins_market/coins-market";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <CoinTeaser />
      <CoinsMarket />
    </div>
  );
}
