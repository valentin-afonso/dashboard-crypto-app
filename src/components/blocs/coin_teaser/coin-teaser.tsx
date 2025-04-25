import { fetchCoinMarket } from "@/api/coins";
import { useQuery } from "@tanstack/react-query";
import { ChartSParklineTeaser } from "./chart-sparkline-teaser";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const COINS = [
  { id: "bitcoin", name: "Bitcoin" },
  { id: "ethereum", name: "Ethereum" },
  { id: "solana", name: "Solana" },
  { id: "cardano", name: "Cardano" },
];

const DAYS = [1, 7, 14, 30];

export const CoinTeaser = () => {
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [selectedDays, setSelectedDays] = useState(7);

  const { data, isLoading, error } = useQuery({
    queryKey: ["coinMarket", selectedCoin, selectedDays],
    queryFn: () => fetchCoinMarket(selectedCoin, selectedDays),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const chartData = data.prices
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

  return (
    <Card className="w-full min-h-[364px] pb-0">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>
            <Select value={selectedCoin} onValueChange={setSelectedCoin}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a coin" />
              </SelectTrigger>
              <SelectContent>
                {COINS.map((coin) => (
                  <SelectItem key={coin.id} value={coin.id}>
                    {coin.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardTitle>
          <Select
            value={selectedDays.toString()}
            onValueChange={(value) => setSelectedDays(Number(value))}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Days" />
            </SelectTrigger>
            <SelectContent>
              {DAYS.map((day) => (
                <SelectItem key={day} value={day.toString()}>
                  {day} {day === 1 ? "day" : "days"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <p className="text-2xl font-bold">
          ${data.prices[data.prices.length - 1][1].toFixed(2)}
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <ChartSParklineTeaser chartData={chartData} />
      </CardContent>
    </Card>
  );
};
