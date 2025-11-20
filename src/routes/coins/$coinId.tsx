import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchCoin } from "@/api/coins";
import { Categories } from "@/components/blocs/coin/categories";
import { Description } from "@/components/blocs/coin/description";
import { LastUpdate } from "@/components/blocs/coin/last-update";
import { Link } from "@tanstack/react-router";
import { HeaderCoin } from "@/components/blocs/coin/header-coin";
import { IconClose } from "@/components/svg/icon-close";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PriceCoin } from "@/components/blocs/coin/price-coin";
import { ChartSparklineCoin } from "@/components/blocs/coin/chart-sparkline-coin";
export const Route = createFileRoute("/coins/$coinId")({
  component: RouteComponent,
  notFoundComponent: () => {
    return (
      <div className="text-black flex items-center justify-center h-full">
        Coin not found
      </div>
    );
  },
});

function RouteComponent() {
  const { coinId } = Route.useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["coin", coinId],
    queryFn: () => fetchCoin(coinId),
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="text-black grid grid-cols-1 md:grid-cols-2 h-full gap-4">
      <div className="p-4">
        <Tabs defaultValue="overview" className="text-black p-4">
          <TabsList className="w-full">
            <TabsTrigger value="overview" className="text-black">
              Overview
            </TabsTrigger>
            <TabsTrigger value="candle" className="text-black">
              Candle
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Description description={data.description.en} />
          </TabsContent>
          <TabsContent value="candle">...</TabsContent>
        </Tabs>
      </div>
      <div className="border-l border-color-border">
        <HeaderCoin>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <img
                src={data.image.large}
                alt={data.symbol}
                width={100}
                height={100}
                className="w-[28px] h-[28px] sm:w-[40px] sm:h-[40px]"
              />
              <h1 className="flex flex-col">
                <span>{data.name}</span>
                <span className="text-sm text-black/60">{data.symbol}</span>
              </h1>
            </div>
            <Link to="/" className="">
              <IconClose />
            </Link>
          </div>

          <div className="flex w-full justify-end items-center px-4 pb-2">
            <LastUpdate lastUpdate={data.last_updated} />
          </div>
        </HeaderCoin>

        <Categories categories={data.categories} />
        <Tabs defaultValue="day" className="text-black w-full p-4">
          <TabsContent value="day">
            <PriceCoin
              currentPrice={data?.market_data.current_price.usd}
              priceChange={data?.market_data.price_change_24h_in_currency.usd}
              priceChangePercentage={
                data?.market_data.price_change_percentage_24h_in_currency.usd
              }
            />
            <ChartSparklineCoin selectedDays={1} selectedCoin={data.id} />
          </TabsContent>
          <TabsContent value="week">
            <PriceCoin
              currentPrice={data?.market_data.current_price.usd}
              priceChange={null}
              priceChangePercentage={
                data?.market_data.price_change_percentage_7d_in_currency.usd
              }
            />
            <ChartSparklineCoin selectedDays={7} selectedCoin={data.id} />
          </TabsContent>
          <TabsContent value="month">
            <PriceCoin
              currentPrice={data?.market_data.current_price.usd}
              priceChange={null}
              priceChangePercentage={
                data?.market_data.price_change_percentage_30d_in_currency.usd
              }
            />
            <ChartSparklineCoin selectedDays={30} selectedCoin={data.id} />
          </TabsContent>
          <TabsContent value="year">
            <PriceCoin
              currentPrice={data?.market_data.current_price.usd}
              priceChange={null}
              priceChangePercentage={
                data?.market_data.price_change_percentage_200d_in_currency.usd
              }
            />
            <ChartSparklineCoin selectedDays={200} selectedCoin={data.id} />
          </TabsContent>
          <TabsList className="w-full">
            <TabsTrigger value="day" className="text-black">
              1D
            </TabsTrigger>
            <TabsTrigger value="week" className="text-black">
              1W
            </TabsTrigger>
            <TabsTrigger value="month" className="text-black">
              1M
            </TabsTrigger>
            <TabsTrigger value="year" className="text-black">
              1Y
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
