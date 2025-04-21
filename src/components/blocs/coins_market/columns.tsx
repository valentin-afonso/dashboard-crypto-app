import { ColumnDef } from "@tanstack/react-table";
import { ChartSparkilne } from "./chart-sparkilne";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

export type Coin = {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  image: string;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  sparkline_in_7d: {
    price: number[];
  };
};

export const columns: ColumnDef<Coin>[] = [
  {
    accessorKey: "name",
    header: () => <div>Asset Name</div>,
    cell: ({ row }) => {
      const img = row.original.image;
      const symbol = row.original.symbol;
      return (
        <div className="flex items-center gap-2">
          <img
            src={img}
            alt={symbol}
            width={100}
            height={100}
            className="w-[40px] h-[40px]"
          />
          <div className="flex flex-col font-medium">
            <span>{row.getValue("name")}</span>
            <span>{symbol}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "current_price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Current Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div>${row.getValue("current_price")}</div>;
    },
  },
  {
    accessorKey: "price_change_percentage_24h",
    header: "Change",
    cell: ({ row }) => {
      return <div>{row.getValue("price_change_percentage_24h")} %</div>;
    },
  },
  {
    accessorKey: "market_cap",
    header: "Market cap",
  },
  {
    accessorKey: "total_volume",
    header: "Volume",
  },
  {
    accessorKey: "sparkline_in_7d",
    header: "Sparkline",
    cell: ({ row }) => {
      const sparkline = row.original.sparkline_in_7d.price;
      return (
        <>
          <ChartSparkilne sparkline={sparkline} />
        </>
      );
    },
  },
];
