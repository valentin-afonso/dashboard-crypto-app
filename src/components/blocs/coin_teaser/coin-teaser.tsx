import { fetchCoinMarket } from "@/api/coins";
import { useQuery } from "@tanstack/react-query";

export const CoinTeaser = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["coinsMarket"],
    queryFn: fetchCoinMarket,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);
  return (
    <div>
      <h1>Coin Teaser</h1>
    </div>
  );
};
