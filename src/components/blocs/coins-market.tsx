import { useQuery } from "@tanstack/react-query";

export const CoinsMarket = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["coinsMarket"],
    queryFn: async () => {
      const response = await fetch(
        "https://dashboard-crypto-api.valentinafonso22.workers.dev/api/crypto/coins/markets?vs_currency=eur&sparkline=true",
        {
          headers: {
            Authorization: "Bearer mFsYWZzbzpDejlxdno2ODUyNzg0MDBBZ29zdG8wOA==",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
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
