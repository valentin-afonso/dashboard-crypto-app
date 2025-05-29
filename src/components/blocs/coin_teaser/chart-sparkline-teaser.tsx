import { Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { formatDate } from "@/lib/format-date";
import { fetchCoinMarket } from "@/api/coins";
import { useQuery } from "@tanstack/react-query";
import { CoinTEaserSkeleton } from "./coin-teaser-skeleton";

const chartConfig = {
  price: {
    label: "$",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const ChartSParklineTeaser = ({
  selectedDays,
  selectedCoin,
}: {
  selectedDays: number;
  selectedCoin: string;
}) => {
  const fakeData = [
    { timestamp: 1747303787521, time: "12:09:47", price: 2538.1500465104095 },
    { timestamp: 1747389968004, time: "12:06:08", price: 2611.309921716259 },
    { timestamp: 1747476585467, time: "12:09:45", price: 2481.203156344918 },
    { timestamp: 1747562559668, time: "12:02:39", price: 2511.7531839533694 },
    { timestamp: 1747649387948, time: "12:09:47", price: 2407.2132176724162 },
    { timestamp: 1747735410830, time: "12:03:30", price: 2531.288312362076 },
    { timestamp: 1747821768153, time: "12:02:48", price: 2523.7682367730577 },
    { timestamp: 1747908228205, time: "12:03:48", price: 2667.699094754287 },
    { timestamp: 1747994615587, time: "12:03:35", price: 2683.398544301925 },
    { timestamp: 1748080999949, time: "12:03:19", price: 2557.21764855182 },
    { timestamp: 1748167417516, time: "12:03:37", price: 2486.9131053538154 },
    { timestamp: 1748253835608, time: "12:03:55", price: 2565.3400176659816 },
    { timestamp: 1748340593553, time: "12:09:53", price: 2635.3448156594523 },
    { timestamp: 1748431488927, time: "13:24:48", price: 2643.669056977985 },
    { timestamp: 1748512744000, time: "11:59:04", price: 2729.384569342679 },
  ];
  let chartData = fakeData;
  const { data, isLoading, error } = useQuery({
    queryKey: ["coinMarket", selectedCoin, selectedDays],
    queryFn: () => fetchCoinMarket(selectedCoin, selectedDays),
  });

  if (isLoading) return <CoinTEaserSkeleton />;
  if (!error) {
    chartData = data.prices
      .filter((_: unknown, index: number) => {
        if (selectedDays <= 7) {
          return true; // Show all data points for 1-7 days
        } else {
          return index % 24 === 0; // Show one point per day for >7 days
        }
      })
      .map(([timestamp, price]: [number, number]) => ({
        timestamp,
        time: new Date(timestamp).toLocaleTimeString(),
        price,
      }));
  }

  return (
    <>
      <p className="text-2xl font-bold pl-4 pt-2">
        {!error && `$${data.prices[data.prices.length - 1][1].toFixed(2)}`}
        {error && (
          <div className="text-red-500 bg-red-200 border border-red-500 rounded-2xl w-max text-xs font-normal px-2">
            error
          </div>
        )}
      </p>
      <ChartContainer config={chartConfig} className="min-h-[100px]">
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 12,
            left: 12,
            right: 12,
            bottom: 12,
          }}
        >
          <XAxis
            dataKey="time"
            tickLine={false}
            axisLine={false}
            hide={true}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis hide domain={["dataMin * 0.97", "dataMax * 1.03"]} />
          <ChartTooltip
            cursor={false}
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                const formattedDate = formatDate(data.timestamp);
                return (
                  <div className="bg-background p-2 rounded-lg border">
                    <p className="text-sm">{formattedDate}</p>
                    <p className="text-sm font-bold">
                      ${data.price.toFixed(2)}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line
            dataKey="price"
            type="natural"
            stroke={error ? "#ababab" : "black"}
            strokeWidth={1.5}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </>
  );
};
