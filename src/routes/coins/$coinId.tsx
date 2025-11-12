import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchCoin } from "@/api/coins";
import { Categories } from "@/components/blocs/coin/categories";
import { Description } from "@/components/blocs/coin/description";
import { LastUpdate } from "@/components/blocs/coin/last-update";
import { Link } from "@tanstack/react-router";
export const Route = createFileRoute("/coins/$coinId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { coinId } = Route.useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["coin", coinId],
    queryFn: () => fetchCoin(coinId),
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  return (
    <div className="text-black p-8">
      <Link to="/" className="">
        Back
      </Link>
      <div className="flex w-full justify-end items-center mb-4">
        <LastUpdate lastUpdate={data.last_updated} />
      </div>

      <Categories categories={data.categories} />
      <img
        src={data.image.large}
        alt={data.symbol}
        width={100}
        height={100}
        className="w-[28px] h-[28px] sm:w-[40px] sm:h-[40px]"
      />
      <h1>
        {data.name} - {data.symbol}
      </h1>
      <Description description={data.description.en} />
      <p>{data?.market_data.price_change_24h_in_currency.usd} $</p>
      <p>{data?.market_data.price_change_percentage_24h_in_currency.usd}%</p>
      <p>{data?.market_data.current_price.usd} $</p>
    </div>
  );
}
