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

export const CoinTeaser = ({ defaultCoin }: { defaultCoin: string }) => {
  const [selectedCoin, setSelectedCoin] = useState(defaultCoin);
  const [selectedDays, setSelectedDays] = useState(14);

  return (
    <Card className="w-full min-h-[300px] pb-0 pt-1.5 gap-0">
      <CardHeader className="px-1.5">
        <div className="flex justify-between items-center">
          <CardTitle>
            <Select value={selectedCoin} onValueChange={setSelectedCoin}>
              <SelectTrigger className="w-[150px]">
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
            <SelectTrigger className="w-[120px]">
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
      </CardHeader>
      <CardContent className="p-0">
        <ChartSParklineTeaser
          selectedDays={selectedDays}
          selectedCoin={selectedCoin}
        />
      </CardContent>
    </Card>
  );
};
