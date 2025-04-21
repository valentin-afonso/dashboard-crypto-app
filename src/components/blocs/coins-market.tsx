import { useQuery } from "@tanstack/react-query";
import { fetchCoinsMarket } from "@/api/coins";

export const CoinsMarket = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["coinsMarket"],
    queryFn: fetchCoinsMarket,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="col-2 row-2 bg-gray-200">
      <h1>Coins Market</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
