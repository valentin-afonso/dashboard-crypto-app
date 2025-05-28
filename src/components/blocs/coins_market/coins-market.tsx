import { useQuery } from "@tanstack/react-query";
import { fetchCoinsMarket } from "@/api/coins";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Card } from "@/components/ui/card";

export const CoinsMarket = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["coinsMarket"],
    queryFn: fetchCoinsMarket,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Card className="col-2 row-2">
        <DataTable columns={columns} data={data} />
      </Card>
    </>
  );
};
